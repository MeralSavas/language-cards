import { useState } from "react";
import "./Card.css";

const Card = ({ name, img, options }) => {
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div onClick={handleClick} className="card">
      {visible ? (
        <div>
          <img className="picture" src={img} alt="" />
          <h5>{name}</h5>
        </div>
      ) : (
        <div>
          {options.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
