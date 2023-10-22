import { useParams } from 'react-router-dom';
import ChallengeItemDto from '../../models/ChallengeItemDto';
import imagePath from './../../static-content/images/challenge_public_transport.png';
import "./challenges.scss";
import { mockChallanges } from '../../mockData/mockChallenges';

export default function ChallangeDetails() {
    const { id } = useParams()

    const item = mockChallanges.find((item: ChallengeItemDto) => {
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
                    {/* <div className="title-wrapper"><p className="challenge-title">{item.title}</p>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="challenge-title">{item.title}</p>
                        <p className="challenge-descripion">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
