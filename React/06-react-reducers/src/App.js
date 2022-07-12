import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApp from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CrudApp />
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
