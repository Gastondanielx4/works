import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <header>
        <h1>Axios-fetching-api</h1>
      </header>
      <div className="grid-1-3 ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
