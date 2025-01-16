import { useEffect } from "react";
import "./App.css";
import { AppDispatch, RootState } from "./store/store";
import { fetchCatsData } from "./features/catsThunks";
import { useDispatch, useSelector } from "react-redux";
import CatCardsList from "./component/CatCardsList/CatCardsList";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { cats } = useSelector((state: RootState) => state.catsSlice);

  useEffect(() => {
    console.log('Dispatch fetchCatsData');
    dispatch(fetchCatsData(50));
  }, [dispatch]);

  // TODO:убрат
  useEffect(() => {
    console.log(cats);
  }, [cats]);

  return (
    <CatCardsList cats={cats}/>
  );
}

export default App;
