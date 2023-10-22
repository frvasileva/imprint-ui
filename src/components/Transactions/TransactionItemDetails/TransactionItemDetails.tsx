import { NavLink, useParams } from 'react-router-dom';
import "./TransactionItemDetails.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../../api/settings';
import TransactionObject from '../../../models/TransactionObject';
import ProductList from '../../ProductList/ProductList';

const TransactionItemDetails = () => {
    const { id } = useParams()

    const [item, setItem] = useState({} as TransactionObject);
    useEffect(() => {
        fetch(API_BASE_URL + "/trans/one/" + id)
            .then((response) => {
                return response.json();
            })
            .then((itm: any) => {
                const mappedItem = {
                    id: itm.id,
                    type: itm.type ?? "low",
                    createdOn: new Date(itm.invoiceDate.join(",")),
                    footPrintPoints: itm.footPrintPoints,
                    invoiceRows: itm.invoiceRows,
                    vendor: itm.vendor,
                    totalPrice: itm.totalPrice
                } as TransactionObject;


                setItem(mappedItem);
            });
    }, []);
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
                    <div className={`row summary-wrapper carbon-footprint-type ${item.type}`}>
                        <div className="col-md-6 col-xs-12">
                            <div className="transaction-merchant-details">
                                <span className="merchant-name"> {item.vendor}</span>
                                <span className="transaction-date"> {item.createdOn?.toDateString()}</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <span className='total-amount'>
                                {item.type === "low" ? "-" : "+"}{item.totalPrice} €
                            </span>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <span className='total-amount'>
                                <div className="footprint-info">
                                    {item.footPrintPoints}
                                    <img src="https://cdn-icons-png.flaticon.com/128/4762/4762153.png?ga=GA1.1.172831833.1696532775&track=ais" alt="logo" className='co2-icon' />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <h1>Transaction details:</h1>
                <div className="row">
                    <ProductList products={item.invoiceRows} />
                </div>
            </div></div>
    );
};

export default TransactionItemDetails;