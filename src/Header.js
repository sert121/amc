import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from './StateProvider'
import { auth } from './firebase';


function Header() {




    const [{basket,user}] = useStateValue();
    console.log(basket);

    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            {/* {logo on the left} */}
            <Link to ='/'>
            <img  className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            />
            </Link>
            {/* {Search box} */}
            
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header_optL1"> Hello {user?.email}</span>
                     <span className="header_optL2">{user ? 'Sign In' : 'Sign out'}</span>
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header_optL1">Returns</span>
                    <span className="header_optL2"> & Orders</span>  
                </div>
            </Link>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header_optL1">Your</span>
                    <span className="header_optL2">Prime</span>               
                </div>
            </Link>
            </div>
            {/* {3 links} */}


            <Link to='/checkout' className="header__link">
                <div className='checkout_basket'>
                    <ShoppingBasketIcon/>
                    {/* Shopping basket icon using material ui*/}
                    <span className="header_optL2 basket_count">{basket?.length}</span>

                </div>


            </Link>

        </nav>
    );
}

export default Header;
