// import { useRef } from "react";

// function UseRef() {
//   const ref1 = useRef(null);
//   const ref2 = useRef({
//     a: 1,
//   });

//   const handleClick = () => {
//     ref2.current = {
//       a: 3
//     }
//   }

//   return (
//     <div ref={ref1} onClick = {handleClick}>123</div>
//   )
// }

// export default UseRef;

import React from "react";

class UseRef extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef);
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

export default UseRef;