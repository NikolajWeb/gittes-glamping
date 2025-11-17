import { useState } from "react";
import Button from "../button/Button";
import styles from "./activity.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useLocalStorage } from "@uidotdev/usehooks";

const Activity = ({ activity }) => {
  console.log(activity);

  const [liked, setLiked] = useLocalStorage("myList", []);

  const isLiked = liked.includes(activity._id);

  const handleLike = () => {
    setLiked((prevLike) =>
      isLiked
        ? prevLike.filter((li) => li !== activity._id)
        : [...prevLike, activity._id]
    );
  };

  return (
    <figure className={styles.activity}>
      <figcaption>
        <p className={styles.title}>{activity.title}</p>
        <p className={styles.titleTwo}>
          {activity.date}

          {isLiked ? (
            <FcLike onClick={handleLike} />
          ) : (
            <FcLikePlaceholder onClick={handleLike} />
          )}
        </p>
        <p className={styles.titleTwo}> {activity.time}</p>
      </figcaption>
      <img src={activity.image} alt={activity.title} />
      <div>
        <Button buttonText='Læs mere' />
      </div>
    </figure>
  );
};

export default Activity;
