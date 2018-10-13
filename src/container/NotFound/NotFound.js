import React, { Component } from 'react';
import { connect } from 'react-redux';


import logo from '../../assets/logo.png';
import './styles.css';
import Layout from 'antd/lib/layout';
import BackTop from 'antd/lib/back-top';
import Divider from 'antd/lib/divider';

import HeaderView from '../../components/HeaderView';
import CategoryMenuView from '../../components/CategoryMenuView';
import Loading from '../../components/Loading';

import categories from '../../constants';

import { requestPosts, filterText, sortBy } from '../../actions/postsActions';

class NotFound extends Component {

  constructor(props) {
    super(props);
    
     this.state = {
        isLoaded: false,
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


  componentDidUpdate() {

  }
  
  render() {

    let output = [];

    if(!this.props.isPostsFetched || this.props.isLoading) {
      output = <Loading/>;
    }

    if(this.props.isPostsFetched ){
        output = <div style={{alignItems: "center" ,width: "80%", height: "60vh", padding: "10px", alignSelf: "center",}}><h2 style={{color: "#565555", alignContent: "center", alignSelf: "center", padding: "20px", textAlign: "center"}}>Page Not Found! Please try again!</h2></div>;
    }

    return (
      <Layout className="container">
        <Layout.Header className="header"><HeaderView logo={logo} handleSearchName={this.handleSearchName} isSearchName={this.props.isSearchName} /></Layout.Header>
        
        <Layout className="containerContent">
          <BackTop visibilityHeight={800} />

          <Layout.Content className="content">

          <CategoryMenuView categories={categories} active=""/>

           <br/>

              {output}

            <Divider style={{margin: "5px 0",}}/>
            
            
            

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
    isLoading: state.loadingReducer.isLoading,
    isError: state.postsReducer.isError,
    isSearchName: state.filtersReducer.text,
    isSortBy: state.filtersReducer.sortBy,
  };
}
function mapDispatchToProps(dispatch) {
  return {
      onPostFetch: () => { dispatch(requestPosts()); },
      onSearchItem: (text) => { dispatch(filterText(text)); },
      onSortItem: (sortby) => { dispatch(sortBy(sortby)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
