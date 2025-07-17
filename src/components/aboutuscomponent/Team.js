'use client';
import Image from 'next/image';

export default function Team() {
    const members = [
        { name: 'Jonathan Scott', role: 'CEO', img: 'team_member_1.jpg' },
        { name: 'oliver bastin', role: 'designer', img: 'team_member_2.jpg' },
        { name: 'erik jonson', role: 'developer', img: 'team_member_3.jpg' },
        { name: 'jon doe', role: 'marketing officer', img: 'team_member_4.jpg' },
    ];

    return (
        <div className="team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h2 className="title">Our Team</h2>
                            <p>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
                        </div>
                    </div>
                </div>
                <div className="row mbn-30">
                    {members.map((m, i) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                            <div className="team-member mb-30">
                                <div className="team-thumb">
                                    <Image src={`/assets/img/team/${m.img}`} alt={m.name} width={300} height={300} />
                                    <div className="team-social">
                                        {['facebook', 'twitter', 'linkedin', 'google-plus'].map((net, idx) => (
                                            <a href="#" key={idx}><i className={`fa fa-${net}`} /></a>
                                        ))}
                                    </div>
                                </div>
                                <div className="team-content text-center">
                                    <h6 className="team-member-name">{m.name}</h6>
                                    <p>{m.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
