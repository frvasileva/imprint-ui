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
                                            <div className="col-12">
                                                <span className="product-name">{item.product.name}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="product-sector">{item.product.sector}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6"><span className="prices">{item.rowPrice.toFixed(2)} €</span></div>
                                            <div className="col-6"><span className="prices">{item.rowCarbonKgs.toFixed(2)} </span><Co2Icon /></div>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                We have noticed that you’ve recently purchased salmon. Shop trout or carp instead and go local to earn more carbon points.
                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    })}
                </Accordion>

            </div>
        );
}
