import "./transaction-item.scss";
import name from './../../../static-content/images/transaction.png';
import { NavLink } from "react-router-dom";
import TransactionItemDetailsDto from "../../../models/TransactionItemDetailsDto";
import TransactionObject from "../../../models/TransactionObject";

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
                    <div className="col-8">
                        <div className="transaction-description">
                            {props.transaction.footPrintPoints} 
                        </div>
                        <div className="transaction-date">{item.createdOn.toDateString()}</div>
                    </div>
                    <div className="col-3">
                        <div className="transaction-amount">{`${item.type === "incoming" ? "+" : "-"}`} </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default TransactionItem;