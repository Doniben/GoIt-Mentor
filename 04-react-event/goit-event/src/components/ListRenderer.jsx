import React from 'react';

class ListRenderer extends React.Component {
  state = {
    event: null
  };

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = (e) => {
    this.setState({ event: e });
  };

  render() {
    return <div>{this.state.event && <p>{this.state.event.data}</p>}</div>;
  }
}

export default ListRenderer;