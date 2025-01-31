import React from "react";
import PropTypes from "prop-types";
import WishListItem from "./WishListItem";

export default function WishList({ wishes, setWishes }) {
  const onCompletedChange = (checked, i) => {
    const tempWishes = [...wishes];
    tempWishes[i].completed = checked;
    setWishes(tempWishes);
  };
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <WishListItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            onCompletedChange(checked, i);
          }}
        />
      ))}
    </ul>
  );
}
