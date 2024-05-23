import React from "react";
import { Link } from "react-router-dom";
import '../index.css'


const Game = ({image,name,description,linkOfGame}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin:"20px"}}>
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <Link to={linkOfGame}><button type="button" class="btn btn-primary">Play Now</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Game;


//<Link to="http://127.0.0.1:5500/nova_fusion/Game/index.html"><button type="button" class="btn btn-danger" style={{marginLeft:"20px"}}>Go to Back</button></Link>