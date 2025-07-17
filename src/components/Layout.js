import Header from './common/Header';
import Footer from './common/Footer';
import ScrollTop from './common/ScrollTop';

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Layout;
