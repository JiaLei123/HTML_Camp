import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../Action';

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };
    }

    onSubmit(ev){
        ev.preventDefault();

    }


}