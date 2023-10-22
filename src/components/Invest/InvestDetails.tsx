import { useParams } from 'react-router-dom';
import imagePath from './../../static-content/images/challenge_public_transport.png';
import "./invest.scss";
import { mockInvest } from '../../mockData/mockInvest';
import { InvestCategory, InvestItemDto } from '../../models/InvestDto';

export default function InvestDetails() {
    const { id } = useParams()

    const item = mockInvest.find((item: InvestCategory) => {
        return item.id === id;
    });

    if (typeof item === 'undefined') {
        return (<>Item not found</>)
    }

    return (
        <div className="challenge-item-details-wrapper">
            <div className="row">
                <div className="col-12">
                    <img src={imagePath} className="cover-image-details" alt="..." />

                </div>
            </div>
            <div className="container">
                <div className="row initiative-headline">
                    <div className="col-12">
                        <p className="challenge-title">{item.title}</p>
                        <p className="challenge-descripion">{item.description}</p>
                    </div>
                </div>

                {item.invest.map((item: InvestItemDto) => {
                    return (<div className='row invest-wrapper'>
                        <div className='col-md-4 col-sm-12'>
                            <img src={item.coverPhoto} alt="alt text" width="100%" />
                        </div>
                        <div className='col-md-8 col-sm-12'>
                            <p className='challenge-title'>{item.title}</p>
                            <p className='challenge-descripion'> {item.description}</p>
                            <button className='main-action-btn enroll-button'>Enroll</button>

                        </div>
                    </div>
                    )
                })}
            </div>
        </div >
    );
}
