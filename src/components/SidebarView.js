import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';


class SideBarView extends React.Component {

      render() {
        const { news } = this.props;

        let newspost = [];

        news.map((post, index) => {
            let link = "/#"+post.category.name.toLowerCase();
            let title = <div style={{fontSize: "16px", paddingBottom: "2px",}}>{post.title.trim()} - <a href={link}>{post.category.name}</a></div>;
            let divider = <Divider style={{margin: "5px 0",}} />;
            let content = <div className="sidebarViewContent" key={index}>{title} {divider}</div>;
            return newspost.push(content);
        });
        
        return (
          <div className="sidebarView">
                <div style={{textAlign: "center", color: "#565555", fontSize: "20px", fontWeight: "bold", paddingBottom: "2px", borderBottom: "1px solid", borderBottomColor: "#828282", marginBottom: "10px", alignSelf: "self-start"}}>Latest News</div>
                {newspost}
          </div>
        );
      }
}


SideBarView.propTypes = {
  news: PropTypes.array.isRequired,
};

export default SideBarView;
