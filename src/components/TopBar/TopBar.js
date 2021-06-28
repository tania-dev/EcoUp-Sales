import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import logo from '../../images/logo-dynamik.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './top-bar.css'
class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerState: false
        }
        this.logout = this.logout.bind(this);
    }

    logout = () => {
        this.props.history.push('/Login')
    }

    toggleDrawer = (event) => {
        this.setState({ 'drawerState': !this.state.drawerState })
    };
    render() {
        return (
            <div className="top-bar">
                <div style={{ padding: "0 30px" }}>
                    <Row>
                        <Col xs={6} md={2}>
                            <img style={{ width: '65%' }} src={logo} />
                        </Col>
                        <Col xs={6} md={10}>
                            <AccountCircleIcon style={{ float: 'right', width: 43, height: 43 }} className="pull-right" onClick={this.toggleDrawer}></AccountCircleIcon>

                            <Drawer style={{ width: 300 }} anchor={'right'} onClose={this.toggleDrawer} open={this.state.drawerState}>
                                <div className="username">
                                    <h4>Username</h4>
                                </div>
                                <List>
                                    <ListItem button>
                                        <ListItemIcon><PersonIcon /></ListItemIcon>
                                        <ListItemText primary="My Profile" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                                        <ListItemText onClick={this.logout} primary={'Sign Out'} />
                                    </ListItem>

                                </List>
                                <div className="drawer-footer">
                                © Dynamik Oy - All rights reserved 2021
                                </div>
                            </Drawer>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default TopBar
