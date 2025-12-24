import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Category({ categoryData }) {
  const router = useRouter();

  const handleproduct = (name, is_diamond_jewelry) => {
    if (is_diamond_jewelry) {
      router.push(`/diamond`)
    } else {
      router.push(`/shop?q=${name}`)
    }
  }

  return (
    <div className="banner-statistics-area section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="title">Shop By Category</h2>
              <p className="sub-title">Explore our exclusive collections</p>
            </div>
          </div>
        </div>
        <div className="row row-20 mtn-20">
          {categoryData?.map((category, index) => {
            const name = category.name || "wedding rings";

            const toTitleCase = (str) =>
              str
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

            const titleName = toTitleCase(name);
            const [first, ...rest] = titleName.split(" ");
            return (
              <div className="col-sm-6" key={index}>
                <div className="mt-20">
                  <figure className="custom-banner-container">
                    <Link
                      href={
                        category?.is_diamond_jewelry
                          ? "/diamond"
                          : `/shop?q=${category?.slug}`
                      }
                      onClick={() => handleproduct(category?.slug)}
                    >
                      <Image
                        src={category.image || "/assets/img/banner/img1-top.jpg"}
                        alt={category.alt || "product banner"}
                        width={800}
                        height={400}
                        className="category-image"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          aspectRatio: '2/1',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </figure>
                  <div className="section-category-title d-flex align-items-center justify-content-between">
                    {/* <h3 className="category-title" onClick={() => handleproduct(category?.slug, category?.is_diamond_jewelry)}>
                      {first} {rest.length > 0 && <span>{rest.join(" ")}</span>}
                    </h3> */}
                    <h3 className="category-title split-text" onClick={() => handleproduct(category?.slug, category?.is_diamond_jewelry)}>
                      {titleName.split(' ').map((word, i) => (
                        <span
                          key={i}
                          className={`text-part ${i % 2 === 0 ? 'left' : 'right'}`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        >
                          {word}{i < titleName.split(' ').length - 1 ? '\u00A0' : ''}
                        </span>
                      ))}
                    </h3>

                    <Link
                      href={
                        category?.is_diamond_jewelry
                          ? "/diamond"
                          : `/shop?q=${category?.slug}`
                      } onClick={() => handleproduct(category?.slug, category?.is_diamond_jewelry)}
                      className="btn btn-text mt-2"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}



          {/*  
          <div className="col-sm-6">
            <figure className="banner-statistics mt-20">
              <Link href="#">
                <Image
                  src="/assets/img/banner/img2-top.jpg"
                  alt="product banner"
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </Link>
              <div className="banner-content text-center">
                <h5 className="banner-text1">EARRINGS</h5>
                <h2 className="banner-text2">Tangerine Floral <span>Earring</span></h2>
                <Link href="/shop" className="btn btn-text">
                  Shop Now
                </Link>
              </div>
            </figure>
          </div>

  
          <div className="col-sm-6">
            <figure className="banner-statistics mt-20">
              <Link href="#">
                <Image
                  src="/assets/img/banner/img3-top.jpg"
                  alt="product banner"
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </Link>
              <div className="banner-content text-center">
                <h5 className="banner-text1">NEW ARRIVALS</h5>
                <h2 className="banner-text2">Pearl<span>Necklaces</span></h2>
                <Link href="/shop" className="btn btn-text">
                  Shop Now
                </Link>
              </div>
            </figure>
          </div>

 
          <div className="col-sm-6">
            <figure className="banner-statistics mt-20">
              <Link href="#">
                <Image
                  src="/assets/img/banner/img4-top.jpg"
                  alt="product banner"
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </Link>
              <div className="banner-content text-right">
                <h5 className="banner-text1">NEW DESIGN</h5>
                <h2 className="banner-text2">Diamond<span>Jewelry</span></h2>
                <Link href="/shop" className="btn btn-text">
                  Shop Now
                </Link>
              </div>
            </figure>
          </div> */}
        </div>
      </div>
    </div>
  );
}
