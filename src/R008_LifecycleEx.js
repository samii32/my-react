import React, { Component } from 'react'

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps call : ' + props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call')
  }
  
  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : ' + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log('6. shouldcomponentupdate call / tmp_state2 = ' + state.tmp_state2);
    return state.tmp_state2
  }

    render() {
        console.log('3. render call');
    return (
      <div>R007_LifecycleEx</div>
    )
  }
}

export default R008_LifecycleEx;