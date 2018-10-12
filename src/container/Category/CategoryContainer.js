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

class CategoryContainer extends Component {

  constructor(props) {
    super(props);

     this.state = {
        posts: [],
        name: props.match.params.name
    };
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
    let newpath = this.props.match.params.name;
    if(this.state.name!==newpath) {
      this.setState({name: newpath}); 
    }
  }

  render() {

    let catname = capitalizeFirstLetter(this.state.name);

    return (
      <Layout className="container">
        <Layout.Header className="header"><HeaderView logo={logo} handleSearchName={this.handleSearchName} isSearchName={this.props.isSearchName} /></Layout.Header>
        
        <Layout className="containerContent">
          <BackTop visibilityHeight={800} />

          <Layout.Content className="content">

          <CategoryMenuView categories={categories} active={this.state.name}/>

           <br/>
           
            <div className="singleCategoryTitle">
                <div style={{alignItems: "center" ,width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "grey",}}></div>
                <h3 style={{color: "#565555", fontWeight: "700", fontSize: "20px",}}>{catname}</h3>
            </div>

            <Divider style={{margin: "5px 0",}}/>

            <div className="singleCategoryNewsContainer">
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
    isPosts: getVisiblePosts(state.postsReducer.posts.data, state.filtersReducer),
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onPostFetch: () => { dispatch(requestPosts()); },
      onSearchName: (text) => { dispatch(filterText(text)); },
      onSortName: (sortby) => { dispatch(sortBy(sortby)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
