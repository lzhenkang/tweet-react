import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

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
                        <li><Text text = {tweet.text}/></li>
                        <li><Created created_at = {tweet.created_at}/></li>
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
    console.log(tweets.tweets[1].created_at)
    // console.log(tweets.tweets[1].text)
    console.log(tweets.tweets[1].retweet_count)
    console.log(tweets.tweets[1].favorite_count)