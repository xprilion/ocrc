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
            <Grid item sm={6} xs={12} md={4} lg={3}>
              <Link to="/add-project" underline="none" component={RouterLink}>
                <Card className={classes.root} variant="elevation">
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      Create New
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Create</Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
            {this.state.projects.map((project, index) => (
              <Grid item sm={6} xs={12} md={4} lg={3} key={index}>
                <Link to={"/project/" + project.key} underline="none" component={RouterLink}>
                  <Card className={classes.root} variant="outlined">
                    <CardContent>
                      <Typography variant="h6" component="h3">
                        {project.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Select</Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(HomePage);
