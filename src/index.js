// importing the dependencies 
import React from "react"
import ReactDOM from "react-dom"
import { useState } from "react"


const Carousel = () => {
    const imgArr = [
      "https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
      "https://th.bing.com/th/id/R.eb1d0dc9ac97a6a7903f9a8f15f15e39?rik=tcWE%2bqmLWCow2g&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2f3-cute-kittens.jpg&ehk=%2fYqrQL8Ji1RbDN2cMDTLWKkpI64SjbT%2bwwS8htZLfow%3d&risl=&pid=ImgRaw&r=0",
      "https://i.pinimg.com/originals/32/fb/f6/32fbf6e405128d76824a91d6aa7f0eb9.jpg"
    ];
  
    const [currIdx, setIdx] = useState(0);
  
    const leftClick = () => {
      setIdx((prvIdx) => (prvIdx === 0 ? imgArr.length - 1 : prvIdx - 1));
    };
  
    const rightClick = () => {
      setIdx((prvIdx) => (prvIdx === imgArr.length - 1 ? 0 : prvIdx + 1));
    };

    return (
        <div>
        <div className="center">
        <h1>Project 1: Carousel</h1>    
        <img className="image-size" src={imgArr[currIdx]} alt="ok"></img>
        {/* need to create two buttons here */}
    
        <button className="leftbtn" type="box" onClick={leftClick}>Left </button>
        <button className="rightbtn" type="box" onClick={rightClick}>Right </button>
        </div>
    
    </div>
    );
  };



ReactDOM.render(<Carousel />, document.getElementById("root"));
