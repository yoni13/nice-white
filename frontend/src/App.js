import './style/App.css';
// import { Outlet } from "react-router-dom";
import React from "react";
import {Paper, Stack, Box} from "@mui/material";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Box sx={{
                height: "100vh",
                width: "100wh",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row"
            }}>
                <Box sx={{
                    height: "100%"
                }}>
                    test
                </Box>
                <p>WW</p>
                <p>XD</p>
            </Box>
        );
    }
}

export default App;
