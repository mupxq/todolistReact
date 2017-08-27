/**
 * Created by mupxq on 8/27/17.
 */
import {post} from '../post';

//post the userEmail and password to server then get to the new user's id
export function login(userEmail, password) {
    let query = `mutation($userEmail: String!, $password: String!){
                    userLogin(userEmail: $userEmail, password: $password){
                    userEmail,
                    userId
                        }
                    }`;
    let variables = {
        "userEmail": userEmail,
        "password": password
    };

    let data = post(query, variables);
    return data;
}