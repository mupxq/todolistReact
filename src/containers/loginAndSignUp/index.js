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

const TabPane = Tabs.TabPane;



function callback(key) {
    console.log(key);
}

class LoginAndSignup extends React.Component {


    // Receive user data
    loginHandle(values){
        const action = this.props.userInfoActions;

        //post data to server
        let data = login(values);
        data.then(res => {
            if (res.userLogin){
                // if login success then store the userEmail and userId in redux
                action.updateUserInfo(res.userLogin);
            }else {
                // if login is fail then print fail message
                message.error('Login fail. Please try again!')
            }
        });
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
                                <SignupForm/>
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