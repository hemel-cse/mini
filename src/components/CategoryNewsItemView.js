import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';

import humanReadableTime from '../utils/humanTime';


class CategoryNewsItemView extends React.Component {
    
    render() {

        const { category } = this.props;

        let title = category.name;
        let id = category.name.toLowerCase();
        let news = [];

        let posts = category.posts.slice(0, 4);

        posts.map((post, index) => {
            let time = humanReadableTime(post.timestamp);
            let details = post.content.replace(/(\r\n\t|\n|\r\t)/gm,"");
            let content = 
                <div className="CategoryNewsItem">
                    <div className="CategoryNewsItemImage">
                        <div style={{backgroundSize: 'cover', backgroundPosition: 'center',height: "100%", width: '100%', backgroundImage: `url(${post.image})`, backgroundColor: 'grey',}}></div>
                    </div>
                    <div className="CategoryNewsItemDetail">
                            <div style={{fontSize: "16px", fontWeight: "700", color: "#565555"}}>{post.title}</div>
                            <Divider style={{margin: "5px 0", width:"70%"}} />
                            <div style={{fontSize: "14px", color: "#565555"}}>{details}</div>
                            <Divider style={{margin: "5px 0",}} />
                            <div className="CategoryNewsItemInfo">
                                <div style={{textAlign: "left", fontSize: "13px",}}>{time}</div>
                                <div style={{textAlign: "right", fontSize: "13px"}}>Source: <a href={post.source_link} target="_blank" rel="noopener noreferrer">{post.source.name}</a></div>
                            </div>
                    </div>
                </div>;
            let divider = <Divider style={{margin: "10px 0",}} />;
            let output = <div className="categoryNewsItemView" key={index}>{content} {divider}</div>;
            return news.push(output);
        });


        
        return (
                <div className="categoryNews" id={id}>
                    <div className="CategoryNewsItemTitle">
                        <div style={{width: "40%", paddingBottom: "5px", borderTop: "2px solid", borderTopRightRadius: "5px", borderTopColor: "#1b8fe3",}}></div>
                        <h3 style={{color: "#565555", fontWeight: "bold", fontSize: "18px",}}>{title}</h3>
                    </div>
                
                    {news}
                </div>
        );
      }
}


CategoryNewsItemView.propTypes = {
  category: PropTypes.object.isRequired,
};

export default CategoryNewsItemView;
