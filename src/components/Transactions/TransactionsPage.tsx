import { mockTransactions } from "../../mockData/mockedTransactions";
import TransactionItem from "./TransactionItem/TransactionItem";

export const TransactionsPage = () => {
    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-12">
                    <h1 className="page-title">Transactions:</h1>
                    {
                        mockTransactions.map((item: any) => {
                            return (<TransactionItem transaction={item} key={item.description} />)
                        })
                    }
                </div>
            </div>
        </div>
    );
};