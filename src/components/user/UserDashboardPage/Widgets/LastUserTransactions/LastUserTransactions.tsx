import { mockTransactions } from "../../../../../mockData/mockedTransactions";
import TransactionItem from "../../../../Transactions/TransactionItem/TransactionItem";


export const LastUsertransactions = () => {
    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-12">
                    <p className='section-title'>Last transactions:</p>
                    {
                        mockTransactions.slice(0, 2).map((item: any) => {
                            return (<TransactionItem transaction={item} key={item.description} />)
                        })
                    }
                </div>
            </div>
        </div>
    );
};