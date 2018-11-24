import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";
import store from "../index";
import usersApi from "../apis/UsersApi";
import parkingLotApi from '../apis/ParkingLotsApi'
import DashBoardsApi from '../apis/DashBoardsApi'
import parkingBoyApi from '../apis/ParkingBoysApi'
import order from '../apis/orderApi'

export default class MenuList extends Component {
    constructor(props) {
        super(props);
    }
    refreshEmployee=()=>{
        usersApi.init(store.dispatch);
    };
    refreshParkingLot=()=>{
        parkingLotApi.init(store.dispatch);
    };
    refreshParkingBoy=()=>{
        parkingBoyApi.init(store.dispatch);
    };
    refreshDashBoards=()=>{
        DashBoardsApi.init(store.dispatch);
    };
    refreshOrder=()=>{
        order.init(store.dispatch);
    };
    render() {
        console.log(window.location.pathname);
        return (
            <Menu defaultSelectedKeys={[window.location.pathname]} >
                {window.localStorage.roles==="管理员"&&
                <Menu.Item key="/manager/users" onClick={()=>this.refreshEmployee()}>
                    <Link to="/manager/users"><Icon type="form"/>员工管理</Link>
                </Menu.Item>}
                <Menu.Item key="/manager/parkinglots" onClick={()=>this.refreshParkingLot()}>
                    <Link to="/manager/parkinglots"><Icon type="form"/>停车场管理</Link>
                </Menu.Item>
                <Menu.Item key="/manager/parkingboys" onClick={()=>this.refreshParkingBoy()}>
                    <Link to="/manager/parkingboys"><Icon type="form"/>停车员管理</Link>
                </Menu.Item>
                <Menu.Item key="/manager/dashboards" onClick={()=>this.refreshDashBoards()}>
                    <Link to="/manager/dashboards"><Icon type="form"/>停车场Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/manager/orders" onClick={()=>this.refreshOrder()}>
                    <Link to="/manager/orders"><Icon type="form"/>订单管理</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
