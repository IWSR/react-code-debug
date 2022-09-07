import * as React from "react";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 'init data',
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({data: 'data 1'});
    //   // console.log("dom value", document.querySelector('#state').innerHTML);
    //   this.setState({data: 'data 2'});
    //   // console.log("dom value", document.querySelector('#state').innerHTML);
    //   this.setState({data: 'data 3'});
    //   // console.log("dom value", document.querySelector('#state').innerHTML);
    // }, 1000)
    this.setState({
      data: 'did mount state'
    })

    console.log("did mount state ", this.state.data);
    // did mount state data

    setTimeout(() => {
      this.setState({
        data: 'setTimeout'
      })

      console.log("setTimeout ", this.state.data);
    })
  }

  render() {
    return (
      <div id="state">
        {this.state.data}
      </div>
    )
  }
}

export default Test;