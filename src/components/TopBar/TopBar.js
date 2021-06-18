import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';
import logo from '../../images/logo-dynamik.png'


import './top-bar.css'
export class TopBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerState: false
        }
    }
    toggleDrawer = (event) => {
        this.setState({ 'drawerState': !this.state.drawerState })
    };
    render() {
        return (
            <div className="top-bar">
                <div style={{padding:"0 30px"}}>
                    <Row>
                        <Col md={2}>
                            <img style={{ width: '65%' }} src={logo} />
                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={6}>
                            {/* <MenuIcon style={{ float: 'right' }} className="pull-right" onClick={this.toggleDrawer}></MenuIcon>

                            <Drawer style={{ width: 300 }} anchor={'right'} onClose={this.toggleDrawer} open={this.state.drawerState}>
                                <List>

                                    <ListItem>
                                        <ListItemText primary={'Control Panel'} />
                                    </ListItem>

                                </List>
                            </Drawer> */}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default TopBar
