import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FAB() {
  return (
    <div style={styles}>
      <Fab color="success" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

const styles = {
  alignSelf: "flex-end",
  position: "fixed",
  bottom: "8%",
  right: "9%",
};
