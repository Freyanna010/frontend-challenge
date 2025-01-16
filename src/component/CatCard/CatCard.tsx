import { Card } from 'antd';
import classes from './CatCard.module.scss'
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type Props = {
   id: string,
   img: string
}

const CatCard: FC<Props> = ({ id, img }) => {
   const isCatsLoading = useSelector((state: RootState) => state.catsSlice.isCatsLoading);
 
   return (
     <Card hoverable loading={isCatsLoading} className={classes.catCard}>
       <img alt="🐱" src={img} />
     </Card>
   );
 };
 
export default CatCard;