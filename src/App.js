import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { getSongsFetch } from "./store/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch({ dispatch }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
