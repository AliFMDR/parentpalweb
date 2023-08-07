import { useEffect, useState } from "react";

const LogAktivitas = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  return <div className="text-4xl font-bold">{formatTime(time)}</div>;
};

export default LogAktivitas;
