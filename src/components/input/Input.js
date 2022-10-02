import React, { useState } from 'react'
import './Input.css'
import { saveTodo } from '../../features/TodoSlice';
//useDispatch is a tool to interact with redux
import { useDispatch } from 'react-redux';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';

const Input = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    //Error
    const ErrorAlert = () => {
        return(
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    You haven't added a task!
                </Alert>
            </Stack>
        )
    }

    //the add function that is actual shoting into redux
    const addTodo = () => {
        if(input === ''){
            <ErrorAlert />
        }
        else
        {
            console.log(`Adding ${input}`);

            dispatch(saveTodo({
                item: input,
                done: false,
                _id: Date.now()
            }));

            setInput('');
        }
    }


    return (
        <div className='input'>
            <input type='text' value={input} onChange={e=>setInput(e.target.value)} autoFocus/>
            <Button variant="outlined" type='submit' onClick={addTodo}>+ Add</Button>
        </div>
    )
}

export default Input