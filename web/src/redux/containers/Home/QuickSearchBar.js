import { connect } from 'react-redux';

import QuickSearchBar from 'src/components/Home/QuickSearchBar';

// action creators
import {
  handleSearchChange,
  handleSearchSubmit,
  handleQuickSearch,

} from '../../actions/creators';

const mapStateToProps = (state) => ({
  searchBar: state.home.searchBar,
  value: state.home.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (value) => dispatch(handleSearchChange(value)),
  handleSearchSubmit: () => dispatch(handleSearchSubmit()),
  handleQuickSearch: () => dispatch(handleQuickSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearchBar);
