import React from "react";

function Card(props) {
  const descStyle = [
    {
      backgroundColor: "hsl(235, 46%, 20%)",
    },
    {
      backgroundColor: "hsl(235, 45%, 49%)",
    },
  ];
  const iconStyle = [
    {
      backgroundColor: "hsl(15, 100%, 70%)",
    },
    {
      backgroundColor: "hsl(195, 74%, 62%)",
    },
    {
      backgroundColor: "hsl(348, 100%, 68%)",
    },
    {
      backgroundColor: "hsl(145, 58%, 55%)",
    },
    {
      backgroundColor: "hsl(264, 64%, 52%)",
    },
    {
      backgroundColor: "hsl(43, 84%, 65%)",
    },
  ];
  const icons = [
    "./images/icon-work.svg",
    "./images/icon-play.svg",
    "./images/icon-study.svg",
    "./images/icon-exercise.svg",
    "./images/icon-social.svg",
    "./images/icon-self-care.svg",
  ];

  const { title, children, timeframes } = props;

  const [color, setColor] = React.useState(0);

  return (
    <section className="card">
      <div style={iconStyle[children]} className="icon-container">
        <img className="card-icon" src={icons[children]} alt="" />
      </div>
      <div
        onMouseOver={() => setColor(1)}
        onMouseLeave={() => setColor(0)}
        style={descStyle[color]}
        className="desc-container"
      >
        <div className="title-container">
          <h4 className="card-title">{title}</h4>
          <img
            className="card-ellipsis"
            src="./images/icon-ellipsis.svg"
            alt=""
          />
        </div>
        <h1 className="card-time">{timeframes.current}hrs</h1>
        <p className="card-explanation">Last Week - {timeframes.previous}hrs</p>
      </div>
    </section>
  );
}

export default Card;
