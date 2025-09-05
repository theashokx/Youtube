import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { hideMenuBar } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideMenuBar());
  }, [dispatch]);
  return <div>WatchPage</div>;
};

export default WatchPage;
