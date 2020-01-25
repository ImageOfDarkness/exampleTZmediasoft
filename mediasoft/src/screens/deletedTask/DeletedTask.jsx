import React from 'react';
import TaskCardDeleted from '../../components/taskCardDeleted/TaskCardDeleted';
import {Card, ListGroup} from "react-bootstrap";
import AddTaskModal from "../../components/addTaskModal/AddTaskModal";
import TaskCard from "../../components/taskCard/TaskCard";

let bufer = 0;
export default class DeletedTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                {
                    id: bufer,
                    text: 'rendom',
                },
                {
                    id: bufer + 1,
                    text: 'sver'
                }

            ]
        }
    }

    render() {
        return (
            <Card className="listWrapper">
                <Card.Header>
                    Список дел
                </Card.Header>
                <ListGroup variant="flush">
                    {
                        this.state.tasks.map((task,key) => (
                            <TaskCardDeleted text={task.text} />
                        ))

                    }
                </ListGroup>
            </Card>
        )
    }
}