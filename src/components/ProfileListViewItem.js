import React from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/lib/card';
import Col from 'antd/lib/col';

const ProfileListViewItem = ({profile}) => (
  <Col span={8} key={profile.id}>
     <Card title={profile.name}
        headStyle={{textAlign: "center"}}
        bodyStyle={{textAlign: "left", minHeight: 200,}}
        hoverable="true"
      >
      <li>Address: {profile.address.suite}, {profile.address.street}</li>
      <li>City: {profile.address.city}</li>
      <li>Phone: {profile.phone}</li>
      <li>Email: {profile.email}</li>
      <li>Website: {profile.website}</li>
      <li>Company Name: {profile.company.name}</li>
      </Card>
  </Col>
);

ProfileListViewItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileListViewItem;
