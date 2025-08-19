


export default function GoogleMap({ settingData }) {


    return (
        <>
            <div className="map-area section-padding">
                {/* <div id="google-map"></div> */}
                <iframe
                    src={settingData?.google_map}
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
