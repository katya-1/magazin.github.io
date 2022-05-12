import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import News from './pages/News';
import Footer from './components/Footer';
import Company from './pages/Company';
import Page2 from './pages/Page2';


export const AppContext = React.createContext({});
 
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading,setIsLoading] = React.useState(true);

 React.useEffect(async () => { 
   async function fetchData() {
    const cartResponce = await axios.get('https://621015233fd066f7b22e1cae.mockapi.io/catr');
    const favoritesResponce = await axios.get('https://621015233fd066f7b22e1cae.mockapi.io/favorites');
    const itemsResponce = await axios.get('https://621015233fd066f7b22e1cae.mockapi.io/items');
    
    setIsLoading(false);

    setCartItems(cartResponce.data);
    setFavorites(favoritesResponce.data);
    setItems(itemsResponce.data);
   }
    fetchData();
  },[]); 

  const onAddToCart =async (obj) => {
    try{ 
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
          await axios.delete(`https://621015233fd066f7b22e1cae.mockapi.io/catr/${findItem.id}`);
        } else {
          const {data} = await axios.post('https://621015233fd066f7b22e1cae.mockapi.io/catr', obj);
          setCartItems((prev) => [...prev, obj]);
          }
    }catch (error) {
        alert('Ошибка при добавлении в корзину');
        console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://621015233fd066f7b22e1cae.mockapi.io/catr/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onAddToFavorite = async (obj) => {
    try 
    {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://621015233fd066f7b22e1cae.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else{
      const { data } = await axios.post('https://621015233fd066f7b22e1cae.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
      }
    }catch(error){
      alert('Не удалось добавить в фавориты');
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{cartItems,favorites,items,isItemAdded,onAddToFavorite, setCartOpened,setCartItems}}>
      <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />
          
    <Routes>
      <Route path="/" element={<Home 
         items={items}
         cartItems={cartItems}
         onAddToFavorite={onAddToFavorite}
         onAddToCart={onAddToCart}
         isLoading={isLoading}
      />}/>
      <Route path="/favorites" element={<Favorites/> }/>
      <Route path="/orders" element={<Orders/> }/>
      <Route path="/news" element={<News/> }/>
      <Route path="/company" element={<Company/> }/>
      <Route path="/page" element={<Page2
      items={items}
      cartItems={cartItems}
      onAddToFavorite={onAddToFavorite}
      onAddToCart={onAddToCart}
      isLoading={isLoading}/> }/>
    </Routes>
      <Footer/>
    
    </div>
    </AppContext.Provider>
  );
}

export default App;
