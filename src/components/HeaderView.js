import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Input from 'antd/lib/input';
import { FiFacebook, FiTwitter } from "react-icons/fi";


class HeaderView extends React.Component {

    
      render() {

        let {logo, isSearchName, handleSearchName} = this.props;
        let d = new Date();
        let today = d.toDateString();
        
        return (
            <div className="headerContent">
            <div><Link to="/"><img src={logo}  className="logo" alt="logo" /></Link></div>
            <div><span style={{textAlign: "center",}}>{today}</span></div>
                <div className="search">
                    <Input
                        addonBefore={<IoIosSearch  color="blue" size="2em" className="search-icon" />}
                        defaultValue=""
                        placeholder="Search..."
                        value={isSearchName}
                        onChange={handleSearchName}
                        onPressEnter={handleSearchName} 
                        size="large"
                  />
                </div>
            <div className="headerRight">
                <span><FiFacebook  color="blue" size="1.5em" className="social-icon" /></span><span className="social-icon-right"><FiTwitter  color="blue" size="1.5em" className="social-icon" /></span>
            </div>
        </div>
        );
      }
}

HeaderView.propTypes = {
  logo: PropTypes.any.isRequired,
  isSearchName: PropTypes.string.isRequired,
  handleSearchName: PropTypes.func.isRequired,
};

export default withRouter(HeaderView);
