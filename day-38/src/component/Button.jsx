export default function Button () {
    function handleClick() {
        alert('Your click done');
    }
    return (
        <button onClick={handleClick}>
            Click MEEEE
        </button>
    );
}
