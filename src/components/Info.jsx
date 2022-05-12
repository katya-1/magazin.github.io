import React from 'react'
import { AppContext } from '../App';

const Info = ({image,title,description}) => {
    const {setCartOpened} = React.useContext(AppContext);
    return (
        <div className="cartEmpty">
            <img className="Empty" width={120} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p style={{opacity:'0.6',padding:'0 25px 16px 25px',textAlign:'center'}}>{description}</p>
            <button onClick={() => setCartOpened(false)} style={{width:'94%'}} className="nudeButton">
                <img src="img/arrow.svg" alt="Arrow" />
                Вернуться назад
            </button>
        </div>
    )
}

export default Info;