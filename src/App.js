
import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { Toast } from 'bootstrap';
import './App.css';

function App() {
  const [cartItem, setCartItem] = useState([])

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id === item.id
    })
    if (isAlreadyAdded !== -1) {
      Toast("already added in cart", {
        type: "error"
      })
    }
    setCartItem([...cartItem, item])

  }

  return (
  <>









  
  </>
  );
}

export default App;
