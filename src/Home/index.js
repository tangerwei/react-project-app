import React from 'react';
import { Route } from 'react-router-dom';
import HomeContent from './content';
import { HomeSider } from '../sider';
import User from './user';
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;

class Home extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout id="Home">
                <HomeSider collapsed={this.state.collapsed} />
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <User />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 720 }}>
                        <Route path="/Home/:Module" component={HomeContent} />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export { Home }