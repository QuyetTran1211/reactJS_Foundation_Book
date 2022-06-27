import {useState,useEffect} from 'react';

 
function Clicker(){
    const [count,setCount] = useState(Number(localStorage.getItem('counter')) || 0);
 
    const incrementCount = ()=>{
        setCount((prev)=>prev+1);
    }

    const resetCount = () => {
      localStorage.clear();
      setCount(0)
    }

  useEffect(()=>{
    localStorage.setItem('counter',count);
},[count]);

return(
    <div className="container">
        <h1 className="current-count">{count}</h1>
        <button className="increment-button"
                onClick={incrementCount}>+</button>
        <button className="reset-button"
                onClick={resetCount}>Reset Count</button>
    </div>
)
}

export default Clicker; 