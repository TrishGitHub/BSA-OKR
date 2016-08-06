import React, { Component } from 'react'
import './objectiveView.css'

export default class ObjectiveView extends Component {
    render() {
        return (
            <div id='application'>{this.props.children}</div>
        )
    }
}
