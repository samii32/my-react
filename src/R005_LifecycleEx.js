import React, { Component } from 'react'

class R005_LifecycleEx extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    render() {
        console.log('3.render call');
        return (
        <div>R005_LifecycleEx</div>
        )
  }
}

export default R005_LifecycleEx;