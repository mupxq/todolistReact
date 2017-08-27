/**
 * Created by mupxq on 6/26/17.
 */
import {GRAPHQL_URL} from '../constants/URL';

export function post(query, variables) {
    // set fetch options post with credentials include
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let myFetchOptions = {
        method: 'POST',
        headers: myHeaders,
        credentials: 'include',
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };
    //fetch the data then return the data with promise
    const data = fetch(GRAPHQL_URL, myFetchOptions).then(res => res.json())
        .then(json => {
            console.log(json);
            return json.data;
        });
    return data;
}