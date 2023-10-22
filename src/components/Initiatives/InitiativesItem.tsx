import { NavLink } from 'react-router-dom';
import { InitiativesCategory } from '../../models/InitiativesDto';
import "./initiatives.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function InitiativeItem(props: { initiative: InitiativesCategory }) {
    const { initiative } = props;
    return (
        <div className="container inittt-wrapper">
            <div className="row">
                <div className="col-12">
                    <div className="initiative-tile-wrapper">
                        <img src={initiative.coverPhoto} className="initiative-image" alt="..." />
                        <p className="initiative-title">{initiative.title}</p>
                    </div>
                    <p className="initiative-description">{initiative.description}
                        <br />
                        <NavLink to={`/initiatives/details/${initiative.id}`} className="custom-basic-link">
                            See initiatives <ArrowRightAltIcon />
                        </NavLink></p>

                </div>

            </div>
        </div>


    );
}
