import Image from 'next/image';
import Link from 'next/link';

const SidebarBanner = () => {
  return (
    <div className="sidebar-banner">
      <div className="img-container">
        <Link href="#">
            <Image 
              src="/assets/img/banner/sidebar-banner.jpg" 
              alt="Sidebar Banner"
              width={300}
              height={400}
              layout="responsive"
            />
        </Link>
      </div>
    </div>
  );
};

export default SidebarBanner;