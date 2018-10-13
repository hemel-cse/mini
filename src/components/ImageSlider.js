import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 're-carousel'
import SliderIndicatorDots from './SliderIndicatorDots';
import SliderButtons from './SliderButtons';


class ImageSlider extends React.Component {
    
      render() {

        let slider = [];

        this.props.posts.map((post, index) => {
            let content = <div key={index} style={{backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', backgroundImage: `url(${post.image})`, backgroundColor: 'grey',}}><span className="sliderText">{post.title}</span></div>;
            return slider.push(content);
        });

        
        return (
          <div className="slider">
            <Carousel loop auto widgets={[SliderIndicatorDots, SliderButtons]}>
              {slider}
            </Carousel>
          </div>
        );
      }
}


ImageSlider.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default ImageSlider;
