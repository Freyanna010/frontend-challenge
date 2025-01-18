import { Cat } from "@/types/types";
import CatCard from "../Card/Card";
import { FC } from "react";
import { Flex } from "antd";

type Props = {
  cats: Cat[];
};
const CatCardsList: FC<Props> = ({ cats }) => (
  <Flex wrap gap={48} justify="space-between" style={{ width: "1317px" }}>
    {cats.map((cat) => (
      <CatCard id={cat.id} img={cat.url} key={cat.id} />
    ))}
  </Flex>
);

export default CatCardsList;
