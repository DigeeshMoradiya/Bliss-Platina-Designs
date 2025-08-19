'use client';

import { useState, useEffect } from 'react';
import ContactUs from '@/components/contactus';
import { getSetting } from '@/lib/api/setting/setting';

export default function ContactUsPage() {
    const [settingData, setSettingData] = useState(null);
    const [loader, setLoader] = useState(false);

    const onloadSetting = async () => {
        setLoader(true);
        try {
            const result = await getSetting(
                "email,phone_no,address,google_map"
            );
            if (result?.success) {
                setSettingData(result.data);
                setLoader(false);
            }
        } catch (error) {
            setLoader(true);
            console.error("Error fetching settings:", error);
        }
    };

    useEffect(() => {
        onloadSetting();
    }, []);

    return <ContactUs settingData={settingData} loader={loader} />;
}
