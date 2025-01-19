import { FC } from "react";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import { Card as AntdCard } from "antd";

import { CardProps } from "./Card.types";
import Button from "../ui/Button";
import Image from "../ui/Image";
import classes from "./Card.module.scss";

const Card: FC<CardProps> = ({ img, isLiked, onLike }) => (
  <AntdCard className={classes.catCard}>
    <Image alt="Cat" className={classes.img} src={img} />
    <Button
      className={classes.likeButton}
      onClick={() => onLike?.()}
      variant="icon"
    >
      <img
        className={classes.heartIcon}
        src={isLiked ? heartFilled : heartOutlined}
      />
    </Button>
  </AntdCard>
);

export default Card;
