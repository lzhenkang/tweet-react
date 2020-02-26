import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class Screennames extends React.Component {
  render() {
    return(
      <div>
        {this.props.screen_name}
      </div>
    );
  }
}

class User extends React.Component {
  render() {
        let allScreenName = this.props.user.map(screenName => {
            return <ScreenNames screen_name = {screenName.screen_name}/>
        })
    return(
      <div>
      {allScreenName}
      </div>
    );
  }
}

class Favorite extends React.Component {
  render() {
    return(
      <div>
        {this.props.favorite_count}
      </div>
    );
  }
}

class Retweet extends React.Component {
  render() {
    return(
      <div>
        {this.props.retweet_count}
      </div>
    );
  }
}

class Created extends React.Component {
  render() {
    return(
      <div>
        {this.props.created_at}
      </div>
    );
  }
}

class Text extends React.Component {
  render() {
    return(
      <div>
        {this.props.text}
      </div>
    );
  }
}

var allTweet = tweets.tweets;

class App extends React.Component {
  render() {
        let mapAllTweets = allTweet.map(tweet => {
            return <ul>
                        <li>Tweet: <Text text = {tweet.text}/></li>
                        <li>Date: <Created created_at = {tweet.created_at}/></li>
                        <li>Retweets: <Retweet retweet_count = {tweet.retweet_count}/></li>
                        <li>Favorites: <Favorite favorite_count = {tweet.favorite_count}/></li>
                        <li>User: <User user = {tweet.user}/></li>
                   </ul>
        })
    return (
      <div>
            {mapAllTweets}
      </div>
    );
  }
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
    console.log(tweets.tweets[1].user.screen_name)
    // console.log(tweets.tweets[1].created_at)
    // console.log(tweets.tweets[1].text)
    // console.log(tweets.tweets[1].retweet_count)
    // console.log(tweets.tweets[1].favorite_count)