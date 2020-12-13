
import React, {useState} from 'react';
import './App.css';
import StateClass from './StateClass';


const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div>

      <hr />
      <button className="visibility-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>
      {show && <StateClass />}
    </div>
  )
}

export default App

