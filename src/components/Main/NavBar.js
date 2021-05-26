import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BsListNested } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { BsFunnelFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant="outlined">
        <BsListNested color="purple" />
        <BsArrowUp color="purple" /> Sort By
      </Button>
      <Button variant="outlined">
        <BsFunnelFill color="purple" />
        Filter By
      </Button>

      <input
        style={{ float: "right" }}
        type="text"
        placeholder="Search here"
      ></input>
    </div>
  );
}
