import Heading from "./Heading";
import DateAndTime from "./DateAndTime";
import * as calc from "./Calculator";
function App1() {
  return (
    <>
    <Heading/>;
    <DateAndTime/>
    <p> The Sum iS {calc.sum(4,6)}</p>
    <p> The Sub iS {calc.sub(14,6)}</p>
    <p> The Mul iS {calc.mul(4,6)}</p>
    <p> The Div iS {calc.div(24,6)}</p>

    </>
  );
}
const yout = "Atul Gupta";
const yap = "Atul";
function myName(){
let name = " Atul";
return name;
}
function myNames(){
 let names = "Atuls";
 return names;
}
export default App1;
export {yout,yap,myName,myNames};
