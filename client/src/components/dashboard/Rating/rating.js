import React from 'react';
import ReactStars from "react-rating-stars-component";

export const Rating = ({movie}) => {
    const ratingStars = {
        size: 20,
        count: 5,
        isHalf: false,
        value: localStorage.getItem(`${movie.title} - rating`),  //retrieve database first
        color: "white",
        activeColor: "orange",
        onChange: newValue => {
          console.log(`New rating star is ${newValue}`);
          localStorage.setItem(`${movie.title} - rating`, newValue);
        }
      };
    
    return(
        <div className="rating-star">
            <ReactStars {...ratingStars} />
        </div>
    )
    
}