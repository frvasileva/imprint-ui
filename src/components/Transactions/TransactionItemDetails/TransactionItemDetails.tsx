import { NavLink, useParams } from 'react-router-dom';
import { mockTransactions } from '../../../mockData/mockedTransactions';
import TransactionItemDetailsDto from '../../../models/TransactionItemDetailsDto';
import "./TransactionItemDetails.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../api/settings';
import TransactionObject from '../../../models/TransactionObject';
const TransactionItemDetails = () => {
    const { id } = useParams()
    // const item = mockTransactions.find((item: TransactionItemDetailsDto) => {
    //     return item.transaction.id === id;
    // });


    const [item, setItem] = useState({} as TransactionObject);
    useEffect(() => {
        fetch(API_BASE_URL + "/trans/one/" + id)
            .then((response) => {
                return response.json();
            })
            .then((itm: any) => {
                const mappedItem = {
                    id: itm.id,
                    type: "incoming",
                    createdOn: new Date(itm.invoiceDate.join(",")),
                    footPrintPoints: itm.footPrintPoints,
                    invoiceRows: itm.invoiceRows,
                    vendor: itm.vendor,
                    totalPrice: itm.totalPrice
                } as TransactionObject;


                setItem(mappedItem);
            });
    }, []);
    console.log(item)
    if (!item) {
        return (<>Item not found</>)
    }

    return (
        <div className="container">
            <div className={`transaction-details-wrapper ${item.type}-type`}>
                <div className="row back-to-list-wrapper">
                    <div className="col-12">
                        <NavLink to={`/transactions`} className="back-link"><ArrowBackIosNewIcon /> Back</NavLink>
                    </div>
                </div>

                <div className="row">
                    <div className={`row summary-wrapper carbon-footprint-type ${item.footPrintPoints}`}>
                        <div className="col-8">
                            <div className="transaction-merchant-details">
                                <span className="merchant-name"> {item.vendor}</span>
                                <span className="transaction-date"> {item.createdOn?.toDateString()}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <span className='total-amount'>
                                {item.type === "outgoing" ? "-" : "+"}{item.totalPrice} €

                            </span>
                        </div>
                    </div>
                </div>

                <h1>Transaction details:</h1>
                {/* <div className="row">
                    <ProductList products={item.invoiceDetails.productList} />
                </div> */}
            </div></div>
    );
};

export default TransactionItemDetails;