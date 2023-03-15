import { useState } from "react";


const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSend] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsSending(true)
        await setMessage(text)
        setIsSending(false)
        setIsSend(true)
        }
        if (isSent) {
        return <h1> Thanks </h1>
        }
        
        function sendMessage(text) {
          return new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });
        }

export default Formfunction () {

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1> Fill the form</h1>
          <input
            type="text"
            placeholder="fill the..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <textarea>
          <button > {isSending && Sending} </button>
          </textarea>
        </form>
    );
}




