import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__navOption">
                    <span className="header__navOptionLineOne">Hello, Guest</span>
                    <span className="header__navOptionLineTwo">Sign In</span>
                </div>
                <div className="header__navOption">
                    <span className="header__navOptionLineOne">Returns</span>
                    <span className="header__navOptionLineTwo">& Orders</span>
                </div>
                <div className="header__navOption">
                    <span className="header__navOptionLineOne">Your</span>
                    <span className="header__navOptionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTw0 header__basketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
