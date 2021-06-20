import React, {useState, useEffect} from 'react';
import {useMediaQuery, useTheme} from '@material-ui/core';
import 'react-sticky-header/styles.css';
import {useDispatch, useSelector} from 'react-redux';
import StickyHeader from 'react-sticky-header';
import AppBar from './AppBar';
import {getBooks} from '../../actions/books';
import Views from './Views';

const Library = (props) => {
  const {darkMode, setDarkMode} = props;
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const [isOpen, setIsOpen] = useState(false);
  const [gridDisplay, setGridDisplay] = useState('none');
  const [listDisplay, setListDisplay] = useState('block');
  const [background, setBackground] = useState({
    listBackground: 'none',
    gridBackground: 'rgb(223, 222, 222)',
  });
  const [bookData, setBookData] = useState({
    imageUrl: '',
    bookName: '',
    author: '',
    description: '',
  });

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  // getBooks from an API
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="library">
      <div
        className="left__container"
        style={{
          backgroundColor: `${darkMode.left_background}`,
          color: `${darkMode.color}`,
        }}
      >
        <div className="container"></div>
        <div className="left__box">
          <div className="left_top">
            <div>
              <h1>Library</h1>
            </div>
            <div className="books_available">
              <div className="options">
                <span style={{fontSize: '1vw', marginRight: 10}}>
                  <i className="far fa-play-circle"></i>
                </span>
                <h3>My Books</h3>
              </div>
              <div className="total__books">
                <p>{books.length}</p>
              </div>
            </div>
            <div className="books_available">
              <div className="options">
                <span style={{fontSize: '1vw', marginRight: 10}}>
                  <i className="far fa-plus-square"></i>
                </span>
                <h3>Add new Books</h3>
              </div>
            </div>
          </div>
          <div className="left_bottom">
            <h1>Settings</h1>

            <div className="books_available">
              <div className="options">
                <div className="total__books">
                  <span style={{fontSize: '1vw', marginRight: 10}}>
                    <i className="fas fa-adjust"></i>
                  </span>
                </div>
                <h3>Dark Mode</h3>
              </div>
              <div className="dark_mode">
                {darkMode.value ? (
                  <p style={{fontSize: '1.5vw', cursor: 'pointer'}}>
                    <i
                      className="fas fa-toggle-on"
                      onClick={() =>
                        setDarkMode({
                          value: false,
                          background: '#fff',
                          color: '#000',
                          left_background: '',
                        })
                      }
                    ></i>
                  </p>
                ) : (
                  <p style={{fontSize: '1.5vw', cursor: 'pointer'}}>
                    <i
                      className="fas fa-toggle-off"
                      onClick={() =>
                        setDarkMode({
                          value: true,
                          background: '#000',
                          color: '#fff',
                          left_background: '#2e2d2d',
                        })
                      }
                    ></i>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right__container">
        <div className="appBar_container">
          {isMatch ? (
            <StickyHeader
              header={
                <div style={{background: '#fff'}}>
                  <AppBar
                    setGridDisplay={setGridDisplay}
                    setBackground={setBackground}
                    setListDisplay={setListDisplay}
                    background={background}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                </div>
              }
            />
          ) : (
            <AppBar
              setGridDisplay={setGridDisplay}
              setBackground={setBackground}
              setListDisplay={setListDisplay}
              background={background}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </div>
        <div className="books__container">
          <Views
            books={books}
            listDisplay={listDisplay}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            bookData={bookData}
            setBookData={setBookData}
            gridDisplay={gridDisplay}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
