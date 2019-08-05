import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageGridView = ({ images, onClick, isLoading }) => {
  const [stateImages, changeImageState] = useState(images);

  useEffect(() => changeImageState(images), [images]);

  const onClickHandler = e => {
    e.stopPropagation();

    onClick();
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <button onClick={onClickHandler}>
        Click me!
      </button>
      {stateImages.map((imgData, imgId) => (
        <img
          alt="Img"
          id={imgId}
          src={imgData}
        />
      ))}
    </div>
  );
};

ImageGridView.defaultProps = {
  images: [],
  onClick: Function.prototype,
  isLoading: false,
};

ImageGridView.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ImageGridView;
