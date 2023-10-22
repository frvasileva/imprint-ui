import ChallengeItemDto from '../../models/ChallengeItemDto';
import "./challenges.scss";

export default function ChallengeItem(props: { challenge: ChallengeItemDto }) {
    const { challenge } = props;
    return (
        <div className="container challenge-item-wrapper">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <img src={challenge.coverPhoto} className="rounded float-start challenge-image" alt="..." />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <p className="challenge-title">{challenge.title}</p>
                    <p className="challenge-descripion">{challenge.description}</p>
                    <button className='main-action-btn enroll-button'>Enroll</button>
                </div>
            </div>
        </div>
    );
}
