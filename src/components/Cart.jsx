import React from "react";
import '../Cart.css';
const Cart = ({cart, toggleCart, removeFromCart}) => {
    const totalPrice = cart.reduce((total, product) => total +(+product.price), 0);
    return(
        <div className="cart-overlay">
            <div className="cart-container">
                <button className="zakr" onClick={toggleCart}>Закрыть</button>
                <h2>Ваша корзина</h2>
                {cart.lenght === 0 ? (
                    <p>Корзина пуста</p>
                ) : (    
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>Цена: {product.price}тг.</p>
                                <button className="remove" onClick={() => removeFromCart(product.id)}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Общая стоимость: {totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart;