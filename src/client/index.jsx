import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js'
// import ScreenNames from 'screenname.jsx'
import User from 'user.jsx'

// class ScreenNames extends React.Component {
//   render() {
//     return(
//       <div>
//         {this.props.screen_name}
//       </div>
//     );
//   }
// }

// class User extends React.Component {
//   render() {
//     return(
//       <div>
//       <ScreenNames screen_name = {this.props.user.screen_name}/>
//       </div>
//     );
//   }
// }

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
            return <div class = "tweetContainer">
                        <div class="username"><User user = {tweet.user}/></div>
                        <div class="tweet">Tweet: <Text text = {tweet.text}/></div>
                        <div class="date">Date: <Created created_at = {tweet.created_at}/></div>
                        <div class="retweets">Retweets: <Retweet retweet_count = {tweet.retweet_count}/></div>
                        <div class="favourites">Favorites: <Favorite favorite_count = {tweet.favorite_count}/></div>
                   </div>
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
    // console.log(tweets.tweets[1].user.screen_name)
    // console.log(tweets.tweets[1].created_at)
    // console.log(tweets.tweets[1].text)
    // console.log(tweets.tweets[1].retweet_count)
    // console.log(tweets.tweets[1].favorite_count)