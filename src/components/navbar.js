import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useSelector,useDispatch } from 'react-redux';
import {accesstoken,profileUser} from '../reactStore/action';

const Navbar = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    // const token = useSelector(state => state.token);
    const user = useSelector(state => state.user);
    console.log("user",user)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    
    const logout = () => {
       sessionStorage.clear();
       dispatch(accesstoken())
       dispatch(profileUser())
       return navigate('/login');
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon />
                        <Box sx={{ flexGrow: 1 }}>
                            <ul className="navul">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                {user ?
                                <li>
                                    <Link to="/post">Blog</Link>
                                </li>:''}
                                {!user ?
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li> : ""
                                }

                            </ul>
                        </Box>
                        {user ?
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar src="/public/Profile-Picture.png" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem key="profile" onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" component="a" href="/profile">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem key="logout" onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" component="a"  onClick={logout} >Logout</Typography>
                                    </MenuItem>

                                </Menu>
                            </Box> : ""
                        }

                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    )
};

export default Navbar;


