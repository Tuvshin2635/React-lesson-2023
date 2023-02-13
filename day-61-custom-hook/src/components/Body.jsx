import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useFetch } from "../context/UseFetch";

export default function Body() {
  const URL =
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F257540%2Fpexels-photo-257540.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-257540.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdogs%2F&tbnid=9zxRtNETVssgUM&vet=12ahUKEwjqhImV1JH9AhWDuVYBHfglDMgQMygCegUIARDjAQ..i&docid=KsJYrmMqZTl1fM&w=5760&h=3840&q=dog%20pictures&ved=2ahUKEwjqhImV1JH9AhWDuVYBHfglDMgQMygCegUIARDjAQ";

  const { theme, setTheme } = useTheme();
  const { response, error } = useFetch(URL, {});
  console.log(response);

  const [styleClass, setStyleClass] = useState();
  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
  }, [theme]);
  return (
    <div className={styleClass}>
      <p>BODY</p>
    </div>
  );
}
