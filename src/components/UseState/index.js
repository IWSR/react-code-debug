// import { useState } from "react";

// function UseState() {
//   const [number, setNumber] = useState(0);

//   return (
//     <div onClick={() => {
//       setNumber((prev) => prev + 1)
//     }}>{ number }</div>
//   )
// }

/**
 * 例子2：插队
*/
// import { useEffect, useState, useRef, useCallback } from "react";

// function UseState() {
//   const dom = useRef(null);
//   const [number, setNumber] = useState(0);
//   // const [, startTransition] = useTransition();

//   useEffect(() => {
//     const timeout1 = setTimeout(() => {
//       // startTransition(() => {
//         setNumber((preNumber) => preNumber + 1);
//       // });
//     }, 500 )

//     const timeout2 = setTimeout(() => {
//       dom.current.click();
//     }, 505)

//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//     }
//   }, []);

//   const clickHandle = useCallback(() => {
//     console.log('click');
//     setNumber(preNumber => preNumber + 2);
//   }, []);

//   return (
//     <div ref={dom} onClick={ clickHandle }>
//       {
//         Array.from(new Array(20000)).map((item, index) => <span key={index}>{ number }</span>)
//       }
//     </div>
//   )
// }

/**
 * 例子3 batch update
*/

import { useCallback, useEffect, useState } from "react";

function UseState() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);

  useEffect(() => {
    let i = 0;
    while (i < 1000000000) {
      i++
    }
    setNum1(111);
    setNum2(222);

    // setTimeout(() => {
    //   setNum1(11);
    //   setNum2(22);
    //   // React will only re-render once at the end (that's batching!)
    // }, 1000);
  }, []);

  const clickHandle = useCallback(() => {
    setNum3(333);
  }, []);

  return (
    <>
      <div>{ num1 }</div>
      <div>{ num2 }</div>
      <p onClick={clickHandle}>click me</p>
      <div>{ num3 }</div>
    </>
  )
}

export default UseState;