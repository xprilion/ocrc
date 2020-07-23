import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

class ProjectPage extends React.Component {
  render() {
    const classes = useStyles();

    return (
      <>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Reactant Name" />
          <TextField
            label="Invited Email ID"
            placeholder="Leave blank if not available"
          />
          <Button variant="contained" color="primary">
            Create Project
          </Button>
        </form>
      </>
    );
  }
}

export default ProjectPage;
