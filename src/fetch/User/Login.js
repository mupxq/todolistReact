/**
 * Created by mupxq on 6/27/17.
 */
import {post} from '../post';

//post the userEmail and password to server to verification then get userEmail and userId from the server
export function login(values) {
    let query = `mutation($userEmail: String!, $password: String!){
                    userLogin(userEmail: $userEmail, password: $password){
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