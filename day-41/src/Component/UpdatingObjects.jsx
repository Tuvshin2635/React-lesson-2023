import { useState } from "react";

export default function UpdatingObjects() {
  // const user= { age: 18, name: 'Dorjoo'};
  // user.age = 20;
  // console.log(user);

  const [user, setUser] = useState({ age: 18, name: "Dorjoo" });

  const check = () => {
    // user.age += 20;
    setUser({ age: user.age + 20, name: "Dorjoo" });
  };

  return (
    <div>
      <p>Updating Objects </p>
      <button onClick={check}>User age is {user.age}</button>
    </div>
  );
}
