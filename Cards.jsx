import React from "react";
function Card(props){
    console.log(props);
    return (
        <>
        
    <div className="card" style={{display: "inline-block"}}> 
        <div className="card1" style={{padding:100 , backgroundColor: "#f4b454" , flexWrap: "wrap" }}>
            <img src={props.imgsrc} alt="myimg" className="card__img" style={{height:100, width:100}}/>
            <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.name}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
            <button>Watch Now</button>
            </a>
            </div>
        </div>
    </div>
    

        </>
    );

}
export default Card;
