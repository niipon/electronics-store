import React, {useState, useEffect} from "react";
import {db} from "../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
const ProductList = ({addToCart}) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'magazin'));
                const productsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setProducts(productsData);
            } catch (error) {
                console.error("Ошибка на серверк", error);
            }
        }
        fetchProducts();
            

    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery));
    return (
        <div className="product-list">
            <h1>Список товаров</h1>
            <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handleSearchChange} className="product-input"/>
            <ul className="product-list__items">
                {products.length === 0 && <p>Загрузка...</p>}
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt="produc.img" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}тг.</p>
                        <button className="product-btn" onClick={() => addToCart(product)}>Добавить в корзину</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;