import React, {useState} from 'react';
import './App.css';

function Room() {

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(28);

    function updateLit()
    {
        setLit(!isLit);
    }

  return (
    <div>
        This Room is <b>{isLit? "Lit" : "Dark"}</b>
        <br/> <br/>
        Age: <b>{age}</b>
        <br/> <br/>
        <button onClick={updateLit}>Toggle Light</button> <br /> <br/>
        <button onClick={
                        () => { setAge(++age) }
        }>Increase Age</button>
    </div>
  );
}

export default Room;
