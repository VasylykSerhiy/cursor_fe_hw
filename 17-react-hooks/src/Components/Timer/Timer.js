import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Timer = ({
  time, step, autostart,
  onTick, onTimeEnd, onTimeStart, onTimePause}) => {
  const [valueTime, setStateTime] = useState(time)
  const [activeTime, setActiveTime] = useState(autostart ? true : false)

  const toggleActive = () => {
    setActiveTime(!activeTime)
    activeTime ? onTimePause() : onTimeStart()
  }
 
  useEffect(() => {
    let interval = null;

    if (activeTime && valueTime > 0) {
      interval = setInterval(() => {
        setStateTime(valueTime - (step / 1000));
       
      }, step);
    } 

    onTick(valueTime < 0 ? 0 : valueTime)

    if (valueTime <= 0) {
      setStateTime(0)
      onTimeEnd()
    }
    

    return () => clearInterval(interval);
  }, [valueTime, activeTime, onTick, onTimeEnd, step]);

  return (
    <div className="timer">
      <div className="timer__time">
        
        {moment.utc(valueTime * 1000).format('HH:mm:ss')}
      </div>
      <div className="timer__btn__wrap">
        <button onClick={toggleActive}>Start</button>
        <button onClick={toggleActive}>Pause</button>
      </div> 
    </div>
  )
}

export default Timer
