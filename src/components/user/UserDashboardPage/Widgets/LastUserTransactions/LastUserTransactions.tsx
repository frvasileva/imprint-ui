import { useEffect, useState } from "react";
import { mockTransactions } from "../../../../../mockData/mockedTransactions";
import TransactionItem from "../../../../Transactions/TransactionItem/TransactionItem";
import { API_BASE_URL } from "../../../../../api/settings";
import TransactionObject from "../../../../../models/TransactionObject";


export const LastUsertransactions = () => {

    const [data, setData] = useState([] as TransactionObject[]);
    useEffect(() => {
        fetch(API_BASE_URL + "/trans/all/list")
            .then((response) => {
                return response.json();
            })
            .then((data: any) => {
                console.log("then data", data);

                const mappedItem = data.map((item: any) => {
                    const itm = {
                        id: item.id,
                        type: item.type,
                        footPrintPoints: item.footPrintPoints,
                        invoiceRows: item.invoiceRows,
                        vendor: item.vendor,
                        totalPrice: item.totalPrice,
                        createdOn: new Date(item.invoiceDate.join(",")),

                    } as TransactionObject;

                    return itm;
                });
                setData(mappedItem);
            });
    }, []);


    return (
        <div className="container register-wrapper">
            <div className="row">
                <div className="col-12">
                    <p className='section-title'>Last transactions:</p>
                    {
                        data.slice(0, 5).map((item: any) => {
                            return (<TransactionItem transaction={item} key={item.description} />)
                        })
                    }
                </div>
            </div>
        </div>
    );
};