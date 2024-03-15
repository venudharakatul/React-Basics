const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
let curDate = new Date("05/17/2012 20:52:21");
curDate = curDate.getHours();

const greet = {
color : "yellow"
}
let wistyl = "";
//const cssStyle = {};
let greeting =''; 
if(curDate>=1 && curDate<12){
    greeting= "Good Morning";
    wistyl = {color : "pink"}
    //cssStyle.color = "pink";
}
else if(curDate >=12 && curDate <19){
    greeting = "Good AfterNoon";
    wistyl = {color : "green"}
}
else {
    greeting ="Good Night";
    wistyl = {color : "blue"}
}

function DateAndTime(){
    return (
        <>
        <p> Current Date is : {currDate}</p>
    <p>Current Time is : {currTime}</p>
    <p><span style ={greet}> Hello Atul </span> <span style={wistyl}>{greeting}</span></p>
    </>
    );
}
export default DateAndTime;
