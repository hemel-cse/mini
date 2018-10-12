import React from 'react';
import PropTypes from 'prop-types';

import CategoryNewsItemView from './CategoryNewsItemView';


class CategoryNewsView extends React.Component {
    
      render() {
        const { catNews } = this.props;
        let CatNewsItem = [];

        catNews.map((cat, index) => {
            let catList = <CategoryNewsItemView key={index} category={cat}/>;

            return CatNewsItem.push(catList);
        });

        console.log(this.props.catNews);
        
        return (
            <div className="categoryNewsView">
                 {CatNewsItem}
            </div>
        );
      }
}


CategoryNewsView.propTypes = {
    catNews: PropTypes.array.isRequired,
};

export default CategoryNewsView;
