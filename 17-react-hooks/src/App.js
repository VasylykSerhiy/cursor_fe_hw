import React from 'react';

import Timer from './Components/Timer'

function App() {
  return (
    <div className="App">
      <Timer 
        time = {20}
        step = {1000}
        autostart = {false}
        onTick = {(time) => console.log("Осталось времени: " + time)}
        onTimeEnd = {() => console.log("Время вышло!")}
        onTimeStart={() => console.log("Таймер запущен!")}
        onTimePause={() => console.log("Таймер на паузе!")}
      />
    </div>
  );
}

export default App;
