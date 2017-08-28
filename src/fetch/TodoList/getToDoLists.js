/**
 * Created by mupxq on 8/28/17.
 */
import {get} from '../get';

export function getTodoListData (){
    let query = `query{
                      todoListsQuery{
                        listId,
                        todoList{
                          id,
                          text,
                          completed
                        }
                      }
                    }`;

    let data = get(query);
    return data;

}