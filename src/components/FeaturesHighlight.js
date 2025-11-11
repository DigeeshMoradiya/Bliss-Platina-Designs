'use client';


const policies = [
  {
    icon: <img src="/assets/img/Service/Customer Service.png" alt="policy icon" />,
    title: '24/7 Customer Service',
    description: 'Free shipping all order',
  },
  {
    icon:<img src="/assets/img/Service/Bliss Platina’s Trust.png" alt="policy icon" />,
    title: 'Bliss Platina Designs Trust',
    description: 'Support 24 hours a day',
  },
  {
    icon:<img src="/assets/img/Service/Unbeatable Market Price.png" alt="policy icon" />,
    title: 'Unbeatable Market Price',
    description: '30 days for free return',
  },
  {
    icon: <img src="/assets/img/Service/Eco Friendly Element.png" alt="policy icon" />,
    title: 'Eco Friendly Element',
    description: 'We ensure secure payment',
  },
];

export default function FeaturesHighlight() {
  return (
    <div className="service-policy section-padding">
      <div className="container">
        <div className="row mtn-30">
          {policies.map((policy, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="policy-item">
                <div className="policy-icon">
                  {policy.icon}
                </div>
                <div className="policy-content">
                  <h6>{policy.title}</h6>
                  {/* <p>{policy.description}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
