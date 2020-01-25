import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
export default function TaskCard({text='Не названная задачка'}){
    return(
        <ListGroup.Item>
            <div className="taskCard">
                <span>{text}</span>
                <Button className="delete">Йа кнопочка</Button>
            </div>
        </ListGroup.Item>
    )
}