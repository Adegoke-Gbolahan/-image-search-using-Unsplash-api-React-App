import './imagelist.css'
import React from "react";
import ImageCard from './ImageCard';
const ImageList = (props) =>{
    const image = props.images.map((img)=>{
        return <ImageCard key={img.id} img={img} />
    })
 return <div className="image-list">{image}</div>
}

export default ImageList