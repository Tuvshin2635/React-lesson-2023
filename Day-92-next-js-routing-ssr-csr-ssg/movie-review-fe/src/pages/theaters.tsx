import { useEffect, useState } from "react";

interface IAddress {
  street1: string;
  city: string;
  state: string;
  zip: string;
}

interface ILocation {
  address: IAddress;
  geo: IGeo;
}

interface IGeo {
  type: { type: string; enum: ["Point"]; required: true };
  coordinates: {
    type: [number, number];
    required: true;
  };
}

interface ITheater {
  theaterId: number;
  location: ILocation;
}

function TheaterId(): JSX.Element {
  // const LIST_URL:string=
  const [list, setList] = useState<ITheater[]>([]);

  useEffect(() => {
    fetchId();
  }, []);
  const fetchId = async (): Promise<void> => {
    const FETCHED_DATA = await fetch("http://localhost:8080/theaters/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setList(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <h1> Theather ID </h1>
      {list.map((e, index) => (
        <h3 key={index}>{e.theaterId}</h3>
      ))}
    </div>
  );
}
export default TheaterId;
