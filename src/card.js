import React from "react";

function Card(props) {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={props.imgUrl} alt="img" />
        <p>Posted: {props.time}</p>
        <h3 className="title">{props.name}</h3>
        <p>Comment: {props.comment}</p>
        <input placeholder={props.input} />
      </div>
    </div>
  );
}

export default Card;
