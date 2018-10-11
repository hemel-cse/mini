import React, { Component } from 'react';
import { connect } from 'react-redux';


import logo from '../../assets/logo.png';
import './styles.css';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
import BackTop from 'antd/lib/back-top';
import Divider from 'antd/lib/divider';

import HeaderView from '../../components/HeaderView';
import CategoryMenuView from '../../components/CategoryMenuView';
import Loading from '../../components/Loading';
import ImageSlider from '../../components/ImageSlider';
import SideBarView from '../../components/SidebarView';
import CategoryNewsView from '../../components/CategoryNewsView';
import AllNewsView from '../../components/AllNewsView';

import categories from '../../constants';

import { requestPosts, filterText, sortBy } from '../../actions/postsActions';
import getVisibleProfiles from '../../selectors/profiles';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
     this.state = {
        posts: [],
        isLoaded: false,
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
      <Layout className="container">
        <Layout.Header className="header"><HeaderView logo={logo} handleSearchName={this.handleSearchName} isSearchName={this.props.isSearchName} /></Layout.Header>
        
        <Layout className="containerContent">
          <BackTop visibilityHeight={800} />

          <Layout.Content className="content">

           <CategoryMenuView categories={categories} active=""/>

           <br/><br/>

            <div className="topContent">
              <div className="gallaryContent">
                  <ImageSlider 
                    image="https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/002.jpg"
                    title="slider title"
                  />
              </div>
              <div className="sidebarContent">
                  <SideBarView />
              </div>
            </div>

            <Divider/>

            <div className="categoryNewsContainer">
                  <CategoryNewsView />
            </div>

            <Divider/>

            <div className="allNewsItemTitle">
                <div style={{alignItems: "center" ,width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "#1b8fe3",}}></div>
                <h3 style={{color: "#565555",}}>All News</h3>
            </div>

            <div className="allNewsContainer">
              <AllNewsView/>
              <AllNewsView/>
              <AllNewsView/>
              <AllNewsView/>
              <AllNewsView/>
              <AllNewsView/>
            </div>

            <Loading/>

            <div className="loadmore"><Button style={{bottom: "5px",}}>Load More</Button></div>

          </Layout.Content>

        </Layout>

        <Layout.Footer style={{alignSelf: "center"}}>Copyright MiniNews 2018, All Right Reserved.</Layout.Footer>

      </Layout>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
