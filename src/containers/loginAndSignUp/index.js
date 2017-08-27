/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {
    Tabs,
    Row,
    Col
} from 'antd';
//import component
import LoginForm from '../../component/Login/index';

const TabPane = Tabs.TabPane;



function callback(key) {
    console.log(key);
}

class LoginAndSignup extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    //     // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // }


    render() {
        return (
            <div>
                <Row justify="center" align="middle">
                    <Col offset={9} span={6}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Login" key="1">
                                <LoginForm/>
                            </TabPane>
                            <TabPane tab="Signup" key="2">Content of Tab Pane 2</TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginAndSignup
