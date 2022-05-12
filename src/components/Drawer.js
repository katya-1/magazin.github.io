import React from 'react';
import Info from './Info';
import { AppContext } from '../App';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer(
    {onClose,onRemove,items = [] }){
    const {cartItems, setCartItems} =React.useContext(AppContext);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum, 0);

    const onClickOrder = async () => {
        
            setIsLoading(true);
            const {data} = await axios.post('https://621015233fd066f7b22e1cae.mockapi.io/orders',{items: cartItems,});
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([])
           
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://621015233fd066f7b22e1cae.mockapi.io/catr/' + item.id);
                await delay(1000);
            }
        setIsLoading(false);
    };
    
    return(
        <div className="overlay">
            <div className="drawer">
            <h2>Корзина  <img onClick={onClose}  className="removeBtn" src="/img/btn-remove.svg" alt="Remove" /></h2>
            
            {items.length > 0 ? (
            <div style={{flex:'1',display:'flex',flexDirection:'column'}}>
                <div className="items">
                {items.map((obj) => (
                    <div key={obj.id} className="cartItem">
                    <img className="imgINbacket" width={80} height={80} src={obj.imageUrl} alt="Decorations" />
                    <div>
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                    ))}
                </div>
                <div className="cartTotalBlock">
                    <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>{totalPrice} руб.</b>
                    </li>
                    </ul>
                    <form action="/action_page.php">
                        <h3>Оформление заказа</h3>
                        <p>Пожалуйста,заполните форму, и мы свяжемся с вами для уточнее деталей заказа</p>
                        <hr/>

                        <label for="email"><b>Имя </b></label>
                        <input type="text" placeholder="Введите имя" name="name" required/>
                        <br/>
                        <label for="psw"><b>Номер телефона </b></label>
                        <input type="text" placeholder="Введите номер" name="numPhone" required/>
                        <hr/>

                    </form>    
                    <button disabled={isLoading} onClick={onClickOrder} className="nudeButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div> 
            ) : (
                <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"} 
                image={isOrderComplete ? '/img/order-complite.jpg' : '/img/empty-cart.jpg'} 
                description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавите хотя бы одно украшение, чтобы сделать заказ"} />
            )}
            </div>
        
        </div>
    );
}

export default Drawer;