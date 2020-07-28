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

class PredictPage extends Component {
  state = {
    attempts: [],
    projectid: this.props.match.params.projectid
  };

  componentDidMount() {
    const self = this;
    api
      .get("/rxn/api/api/v1/projects/"+this.state.projectid+"/attempts?raw={}&page=0&size=8&sort=createdOn,DESC")
      .then(function (response) {
        const items = response.data.payload.content;

        let attempts = [];

        items.map((element, index) => {
          attempts.push({ key: element.id, name: element.name });
        });

        console.log(attempts);

        self.setState({ attempts: attempts });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const classes = this.props;

    return (
      <>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} md={12} lg={6}>   
            {this.state.attempts.map((attempt, index) => (
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {attempt.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Select</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
          <Grid item sm={12} xs={12} md={12} lg={6}>   
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
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(PredictPage);
