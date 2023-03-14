import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Productcomponent from "./Productcomponent";
import { setproducts } from "../redux/action/productAction";
import axios from "axios";
const Productlisting=()=>{
    const products=useSelector((state)=>state)
    const dispatch=useDispatch()
    const fetchapi=async()=>{
        const res=await axios.get("https://fakestoreapi.com/products")
        .catch(err=>console.log(err))
        dispatch(setproducts(res.data))
        
    }
    useEffect(()=>fetchapi(),[])
    console.log("products :",products)
    return(
        <div style={{paddingTop:"4.75rem"}} className="ui grid container">
        <Productcomponent />
        </div>
    )
}
export default Productlisting;