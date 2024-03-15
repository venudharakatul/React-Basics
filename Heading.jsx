import React from 'react';
const heading = {
    color : "#fa9191",
    textTransform : "capitalize",
    textAlign : "center"
}
const fname = "Atul";

function Heading(){
    
    return (
    <>
    <h1 style = {heading}>My name is {fname}</h1> 
    <img src="https://picsum.photos/200/300" alt="randomimg"/>
    </>
    )
}
export default Heading;
