import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Home({items,onAddToCart,onAddToFavorite,isLoading}) {
  
  
  const renderItems = () => {
    return (isLoading ? [...Array(10)] : items.slice(0,10))
     .map((item, index) => (
      <Card
      key={index}
      onFavorite={(obj) => onAddToFavorite(obj)}  
      onPlus={(obj) => onAddToCart(obj)}
      loading={isLoading}
      {...item} />
    ));
  };

    return(
        <div className="content">
        <div style={{background:' url(/img/banner-1.png)',backgroundSize:'100% 100%',height:'400px',backgroundRepeat:'no-repeat',marginBottom:'42px'}}></div>
        
        <h1>Все товары</h1>
        <div className="card-decorations">
          {renderItems().slice(0,10)}
        </div>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <Link to="/"><img style={{marginRight: '5px'}} src="/img/buttonLast.png"/></Link> 
        <Link to="/page"><img style={{marginLeft: '5px'}} src="/img/buttonNext.png"/></Link> 
        </div>     
      </div>
    )
}

export default Home;