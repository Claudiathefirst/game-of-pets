import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import AllDragons from "./AllDragons";
import AllWolves from "./AllWolves";
import { fetchWolvesFromServer } from "./store";
import { fetchDragonsFromServer } from "./store";
import { connect } from "react-redux";

class Main extends React.Component {

  render() {
    return (
      <Router>
        <center>
          <h1>🎉 Game of Pets 🎉</h1>
          <p>
            "When you play the game of pets, you win or you die... of cuteness."
            - 👸 Cersei Lannister
          </p>

          <Link to="/dragons">Show us the dragons!</Link>
          <br />
          <Link to="/wolves">Show us the direwolves!</Link>

          <Switch>
            <Route exact path="/" component={AllDragons} />
            <Route exact path="/dragons" component={AllDragons} />
            <Route exact path="/wolves" component={AllWolves} />
          </Switch>
        </center>
      </Router>
    );
  }
}

const mapDispatch = dispatch => ({
  getWolves: () => dispatch(fetchWolvesFromServer()),
  getDragons: () => dispatch(fetchDragonsFromServer())
})

export default connect(null, mapDispatch)(Main);