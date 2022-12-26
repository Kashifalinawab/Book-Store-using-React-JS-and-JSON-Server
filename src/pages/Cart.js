import React from "react";
// import { useNavigate } from "react-router-dom";
import useStateContext from "../hooks/useStateContext";

function Cart(props) {
  const { cart, setCart, price, setPrice } = useStateContext();

  // const navigate = useNavigate();

  // below code from remove full cart items
  const removeBook = (book) => {
    // console.log(book.id);
    // const editedItems = cart.filter((item) => item.id !== book.id);
    setPrice(0);
    setCart("");
  };
  /// below code is for remove cart items with decresement in Qty,price ...
  const removeOneBook = (book) => {
    const index = cart.findIndex((item) => item.id === book.id);
    if (cart[index].quantity === 1) {
      const editedItems = cart.filter((item) => item.id !== book.id);
      setPrice((prevPrice) => prevPrice - book.price);
      setCart(editedItems);
    } else if (index !== -1) {
      cart[index].quantity -= 1;
      const updatedItems = [...cart];
      setCart(updatedItems);
      setPrice((prevPrice) => prevPrice - book.price);
    }
  };
  return (
    <div className="cartDiv">
      {/* <div>
        <button onClick={() => navigate("/")}>Go to Store</button>
      </div> */}
      <div>
        <h2>Cart</h2>
        {cart.length < 1 ? (
          <p>No Books In The Cart</p>
        ) : (
          cart.map((book) => {
            return (
              <div key={book.id}>
                <h3> Name: {book.title}</h3>
                <img src={book.image} alt="book-pic" className="cartImg" />
                <li> Price: {book.price} $</li>
                <li> Qty: {book.quantity}</li>
                <br />
                <button onClick={() => removeOneBook(book)}>Remove</button>{" "}
              </div>
            );
          })
        )}
        <br /> <button onClick={() => removeBook()}>Remove All</button>
      </div>
      <div>
        <h4>
          TOTAL PRICE :
          {cart.length === 0 ? setPrice(0) : `${parseFloat(price).toFixed(2)}$`}
        </h4>
      </div>
    </div>
  );
}

export default Cart;
