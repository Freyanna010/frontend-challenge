import { Button, Card } from "antd";
import classes from "./CatCard.module.scss";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import heartFilled from "@assets/heartFilled.png";
import heartOutlined from "@assets/heartOutlined.png";
import CustomButton from "../ui/CustomButton";

type Props = {
  id: string;
  img: string;
};

const CatCard: FC<Props> = ({ id, img }) => {
  const isCatsLoading = useSelector(
    (state: RootState) => state.catsSlice.isCatsLoading
  );

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (id: string) => {
    setIsLiked(!isLiked);
    console.log(`Liked ${id}`);
  };

  return (
    <div className={classes.catCard}>
      <img alt="🐱" src={img} />

      <CustomButton
        variant={"icon"}
        className={classes.likeButton}
        onClick={() => handleLike(id)}
      >
        <img
          className={classes.heartIcon}
          src={isLiked ? heartFilled : heartOutlined}
        />
      </CustomButton>
    </div>
  );
};

export default CatCard;
