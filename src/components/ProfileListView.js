import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileListViewItem from './ProfileListViewItem';

class ProfileListView extends Component {


    renderProfiles = (users) => {
        if (users.length > 0) {   
            let profilelist = [];  
            users.map((user, index) => {
                return profilelist.push(<ProfileListViewItem key={index} profile={user} />);
              }); 
            return profilelist;
        }
        else return [];
    }

    render() {
        let profiles = this.renderProfiles(this.props.users);
        
        return profiles;
    }
}

    
  

ProfileListView.propTypes = {
  users: PropTypes.array.isRequired,
};

export default ProfileListView;
