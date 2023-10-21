import "./TotalUserPoints.scss";
import Co2Icon from '@mui/icons-material/Co2';
export default function TotalUserPoints() {
    return (
        <div className="container total-user-points-wrapper">
            <div className="row">
                <div className="col-12">
                    <span>Totally saved:</span>
                    <p className="points-value">300kg <Co2Icon className="material-c2o-custom" /></p>
                </div>
            </div>
        </div>
    );
}
