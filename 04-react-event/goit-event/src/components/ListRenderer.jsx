// Please fix everything that is wrong here, you can rewrite it to a functional component.
// What's wrong here?
// If something is wrong, how can it be fixed?

import React from 'react';

class ListRenderer extends React.Component {
  state = {
    event: null
  };

  componentDidUpdate (prevProps, prevState, snapshot) {
    window.addEventListener('message', (e) => this.setState({ event: e }))
  }

  render () {
    return this.state.event;
  }
}