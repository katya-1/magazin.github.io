import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

function Header(props){
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum, 0);
    return (
        <header>
          <Link to="/">
            <div className="headerLeft">
              <img width={80} height={80} src="/img/logo1.png"/>
              <div className="headerInfo"> 
                <h3>Secret Earth</h3>
                <p>Магазин лучших украшений</p>
              </div>
              <Link to="/company"><p style={{fontWeight:'600',padding:'0 75px'}}>О нас</p></Link>
              <Link to="/news"><p style={{fontWeight:'600'}}>Как подобрать кольцо</p></Link>
            </div>
          </Link>
        <ul className="headerRight">
          <li className="basket">
            <img onClick={props.onClickCart} style={{cursor:'pointer'}} width={20} height={20} src="/img/basket.svg"/>
            <span>{totalPrice} руб.</span>
          </li>
          <li className="basket">
              <Link to="/favorites">
                <img width={20} height={20} src="/img/heart.svg" alt='Закладки'/>
              </Link>
          </li>
          <li>
            <Link to="/orders">
              <img width={20} height={20} src="/img/user.svg" alt='Пользователь'/>
            </Link>
          </li>
        </ul>
      </header>
    );
}
export default Header;