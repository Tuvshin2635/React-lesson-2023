import { useEffect } from "react";

export default function RepeatMessage({ message }) {
  useEffect(() => {
    setInterval(() => {
      console.log(message);
    }, 2000);
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}
// return RepeatMessage;
