import React, { Component } from 'react';
import {Alert} from 'reactstrap';
export default class MessageDisplay extends Component {

    render() {
        return (
            this.props.allMessages.map((key) =>
                <div>
                    <div className='receiver-message'>
                        {key.senderID === localStorage.getItem("receiver") ?
                            (
                                key.receiverID === localStorage.getItem('sender') ?

                                    <div><Alert color='info'>{localStorage.getItem('receiverName')}: {key.message} </Alert></div>

                                    : (
                                        null
                                    )
                            ) : (
                                null
                            )}
                    </div>
                    <div className='sender-message'>
                        {
                            key.receiverID === localStorage.getItem('receiver') ?
                                (
                                    <div><Alert color='success'>{localStorage.getItem('firstName')}: {key.message}</Alert></div>

                                ) : (
                                    null
                                )
                        }
                    </div>
                </div>
            )
        )
    }
}