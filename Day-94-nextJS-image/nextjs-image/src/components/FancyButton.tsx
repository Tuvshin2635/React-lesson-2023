import React from "react";

function FancyButton(props: any) {
  return (
    <div>
      <button className="button">{props.children} CLICK MEEEEE</button>;
      <style jsx>
        {`
          .button {
            padding: 2em;
            border-radius: 2em;
            border: node;
            background: purple;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default FancyButton;
