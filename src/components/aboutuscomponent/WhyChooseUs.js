'use client';

export default function WhyChooseUs() {
    const items = [
        {
            icon: 'globe',
            title: 'Free Shipping',
            description: 'Enjoy free delivery on all jewelry orders — elegant pieces, no extra cost.',
        },
        {
            icon: 'plane',
            title: 'Fast & Secure Delivery',
            description: 'Your jewelry arrives safely, beautifully packaged and on time.',
        },
        {
            icon: 'comments',
            title: 'Personal WhatsApp Support',
            description: 'Need help choosing? Chat with us on WhatsApp and shop with ease.',
        },
    ];



    return (
        <div className="choosing-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Why Choose Us</h2>
                            <p>Experience the elegance of shopping fine jewelry, made simple and personal</p>
                        </div>
                    </div>
                </div>
                <div className="row mbn-30">
                    {items.map((item, i) => (
                        <div className="col-lg-4 col-md-4" key={i}>
                            <div className="single-choose-item text-center mb-30">
                                <i className={`fa fa-${item.icon}`} />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
