import { Cat } from "@/types/types";
import CatCard from "../CatCard/CatCard";
import { FC } from "react";
import {  Flex } from "antd";

type Props = {
    cats: Cat[];
  };  
  const CatCardsList: FC<Props> = ({ cats }) => (
    <Flex wrap gap={48} justify="center">
      {cats.map((cat) => (
        <div key={cat.id}>
          <CatCard id={cat.id} img={cat.url} />
        </div>
      ))}
    </Flex>
  );

export default CatCardsList;
