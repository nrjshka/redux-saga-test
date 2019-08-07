import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageGridView = ({ images, loadImages, isLoading }) => {
  const [stateImages, changeImageState] = useState(images);

  useEffect(loadImages, []);
  useEffect(() => changeImageState(images), [images]);

  const onClick = e => {
    e.stopPropagation();

    loadImages();
  };

  return (
    <>
      <div>
        {isLoading && <div>Loading...</div>}
        <button onClick={onClick} disabled={isLoading}>
          Click me!
        </button>
      </div>
      <div>
        {stateImages.map(imgData => (
          <img
            alt="Img"
            id={imgData.id}
            src={imgData.urls.full}
            width="150"
            height="150"
          />
        ))}
      </div>
    </>
  );
};

ImageGridView.defaultProps = {
  images: [],
  loadImages: Function.prototype,
  isLoading: false,
};

ImageGridView.propTypes = {
  images: PropTypes.array,
  loadImages: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ImageGridView;
