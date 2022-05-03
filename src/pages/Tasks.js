import EnhancedTable from "../components/tasks/TaskTable";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import {
  SelectPlant,
  SelectAction,
  SelectRecuring,
} from "../components/tasks/TaskSelector";
import BasicDatePicker from "../components/tasks/Calendar";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Tasks() {
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          padding: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          mb: 3,
        }}
      >
        <Typography variant="button" display="block" gutterBottom>
          Create new task:
        </Typography>
        <SelectPlant />
        <SelectAction />

        <BasicDatePicker />
        <SelectRecuring />
        <Button
          color="success"
          size="large"
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add Task
        </Button>
      </Paper>
      <EnhancedTable />
    </div>
  );
}
