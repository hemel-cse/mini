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
import AllNewsView from '../../components/AllNewsView';

import categories from '../../constants';
import capitalizeFirstLetter from '../../utils/capitalString';

import { requestPosts, filterText, sortBy } from '../../actions/postsActions';
import getVisiblePosts from '../../selectors/posts';
import getVisibleCatPosts from '../../selectors/singleCats';

class CategoryContainer extends Component {

  constructor(props) {
    super(props);
    
     this.state = {
        isLoaded: false,
        loadpost: 6,
        showLoadMore: true,
        name: props.match.params.name,
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
    this.props.onSearchItem(e.target.value);
  }

  handleSortName = (value) => {
    this.props.onSortItem(value);
  }

  handleLoadMore = () => {
    let loadPostCount = this.state.loadpost + 6;
    let allPostsCount =  getVisibleCatPosts(this.props.allPosts, this.state.name).length;
    if(loadPostCount < allPostsCount){
      this.setState({loadpost: loadPostCount}); 
    }
    else {
      this.setState({showLoadMore: false}); 
    }
  }

  componentDidUpdate() {

    let newpath = this.props.match.params.name;
    if(this.state.name!==newpath) {
      this.setState({name: newpath, loadpost: 6, showLoadMore: true}); 
    }
  }
  
  render() {

    let catname = capitalizeFirstLetter(this.state.name);


    let output = [];
    let allNews = [];
    let loadmore = []; 
    let allposts = getVisibleCatPosts(this.props.allPosts, this.state.name);
    

    let allNewsPosts = allposts.slice(0, this.state.loadpost);


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
    else {
      output =
            <div className="singleCategoryNewsContainer">
                {allNews}
            </div>;
      }

    return (
      <Layout className="container">
        <Layout.Header className="header"><HeaderView logo={logo} handleSearchName={this.handleSearchName} isSearchName={this.props.isSearchName} /></Layout.Header>
        
        <Layout className="containerContent">
          <BackTop visibilityHeight={800} />

          <Layout.Content className="content">

          <CategoryMenuView categories={categories} active={this.state.name}/>

           <br/>
           {this.props.isPostsFetched ? 

            <div className="singleCategoryTitle">
                <div style={{alignItems: "center" ,width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "grey",}}></div>
                <h3 style={{color: "#565555", fontWeight: "700", fontSize: "20px",}}>{catname}</h3>
            </div>
          
            : null}
           
            <Divider style={{margin: "5px 0",}}/>

              {output}
            
            
            {this.props.isPostsFetched ? 

              loadmore
            
              : null}
            
            

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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
