import { grabData }  from '../actions/grabData'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { allData: state.allData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    grabAllData: (data) => {
      dispatch(grabData.grabAllData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
