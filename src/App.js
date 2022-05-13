
import './App.css';
import Header from './component/header';
import Menu from './component/menu';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Body from './component/body';
// import { CaretDownFilled } from '@ant-design/icons';

function App() {
  const [products,setProducts] = useState([]);
  // const [totalProduct,setTotalProduct] = useState(0);
  const [cart,setCart] = useState([]);
  function buy(data){
    setCart(prev=>{
      const cartClone = [...prev];
      cartClone.push(data);
      return cartClone;
    })
    
  }
  function callAPI(){
    axios.get(`http://localhost:5000/products`)
    .then(res=>{
      setProducts(res.data)
    })
  }
  useEffect(callAPI,[]);
  return (
    <div className="App">
      <Header totalProduct={cart.length}/>
      <Menu/>
      <Body 
      buy={buy}
      products={products}
      cart={cart}/>
    </div>
  );
}

export default App;
