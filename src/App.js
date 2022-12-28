import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { getSongsFetch } from "./store/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch({ dispatch }));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
