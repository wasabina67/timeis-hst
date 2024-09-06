import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' }));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'UTC' }));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
