/**
 * Created by mupxq on 6/26/17.
 */
import {GRAPHQL_URL} from '../constants/URL';

export function get(query) {
    // set fetch options get with credentials include
    let myFetchOptions = {
        method: 'GET',
        credentials: 'include'
    };

    //fetch the data then return the data with promise
    let result = fetch(GRAPHQL_URL+ '?query=' + query, myFetchOptions).then(res => res.json());


    return result;
}