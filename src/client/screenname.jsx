import React from 'react';
import ReactDOM from 'react-dom';

class ScreenNames extends React.Component {
  render() {
    return(
      <div>
        {this.props.screen_name}
      </div>
    );
  }
}

export default ScreenNames