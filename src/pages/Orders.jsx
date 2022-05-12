import axios from 'axios';
import React from 'react';
import Card from '../components/Card';
import { AppContext } from '../App';
import { Link } from 'react-router-dom';

function Orders() {
const [orders, setOrders] = React.useState([]);
const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() => {
    (async () => {
        try{
            const {data} = await axios.get('https://621015233fd066f7b22e1cae.mockapi.io/orders');
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setIsLoading(false);
        } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
    }
    })();
}, []);

    return (
    <div className="content">
      {orders.length > 0 ? (
        <div>
        <h1>Мои заказы</h1>
      <div className="card-decorations-on">
           {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <div style={{margin:'0px 30px 0px 0px'}}>
            <Card
            key={index}
            loading={isLoading}
            {...item} />
            </div>
          ))}
        </div>
        </div>
      ) : (
        <div className="favorite-off">
        <img width={80} height={80} src="/img/order-off.png" />
        <h3>У вас нет заказов</h3>
        <p>Оформите хотя бы один заказ</p>
        
        
        <button  style={{width:'20%',margin:'39px 0px'}} className="nudeButton">
            <Link to="/">
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </Link>
        </button>
        
       </div>
      )} 
        
        
          
        
    </div>
  );
}

export default Orders;