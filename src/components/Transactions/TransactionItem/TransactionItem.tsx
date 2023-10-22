import "./transaction-item.scss";
import name from './../../../static-content/images/transaction.png';
import { NavLink } from "react-router-dom";
import TransactionObject from "../../../models/TransactionObject";
import Co2Icon from '@mui/icons-material/Co2';

const TransactionItem: any = (props: { transaction: TransactionObject }) => {

    const { transaction: item } = props;
    return (
        <NavLink to={`/transactions/details/${item.id}`} className="custom-basic-link">
            <div className={`transaction-item ${item.type} `}>
                <div className="row">
                    <div className="col-1">
                        <div className="icon-wrapper">
                            <img src={name} width="32px" alt="transaction" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="transaction-merchant-details">
                            <div className="transaction-description">
                                {props.transaction.vendor}
                            </div>

                            <div className="transaction-date">{item.createdOn.toDateString()}</div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="metrics-wrapper">
                            <span className="transaction-C20">
                                {props.transaction.footPrintPoints}<Co2Icon className="material-c2o-custom" /> <span className="suffix-points">points</span>
                            </span>
                            <span className="transaction-amount">{props.transaction.totalPrice} € </span>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default TransactionItem;