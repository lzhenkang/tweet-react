import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
  render() {
    return(
      <div>
      <ScreenNames screen_name = {this.props.user.screen_name}/>
      </div>
    );
  }
}

export default User