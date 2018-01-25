import { connect } from 'react-redux';
import { addBoard, deleteBoard } from '../actions/boardActions';
import AllBoards from '../components/AllBoards/AllBoards';

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBoard: name => {
      dispatch(addBoard(name));
    },
    deleteBoard: id => {
      dispatch(deleteBoard(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBoards);
