import React from "react";
import './Modal.css';





export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render() {
        return (
        <React.Fragment>
            <button className='button-1' onClick={() => this.setState({isOpen: true})}>Открыть</button>

            { this.state.isOpen && (
            <div className='modal'>
                <div className='modal-body'>
                    <h1>Какой то заголовок</h1>
                    <p>Кокой то небольшой текст</p>
                    <button  className='button-1' onClick={() => this.setState({isOpen: false})}>Закрыть</button>
                </div>
            </div>
            )}
            
        </React.Fragment>
        )
    }
}