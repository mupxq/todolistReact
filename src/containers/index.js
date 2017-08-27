/**
 * Created by mupxq on 8/24/17.
 */
import React from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import {connect} from 'react-redux'

//import containers
import LoginAndSignupContainer from './loginAndSignUp/index'

class Index extends React.Component{

    loginCheck(){
        const userInfo = this.props.userInfo || false;
        return userInfo.hasOwnProperty('userEmail');
    }


    render() {
        let logined = this.loginCheck();
        const login = () => (
            logined
                ? <Redirect to="/account" />
                : <LoginAndSignupContainer/>
        );

        return (
            <div>

                <BrowserRouter>
                    <div>
                        <Route exact={true} path="/" component={login}/>
                    </div>
                </BrowserRouter>
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

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)