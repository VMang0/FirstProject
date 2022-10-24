import './Header.css';
import user from '../../../images/user.png';
import shop_cart from '../../../images/shopping-cart.png';
import menu from '../../../images/align-justify.png';

function Header() {
    return (
        <div className= "Header">
            <div className="logo">Dudeshape</div>
            <div className="page_list">
                <ul className="links">
                    <li><a href={11}>Home</a></li>
                    <li><a href={11}>Products</a></li>
                    <li><a href={11}>About Us</a></li>
                    <li><a href={11}>Contact Us</a></li>
                </ul>
            </div>
            <div className="icons_list">
                <ul className="icons">
                    <li><a href={11}><img src={user}/></a> </li>
                    <li><a href={11}><img src={shop_cart}/></a> </li>
                    <li><a href={11}><img src={menu}/></a></li>
                </ul>
            </div>

        </div>

    );
}

export default Header;