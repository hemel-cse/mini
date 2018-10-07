import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestPosts } from './actions/postsActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
        posts: false,
    };
  }

  componentDidMount(){
          
    console.log(this.props.isPostsFetched)
      
  }


  fetchPosts = () => {
    console.log("button pressed!")
    this.props.onPostFetch();
  }

  componentDidUpdate() {
    console.log('Data Update...');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <h1>Fetch Posts</h1>
          <button onClick={this.fetchPosts}>ok</button>
        </div>
        <div>
          { this.props.isPostsFetched ?
            <p>Fetched</p> &&
            <p>{JSON.stringify(this.props.isPosts)}</p>
            : <p></p>
          }
          <br/><br/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isPostsFetched: state.postsReducer.isPostsFetched,
    isPosts: state.postsReducer.posts,
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onPostFetch: () => { dispatch(requestPosts()); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
