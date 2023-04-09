import React from "react";

function Button(props: any) {
  return (
    <div>
      <button className="button">{props.children} CLICK MEEEEE</button>;
      <style jsx>
        {`
          .button {
            padding: 1em;
            border-radius: 1em;
            border: node;
            background: green;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default Button;
