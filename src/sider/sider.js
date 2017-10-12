import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function HomeSider(props) {
    const Menus = props.menus.map((t, i) => (
        <Menu.Item key={i}>
            <Link to={t.path}>
                <Icon type={t.icon} />
                <span>{t.text}</span>
            </Link>
        </Menu.Item>
    ));
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={props.collapsed}
            className = {props.className}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {Menus}
            </Menu>
        </Sider>
    )
}

HomeSider.__ANT_LAYOUT_SIDER = true;

function mapStateToProps(state, ownprops) {
    const { sider } = state;
    return {
        ...ownprops,
        menus: sider.config
    }
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSider);