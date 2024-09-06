import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'Pacific/Honolulu' }));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Pacific/Honolulu' }));
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
