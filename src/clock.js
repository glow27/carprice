import React, { useEffect, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('ru-RU'))

  useEffect(() => {
    const interval = setInterval(()=>{
      setTime(new Date().toLocaleTimeString('ru-RU'))
    }, 1000);
    return () => clearInterval(interval);
  }, [time])

return <div className='time'>{time}</div>
}
