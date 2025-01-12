import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/buttons";
import CardProduct2 from "../components/fragments/CardProduct2";
import CircleCardProduct from "../components/fragments/CardProduct2";

const products = [
    {
        id: 1,
        name: "Sepatu Baru",
        price: 1000000,
        image: "images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi tenetur, atque accusantium quos quis, voluptates veritatis aut a enim incidunt ipsam praesentium, obcaecati at eaque corrupti iure aliquid sapiente.`
    },
    {
        id: 2,
        name: "Sepatu Lama",
        price: 1200000,
        image: "images/shoes.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
        id: 3,
        name: "Sepatu Kuda",
        price: 11200000,
        image: "images/shoes.jpg",
        description: `Ini adalah sepatu kuda.`
    },
];

const email = localStorage.getItem('email');

const ProductPage = () => {
const [cart, setCart] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);
useEffect (() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
}, []);

useEffect(() => {
    if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id);
            return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}, [cart]);
    
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('cart');
        window.location.href="/login";
    };

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item)
            );
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    };

    //useReff
    const cartRef = useRef();

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>  
    <div className="flex justify-center py-5"> 
        <div className="w-4/6 flex flex-wrap">
        {products.map((products) => (
          <CardProduct key={products.id}>
           <CardProduct.Header image={products.image}/>
            <CardProduct.Body name={products.name}>
            {products.description}
            </CardProduct.Body>
            <CardProduct.Footer price={products.price} id={products.id} handleAddToCart={handleAddToCart}/>
        </CardProduct>
        ))}</div>
        <div>
        {products.map((products) => (
          <CircleCardProduct key={products.id}>
           <CircleCardProduct.Header image={products.image}/>
            <CircleCardProduct.Body name={products.name}>
            {products.description}
            </CircleCardProduct.Body>
            <CircleCardProduct.Footer price={products.price} id={products.id} handleAddToCart={handleAddToCart}/>
        </CircleCardProduct> 
        ))}
        </div>
        <div className="w-2/6">
        <h1 className="text-2xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
        <table className="text-left table-auto border-separate border-spacing-x-3">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => {
                    const product = products.find((product) => product.id === item.id);
                    return (
                        <tr key={item.id}>
                            <td>{product.name}</td>
                            <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                            <td>{item.qty}</td>
                            <td>{(product.price * item.qty).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                        </tr>
                    );
                })}
                <tr>
                    <td colSpan={3}>
                        <b>Total Price</b>
                    </td>
                    <td>
                    {totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
        </Fragment>
    );
};

export default ProductPage;