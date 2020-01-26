import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
export default function TaskCard({text='Не названная задачка',id=0,onDelete}){
    return(
        <ListGroup.Item>
            <div className="taskCard">
                <span>{text}</span>
                <Button className="delete" onClick={()=>{
                    onDelete(id);
                }}>Удали меня сенпай</Button>
            </div>
        </ListGroup.Item>
    )
}