import { Card as AntdCard } from "antd";
import classes from "./Card.module.scss";
import { FC } from "react";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import CustomButton from "../ui/Button";

type Props = {
  img: string;
  isLiked: boolean;
  onLike?(): void;
};

const Card: FC<Props> = ({ img, isLiked, onLike}) => (
  <AntdCard className={classes.catCard}>
    <img  src={img} />
    <CustomButton
      variant="icon"
      className={classes.likeButton}
      onClick={() =>onLike?.()}
    >
      <img
        className={classes.heartIcon}
        src={isLiked ? heartFilled : heartOutlined}
      />
    </CustomButton>
  </AntdCard>);







export default Card;
