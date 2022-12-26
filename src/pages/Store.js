import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import useStateContext from "../hooks/useStateContext";
import { nanoid } from "nanoid";
import Cart from "./Cart";
import "./style.css";

function Store(props) {
  const { store, setSore, cart, setCart, setPrice } = useStateContext();

  const [input, setInput] = useState("");
  // const navigate = useNavigate();
  const urlBooks = "http://localhost:3001/books";

  useEffect(() => {
    axios.get(urlBooks).then((response) => {
      const books = response.data;
      // console.log(books);
      setSore(books);
    });
  }, [setSore]);

  //below code for adding books to store:
  const AddingBook = () => {
    // console.log("added book");
    const newBook = {
      id: nanoid(),
      title: input,
    };
    axios
      .post(urlBooks, newBook)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(newBook);
  };

  // below code is for adding book to Cart component:
  const addToCart = (book) => {
    const index = cart.findIndex((item) => item.id === book.id);

    setPrice((prevPrice) => prevPrice + book.price);
    if (index === -1) {
      const updateCart = cart.concat({ ...book, quantity: 1 });
      setCart(updateCart);
    } else {
      cart[index].quantity += 1;
      const updateCart = [...cart];
      setCart(updateCart);
    }
  };
  return (
    <div className="displayDiv">
      {/* <button onClick={() => navigate("/cart")}>Click to Cart </button> */}
      <div className="mapDiv">
        {/* <input
          type="text"
          placeholder="name of book"
          onChange={(e) => setInput(e.target.value)}
        />{" "}
        <button onClick={AddingBook}>Add Book to the Store</button> */}
        {/* </div> */}
        {/* <div> */}
        {store.map((book) => {
          return (
            <div key={book.id} className="insideMapDiv">
              {/* <h2>{book.id}</h2> */}
              <h4> Name: {book.title}</h4>
              <img src={book.image} alt="book-pic" />
              <h4> Price: {book.price} $</h4>
              <button onClick={() => addToCart(book)}>Add</button>
            </div>
          );
        })}
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default Store;
