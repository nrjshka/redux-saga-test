import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageGrid = ({ images }) => {
  const [stateImages, changeImageState] = useState(images);

  useEffect(() => changeImageState(images), [images]);

  return (
    <div>
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

ImageGrid.defaultProps = {
  images: [],
};

ImageGrid.propTypes = {
  images: PropTypes.array,
};

export default ImageGrid;
