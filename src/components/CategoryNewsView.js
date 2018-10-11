import React from 'react';
import PropTypes from 'prop-types';

import CategoryNewsItemView from './CategoryNewsItemView';


class CategoryNewsView extends React.Component {

    constructor() {
        super(...arguments);
        this.catNews = [
            {
                "image": 'http://mininews.co/media/news/2018/09/13/4599674d-d525-4e05-b5cb-8baf95cef529.jpg',
                "title": 'সৌদি-রাশিয়া তেলের বাজার',
                "description" : "ইরানের ওপিইসি গভর্নর হোসেইন কাজেমপোর আর্দেবিলি অভিযোগ করে বলেছেন, বিশ্বের তেল রপ্তানিকারক দেশগুলোর সংগঠনভুক্ত (ওপিইসি) দেশ সৌদি আরব ও অ-ওপিইসি দেশ রাশিয়া বিশ্বব্যাপী তেল বাজার জিম্মি করে রেখেছে। ইরানের বিশ্বব্যাপী তেল বাজারে প্রবেশ বন্ধ করতে যুক্তরাষ্ট্রের প্রচেষ্টার কারণে এ অবস্থার সৃষ্টি হয়েছে।",
                "time" : "28 Oct, 18",
                "source": "Prothom alo"

            },
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
                "title": 'title 2 title 1',
                "description" : "is news description. is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.is news description.s description.is news description.is news description.is news description.is news description.is news description.is news description. on.is news description. on.is news description.on.is news description. on.is news description. on.is news description.on.is news description.",
                "time" : "sep 28",
                "source": "prothom alo"

            }
        ];
    }
    
      render() {
        
        return (
            <div className="categoryNewsView">

                <CategoryNewsItemView title={this.catNews[1].description}/>
                <CategoryNewsItemView title={this.catNews[0].description}/>
                <CategoryNewsItemView title={this.catNews[0].description}/>
                <CategoryNewsItemView title={this.catNews[0].description}/>
                
            </div>
        );
      }
}


// CategoryNewsView.propTypes = {
// //   image: PropTypes.any.isRequired,
// //   title: PropTypes.string.isRequired,
// };

export default CategoryNewsView;
