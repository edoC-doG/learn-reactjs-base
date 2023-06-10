import React from 'react';
// import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name: 'Nhạc A',
            thumbnaiUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/c/2/f/ac2f6b0a3c7c6aa76fe902690ab14a30.jpg"
        },
        {
            id:2,
            name:'Nhạc B',
            thumbnaiUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/c/c/4ccc7780abb5e8e2de84218f721b7ad3.jpg"
        },  
        {
            id:3,
            name:'Nhạc C',
            thumbnaiUrl:"https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/c/8/53c8e5053f0ec4b5a2bed26c37a27c73.jpg"
        }
    ]


    return (
        <div>
            <h2>Nhạc Lofi</h2>
            <AlbumList albumList= {albumList}/>
        </div>
    );
}

export default AlbumFeature;