/**
 * Created by mupxq on 8/28/17.
 */
import {post} from '../post';

//get single todo List
export function getSingleTodoList(values) {
    let query = `mutation($todoListId: String){
                        todoList(todoListId:$todoListId){
                          listId,
                          todoList{
                            id,
                            text,
                            completed
                          }
                        }
                        }`;
    let variables = {
        todoListId: values
    };

    let data = post(query, variables);
    return data;
}