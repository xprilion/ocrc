import React, { Component } from "react";
import api from "../config";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  pos: {
    marginBottom: 12,
  },
});

class HomePage extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const self = this;
    api
      .get("/rxn/api/api/v1/projects")
      .then(function (response) {
        const items = response.data.payload.content;

        let projects = [];

        items.map((element, index) => {
          projects.push({ key: element.id, name: element.name });
        });

        self.setState({ projects: projects });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const classes = this.props;

    return (
      <>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {this.state.projects.map((project, index) => (
              <Grid item xs={3}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      { project.name }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Select</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
