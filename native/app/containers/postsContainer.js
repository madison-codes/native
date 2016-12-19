import { connect } from 'react-redux'
import { actionCreators } from '../actions/postActions';

const mapStateToProps = (state) => {
  return { posts: state.posts.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (posts) => {
      dispatch(actionCreators.getPosts(posts));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
