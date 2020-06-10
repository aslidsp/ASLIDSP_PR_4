import React, {useState} from 'react';

function Room() {

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(28);
    let [temp, setTemp] = useState(72);

    function updateLit()
    {
        setLit(!isLit);
    }

  return (
    <div className={`room ${isLit? "Lit" : "Dark"}`}>
        <br/>
        This Room is <b>{isLit? "Lit" : "Dark"}</b>
        <br/> <br/>
        Age: <b>{age}</b>
        <br/> <br/>
        <button onClick={updateLit}>Toggle Light</button> <br /> <br/>
        <button onClick={
                        () => { setAge(++age) }
        }>Increase Age</button>
        <br/> <br/> <hr/>
        <div className="heading">Assignment 4</div>
        <br/>
        <button onClick={() => setLit(true)}>ON</button>
        <button onClick={() => setLit(false)}>OFF</button>
        <br/> <br/>
        Temperate : {temp} &nbsp; 
        <button onClick={() => setTemp(++temp)}>+</button>
        <button onClick={() => setTemp(--temp)}>-</button>
    </div>
  );
}

export default Room;
