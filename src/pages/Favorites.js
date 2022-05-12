import { Link } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../App';
import Card from '../components/Card';

function Favorites() {
    const {favorites,onAddToFavorite,setCartOpened} = React.useContext(AppContext);
  return (
    <div className="content">
      { favorites.length ? (
      <div>
        <h1>Мои закладки</h1>
      <div className="card-decorations-on">
           {favorites.map((item, index) => (
             <div style={{margin:'0px 30px 0px 0px'}}>
            <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite} 
            {...item}/>
          </div>
          ))}
        </div>
        </div>
  ) : (
    <div className="favorite-off">
            <img width={80} height={80} src="/img/favorite-off.png" />
            <h3>Закладок нет :(</h3>
            <p>Вы ничего не добавляли в закладки</p>
            
            
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

export default Favorites;