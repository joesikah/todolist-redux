import { Checkbox } from "@mui/material";
import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/TodoSlice";

const TodoItem = ({ name, done, _id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(_id)); 
    }

    
    return (
        <div className="todoItem">
        {/* Checkbox from MUI */}
        <Checkbox
            checked={done}
            color={"primary"}
            onChange={handleCheck}
            inputProps={{ "aria-label": "secondary checkbox" }}
        />

        {/* Name of task */}
        <p className={done && "todoItem--done"}>{name}</p>
        </div>
    );
};

export default TodoItem;
