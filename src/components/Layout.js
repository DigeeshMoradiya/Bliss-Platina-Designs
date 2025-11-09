import Header from './common/Header';
import Footer from './common/Footer';
import ScrollTop from './common/ScrollTop';
import { getSetting } from '@/lib/api/setting/setting';
import { useEffect, useState } from 'react';
import Loader from './common/Loader';

const Layout = ({ children }) => {

  const [settingData, setSettingData] = useState();
  const [loader, setLoader] = useState(false);

  const onloadSetting = async () => {
    try {
      setLoader(true);
      const result = await getSetting("email,phone_no,address,facebook_link,instagram_link,printrest_link,youtube_link,whatsapp_phone_no");
      if (result?.success) {
        setSettingData(result?.data);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoader(true);
    }
  };
  
  useEffect(() => {
    onloadSetting();
  }, []);

  return (
    <>
      {loader ? <div className="d-flex justify-content-center align-items-center mb-5"><Loader /> </div> : <>
        <Header settingData={settingData} />
        <main>{children}</main>
        <Footer settingData={settingData} />
        <ScrollTop /></>}
    </>
  );
};

export default Layout;
