import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 're-carousel'
import SliderIndicatorDots from './SliderIndicatorDots';
import SliderButtons from './SliderButtons';


class ImageSlider extends React.Component {

    constructor() {
        super(...arguments);
        this.imgArray = [
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
                "title": 'সৌদি-রাশিয়া তেলের বাজার',

            },
            {
                "image": 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
                "title": 'সৌদি-রাশিয়া তেলের বাজার',

            }
        ];
    }
    
      render() {
        
        return (
          <div className="slider">
            <Carousel loop auto widgets={[SliderIndicatorDots, SliderButtons]}>
            <div style={{backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', backgroundImage: `url(${this.imgArray[0].image})`, backgroundColor: 'grey',}}><span className="sliderText">{this.imgArray[0].title}</span></div>
            <div style={{backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', backgroundImage: `url(${this.imgArray[1].image})`, backgroundColor: 'grey',}}><span className="sliderText">{this.imgArray[1].title}</span></div>
            <div style={{backgroundColor: 'grey', height: '100%'}}><span className="sliderText">Frame 1</span></div>
            </Carousel>
          </div>
        );
      }
}


ImageSlider.propTypes = {
  image: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageSlider;
