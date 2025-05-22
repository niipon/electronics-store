import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/ProductList";
import Contacts from "../components/Contacts";
import Cart from "../components/Cart";

const AppRouter = () => {
    const [cart, setCart] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const addToCart = (product) => {
        setCart((prevCart)=> [...prevCart, product]);
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
    }
    return (
        <Router>
            <nav className="navbar">
                <Link to='/'>Главная</Link>
                <Link to='/tovars'>Товары</Link>
                <Link to='/contacts'>Контакты</Link>
                <button className="korzina" onClick={toggleCart}>Корзина ({cart.length})</button>
            </nav>
            {isCartOpen && <Cart toggleCart={toggleCart} cart={cart} removeFromCart={removeFromCart}/>}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/tovars" element={<ProductList addToCart={addToCart}/>}/>
                <Route path="/contacts" element={<Contacts/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;