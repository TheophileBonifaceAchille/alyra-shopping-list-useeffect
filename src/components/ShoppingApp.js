import React, { useState, useEffect } from "react";
import AddPopularProducts from "./AddPopularProducts";
import ShoppingList from "./ShoppingList";
import AddProductForm from "./AddProductForm";

const ShoppingApp = (props) => {
  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("myShoppingList")) || [];

  const [shopping, setShopping] = useState(getLocalStorage);

  const addToShoppingList = (product) => {
    setShopping([...shopping, product]);
  };

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((el) => el !== product));
  };

  useEffect(() => {
    document.title = shopping.lenght
      ? `Vous avec ${shopping.lenght} dans votre panier`
      : "Préparer votre liste de courses";
  }, [shopping.lenght]);

  useEffect(() => {
    // On enregistre dans le localStorage quand shopping change.
    localStorage.setItem("myShoppingList", JSON.stringify(shopping));
  }, [shopping]);

  return (
    <section>
      <h2 className="mb-3">Produits à acheter</h2>
      <AddPopularProducts
        shopping={shopping}
        addToShoppingList={addToShoppingList}
        removeFromShoppingList={removeFromShoppingList}
      />
      <ShoppingList
        shopping={shopping}
        removeFromShoppingList={removeFromShoppingList}
      />
      <AddProductForm
        shopping={shopping}
        addToShoppingList={addToShoppingList}
      />
    </section>
  );
};

export default ShoppingApp;
