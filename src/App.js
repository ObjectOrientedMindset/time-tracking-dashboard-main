import React from "react";
import Card from "./Card";
import data from "./data.json";

function App() {
  const [time, setTime] = React.useState("daily");
  const [dailyColor, setDailyColor] = React.useState(1);
  const [weeklyColor, setWeeklyColor] = React.useState(0);
  const [monthlyColor, setMonthlyColor] = React.useState(0);

  const color = [
    {
      color: "hsl(236, 100%, 87%)",
    },
    {
      color: "white",
    },
  ];

  return (
    <div className="mobile-view">
      <section className="cardboard-container">
        <section className="jeremy-card">
          <Jeremy />
          <footer className="sub">
            <p
              style={color[dailyColor]}
              onClick={() => {
                setTime("daily");
                setDailyColor(1);
                setMonthlyColor(0);
                setWeeklyColor(0);
              }}
            >
              Daily
            </p>
            <p
              style={color[weeklyColor]}
              onClick={() => {
                setTime("weekly");
                setDailyColor(0);
                setMonthlyColor(0);
                setWeeklyColor(1);
              }}
            >
              Weekly
            </p>
            <p
              style={color[monthlyColor]}
              onClick={() => {
                setTime("monthly");
                setDailyColor(0);
                setMonthlyColor(1);
                setWeeklyColor(0);
              }}
            >
              Monthly
            </p>
          </footer>
        </section>
        <section className="card-container">
          {data.map((card) => {
            if (time === "daily") {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  timeframes={card.timeframes.daily}
                >
                  {card.id}
                </Card>
              );
            } else if (time === "weekly") {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  timeframes={card.timeframes.weekly}
                >
                  {card.id}
                </Card>
              );
            } else if (time === "monthly") {
              return (
                <Card
                  key={card.id}
                  title={card.title}
                  timeframes={card.timeframes.monthly}
                >
                  {card.id}
                </Card>
              );
            }
          })}
        </section>
      </section>
    </div>
  );
}

function Jeremy() {
  return (
    <div className="main-section">
      <img
        className="jeremy-img"
        src="./images/image-jeremy.png"
        alt="jeremy"
      />
      <p className="report-for">Report for</p>
      <h1 className="jeremy firstname">Jeremy</h1>
      <h1 className="jeremy lastname">Robson</h1>
    </div>
  );
}

export default App;
