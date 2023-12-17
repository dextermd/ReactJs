import './App.css'
import ExerciseComponent from "./components/ExerciseComponent/ExerciseComponent.js";
import Product from "./components/Product/Product.jsx";

function App() {
    const products = [
        {
            name: "Product 1",
            price: 10,
            desc: "First product"
        },
        {
            name: "Product 2",
            price: 20,
            desc: "Second product"
        }
    ];

  return (
    <>
        <ExerciseComponent/>
        {products.map((product, idx) => (
            <Product key={idx} {...product} />
        ))}
    </>
  )
}

export default App
