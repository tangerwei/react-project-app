import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

function HomeSider(props) {
    const { pathname, menus } = props;
    const defaultKey = computedDefaultKey(pathname, menus);
    const Menus = menus.map((t, i) => createMenu(t, i));
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={props.collapsed}
            className={props.className}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[defaultKey]} defaultOpenKeys={["0"]}>
                {Menus}
            </Menu>
        </Sider>
    )
}

function createMenu(menus, key) {
    if (Array.isArray(menus.children) && menus.children.length > 0) {
        return (<SubMenu key={key} title={<span><Icon type={menus.icon} /><span>{menus.text}</span></span>}>
            {menus.children.map((s, j) => (
                <Menu.Item key={key + "-" + j}>
                    <Link to={s.path}>
                        <Icon type={s.icon} />
                        <span>{s.text}</span>
                    </Link>
                </Menu.Item>))}
        </SubMenu>)
    } else {
        return (<Menu.Item key={key}>
            <Link to={menus.path}>
                <Icon type={menus.icon} />
                <span>{menus.text}</span>
            </Link>
        </Menu.Item>)
    }
}

function computedDefaultKey(paths, menus) {
    var key = 0;
    menus.map((t, i) => {
        if (paths === t.path) {
            key = i;
        } else if (Array.isArray(t.children)) {
            if (t.children.length > 0) {
                t.children.map((s, j) => {
                    if (paths === s.path) {
                        key = i + "-" + j;
                    }
                    return i;
                })
            }
        }
        return i;
    });
    return key.toString();
}

HomeSider.__ANT_LAYOUT_SIDER = true;

function mapStateToProps(state, ownprops) {
    const { sider, router } = state;
    return {
        ...ownprops,
        menus: sider.config,
        pathname: router.location.pathname
    }
}

export default connect(mapStateToProps)(HomeSider);