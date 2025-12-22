import Loader from "@/components/common/Loader";
import ProductDetails from "@/components/ProductDetails";
import { getProductDetail, getRelatedProducts } from "@/lib/api/product/product";
import { getSetting } from "@/lib/api/setting/setting";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {

    const [productData, setProductData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [settingData, setSettingData] = useState();
    const [relatedProductData, setRelatedProductData] = useState([]);
    const router = useRouter();

    const { slug } = router.query;



    const onloadProductDetail = async () => {
        setLoader(true);
        try {
            const result = await getProductDetail(slug);
            if (result?.success) {
                setProductData(result.data);
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
        } finally {
            setLoader(false);
        }
    };
    const onloadRelatedProduct = async () => {
        try {
            const result = await getRelatedProducts(slug);
            if (result?.success) {
                setRelatedProductData(result.data);
            }
        } catch (error) {
            console.error("Error fetching related products:", error);
        }
    };


    const onloadSetting = async () => {
        try {
            const result = await getSetting("whatsapp_phone_no");
            if (result?.success) {
                setSettingData(result?.data);
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
        }
    };

    useEffect(() => {
        onloadSetting();
        if (slug) {
            onloadProductDetail();
            onloadRelatedProduct();
        }
    }, [slug]);

    if (loader) {
        return (
            <Loader />
        );
    }

    return <ProductDetails productData={productData} settingData={settingData} relatedProductData={relatedProductData} />;
}
