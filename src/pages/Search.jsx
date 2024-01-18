import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { actionTypes } from "../Reducer";
function Search({ hidebuttons }) {
  const [Input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: Input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="searchicon" />
        <input
        id="inputforsearch"
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hidebuttons ? (
        <div className="search__buttons">
          <Stack spacing={1} direction="row">
            <Button
              onClick={search}
              variant="outlined"
              type="submit"
              sx={{
                color: "black",
                borderColor: "black",
                backgroundColor: "#f8f8f8",
                border: "1px solid white",
                textTransform: "inherit",
                "&:hover": {
                  borderColor: "black", // specify your hover color here
                },
              }}
            >
              Google Search
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                borderColor: "black",
                backgroundColor: "#f8f8f8",
                border: "1px solid white",
                textTransform: "inherit",
                "&:hover": {
                  borderColor: "black", // specify your hover color here
                },
              }}
            >
              I'm Feeling Lucky
            </Button>
          </Stack>
        </div>
      ) : (
        <div className="search__buttons" style={{display:'none'}}>
          <Stack spacing={1} direction="row">
            <Button
              onClick={search}
              variant="outlined"
              type="submit"
              sx={{
                color: "black",
                borderColor: "black",
                backgroundColor: "#f8f8f8",
                border: "1px solid white",
                textTransform: "inherit",
                "&:hover": {
                  borderColor: "black", // specify your hover color here
                },
              }}
            >
              Google Search
            </Button>
            
          </Stack>
        </div>
      )}
    </form>
  );
}

export default Search;
