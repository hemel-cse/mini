import React, { Component } from 'react';
import { connect } from 'react-redux';


import logo from './logo.svg';
import './App.css';
import Button from 'antd/lib/button';
// import Row from 'antd/lib/row';
// import Layout from 'antd/lib/layout';
// import Divider from 'antd/lib/divider';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';

import ProfileListView from './components/ProfileListView';

import { requestPosts, filterText, sortBy } from './actions/postsActions';
import getVisibleProfiles from './selectors/profiles';

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
        profiles: [],
    };
  }


  fetchPosts = () => {
    console.log("button pressed!");
    this.props.onPostFetch();
  }

  handleSearchName = (e) => {
    e.preventDefault();
    this.props.onSearchName(e.target.value);
  }

  handleSortName = (value) => {
    this.props.onSortName(value);
  }

  componentDidUpdate() {
    console.log('Data Update...');
  }


  render() {
    return (
      <div className="App">

        <div><img src={logo} className="App-logo" alt="logo" /></div>
        
        <div>
          <h1>Profiles</h1>
          { !this.props.isPostsFetched ?
          <Button icon="smile" type="primary" onClick={this.fetchPosts}>Fetch Profiles</Button>
          : null }
          <br/><br/>
          { this.props.isPostsFetched ?
            <div className="search">
              <h2>Search By Name/Company</h2>
              <br/>
              <h4>Sorted By:</h4>
              <Select
                style={{ width: 120 }}
                placeholder="Sort Profiles"
                onChange={this.handleSortName}
                onSelect={this.handleSortName}
                >
                <Select.Option value="none" title="---">---</Select.Option>
                <Select.Option value="name" title="Name">Name</Select.Option>
                <Select.Option value="company" title="Company">Company</Select.Option>
              </Select>
              <br/> <br/>
              <Input
                defaultValue=""
                value={this.props.isSearchName}
                onChange={this.handleSearchName}
                onPressEnter={this.handleSearchName} 
              />
              <br/><br/>
            </div>
            : null }
        </div>
        <div>
          { this.props.isPostsFetched ?
            <div className="profiles" style={{ overflow: "hidden" }}>
               <ProfileListView users={this.props.isPosts}/>
            </div>
            : null
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
    isSearchName: state.filtersReducer.text,
    isSortBy: state.filtersReducer.sortBy,
    isPosts: getVisibleProfiles(state.postsReducer.posts, state.filtersReducer),
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onPostFetch: () => { dispatch(requestPosts()); },
      onSearchName: (text) => { dispatch(filterText(text)); },
      onSortName: (sortby) => { dispatch(sortBy(sortby)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
