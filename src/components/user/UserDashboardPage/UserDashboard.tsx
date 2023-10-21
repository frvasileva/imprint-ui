import "./UserDashboard.scss";
import { DataByCateogryDonutWidget } from "./Widgets/DataByCateogryDonutWidget/DataByCateogryDonutWidget";
import { LastUsertransactions } from "./Widgets/LastUserTransactions/LastUserTransactions";
import TotalUserPoints from "./Widgets/TotalUserPoints";

export default function UserDashboard() {
    // const { challenge } = props;
    return (
        <div className="container challenge-item-wrapper">
            <div className="row">
                <div className="col-12">
                    <TotalUserPoints />
                    <DataByCateogryDonutWidget />
                    <hr />
                    <LastUsertransactions />
                </div>
            </div>
        </div>
    );
}
