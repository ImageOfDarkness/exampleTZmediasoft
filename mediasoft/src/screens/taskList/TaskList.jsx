import React from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap'
import TaskCard from '../../components/taskCard/TaskCard';
import AddTaskModal from '../../components/addTaskModal/AddTaskModal.jsx';
import allReducers from "../../store/Combain";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTaskAction, deleteTaskAction} from "../../action/Action";

import Store from '../../store/Combain'

function mapStateToProps (state) {
    return {
        allReducers: state
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 2,
            show: false
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
    onDelete(id){
        Store.dispatch(deleteTaskAction(id));
    }
    addTask(text){
        this.setState({
            count:this.state.count+1,
        },()=>{
            Store.dispatch(addTaskAction({text:text,id:this.state.count}));
        })
    }

    render() {
        const {count, show, tasks} = this.state;
        const {allReducers} = this.props;
        console.log('store1',Store.getState());
        return (
            <Card className="listWrapper">
                <Card.Header>
                    Список дел
                    <AddTaskModal addTask={this.addTask} show={show} setShow={this.setShow}/>
                </Card.Header>
                <ListGroup variant="flush">
                    {console.log('what',allReducers.tasks)}
                    {
                        allReducers.tasks.map((task,key)=>(
                            <TaskCard key={key} text={`${task.text} id=${task.id}`} id={task.id} onDelete={this.onDelete} />
                        ))
                    }
                </ListGroup>
            </Card>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTaskAction: addTaskAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);