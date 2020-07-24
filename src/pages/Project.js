import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import api from "../config";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    maxWidth: "360px",
    margin: 0,
  },
  pos: {
    marginBottom: 12,
  },
});

class ProjectPage extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    // const self = this;
    // api
    //   .get("/rxn/api/api/v1/projects")
    //   .then(function (response) {
    //     const items = response.data.payload.content;

    //     let projects = [];

    //     items.map((element, index) => {
    //       projects.push({ key: element.id, name: element.name });
    //     });

    //     self.setState({ projects: projects });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    const classes = this.props;

    return (
      <>
        <form className={classes.root} noValidate autoComplete="off">
          <Card>
            <CardContent>
              <TextField label="Reactant Name" fullWidth={true} />
              <br />
              <br />
              <TextField
                label="Invited Email ID"
                placeholder="Leave blank if not available"
                fullWidth={true}
              />
              <br />
              <br />
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                Create Project
              </Button>
              <Button variant="contained" color="default" href="/">
                Cancel
              </Button>
            </CardActions>
          </Card>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(ProjectPage);
