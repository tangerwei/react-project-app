import React from 'react';
import { connect } from 'react-redux';
import { Badge, Avatar, Popover,Icon } from 'antd';

function getcontent(user) {
    return (<div>
        <p>hello {user.userName}</p>
        <p>this is a notice pop</p>
        <p>you can get data,and group this</p>
        <p>...</p>
    </div>)
}

function User(props) {
    return <div className="UserMes">
        <span style={{ marginRight: 24 }}>
            <Popover content={getcontent(props.user)} title="通知" placement="topLeft">
                <Badge overflowCount={999} count={props.count}><Avatar icon="user" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>
                <span style={{marginLeft:"10px",marginRight:"5px"}}>{props.user.userName}</span>
            </Popover>
            <Icon type="global" style={{ fontSize: 16, color: '#08c' }} />
        </span>
    </div>
}

function mapStateToProps(state, ownProps) {
    const { login } = state;
    return {
        count: 1000,
        user: login.user||{}
    }
}
export default connect(mapStateToProps)(User);