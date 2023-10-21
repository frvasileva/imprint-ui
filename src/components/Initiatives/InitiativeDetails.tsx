import { useParams } from 'react-router-dom';
import imagePath from './../../static-content/images/challenge_public_transport.png';
import "./initiatives.scss";
import { mockInitiatives } from '../../mockData/mockInitiatives';
import { InitiativesCategory, InitiativesItemDto } from '../../models/InitiativesDto';

export default function InitiativeDetails() {
    const { id } = useParams()

    const item = mockInitiatives.find((item: InitiativesCategory) => {
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

                {item.initiatives.map((item: InitiativesItemDto) => {
                    return (<div className='row initiatives-wrapper'>
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
