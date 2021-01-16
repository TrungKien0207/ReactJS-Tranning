import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'features/Auth/components/Login';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#ddd',
      textDecoration: 'none',
    },
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.blue,
    zIndex: 1,
    transform: 'translateZ(0px)',
    minWidth: '36px',
  }
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              EZ SHOP
            </Link>
          </Typography>

          <NavLink className={classes.link} to="/todos" activeClassName="active-menu">
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink className={classes.link} to="/albums" activeClassName="active">
            <Button color="inherit">Albums</Button>
          </NavLink>

          <Button className={classes.link} onClick={handleClickOpen} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="xs"
      >
        <Button className={ classes.closeButton } onClick={handleClose}>
          <Close />
        </Button>

        <DialogContent >
          { mode === MODE.REGISTER && (
            <>
              <Register closeDialog={ handleClose }/>

              <Box textAlign="center">
                <Button color="primary" onClick={ () => setMode(MODE.LOGIN) }>
                  Already have an account. Login here 
                </Button>
              </Box>
            </>
          )}

          { mode === MODE.LOGIN && (
            <>
              <Login closeDialog={ handleClose }/>

              <Box textAlign="center">
                <Button color="primary" onClick={ () => setMode(MODE.REGISTER) }>
                  Don't have an account. Register here.
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
