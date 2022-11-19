import "./App.css";
import Card from "./components/card/Card";
import data from "./helper/data";
import reactImg from "./assets/react.svg";

function App() {
  return (
    <div className="container">
      <img className="image" src={reactImg} alt="" />
      <div className="card-container">
        <div className="card-box">
          <h1>Language</h1>
          <div className="img-box">
            {data.map((item) => (
              <Card {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
