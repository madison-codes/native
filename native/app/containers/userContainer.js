import { connect } from 'react-redux';
import { getUser } from '../actions/userActions';

const mapStateToProps = (state) => {
  return { user: state.user.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch(getUser.getUser(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
