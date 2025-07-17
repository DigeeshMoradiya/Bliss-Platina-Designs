


export default function GoogleMap() {


    return (
        <>
            <div className="map-area section-padding">
                {/* <div id="google-map"></div> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29756.481396048548!2d72.8816122!3d21.2096242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb7365cc13b%3A0x4d63d60622564f37!2sGlobal%20Mobile%20Repairing%20%26%20Accessories!5e0!3m2!1sen!2sin!4v1752413276076!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    className="google-map"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Global Mobile Repairing & Accessories Location"
                ></iframe>
            </div>

        </>
    );
}
