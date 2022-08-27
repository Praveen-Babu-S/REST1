import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const fetch2 = async () => {
    let c = 0;
    //as team1
    await fetch(
      `https://jsonmock.hackerrank.com/api/football_matches?year=2011&team1=Barcelona`
    )
      .then((response) => (response = response.json()))
      .then((response) => {
        console.log(response);
        const matches = response.data;
        for (let i = 0; i < matches.length; i++) {
          c += parseInt(matches[i].team1goals);
        }
      })
      .catch((err) => console.log(err));
    //as team2
    await fetch(
      "https://jsonmock.hackerrank.com/api/football_matches?year=2011&team2=Barcelona"
    )
      .then((res) => res.json())
      .then((res) => {
        const matches = res.data;
        // console.log(matches);
        for (let i = 0; i < matches.length; i++) {
          c += parseInt(matches[i].team2goals);
        }
      })
      .catch((err) => console.log(err));
    setCount(c);
    console.log(c);
  };
  return (
    <div className="App">
      <button onClick={fetch2}>Fetch</button>
      <h3>{count}</h3>
    </div>
  );
};

export default App;
