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
    const nextProps = { ...ownProps, ...nextState, ...actionCreators };

    if (!equals(result, nextProps)) result = nextProps;

    return result
  }
})(ImageGridView);
