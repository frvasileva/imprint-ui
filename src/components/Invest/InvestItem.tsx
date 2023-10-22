import { NavLink } from 'react-router-dom';
import { InvestCategory } from '../../models/InvestDto';
import "./invest.scss";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function InvestItem(props: { invest: InvestCategory }) {
    const { invest } = props;
    return (
        <div className="container inittt-wrapper">
            <div className="row">
                <div className="col-12">
                    <div className="invest-tile-wrapper">
                        <img src={invest.coverPhoto} className="invest-image" alt="..." />
                        <p className="invest-title">{invest.title}</p>
                    </div>
                    <p className="invest-description">{invest.description}
                        <br />
                        <NavLink to={`/invest/details/${invest.id}`} className="custom-basic-link">
                            See initiatives <ArrowRightAltIcon />
                        </NavLink></p>

                </div>

            </div>
        </div>


    );
}
