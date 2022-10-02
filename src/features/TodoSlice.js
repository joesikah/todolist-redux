import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    // const [todoList, setTodoList] = useState([]); this is just another way of writing this function
    todoList: []
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //reducers are just functions that run through reducx
    saveTodo: (state, action) => {
        //state is the current state of your app and action is wahtever action you perform
        //action returns a payload in the form of an object{}
        state.todoList.push(action.payload)
    },
    setCheck: (state, action) => {
        state.todoList.map(data => {
            if(action.payload === data._id)
            {
                if(data.done === true)
                {
                    data.done = false;
                }
                else
                {
                    data.done = true;
                }
            }
        })
    }
  }
});

export const { saveTodo,setCheck } = TodoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default TodoSlice.reducer