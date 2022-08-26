import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
let totalTime;
let interval;
function App() {
  const [hour,setHour] = useState('');
  const [minute,setMinute] = useState('');
  const [second,setSecond] = useState('');
  const changeHour = (evt) => {
    setHour(evt.target.value.replace(/\D/g,''));
  }
  const changeMinute = (evt) => {
    setMinute(evt.target.value.replace(/\D/g,''));
  }
  const changeSecond = (evt) => {
    setSecond(evt.target.value.replace(/\D/g,''));
  }
  const tick = () => {
    setElapsed(x => {
      if(x===totalTime){
        clearInterval(interval);
        return x;
      } else{
        return x + 1;
      }
    })
  }
  const start = () => {
    if(running) return;
    setRunning(true);
    let h = hour.length > 0 ? parseInt(hour,10) : 0;
    let m = minute.length > 0 ? parseInt(minute,10) : 0;
    let s = second.length > 0 ? parseInt(second,10) : 0;
    totalTime = h*3600 + m * 60 + s;
    setElapsed(0);
    interval = setInterval(tick,1000);
  }
  const reset = () => {
    clearInterval(interval);
    setRunning(false);
  }
  const getTimeString = () => {
    let timeLeft = totalTime - elapsed;
    let h = (timeLeft/ 3600 | 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    let m = (timeLeft/ 60 % 60 | 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  
    let s = (timeLeft % 60 | 0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});  
    return `${h} : ${m} : ${s}`
  }
  const [elapsed,setElapsed] = useState(0);
  const [running,setRunning] = useState(false);
  return(
    <div className='Outerdiv'>
      <h1>Timer App</h1>
      {running ? 
        <h1 className='timer'>{getTimeString()}</h1>
        :
        <div className='container'>
          <input type='text' className='input' placeholder='h' value={hour} onChange={changeHour}/>
          |
          <input type='text' className='input' placeholder='m' value={minute} onChange={changeMinute}/>
          |
          <input type='text' className='input' placeholder='s' value={second} onChange={changeSecond}/>

        </div>
      }  
      <div className='container'>
        <button className='gradient__btn start' onClick={start}>Start</button>
        <button className='gradient__btn reset' onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default App;