import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectPlant() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Plant</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Plant"
        >
          <MenuItem value={10}>Spider</MenuItem>
          <MenuItem value={20}>Palm</MenuItem>
          <MenuItem value={30}>Carl</MenuItem>
          <MenuItem value={30}>Jose</MenuItem>
          <MenuItem value={30}>Michelle</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function SelectAction() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Task"
        >
          <MenuItem value={10}>Water</MenuItem>
          <MenuItem value={20}>Fertilize</MenuItem>
          <MenuItem value={30}>Repot</MenuItem>
          <MenuItem value={30}>Trim</MenuItem>
          <MenuItem value={30}>Clean</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export function SelectRecuring() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Recuring</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Recuring"
        >
          <MenuItem value={10}>Never</MenuItem>
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Weekly</MenuItem>
          <MenuItem value={30}>Bi-Weekly</MenuItem>
          <MenuItem value={30}>Monthly</MenuItem>
          <MenuItem value={30}>Quarterly</MenuItem>
          <MenuItem value={30}>Every 6 months</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
