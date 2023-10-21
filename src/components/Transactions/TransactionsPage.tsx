import { useEffect, useState } from "react";
import { mockTransactions } from "../../mockData/mockedTransactions";
import TransactionItem from "./TransactionItem/TransactionItem";
import { API } from "../../api/API";

export const TransactionsPage = () => {

    const [data, getData] = useState([]);
    useEffect(() => {
        const result = API.fetchTransactions();

        console.log(result);
    });

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