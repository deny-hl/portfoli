import { useEffect, useState } from 'react';

function format(): string {
  try {
    return new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Warsaw',
      hour12: false,
    });
  } catch {
    return '--:--';
  }
}

export function useWarsawTime(intervalMs = 30_000) {
  const [time, setTime] = useState<string>(() => format());
  useEffect(() => {
    const t = setInterval(() => setTime(format()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return time;
}
