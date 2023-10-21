import { NavLink, useParams } from 'react-router-dom';
import { mockTransactions } from '../../../mockData/mockedTransactions';
import TransactionItemDetailsDto, { ProductInfo } from '../../../models/TransactionItemDetailsDto';
import "./TransactionItemDetails.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ProductList from '../../ProductList/ProductList';
const TransactionItemDetails = () => {
    const { id } = useParams()
    const item = mockTransactions.find((item: TransactionItemDetailsDto) => {
        return item.transaction.id === id;
    });

    if (typeof item === 'undefined') {
        return (<>Item not found</>)
    }

    return (
        <div className="container">
            <div className={`transaction-details-wrapper ${item.transaction.type}-type`}>
                <div className="row back-to-list-wrapper">
                    <div className="col-12">
                        <NavLink to={`/transactions`} className="back-link"><ArrowBackIosNewIcon /> Back</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className={`row summary-wrapper carbon-footprint-type ${item.transaction.carboonFootrpintType}`}>
                        <div className="col-8">
                            <span className="merchant-name"> {item.merchant.name}</span>
                            <span className="transaction-date"> {item.transaction.createdOn.toDateString()}</span>
                        </div>
                        <div className="col-4">
                            <span className='total-amount'>
                                {item.transaction.type === "outgoing" ? "-" : "+"}{item.transaction.totalAmount}€
                            </span>
                        </div>
                    </div>
                </div>

                <h1>Transaction details:</h1>
                <div className="row">
                    <ProductList products={item.invoiceDetails.productList} />
                </div>
            </div></div>
    );
};

export default TransactionItemDetails;