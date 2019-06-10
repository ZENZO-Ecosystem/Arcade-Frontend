import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

export default hot(App);
