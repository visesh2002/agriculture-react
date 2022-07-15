import React from "react";

export default function ImageHelper({product}){
    const imageurl =product? product.image:`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    return (<div className="rounded border border-success p-2">
        <img src={imageurl}
        style={{maxheight:"100%",maxWidth:"100%"}}
        className="mb-3 rounded"alt=""/>
        <h1>{product.name}</h1>
        </div>
    );
}