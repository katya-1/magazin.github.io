import React from 'react'
import ContentLoader from "react-content-loader";
import { AppContext } from '../App';

function Card({id, title, imageUrl, price, onFavorite, onPlus,favorited = false, added = false, loading=false}) {
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const {isItemAdded} = React.useContext(AppContext);
    const obj = { id,parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    }; 

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    }; 

    return (
        <div className="card">
            {
                loading ? (
                    <ContentLoader
                        speed={2}
                        width={155}
                        height={250}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>) 
                :(
                <>
                {onFavorite &&
                    <div className="favorite" onClick={onClickFavorite}>
                        <img height={20} width={20} src={isFavorite ? '/img/heart_online.svg'  : '/img/heart.svg'} alt="Unliked"/>
                    </div>
                }    
                    <img className='imgRing' src={imageUrl} alt="ring" />
                    <h5>{title}</h5>
                    <div className="cardBottom">
                        <div className="cardInfo">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                        </div>
                        {onPlus && <img  onClick={onClickPlus} style={{cursor:'pointer'}} width={30}
                         height={30} src={isItemAdded(id) ? "/img/click-plus.png" :
                         "/img/plus.png"} alt="plus" />}
                    </div>
                </> 
                )} 
            
        </div>
    );
}    


export default Card;