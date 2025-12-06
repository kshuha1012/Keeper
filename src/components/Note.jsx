import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Fab } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick} sx={{ backgroundColor: "pink" }}>
        <DeleteForeverIcon sx={{ color: "red" }} />
      </Fab>
    </div>
  );
}

export default Note;
