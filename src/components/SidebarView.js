import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';


class SideBarView extends React.Component {

    constructor() {
        super(...arguments);
        this.sideArray = [
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
                "title": 'সৌদি-রাশিয়া তেলের বাজার',

            },
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
                "title": 'title 2',

            }
        ];
    }
    
      render() {
        
        return (
          <div className="sidebarView">
                <div style={{textAlign: "center", color: "#565555", fontSize: "20px", fontWeight: "bold", paddingBottom: "2px", borderBottom: "1px solid", borderBottomColor: "#828282", marginBottom: "10px", alignSelf: "self-start"}}>Latest News</div>
                <div style={{fontSize: "16px", paddingBottom: "2px",}}>{this.sideArray[0].title} - <a href="#international">International</a></div>
                <Divider style={{margin: "5px 0",}} />
                <div style={{fontSize: "16px", paddingBottom: "2px",}}>{this.sideArray[0].title} - <a href="#international">International</a></div>
          </div>
        );
      }
}


// SideBarView.propTypes = {
// //   image: PropTypes.any.isRequired,
// //   title: PropTypes.string.isRequired,
// };

export default SideBarView;
