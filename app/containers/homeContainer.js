import {bindActionCreators} from 'redux';
import * as notesActions from '../actions/notesActions';
import {connect} from 'react-redux';
import Home from '../screens/home';

const mapStateToProps = state => ({
  notes: state.notes,
});

const actions = {
  ...notesActions,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
