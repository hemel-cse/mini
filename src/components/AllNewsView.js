import React from 'react';
import PropTypes from 'prop-types';

import Divider from 'antd/lib/divider';


class AllNewsView extends React.Component {

    constructor() {
        super(...arguments);
        this.catNews = [
            {
                "image": 'http://mininews.co/media/news/2018/09/13/4599674d-d525-4e05-b5cb-8baf95cef529.jpg',
                "title": 'সৌদি-রাশিয়া তেলের বাজার',
                "description" : "ইরানের ওপিইসি গভর্নর হোসেইন কাজেমপোর আর্দেবিলি অভিযোগ করে বলেছেন, বিশ্বের তেল রপ্তানিকারক দেশগুলোর সংগঠনভুক্ত (ওপিইসি) দেশ সৌদি আরব ও অ-ওপিইসি দেশ রাশিয়া বিশ্বব্যাপী তেল বাজার জিম্মি করে রেখেছে। ইরানের বিশ্বব্যাপী তেল বাজারে প্রবেশ বন্ধ করতে যুক্তরাষ্ট্রের প্রচেষ্টার কারণে এ অবস্থার সৃষ্টি হয়েছে।",
                "time" : "28 Oct, 18",
                "source": "Prothom alo",
                "category": "International"

            },
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
                "title": 'title 2 title 1',
                "description" : "ok this is news description.ok this is news description. ok this is news description. ok this is news description. ok this is news description.",
                "time" : "sep 28",
                "source": "prothom alo"

            }
        ];
    }
    
      render() {
        
        return (
                <div className="allNews">
                    <div className="allNewsItem">
                        <div className="allNewsItemImage">
                            <div style={{backgroundSize: 'cover', backgroundPosition: 'center',height: "100%", width: '100%', backgroundImage: `url(${this.catNews[0].image})`, backgroundColor: 'grey',}}></div>
                        </div>
                        <div className="allNewsItemDetail">
                               <div style={{fontSize: "16px", fontWeight: "700", color: "#565555"}}>{this.catNews[0].title}</div>
                               <Divider style={{margin: "5px 0", width:"70%"}} />
                               <div style={{fontSize: "14px", color: "#565555"}}>{this.catNews[0].description}</div>
                               <Divider style={{margin: "5px 0",}} />
                               <div className="allNewsItemInfo">
                                    <div style={{textAlign: "left", fontSize: "13px",}}>{this.catNews[0].time}</div>
                                    <div style={{textAlign: "right", fontSize: "13px"}}>Source: <a href="#">{this.catNews[0].source}</a></div>
                               </div>
                        </div>
                    </div> 
                    <Divider style={{margin: "5px 0",}} />
                </div>
        );
      }
}


// AllNewsView.propTypes = {
//   image: PropTypes.any.isRequired,
//   title: PropTypes.string.isRequired,

// };

export default AllNewsView;
