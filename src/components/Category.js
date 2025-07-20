import Image from 'next/image';
import Link from 'next/link';

export default function Category() {


  return (
    <div className="banner-statistics-area  section-padding pb-0">
      <div className="container">
        <div className="row row-20 mtn-20">
          {/* Item 1 */}
          <div className="col-sm-6">
            <figure className="banner-statistics mt-20">
              <Link href="#">
                <Image
                  src="/assets/img/banner/img1-top.jpg"
                  alt="product banner"
                  width={600}
                  height={400}
                  layout="responsive"
                />
              </Link>
              <div className="banner-content text-right">
                <h5 className="banner-text1">BEAUTIFUL</h5>
                <h2 className="banner-text2">Wedding<span>Rings</span></h2>
                <Link href="/shop" className="btn btn-text">
                  Shop Now
                </Link>
              </div>
            </figure>
          </div>

          {/* Item 2 */}
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

          {/* Item 3 */}
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

          {/* Item 4 */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
