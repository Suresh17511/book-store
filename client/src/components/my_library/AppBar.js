import React, {useState} from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getBooksBySearch} from '../../actions/books';

const AppBar = (props) => {
  const {setGridDisplay, setBackground, setListDisplay, background, darkMode} =
    props;
  const [search, setSearch] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const searchBook = () => {
    if (search.trim()) {
      dispatch(getBooksBySearch({search}));
      history.push(`/books/search?searchQuery=${search || 'none'}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchBook();
    }
  };

  return (
    <div
      className="app__bar"
      style={{
        backgroundColor: `${darkMode.background}`,
        color: `${darkMode.color}`,
      }}
    >
      <div className="appBar__left">
        <div className="appBar__title">
          <ButtonBase onClick={() => history.push('/')}>
            <h1>Book Library</h1>
          </ButtonBase>

          <span>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        </div>
        <div className="appBar__views">
          <div
            className="grid"
            onClick={() => {
              setGridDisplay('none');
              setListDisplay('block');
              setBackground({
                listBackground: '',
                gridBackground: 'rgb(223, 222, 222)',
              });
            }}
          >
            <i
              className="fas fa-th-large"
              style={{background: `${background.gridBackground}`}}
            ></i>
          </div>
          <div
            className="grid"
            onClick={() => {
              setListDisplay('none');
              setGridDisplay('block');
              setBackground({
                gridBackground: '',
                listBackground: 'rgb(223, 222, 222)',
              });
            }}
          >
            <i
              className="fas fa-th-list"
              style={{background: `${background.listBackground}`}}
            ></i>
          </div>
        </div>
      </div>
      <div className="appBar__right">
        <div className="search-box">
          <input
            type="text"
            className="search-text"
            onKeyPress={handleKeyPress}
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Anything..."
          />
          <button className="search-btn" onClick={searchBook}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
