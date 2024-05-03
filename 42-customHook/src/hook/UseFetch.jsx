import React, { useEffect, useState } from "react";
import axios from "axios";
const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    axios(url).then((res) => {
      setData(res.data);
    });
  }, []);
  return [data];
};

export default UseFetch;
