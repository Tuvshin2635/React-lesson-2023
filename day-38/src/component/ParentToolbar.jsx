export default function ParentToolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("you clicked on the toolbar");
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Playing");
        }}
      >
        {" "}
        Play BUtton
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          alert("Uploadging");
        }}
      >
        {" "}
        Upload BUtton
      </button>
    </div>
  );
}
