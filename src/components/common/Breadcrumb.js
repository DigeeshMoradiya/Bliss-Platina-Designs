'use client';
import Link from 'next/link';

export default function Breadcrumb({ pageTitle, secondTitle }) {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-wrap">
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <i className="fa fa-home"></i>
                                        </Link>
                                    </li>
                                    {secondTitle && <li className="breadcrumb-item"><Link href="/shop">{secondTitle}</Link></li>}
                                    <li className="breadcrumb-item active">{pageTitle}</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
