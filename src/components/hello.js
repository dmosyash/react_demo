import React, { Component } from 'react';
import Slider from 'react-slick';
import Name from './name';
import FetchDemo from './fetchData';

class Hello extends Component {
    constructor () {
        super();
        this.loadCount = 0;
        this.imageCount = 4;
        this.state = {
            slides : [{
                id: 1,
                image: 'http://i.imgur.com/vYdoAKu.jpg'
            }, {
                id: 2,
                image: 'http://i.imgur.com/PUD9HQL.jpg'
            }, {
                id: 3,
                image: 'http://i.imgur.com/Lfv18Sb.jpg'
            }, {
                id: 4,
                image: 'http://i.imgur.com/tmVJtna.jpg'
            }],
            isShow: false,
            roles: []
        }
        this.handleImageLoad = function( imageLocation, callback ) {
            this.loadCount++;
            console.log(Math.ceil( this.loadCount / this.imageCount * 100 ));
            if ( this.loadCount === this.imageCount ) {
                return callback( this.imageLocations );
            }
            return;
        }
    }

    componentWillMount = function () {
        var img;
        var that = this;
        for(let i=0; i<4; i++) {
            console.log(this.state.slides[i].image);
            img = new Image();
            img.onload = function () {
                console.log(that.state.slides[i].image);
                that.handleImageLoad(that.state.slides[i].image, function () {
                    that.setState({isShow: true});
                    that.state.isShow = 1;
                    return;
                });
            }
            img.src = this.state.slides[i].image;
        }
    }

    componentDidMount = function () {
        let db = new window.PouchDB('my-db');
        db.put({_id: 'iiuu'});
    }

  render() {
    let names = this.props.names.map(item => {
        return (
            <Name key={item.id} value={item.name} />
        );
    });
    let slides = this.state.slides.map(slide => {
        return (
            <div key={slide.id}><img key={slide.id} src={slide.image} /></div>
        );
    });

    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div>
            {names}
            <FetchDemo subreddit="reactjs"/>
            {this.state.isShow ? <div className="container">
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div> : null}
        </div>
    );
  }
}

export default Hello;
