import FindSize from "@/components/FindSize";
import { getSetting } from "@/lib/api/setting/setting";
import { useEffect, useState } from "react";

export default function FindSizePage() {
    const [settingData, setSettingData] = useState();

    const onloadSetting = async () => {
        try {
            const result = await getSetting("watch_tutorial_link");
            if (result?.success) {
                setSettingData(result?.data);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    useEffect(() => {
        onloadSetting();
    }, []);
    return <FindSize settingData={settingData} />;
}
