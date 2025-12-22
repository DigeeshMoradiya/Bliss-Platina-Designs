import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Category({ categoryData }) {
  const router = useRouter();

  const handleproduct = (name) => {
    router.push(`/shop?q=${name}`)
  }

  return (
    <div className="banner-statistics-area  section-padding pb-0">
      <div className="container">
        <div className="row row-20 mtn-20">
          {categoryData?.map((category, index) => (
            <div className="col-sm-6" key={index}>
              <figure className="banner-statistics mt-20">
                <Link href={`/shop?q=${category?.slug}`} onClick={() => handleproduct(category?.slug)}>
                  <Image
                    src={category.image || "/assets/img/banner/img1-top.jpg"} // fallback if no image
                    alt={category.alt || "product banner"}
                    width={800}
                    height={400}
                    // layout="responsive"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      aspectRatio: '2/1',
                      objectFit: 'cover',
                    }}
                  />
                </Link>
                <div className="banner-content text-right">
                  {/* <h5 className="banner-text1">{category.text1 || "BEAUTIFUL"}</h5> */}
                  <h2 className="banner-text2">
                    {(() => {
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
                        <>
                          {first} <span>{rest.join(" ") || "Rings"}</span>
                        </>
                      );
                    })()}
                  </h2>


                  {/* <Link href="/shop" className="btn btn-text">
                    Shop Now
                  </Link> */}
                  <Link href={`/shop?q=${category?.slug}`} onClick={() => handleproduct(category?.slug)} className="btn btn-text">
                    Shop Now
                  </Link>
                </div>
              </figure>
            </div>
          ))}



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
