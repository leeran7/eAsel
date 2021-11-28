import React, { Component } from 'react';
//import Masonry from "react-masonry-css";
// import Masonry from 'react-masonry-component';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//import "../App.css";

//dummy content - include fetch from atrowork API
const PHOTOS = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/14/03/09/women-5296386_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/14/11/23/wanderer-5297457_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/18/18/53/the-cliffs-5314651_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/19/09/16/fantasy-5316369_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/18/09/42/flowers-5312741_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/20/10/26/plant-5320443_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/05/26/10/54/strawberries-3431122_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/10/18/16/08/wolf-2864647_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/25/19/16/stawberry-4879794_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2019/12/11/15/12/dogs-4688586_960_720.jpg",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/02/06/08/51/water-4823443_960_720.jpg",
  },
];

// const PHOTOS={
//   [imageUrl, setImageUrl]
// }
// fetch('api/dummyArtwork')
// .then(res=> res.json())
// .then(data=> )
// OR pass in prop???

class PhotoGallery extends React.Component {
    render() {
        return (
          //two columns for screen sizes between 350 and 750 etc. 
          <ResponsiveMasonry
            columnsCountBreakPoints={{350: 2, 750: 4} } 
          >
            <Masonry gutter="10px">
                {PHOTOS.map((image, i) => (
                    <img
                        key={i}
                        src={image.imageUrl}
                        style={{width: "100%", display: "block"}}
                        alt=" "
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
        )
    }
}
export default PhotoGallery;