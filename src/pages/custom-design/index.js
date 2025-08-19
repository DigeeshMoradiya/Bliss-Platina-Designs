import CustomDesign from "@/components/CustomDesign";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function CustomDesignPage() {
    const [skuNo, setSkuNo] = useState(null);


    useEffect(() => {
        const storedSku = Cookies.get("sku_no");
        if (storedSku) {
            setSkuNo(storedSku);
        } else {
            setSkuNo(null);
        }
    }, []);
    return (
        <CustomDesign skuNo={skuNo} setSkuNo={setSkuNo} />

    );
}
