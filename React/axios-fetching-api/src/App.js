import "./App.css";
import Cards from "./components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [arrayApi, setArrayApi] = useState([]);
  useEffect(() => {
    if (arrayApi.length === 0) {
      axios({
        method: "get",
        url: "https://reqres.in/api/users?per_page=12",
      })
        .then((res) => {
          setArrayApi(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <>
      <header>
        <h1>Axios-Fetching-API</h1>
      </header>
      <div className="grid-1-3 ">
        {/* <Cards name={} img={} buttontext={}/> */}
        {arrayApi.map((el) => (
          <Cards
            key={el.id}
            name={`${el.first_name} ${el.last_name}`}
            email={el.email}
            urlImg={el.avatar}
          />
        ))}
      </div>
    </>
  );
}

export default App;
