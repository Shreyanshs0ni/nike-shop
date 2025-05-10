import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";

const List = () => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchList();
  }, []);
  return <div></div>;
};

export default List;
