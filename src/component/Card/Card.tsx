import { Card as CardAntd } from "antd";
import classes from "./Card.module.scss";
import { FC } from "react";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import CustomButton from "../ui/CustomButton";

type Props = {
  img: string;
  isLiked: boolean;
  onLike?(): void;
};

const Card: FC<Props> = ({ img, isLiked, onLike}) => (
  <CardAntd className={classes.catCard}>
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
  </CardAntd>);







export default Card;
