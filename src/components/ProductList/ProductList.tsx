import { Accordion } from 'react-bootstrap';
import { InvoiceRows } from '../../models/TransactionObject';
import Co2Icon from '@mui/icons-material/Co2';
import "./products.scss";
import Spinner from '../shared/Spinner';
export default function ProductList(props: { products: InvoiceRows[] }) {
    const { products } = props;
    console.log("product", products);
    if (!products || products.length === 0) {
        return (<Spinner />)

    } else
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    {products.map((item: InvoiceRows) => {
                        return (
                            <Accordion.Item eventKey={item.product.id}>
                                <Accordion.Header>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="product-name">{item.product.name}</span>
                                                <br />
                                                <span className="product-sector">{item.product.sector}</span>
                                            </div>
                                            <div className="col-3">{item.rowPrice.toFixed(2)} €</div>
                                            <div className="col-3">{item.rowCarbonKgs.toFixed(2)} <Co2Icon /></div>
                                        </div></div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    })}
                </Accordion>

            </div>
        );
}
