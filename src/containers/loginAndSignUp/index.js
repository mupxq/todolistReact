/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {
    Tabs,
    Row,
    Col,
    message
} from 'antd';

//setup redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo';

//import component
import LoginForm from '../../component/Login/index';
import SignupForm from '../../component/Signup/index'

//import fetch API
import {login} from '../../fetch/User/Login';
import {signup} from '../../fetch/User/Signup'

const TabPane = Tabs.TabPane;



function callback(key) {
    console.log(key);
}

class LoginAndSignup extends React.Component {


    // Receive user login data
    loginHandle(values){
        const action = this.props.userInfoActions;

        //post data to server
        let data = login(values);
        data.then(res => {
            console.log(res);
            if (res.data.userLogin){
                // if login success then store the userEmail and userId in redux
                action.updateUserInfo(res.data.userLogin);
            }else if (res.errors) {
                // if login is fail then print fail message
               message.error(res.errors[0].message);
            }else {
                message.error('Login fail. Please try again!')
            }
        });
    }

    // Receive user signup data
    signupHandle(values){
        if (values.password === values.confirm){
            let data = signup(values);
            data.then(res => {
                const action = this.props.userInfoActions;
                if (res.data.signup){
                    action.updateUserInfo(res.data.signup);
                }else if(res.errors){
                    message.error(res.errors[0].message);
                }else {
                    message.error('Signup fail. Please try again!')
                }

            });
        }else {
            message.error('Two password is not match!')
        }
    }


    render() {
        return (
            <div>
                <Row justify="center" align="middle">
                    <Col offset={8} span={8}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Login" key="1">
                                <LoginForm loginHandle={this.loginHandle.bind(this)}/>
                            </TabPane>
                            <TabPane tab="Signup" key="2">
                                <SignupForm signupHandle={this.signupHandle.bind(this)}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}


// -------------------redux react --------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginAndSignup)