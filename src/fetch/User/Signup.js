/**
 * Created by mupxq on 8/27/17.
 */
import {post} from '../post';

//post the userEmail and password to server then get to the new user's id
export function signup(values) {
    let query = `mutation($userEmail: String!, $password: String!){
                    signup(userEmail: $userEmail, password: $password){
                    userEmail,
                    userId
                        }
                    }`;
    let variables = {
        "userEmail": values.userEmail,
        "password": values.password
    };

    let data = post(query, variables);
    return data;
}