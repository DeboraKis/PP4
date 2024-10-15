/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RefreshIcon from "@mui/icons-material/Refresh";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
// import { Sort } from "@mui/icons-material";

function CarsList({
  cars = [],
  deleteHandler = () =>
    console.error("No deleteHandler provided to Cars List Controls"),
  refreshHandler = () =>
    console.error("No refreshHandler provided to Cars List Controls"),
  ListComponent = () => null,
}) {
  const [sort, setSort] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const finalCars = cars
    .filter((car) => {
      console.log('searchTerm', searchTerm, car);
      return searchTerm ? car.name.toLowerCase().includes(searchTerm) : car;
    })
    .sort((next, current) => {
      console.log('sort', sort);
      if (next.name > current.name) return sort ? 1 : -1;
      if (next.name < current.name) return sort ? -1 : 1;
      return 0;
    });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <TextField
          id="filter"
          label="Filter"
          variant="standard"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={() => {
            setSort((s) => !s);
          }}>
            <SortByAlphaIcon />
            {sort ? "ASC" : "DESC"}
          </Button>
          <Button onClick={refreshHandler}>
            Refresh <RefreshIcon />
          </Button>
        </Box>
      </Box>
      <ListComponent cars={finalCars} deleteHandler={deleteHandler} />
    </Box>
  );
}

export default CarsList;
