import "./Products.css";
import Product from "./product/Product";

function Products() {
    return (
        <div className="products_field">
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}

export default Products;