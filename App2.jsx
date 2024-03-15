import React, { useState } from "react";
const App2 = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  let newtime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newtime);

  const UpdateTime = () => {
    let newCtime = new Date().toLocaleTimeString();
    setCtime(newCtime);
  };

  setInterval(UpdateTime,1000);

  const purple = 'yellow';
const [bg, setBg]=useState(purple);
const [name, setName] = useState('Click Me')
  const bgChange = ()=>{
    let newBg='#334456';
    setBg(newBg);
    let newName='Boom';
    setName(newName);
  };
  const bgChange2 =()=>{
  setBg('#676ff3');
  setName('aaaah');
  };
  return (
    <>
    
      <h1>{count}</h1>
      <button onClick={IncNum}>Click Me</button>

      <h1>{ctime}</h1>
      <button onClick={bgChange}>Click me</button>
      
      <div style={{backgroundColor:bg}} >
        <button onClick={bgChange} onDoubleClick={bgChange2}>{name}</button>
      </div>
    </>
  );
};
export default App2;
