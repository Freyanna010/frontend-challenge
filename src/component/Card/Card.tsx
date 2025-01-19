import { FC } from "react";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import { Card as AntdCard } from "antd";

import { CardProps } from "./Card.types";
import CustomButton from "../ui/Button";
import Image from "../ui/Image";
import classes from "./Card.module.scss";

const Card: FC<CardProps> = ({ img, isLiked, onLike }) => (
  <AntdCard className={classes.catCard}>
    {/* <img src={img} /> */}
    <Image alt="Cat" className={classes.img} src={img} />
    <CustomButton
      className={classes.likeButton}
      onClick={() => onLike?.()}
      variant="icon"
    >
      <img
        className={classes.heartIcon}
        src={isLiked ? heartFilled : heartOutlined}
      />
    </CustomButton>
  </AntdCard>
);

export default Card;
