import React from 'react';
import furniture from "./Style/furniture.css"
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

const Furniture = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://63cbf170ea855154151855dc.mockapi.io/fur`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  return (
    <>
      <div className="main">
        <div className="filter">
        </div>
        <div className="data">
          {data.map((e) => (<SingleProduct {...e} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Furniture