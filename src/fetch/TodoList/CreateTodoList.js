/**
 * Created by mupxq on 8/28/17.
 */
import {post} from '../post';

//post the new todo list to server
export function createTodoList(values) {
    let query = `mutation($todoList: [todoListInputType]){
                          createTodoList(todoList: $todoList){
                            listId,
                            todoList{
                              id,
                              text,
                              completed
                            }
                          }
                        }`;
    let variables = {
        todoList: values
    };

    let data = post(query, variables);
    return data;
}