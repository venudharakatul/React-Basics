import React from "react";
import ReactDOM from "react-dom";
import * as ques from "./App";
import Card from "./Cards";
import Sdata from "./Sdata";
import App2 from "./App2";
import App4 from "./App4";

// function ncard(val){
//     return (<Card
// imgsrc={val.imgsrc}
// title={val.title}
// sname={val.title}
// link={val.link}
// />);
// }
ReactDOM.render(
  <>
    {/* <Card

imgsrc="https://wallpapercave.com/w/wp4995606.jpg"
title="A Netflix original Series"
sname="Dark"
link="https://www.netflix.com/in/title/80100172?source=35"
/>
<Card

imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
sname={Sdata[0].title}
link={Sdata[0].link}
/> */}
    {ques.default()}
    {ques.myName()}
    {ques.myNames()}
    {ques.yap}
    {ques.yout}
    <br></br>
    {/* {Sdata.map(function ncard(val){
    return (<Card
imgsrc={val.imgsrc}
title={val.title}
sname={val.title}
link={val.link}/>);
})}; */}
    <App2 />
  
    <br></br>
    {Sdata.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.title}
          link={val.link}
        />
      );
    })}
    ;
  </>,

  document.getElementById("root")
);
