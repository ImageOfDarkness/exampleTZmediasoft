import React from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class AddTaskModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskMessage: '',
        }
    }

    handleClose = () => this.props.setShow(false);
    handleShow = () => this.props.setShow(true);

    successHundler = () => {
        console.log(this.state.taskMessage);
        if (this.state.taskMessage) {
            this.props.addTask(this.state.taskMessage);
            this.setState({
                taskMessage: ''
            })
            this.handleClose();
        }else{
            this.setState({
                taskMessage: 'Уюлюдак, мать твою, а ну иди сюда, говно собачье!'
            })
        }

    }
    onChangeHundler = (e) => {
        this.setState({
            taskMessage: e.target.value
        })
    }

    render() {
        const {show} = this.props;
        const {taskMessage} = this.state;
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Дабавить задачю
                </Button>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Напишите задачю</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input value={taskMessage} onChange={this.onChangeHundler} placeholder="текст по умолчанию"
                               type="text"/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={this.successHundler}>
                            Дабавить
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}