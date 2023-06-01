import React from 'react';
import furniture from "./Style/furniture.css"
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import Loading from "../Component/Loading";
import {
  Box,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';




const Furniture = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://63cbf170ea855154151855dc.mockapi.io/fur`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])
  return loading ? (<Loading />) : (
    <>
      <div className="main">
        <div className="filter">
          <form >
            <hr />
            <h2>Sort By</h2>
            <input type="radio" value="Relevance" name="fav_language" id='Relevance' />
            <label for="Relevance" >Relevance</label>
            <br />
            <input type="radio" value="Highest Priced First" name="fav_language" id='Highest Priced First' />
            <label for="Highest Priced First" >Highest Priced First</label>
            <br />
            <input type="radio" value="Lowest Priced First" name="fav_language" id='Lowest Priced First' />
            <label for="Lowest Priced First" >Lowest Priced First</label>
            <br />
            <input type="radio" value="Fastest Shipping" name="fav_language" id='Fastest Shipping' />
            <label for="Fastest Shipping" >Fastest Shipping</label>
            <br />
            <input type="radio" value="Newest" name="fav_language" id='Newest' />
            <label for="Newest" >Newest</label>

            <hr />
            <h2>Top Material</h2>
            <input type="Checkbox" value="Solid Wood" name="fav_language" id='Solid Wood' />
            <label for="Solid Wood" >Solid Wood</label>
            <br />
            <input type="Checkbox" value="Engineered Wood" name="fav_language" id='Engineered Wood' />
            <label for="Engineered Wood" >Engineered Wood</label>
            <br />
            <input type="Checkbox" value="Metal" name="fav_language" id='Metal' />
            <label for="Metal" >Metal</label>


            <hr />
            <h2>Material</h2>
            <input type="Checkbox" value="Solid Wood" name="fav_language" id='Solid Wood' />
            <label for="Solid Wood" >Solid Wood</label>
            <br />
            <input type="Checkbox" value="Engineered Wood" name="fav_language" id='Engineered Wood' />
            <label for="Engineered Wood" >Engineered Wood</label>
            <br />
            <input type="Checkbox" value="Glass" name="fav_language" id='Glass' />
            <label for="Glass" >Glass</label>
            <br />
            <input type="Checkbox" value="Marble" name="fav_language" id='Marble' />
            <label for="Marble" >Marble</label>
            <br />
            <input type="Checkbox" value="Rubber Wood" name="fav_language" id='Rubber Wood' />
            <label for="Rubber Wood" >Rubber Wood</label>
            <br />
            <input type="Checkbox" value="Ceramic" name="fav_language" id='Ceramic' />
            <label for="Ceramic" >Ceramic</label>
            <br />
            <input type="Checkbox" value="MDF with Veener" name="fav_language" id='MDF with Veener' />
            <label for="MDF with Veener" >MDF with Veener</label>
            <br />
            <input type="Checkbox" value="Metal" name="fav_language" id='Metal' />
            <label for="Metal" >Metal</label>


            <hr />
            <h2>Price</h2>
            <input type="Checkbox" value="Under ₹ 20,000" name="fav_language" id='Under ₹ 20,000' />
            <label for="Under ₹ 20,000" >Under ₹ 20,000</label>
            <br />
            <input type="Checkbox" value="₹ 20,000 To ₹ 30,000" name="fav_language" id='₹ 20,000 To ₹ 30,000' />
            <label for="₹ 20,000 To ₹ 30,000" >₹ 20,000 To ₹ 30,000</label>
            <br />
            <input type="Checkbox" value="₹ 30,000 To ₹ 40,000" name="fav_language" id='₹ 30,000 To ₹ 40,000' />
            <label for="₹ 30,000 To ₹ 40,000" >₹ 30,000 To ₹ 40,000</label>
            <br />
            <input type="Checkbox" value="₹ 40,000 To ₹ 50,000" name="fav_language" id='₹ 40,000 To ₹ 50,000' />
            <label for="₹ 40,000 To ₹ 50,000" >₹ 40,000 To ₹ 50,000</label>
            <br />
            <input type="Checkbox" value="Over ₹ 50,000" name="fav_language" id='Over ₹ 50,000' />
            <label for="Over ₹ 50,000" >Over ₹ 50,000</label>


            <hr />
            <h2>Dimension</h2>
            <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 60]}>
              <RangeSliderTrack bg='grey'>
                <RangeSliderFilledTrack bg='#ff7035' />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color='#ff7035'  />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color='#ff7035'  />
              </RangeSliderThumb>
            </RangeSlider>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>₹ 0/-</Text>
              <Text>₹ 50,000/- & Above</Text>
            </Box>
          </form>
        </div>
        <div className="data">
          {data.map((e) => (<SingleProduct {...e} />
          ))}
        </div>
      </div >
    </>
  )
}

export default Furniture;