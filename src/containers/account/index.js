/**
 * Created by mupxq on 8/27/17.
 */
import React from 'react'
import {
    Affix,
    Button,
    Col,
    Row
} from 'antd';

import {
    Link,
} from 'react-router-dom'



class Account extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    //     // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    // }


    render() {
        return (
            <div>
                <Row>
                    <Col offset={16} span={4}>
                        <Affix>
                            <Button type="primary">
                                <Link to="/newList">New To Do List</Link>
                            </Button>
                        </Affix>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Account
