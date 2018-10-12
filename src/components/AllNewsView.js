import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';
import humanReadableTime from '../utils/humanTime';

class AllNewsView extends React.Component {
    
      render() {

        const {allNewsPostsItems} = this.props;

        let output = [];
        let posts = [];

        posts = allNewsPostsItems;


        posts.map((news, index) => {
            let time = humanReadableTime(news.timestamp);
            let details = news.content.replace(/(\r\n\t|\n|\r\t)/gm,"");

            let item = <div className="allNewsItem">
                        <div className="allNewsItemImage">
                            <div style={{backgroundSize: 'cover', backgroundPosition: 'center',height: "100%", width: '100%', backgroundImage: `url(${news.image})`, backgroundColor: 'grey',}}></div>
                        </div>
                        <div className="allNewsItemDetail">
                               <div style={{fontSize: "16px", fontWeight: "700", color: "#565555"}}>{news.title}</div>
                               <Divider style={{margin: "5px 0", width:"70%"}} />
                               <div style={{fontSize: "14px", color: "#565555"}}>{details}</div>
                               <Divider style={{margin: "5px 0",}} />
                               <div className="allNewsItemInfo">
                                    <div style={{textAlign: "left", fontSize: "13px",}}>{time}</div>
                                    <div style={{textAlign: "right", fontSize: "13px"}}>Source: <a href={news.source_link} target="_blank" rel="noopener noreferrer">{news.source.name}</a></div>
                               </div>
                        </div>
                    </div> ;
            let divider = <Divider style={{margin: "5px 0",}} />;

            return output.push(<div className="allNews" key={index}>{item} {divider}</div>);
        });
        
        return output;
      }
}


AllNewsView.propTypes = {
    allNewsPostsItems: PropTypes.array.isRequired,
};

export default AllNewsView;
