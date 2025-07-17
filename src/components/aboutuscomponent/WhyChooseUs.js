'use client';

export default function WhyChooseUs() {
    const items = [
        { icon: 'globe', title: 'free shipping' },
        { icon: 'plane', title: 'fast delivery' },
        { icon: 'comments', title: 'customers support' },
    ];

    return (
        <div className="choosing-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Why Choose Us</h2>
                            <p>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
                        </div>
                    </div>
                </div>
                <div className="row mbn-30">
                    {items.map((item, i) => (
                        <div className="col-lg-4 col-md-4" key={i}>
                            <div className="single-choose-item text-center mb-30">
                                <i className={`fa fa-${item.icon}`} />
                                <h4>{item.title}</h4>
                                <p>Amadea Shop is a very slick and clean e-commerce template with endless possibilities.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
