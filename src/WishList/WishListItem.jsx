import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function WishItem({ wish, onCompletedChange }) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (wish.completed) {
      setAge(0);
      clearInterval(ageInterval);
    } else {
      ageInterval = setInterval(() => {
        setAge((currentAge) => currentAge + 1);
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [wish.completed]);

  return (
    <li
      className={`
            wish-list__item
            ${wish.completed ? "wish-list__item--done" : ""}
            ${age >= 5 && age < 10 ? "wish-list__item--warn" : ""}
            ${age >= 10 ? "wish-list__item--danger" : ""}
            `}
    >
      <input
        type="checkbox"
        checked={wish.completed}
        id={wish.id}
        onChange={(e) => {
          onCompletedChange(e.target.checked);
        }}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}
