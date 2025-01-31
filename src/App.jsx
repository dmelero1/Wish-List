import { useState } from "react";
import "./App.css";
import WishInput from "./WishInput/WishInput";
import WishList from "./WishList/WishList";
import GeneralButton from "./Components/GeneralButton";

const initialWishes = [
  {
    id: 0,
    text: "Travel to the moon",
    completed: true,
  },
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Get a job",
    completed: false,
  },
  {
    id: 3,
    text: "Get a mansion",
    completed: false,
  },
];

function App() {
  const [wishes, setWishes] = useState(initialWishes);

  const onNewWishHandler = (newWish) => {
    //add a new wish to the wishes list
    setWishes((currentWishes) => [...currentWishes, newWish]);
  };

  return (
    <div className="app">
      <h1>My WishList</h1>
      <WishInput onNewWish={onNewWishHandler} />
      <WishList wishes={wishes} setWishes={setWishes} />
      <GeneralButton
        actionFunction={() =>
          setWishes(wishes.filter((wish) => !wish.completed))
        }
        displayText={"Archive Wishes"}
      />
    </div>
  );
}

export default App;
