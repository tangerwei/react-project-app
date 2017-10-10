import React from 'react';
import { connect } from 'react-redux';
// import * as Actions from './actions';
import {push} from 'react-router-redux';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const residences = [{
    value: 'shanghai',
    label: '上海',
    children: [{
        value: 'shanghaishi',
        label: '上海市',
        children: [{
            value: 'huangpu',
            label: '黄浦',
        }, {
            value: 'xuhui',
            label: '徐汇',
        }, {
            value: 'changning',
            label: '长宁',
        }, {
            value: 'jingan',
            label: '静安',
        }],
    }],
}];

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        isAgreeWithRead: false
    };
    handleChecked = (e) => {
        this.setState({
            ...this.state,
            isAgreeWithRead: !this.state.isAgreeWithRead
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onRegister(values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 60 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

        return (
            <Form onSubmit={this.handleSubmit} className="register-from">
                <FormItem {...tailFormItemLayout}>
                    <Icon type="github" style={{ fontSize: 16, color: '#08c' }} />
                    <strong style={{ fontSize: 18, textAlign: 'center', display: 'inline-block', width: 225 }}>Welcome To Us</strong>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Password"
                    hasFeedback
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Confirm Password"
                    hasFeedback
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Nickname&nbsp;
                <Tooltip title="What do you want other to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                    hasFeedback
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Habitual Residence"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['shanghai', 'shanghaishi', 'xuhui'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader options={residences} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Phone Number"
                >
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Captcha"
                    extra="We must make sure that your are a human."
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('captcha', {
                                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                            })(
                                <Input size="large" />
                                )}
                        </Col>
                        <Col span={12}>
                            <Button size="large">Get captcha</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox onChange={this.handleChecked}>I have read the <a href="">agreement</a></Checkbox>
                        )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {this.state.isAgreeWithRead === false ? <Button type="primary" htmlType="submit" disabled>Register</Button> : <Button type="primary" htmlType="submit">Register</Button>}
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

function Register(props) {
    return <WrappedRegistrationForm {...props} />
}
function mapStateToProps(state, ownProps) {
    return {

    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onRegister(){
            dispatch(push("/Home"));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);