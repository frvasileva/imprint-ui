import { Accordion } from 'react-bootstrap';
import { ProductInfo } from '../../models/TransactionItemDetailsDto';

export default function ProductList(props: { products: ProductInfo[] }) {
    const { products } = props;

    return (
        <div>
            <Accordion defaultActiveKey="0">
                {products.map((item: ProductInfo) => {
                    return (
                        <Accordion.Item eventKey={item.product.id}>
                            <Accordion.Header>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8">{item.product.name}</div>
                                        <div className="col-4">99 €</div>
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
