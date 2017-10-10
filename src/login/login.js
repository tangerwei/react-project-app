import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
//import * as Actions from './actions';
import {push} from 'react-router-redux';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/Register">register now!</Link>
        </FormItem>
      </Form>
    );
  }
}

const LForm = Form.create()(NormalLoginForm);

const Login = function(props){
    const {isLogin} = props;
    if(isLogin === true){
        console.log(props);
        return <Redirect to="/Home" />
    }else{
        return <LForm {...props} />
    }
};

function mapStateToProps(state,ownprops){
    const {login,location={}} = state;
    return {
        isLogin:login.isLogin||false,
        location
    };
}

function mapDispatchTOProps(dispatch,ownprops){
    return{
        onLogin:(user)=>{
            //dispatch(Actions.onlogin(user));
            dispatch(push("/Home"));
        }
    }
}

export default connect(mapStateToProps,mapDispatchTOProps)(Login);