import React, { useEffect, useState } from "react";

interface IComments {
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}
function CommentsData(): JSX.Element {
  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async (): Promise<void> => {
    const FETCHED_DATA = await fetch("http://localhost:8080/comments/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setComments(FETCHED_JSON);
    console.log(FETCHED_JSON);
  };

  return (
    <>
      <h1>Comments API</h1>

      {comments}

      {/* {comments.map((e, index) => (
        <h3 key={index}> {e.name} </h3>
      ))} */}
    </>
  );
}

export default CommentsData;
