"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Link from "next/link";

export default function TermsConditions() {
    const termsConditions = [
        {
            title: "Who we are?",
            content: (
                <p>
                    Our website address is:{" "}
                    <a href="http://hasthemes.com/" className="text-blue-500 hover:underline">
                        http://hasthemes.com
                    </a>
                </p>
            ),
        },
        {
            title: "What personal data we collect and why we collect it - Comments",
            content: (
                <>
                    <p>
                        When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                    </p>
                    <p>
                        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{" "}
                        <a href="https://bliss-platina-design.com" className="text-blue-500 hover:underline" target="_blank">
                            https://bliss-platina-design.com
                        </a>.
                    </p>
                    <p>
                        After approval of your comment, your profile picture is visible to the public in the context of your comment.
                    </p>
                </>
            ),
        },
        {
            title: "Media",
            content: (
                <p>
                    If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors can download and extract location data from images on the site.
                </p>
            ),
        },
        {
            title: "Cookies",
            content: (
                <>
                    <p>
                        If you leave a comment, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so you don’t have to fill in your details again.
                    </p>
                    <p>
                        If you have an account and log in, we will set a temporary cookie to determine if your browser accepts cookies.
                    </p>
                    <p>
                        When you log in, we will also set up cookies to save your login info and display choices. Login cookies last two days, screen options one year. &quot;Remember Me&quot; keeps you logged in for two weeks.
                    </p>
                    <p>
                        If you edit or publish an article, an additional cookie will be saved in your browser. It expires after 1 day.
                    </p>
                </>
            ),
        },
        {
            title: "Embedded content from other websites",
            content: (
                <>
                    <p>
                        Articles may include embedded content (e.g. videos, images, etc.). Embedded content behaves the same as if you visited the other website.
                    </p>
                    <p>
                        These websites may collect data, use cookies, embed third-party tracking, and monitor your interaction with their content.
                    </p>
                </>
            ),
        },
        {
            title: "How long we retain your data",
            content: (
                <>
                    <p>
                        If you leave a comment, it and its metadata are retained indefinitely. This helps us recognize and approve follow-up comments automatically.
                    </p>
                    <p>
                        For registered users, we store personal info in their profile. All users can see, edit, or delete their info anytime (except the username). Admins can also edit this information.
                    </p>
                </>
            ),
        },
        {
            title: "What rights you have over your data",
            content: (
                <p>
                    You can request an exported file of your personal data we hold, or request erasure of any data, excluding what we must keep for legal or security purposes.
                </p>
            ),
        },
        {
            title: "Where we send your data",
            content: (
                <p>
                    Visitor comments may be checked through an automated spam detection service.
                </p>
            ),
        },
    ];
    return (
        <> 
            <Breadcrumb pageTitle="Terms and Conditions" /> 
            <section className="policy-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {termsConditions.map((section, index) => (
                                <div key={index} className="policy-list">
                                    <h3 className="policy-title">{section.title}</h3>
                                    {section.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
