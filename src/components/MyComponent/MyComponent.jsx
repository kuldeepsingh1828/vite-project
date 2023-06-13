import React from 'react'
import { Component } from 'react'

export default class MyComponent extends Component {
    labelNotRequired = ['submit', 'button', 'range']
    render() {
        return (
            <div>
                {(!this.labelNotRequired.includes(this.props.type)) && <label htmlFor={this.props.id}>{this.props.labelText}</label>}
                {this.props.type != 'button' ?
                    <input type={this.props.type} id={this.props.id} />
                    :
                    <input type={this.props.type} id={this.props.id} value={this.props.labelText} />
                }
            </div>
        )
    }
}
/*
import React from 'react'

export default function MyComponent(this.props) {
    let labelNotRequired = ['submit', 'button', 'range']
    return (
        <div>
            {(!labelNotRequired.includes(this.props.type)) && <label htmlFor={this.props.id}>{this.props.labelText}</label>}
            {this.props.type != 'button' ?
                <input type={this.props.type} id={this.props.id} />
                :
                <input type={this.props.type} id={this.props.id} value={this.props.labelText} />
            }
        </div>
    )
}
*/
