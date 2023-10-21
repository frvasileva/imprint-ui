import ChallangeItemDto from '../../models/ChallangeItemDto';
import imagePath from './../../static-content/images/challenge_public_transport.png';
import "./challanges.scss";

export default function ChallangeItem(props: { challenge: ChallangeItemDto }) {
    const { challenge } = props;
    return (
        <div className="container challenge-item-wrapper">
            <div className="row">
                <div className="col-12">
                    <img src={imagePath} className="rounded float-start challenge-image" alt="..." />
                    <p className="challenge-title">{challenge.title}</p>
                    <p className="challenge-descripion">{challenge.description}</p>
                    <button className='main-action-btn enroll-button'>Enroll</button>
                </div>
            </div>
        </div>
    );
}
