import React, {useState} from 'react';

function Room() {

    let [isLit, setLit] = useState(true);
    let [age, setAge] = useState(28);

    function updateLit()
    {
        setLit(!isLit);
    }

  return (
    <div className={`room ${isLit? "Lit" : "Dark"}`}>
        This Room is <b>{isLit? "Lit" : "Dark"}</b>
        <br/> <br/>
        Age: <b>{age}</b>
        <br/> <br/>
        <button onClick={updateLit}>Toggle Light</button> <br /> <br/>
        <button onClick={
                        () => { setAge(++age) }
        }>Increase Age</button>

        <br></br>
        <div className="heading">Assignment 4</div>
    </div>
  );
}

export default Room;
