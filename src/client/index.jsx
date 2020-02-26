import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

var allTweet = tweets.tweets;
console.log (allTweet);
class App extends React.Component {
  render() {
        let mapAllTweets = allTweet.map(tweet => {
            return  <ul>
                        <li> {tweet.user.screen_name}</li>
                        <li> {tweet.created_at}</li>
                        <li> {tweet.text}</li>
                        <li> Retweets: {tweet.retweet_count}</li>
                        <li> Favourites: {tweet.favorite_count}</li>
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
    console.log(tweets.tweets[1].text)
    console.log(tweets.tweets[1].retweet_count)
    console.log(tweets.tweets[1].favorite_count)