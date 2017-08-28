/**
 * Created by mupxq on 8/28/17.
 */
import {post} from '../post';

//update todo List
export function updateTodoList(values) {
    let query = `mutation($todoListId: String, $todoList: [todoListInputType]){
                        updateTodoList(todoListId: $todoListId, todoList: $todoList){
                          listId,
                          todoList{
                            id,
                            text,
                            completed
                          }
                        }
                        }`;
    let variables = {
        todoListId: values.todoListId,
        todoList: values.todoList

    };

    let data = post(query, variables);
    return data;
}