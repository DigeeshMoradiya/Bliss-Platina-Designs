import { getHeader } from '@/lib/api/setting/setting';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Header({ settingData }) {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [headerData, setHeaderData] = useState([]);

    const searchParams = useSearchParams();
    const q = searchParams.get("q");


    const onloadHeader = async () => {
        try {
            const result = await getHeader();
            if (result?.success) {
                setHeaderData(result?.data);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };
    useEffect(() => {
        onloadHeader();
    }, []);

    const staticLinks = [
        { id: "custom-design", name: "Custom Design", slug: "custom-design" },
        { id: "diamond", name: "Diamond", slug: "diamond" },
        { id: "contact-us", name: "Contact Us", slug: "contact-us" }
    ];

    const allCategories = [...headerData, ...staticLinks];


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === "") {
            router.push('/shop')
        } else {
            router.push(`/shop?q=${e.target.value}`)
        }
    };

    const handleClickdetail = (e, slug) => {
        e.preventDefault();
        router.push(slug === "custom-design" ? `/custom-design` : slug === "diamond" ? `/diamond` : slug === "contact-us" ? `/contact-us` : `/shop?q=${slug}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // router.push(`/shop?q=${searchTerm}`)
        if (searchTerm === "") {
            router.push('/shop')
        } else {
            router.push(`/shop?q=${searchTerm}`)
        }
    };
    const [openMenuId, setOpenMenuId] = useState(null);
    const [openMenuIdSub, setOpenMenuIdSub] = useState(null);

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };
    const toggleMenuSub = (id) => {
        setOpenMenuIdSub(openMenuIdSub === id ? null : id);
    };

    const handleClick = (e) => {
        e.preventDefault();

        const skuNo = Cookies.get("sku_no");

        if (skuNo) {
            Cookies.remove("sku_no");
        }

        router.push("/custom-design");
    };
    return (
        <header className="header-area header-wide">
            {/* Top Bar */}
            <div className="main-header d-none d-lg-block">
                <div className="header-top bdr-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="welcome-message">
                                    <p>Welcome to Bliss Platina Jewelry online store</p>
                                </div>
                            </div>
                            {/* <div className="col-lg-4">
                                 <div className="mobile-number">
                                    <p>Contact Us on : 9876543210</p>
                                </div>  
                            </div> */}
                            <div className="col-lg-6 text-right">
                                <div className="header-top-settings">
                                    <ul className="nav align-items-center justify-content-end">
                                        <div className="mobile-number">
                                            <p>Contact Us on : {settingData?.phone_no}</p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo and Navigation */}
                <div className="sticky top-0 z-[999] bg-white header-main-area">
                    <div className="container">
                        <div className="row align-items-center position-relative  pt-3 pb-3">
                            <div className="col-lg-2">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/img/logo/logonew.png" alt="Brand Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 position-static d-flex justify-content-center">
                                <div className="header-left d-flex align-items-center  justify-content-lg-end">
                                    <form className="header-search-box  d-xl-block" onSubmit={handleSubmit}>

                                        <input type="text" placeholder="Search entire store here" className="header-search-field" value={searchTerm}
                                            onChange={handleChange} />
                                        <button className="header-search-btn"><i className="pe-7s-search"></i></button>
                                    </form>

                                </div>
                            </div>

                            <div className="col-lg-2">
                                <div className="header-top-settings">
                                    <ul className="nav justify-content-end align-items-center">
                                        <li className="curreny-wrap cursor-auto">
                                            $ USD</li>
                                        <li className="language cursor-auto">
                                            <Image src="/assets/img/icon/en.png" alt="flag" width={20} height={13} /> English
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-lg-12 position-static d-flex justify-content-center">
                                <div className="main-menu-area">
                                    <div className="main-menu">
                                        <nav className="desktop-menu">
                                            <ul>

                                                {allCategories?.map((cat) => (
                                                    <li
                                                        key={cat.id}
                                                        className={`${(cat.slug === "custom-design" && pathname === "/custom-design") || (cat.slug === "diamond" && pathname === "/diamond") || (cat.slug === "contact-us" && pathname === "/contact-us") ||
                                                            (pathname === "/shop" && q === cat.slug)
                                                            ? "active"
                                                            : ""
                                                            } position-static`}
                                                    >
                                                        <Link href={cat.slug === "custom-design" ? `/custom-design` : cat.slug === "diamond" ? `/diamond` : cat.slug === "contact-us" ? `/contact-us` : `/shop?q=${cat.slug}`} onClick={(e) => handleClickdetail(e, cat.slug)}>
                                                            {cat.name}{" "}
                                                            {cat.children?.length > 0 && <i className="fa fa-angle-down"></i>}
                                                        </Link>

                                                        {cat.children?.length > 0 && (
                                                            <ul className="megamenu dropdown">
                                                                {cat.children.map((sub) => (
                                                                    <li key={sub.id} className="mega-title">
                                                                        <span>{sub.name}</span>
                                                                        {sub.children?.length > 0 && (
                                                                            <ul>
                                                                                {sub.children.map((subsub) => (
                                                                                    <li key={subsub.id}>
                                                                                        <Link href={`/shop?q=${subsub.slug}`} onClick={(e) => handleClickdetail(e, subsub.slug)}>{subsub.name}</Link>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        )}
                                                                    </li>
                                                                ))}

                                                                {/* Optional: if image exists for category */}
                                                                {cat.image && (
                                                                    <li className="megamenu-banners d-none d-lg-block">
                                                                        <Link href={`/shop?q=${cat.slug}`} onClick={(e) => handleClickdetail(e, cat.slug)}>
                                                                            <img src={cat.image} alt={cat.name} />
                                                                        </Link>
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header d-lg-none d-md-block sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="mobile-main-header">
                                <div className="mobile-logo">
                                    <Link href="/">
                                        {/* <Image src="/assets/img/logo/logo.png" alt="Brand Logo" width={120} height={40} /> */}
                                        <img src="/assets/img/logo/logonew.png" alt="Brand Logo" />
                                    </Link>
                                </div>
                                <div className="mobile-menu-toggler">
                                    {/* <div className="mini-cart-wrap">
                                        <Link href="/cart">
                                            <i className="pe-7s-shopbag"></i>
                                            <div className="notification">0</div>
                                        </Link>
                                    </div> */}
                                    <button className="mobile-menu-btn" onClick={() => setOffCanvasOpen(true)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Off-Canvas Menu */}
            <aside className={`off-canvas-wrapper ${offCanvasOpen ? 'open' : ''}`}>
                <div className="off-canvas-overlay" onClick={() => setOffCanvasOpen(false)}></div>
                <div className="off-canvas-inner-content">
                    <div className="btn-close-off-canvas" onClick={() => setOffCanvasOpen(false)}>
                        <i className="pe-7s-close"></i>
                    </div>

                    <div className="off-canvas-inner">
                        {/* Search Box */}
                        <div className="search-box-offcanvas">
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="Search entire store here" value={searchTerm}
                                    onChange={handleChange} />
                                <button type="submit" className="search-btn">
                                    <i className="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="mobile-navigation">
                            <nav>
                                <ul className="mobile-menu">
                                    {allCategories.map((cat) => {
                                        const hasChildren = cat.children?.length > 0;
                                        const isOpen = openMenuId === cat.id;
                                        return (
                                            <li
                                                key={cat.id}
                                                className={`${(cat.slug === "custom-design" && pathname === "/custom-design") ||
                                                    (cat.slug === "diamond" && pathname === "/diamond") ||
                                                    (cat.slug === "contact-us" && pathname === "/contact-us") ||
                                                    (pathname === "/shop" && typeof window !== "undefined" && new URLSearchParams(window.location.search).get("q") === cat.slug)
                                                    ? "active"
                                                    : ""
                                                    } ${cat.children?.length > 0 ? "menu-item-has-children" : ""}`}
                                            >
                                                {hasChildren && (
                                                    <span
                                                        className="menu-expand"
                                                        onClick={() => toggleMenu(cat.id)}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <i></i>
                                                    </span>
                                                )}

                                                <Link
                                                    href={
                                                        cat.slug === "custom-design"
                                                            ? `/custom-design`
                                                            : cat.slug === "diamond"
                                                                ? `/diamond`
                                                                : cat.slug === "contact-us"
                                                                    ? `/contact-us`
                                                                    : `/shop?q=${cat.slug}`
                                                    }
                                                    onClick={() => toggleMenu(cat.id)}                                                >
                                                    {cat.name}
                                                </Link>

                                                {hasChildren && isOpen && (
                                                    <ul className="megamenu dropdown">
                                                        {cat.children.map((sub) => {
                                                            const hasChildrensub = sub.children?.length > 0;
                                                            const isOpensub = openMenuIdSub === sub.id;

                                                            return (
                                                                <li
                                                                    key={sub.id}
                                                                    className={sub.children?.length > 0 ? "mega-title menu-item-has-children" : ""}
                                                                >
                                                                    {hasChildren && (
                                                                        <span
                                                                            className="menu-expand"
                                                                            onClick={() => toggleMenuSub(sub.id)}
                                                                            style={{ cursor: "pointer" }}
                                                                        >
                                                                            <i></i>
                                                                        </span>
                                                                    )}
                                                                    <Link href={`/shop?q=${sub.slug}`} onClick={() => toggleMenuSub(sub.id)}>
                                                                        {sub.name}
                                                                    </Link>

                                                                    {hasChildrensub && isOpensub && (
                                                                        <ul className="dropdown">
                                                                            {sub.children.map((subsub) => (
                                                                                <li key={subsub.id}>
                                                                                    <Link
                                                                                        href={`/shop?q=${subsub.slug}`}
                                                                                        onClick={(e) => handleClickdetail(e, subsub.slug)}
                                                                                    >
                                                                                        {subsub.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    })}

                                    {/* Static links */}
                                    {/* <li className={pathname === "/custom-design" ? "active" : ""}>
                                        <Link href="/custom-design" onClick={(e) => handleClickdetail(e, "custom-design")}>
                                            Custom Design
                                        </Link>
                                    </li>
                                    <li className={pathname === "/diamond" ? "active" : ""}>
                                        <Link href="/diamond" onClick={(e) => handleClickdetail(e, "diamond")}>
                                            Diamond
                                        </Link>
                                    </li>
                                    <li className={pathname === "/contact-us" ? "active" : ""}>
                                        <Link href="/contact-us" onClick={(e) => handleClickdetail(e, "contact-us")}>
                                            Contact Us
                                        </Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>

                        {/* Settings */}
                        <div className="mobile-settings">
                            <ul className="nav">
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        <div>$ USA</div>
                                        {/* <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">$ USD</a>
                                            <a className="dropdown-item" href="#">€ EURO</a>
                                        </div> */}
                                    </div>
                                </li>
                                <li>
                                    <div className="dropdown mobile-top-dropdown">
                                        {/* <a href="#" className="dropdown-toggle">My Account <i className="fa fa-angle-down"></i></a>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" href="/my-account">My Account</Link>
                                            <Link className="dropdown-item" href="/login-register">Login</Link>
                                            <Link className="dropdown-item" href="/login-register">Register</Link>
                                        </div> */}

                                        <div className="language cursor-auto">
                                            <Image src="/assets/img/icon/en.png" alt="flag" width={20} height={13} /> English
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Social */}
                        <div className="offcanvas-widget-area">
                            <div className="off-canvas-contact-widget">
                                <ul>
                                    <li><i className="fa fa-mobile"></i> <a href={`mailto:${settingData?.phone_no}`}>{settingData?.phone_no}</a></li>
                                    <li><i className="fa fa-envelope-o"></i> <a href={`tel:${settingData?.email}`}>{settingData?.email}</a></li>
                                </ul>
                            </div>
                            <div className="off-canvas-social-widget">
                                <a href={settingData?.facebook_link} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                <a href={settingData?.instagram_link} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                <a href={settingData?.printrest_link} target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest-p"></i></a>
                                <a href={settingData?.youtube_link} target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </header>
    );
}