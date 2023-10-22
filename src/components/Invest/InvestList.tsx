import { mockInvest } from "../../mockData/mockInvest";
import { InvestCategory } from "../../models/InvestDto";
import InvestItem from "./InvestItem";

export const InvestList = () => {
    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Invest:</h1>

                    <div className="row">
                        {
                            mockInvest.map((item: InvestCategory) => {
                                return (
                                    <div className="col-lg-4 col-xs-12">
                                        <InvestItem invest={item} key={item.id} />
                                    </div>)
                            })}
                    </div>


                </div>
            </div>
        </div>
    );
};