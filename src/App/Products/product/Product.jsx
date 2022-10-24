import "./Product.css";
import image_product from "../../../images/pump-bottle-02 1.png";
function Product() {
    return (
        <div className="product_field">
            <div className="image_product"><img src={image_product}/></div>
            <div className="product_info">
                <div className="name_of_product"><p>Cosmetic products</p></div>
                <div className="info_of_product"><p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p></div>
                <div className="down_of_card">
                    <div className="product_card_buttons">
                        <b1><button className="Buy_now">Buy Now</button></b1>
                        <b2><button className="Add_to_cart">Add To Cart</button></b2>
                    </div>
                    <div className="cost"><p>$120</p></div>
                </div>
            </div>
        </div>
    )
}

export default Product;