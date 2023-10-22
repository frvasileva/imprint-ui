import { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem/TransactionItem";
import TransactionObject from "../../models/TransactionObject";
import { API_BASE_URL } from "../../api/settings";
import Spinner from "../shared/Spinner";

export const TransactionsPage = () => {

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

    if (data.length === 0 || typeof data === "undefined")
        return (<Spinner />)
    else
        return (
            <div className="container register-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h1 className="page-title">Transactions:</h1>
                        {
                            data.map((item: TransactionObject) => {
                                return (<TransactionItem transaction={item} key={item.id} />)
                            })
                        }
                    </div>
                </div>
            </div>
        );
};