/**
 * Created by mupxq on 8/28/17.
 */
import {post} from '../post';

//delete todo List
export function deleteTodoList(values) {
    let query = `mutation($todoListId: String){
                      deleteTodoList(todoListId: $todoListId){
                        todoListId,
                        status,
                        message
                      }
                    }`;
    let variables = {
        todoListId: values
    };

    let data = post(query, variables);
    return data;
}