import { useEffect } from "react";
import "./App.css";
import { AppDispatch, RootState } from "./store/store";
import { fetchCatsData } from "./features/catsThunks";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { cats } = useSelector((state: RootState) => state.catsSlice);

  useEffect(() => {
    dispatch(fetchCatsData(50));
  }, [dispatch]);

  useEffect(() => {
    console.log(cats);
  }, [cats]);

  return <p>котики</p>;
}

export default App;
