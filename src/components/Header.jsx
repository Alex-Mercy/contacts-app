import React from 'react';
import { useSelector, useDispatch, } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { logOut } from '../store/auth/authActions';
import { addSearchValue } from '../store/contacts/contactsActions';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 30,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    marginRight: '5px'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  loginButton: {
    marginRight: 10
  }
}));



export default function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const searchValue = useSelector(({ contacts }) => contacts.searchValue);
  const auth = useSelector((state) => state.auth);

  const handleChange = (e) => {
    dispatch(addSearchValue(e.target.value));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CssBaseline />
          <Typography className={classes.title} variant="h6" noWrap>
            <Button component={Link} to="/" color="inherit">Contacts</Button>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              value={searchValue}
            />
          </div>
          {!auth.currentUser ?
            <>
              <Button className={classes.loginButton} component={Link} variant="contained" color="primary" to="/login">Log in</Button>
              <Button component={Link} to="/register" variant="contained" color="primary">Sign up</Button>
            </>
            : <Button onClick={() => dispatch(logOut())} >Logout</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}