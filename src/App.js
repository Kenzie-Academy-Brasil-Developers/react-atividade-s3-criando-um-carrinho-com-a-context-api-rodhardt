import "./App.css";

import ProductList from "./components/product-list";

function App() {
  return (
    <div className="App">
      <h2>Catálogo</h2>
      <ProductList type="catalogue" />
      <h2>Carrinho</h2>
      <ProductList type="cart" />
    </div>
  );
}

export default App;
