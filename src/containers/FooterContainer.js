import { connect } from 'react-redux'
import { setFilter } from '../action/index'
import Footer from '../components/Footer'
import { getFilter } from '../selectors/index'

const mapStateToProps = (state) => ({
  filter: getFilter(state)
})

const mapDisplatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDisplatchToProps)(Footer)