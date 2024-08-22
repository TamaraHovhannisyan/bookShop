import { useState } from 'react'
import './App.css'
function App(){
  const [basket, setBasket] = useState([]);
  const moveToCart = (prod) => {
  
    const result = basket.find((x) => x.id === prod.id);
    if (result) {
      result.count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...prod, count: 1 }]);
    }
  };
  const removeFromCart = (prod) => {
    const updatedBasket = basket.filter((item) => item.id !== prod.id);
    setBasket(updatedBasket);
  };
  const decreaseItemInCart = (prod) => {
    if (prod.count > 1) {
      const updatedBasket = basket.map((item) =>
        item.id === prod.id ? { ...item, count: item.count - 1 } : item
      );
      setBasket(updatedBasket);
    }
  };
  const increaseItemInCart = (prod) => {
    const updatedBasket = basket.map((item) =>
      item.id === prod.id ? { ...item, count: item.count + 1 } : item
    );
    setBasket(updatedBasket);
  };
  
  const [products, seProducts] = useState([
    {id:101, name:"Psycholagy", price:2700, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744091960/9780744091960_cover.jpg",},
    {id:102, name:"math", price:2200, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg"},
    {id:103, name:"anatomy", price:1700, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780593957189/9780593957189_cover.jpg"},
    {id:104, name:"esim", price:200, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744042160/9780744042160_cover.jpg"},
    {id:105, name:"biology", price:4000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744056976/9780744056976_cover.jpg"},
    {id:106, name:"english", price:1200, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744092349/9780744092349_cover.jpg"},
    {id:107, name:"azatMard", price:100000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465444271/9781465444271_cover.jpg"}
  
  ]);
  return (
    <>
      <h1>Online Shop</h1>
      <div className="content">
        <div>
          <h3>Products</h3>
          <div className="list">
            {products.map((prod) => (
              <div key={prod.id}>
                <img src={prod.pic} />
                <p>{prod.name}</p>
                <strong>{prod.price}</strong>
                <button onClick={() => moveToCart(prod)}>Move</button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Subtotal</th>
                <th className="actions-th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.count * item.price}</td>
                  <td className="actions-td">
                    <button onClick={() => increaseItemInCart(item)}>+</button>
                    <button onClick={() => decreaseItemInCart(item)}>-</button>
                    <button onClick={() => removeFromCart(item)}>x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}








export default App;