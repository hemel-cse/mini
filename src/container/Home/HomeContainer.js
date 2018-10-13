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
import getVisiblePosts from '../../selectors/posts';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    
     this.state = {
        isLoaded: false,
        loadpost: 6,
        searchText: "",
        showLoadMore: true,
    };
  }

  componentDidMount(){
    if(!this.props.isPostsFetched) {
      this.fetchPosts();
    }
  }


  fetchPosts = () => {
    this.props.onPostFetch();
  }

  handleSearchName = (e) => {
    e.preventDefault();
    this.setState({searchText: e.target.value}); 
    this.props.onSearchItem(e.target.value);
  }

  handleSortName = (value) => {
    this.props.onSortItem(value);
  }

  handleLoadMore = () => {
    let loadPostCount = this.state.loadpost + 6;
    if(loadPostCount < this.props.allPostsCount){
      this.setState({loadpost: loadPostCount}); 
    }
    else {
      this.setState({showLoadMore: false}); 
    }
  }

  componentDidUpdate() {

  }


  render() {

    let output = [];
    let allNews = [];
    let loadmore = []; 
    let sidebarNews = this.props.allPosts.slice(0, 8);
    let allNewsPosts = this.props.allPosts.slice(0, this.state.loadpost);
    let sliderPosts = this.props.galleryPosts.slice(0, 5);


    if(this.state.showLoadMore){
      loadmore = <div className="loadmore"><Button style={{bottom: "5px",}} onClick={this.handleLoadMore}>Load More</Button></div>;
    }

    if(this.props.isPostsFetched) {
        allNews = <AllNewsView allNewsPostsItems={allNewsPosts} />;
    }
  
    if(!this.props.isPostsFetched || this.props.isLoading) {
      output = <Loading/>;
    }
    else if(this.props.isError){
      output = <div style={{alignItems: "center" ,width: "80%", height: "60vh", padding: "10px", alignSelf: "center",}}><h2 style={{color: "#565555", alignContent: "center", alignSelf: "center", padding: "20px", textAlign: "center"}}>Something Wrong! Please Try Again!</h2></div>;
    }
    else if(this.state.searchText){
      output = 
          <div className="content">

            <div className="allNewsItemTitle">
                <div style={{alignItems: "center" ,width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "#1b8fe3",}}></div>
                <h3 style={{color: "#565555", fontWeight: "bold", fontSize: "18px",}}>All News</h3>
            </div>

            <div className="allNewsContainer">
                {allNews}
            </div>

            {loadmore}
            
        </div>;
    }
    else {
        output = 
          <div className="content">

            <div className="topContent">
              <div className="galleryContent">
                  <ImageSlider 
                    posts={sliderPosts}
                  />
              </div>
              <div className="sidebarContent">
                  <SideBarView news={sidebarNews} />
              </div>
            </div>

            <Divider/>

            <div className="categoryNewsContainer">
                  <CategoryNewsView catNews={this.props.catPosts}/>
            </div>

            <Divider/>

            <div className="allNewsItemTitle">
                <div style={{alignItems: "center" ,width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "#1b8fe3",}}></div>
                <h3 style={{color: "#565555", fontWeight: "bold", fontSize: "18px",}}>All News</h3>
            </div>

            <div className="allNewsContainer">
                {allNews}
            </div>

          {loadmore}
            
        </div>;
    }

    return (
      <Layout className="container">
        <Layout.Header className="header"><HeaderView logo={logo} handleSearchName={this.handleSearchName} isSearchName={this.props.isSearchName} /></Layout.Header>
        
        <Layout className="containerContent">
          <BackTop visibilityHeight={800} />

          <Layout.Content className="content">

           <CategoryMenuView categories={categories} active=""/>

           <br/><br/>

           {output}
           
           
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
    allPostsCount: state.postsReducer.posts.count,
    isLoading: state.loadingReducer.isLoading,
    isError: state.postsReducer.isError,
    isSearchName: state.filtersReducer.text,
    isSortBy: state.filtersReducer.sortBy,
    catPosts: state.postsReducer.catPosts,
    galleryPosts: state.postsReducer.galleryPosts,
    allPosts: getVisiblePosts(state.postsReducer.posts.data, state.filtersReducer),
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onPostFetch: () => { dispatch(requestPosts()); },
      onSearchItem: (text) => { dispatch(filterText(text)); },
      onSortItem: (sortby) => { dispatch(sortBy(sortby)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
