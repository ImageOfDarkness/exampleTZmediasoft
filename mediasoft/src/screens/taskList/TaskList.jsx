import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap'
import TaskCard from '../../components/taskCard/TaskCard';
import AddTaskModal from '../../components/addTaskModal/AddTaskModal.jsx';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            show: false,
            tasks: [
            ]
        }
        this.addCount = this.addCount.bind(this);
        this.setShow = this.setShow.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addCount() {
        this.setState({count: this.state.count + 1})
    }

    setShow(show) {
        this.setState({show})
    }

    addTask(text){
        this.setState({
            tasks:[
                ...this.state.tasks,
                {
                    id:this.state.count,
                    text:text,
                }
            ],
            count:this.state.count+1,
        })
    }

    render() {
        const {count, show, tasks} = this.state;
        return (
            <Card className="listWrapper">
                <Card.Header>
                    Список дел
                    <AddTaskModal addTask={this.addTask} show={show} setShow={this.setShow}/>
                </Card.Header>
                <ListGroup variant="flush">
                    {
                        tasks.map((task,key)=>(
                            <TaskCard key={key} text={`${task.text} id=${task.id}`} />
                        ))
                    }
                </ListGroup>
            </Card>
        )
    }
}