import './style/App.css';
// import { Outlet } from "react-router-dom";
import React from "react";
import {
    Paper,
    Stack,
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography, AppBar, IconButton, Toolbar, Button
} from "@mui/material";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Menu} from "@mui/icons-material";
const client = new W3CWebSocket('ws://127.0.0.1:8000');


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
            console.log(message);
        };
    }

    render() {
        return (
            <Box sx={{
                height: "100vh",
                display: "flex"
            }}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Nice White
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    mt: 8
                }}>
                    <Box sx={{
                        height: "100%",
                        width: "40%"
                    }}>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" — I'll be in your neighborhood doing errands this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {' — Do you have Paris recommendations? Have you ever…'}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                    <Divider orientation="vertical"/>
                    <Box sx={{
                        width: "100%"
                    }}>
                        Chats
                    </Box>
                </Box>
            </Box>
        );
    }
}

export default App;
