import { bindActionCreators } from 'redux';
import { connectAdvanced } from 'react-redux';
import { equals } from 'ramda';

import ImageGridView from './View';
import { loadImages } from '../../actions';

export default connectAdvanced(dispatch => {
  const actionCreators = bindActionCreators({
    loadImages,
  }, dispatch);

  let result = {};

  return (nextState, ownProps) => {
    let { imageStats, images } = nextState;

    images = images.map(image => {
      if (imageStats[image.id]) {
        image.statsId = imageStats[image.id].downloads;
      } else {
        image.statsId = null;
      }
      return image;
    });

    const nextProps = { ...ownProps, ...nextState, ...actionCreators, images };

    if (!equals(result, nextProps)) result = nextProps;

    return result
  }
})(ImageGridView);
