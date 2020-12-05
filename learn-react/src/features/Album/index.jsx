import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'OVER NOW: Chill Thật Chill',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/5/7/8/a5780dc5aa6a2942c0b095755b264954.jpg'
    },
    {
      id: 2,
      name: 'V-Pop Tháng 11/2020 Có Gì Hot?',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/2/8/f/f28f981f3124183cae9a23b038ea256f.jpg'
    },
    {
      id: 3,
      name: 'Nhạc Hoa Remix Gây Nghiện',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/b/4/2/1b423a72648e9a93a4afd26666ac04a7.jpg'
    },
  ]
  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={ albumList }/>
    </div>
  );
}

export default AlbumFeature;