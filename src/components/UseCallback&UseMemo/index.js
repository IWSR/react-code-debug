import { useCallback, useEffect, useMemo, useState } from "react";

function UseCallbackAndUseMemo() {
  const [a, setA] = useState('a');
  const [b] = useState('b');

  const memoizedCallback = useCallback(
    () => {
      console.log(a, b);
    },
    [a, b],
  );

  const memoizedResult = useMemo(() => {
    return {
      a,
      b
    }
  }, [a, b]);

  useEffect(() => {
    setTimeout(() => {
      setA('aaa');
    }, 3000);
  }, []);

  useEffect(() => {
    console.log(memoizedResult, 'memoizedResult change');
  }, [
    memoizedResult
  ]);

  return (
    <div onClick={ memoizedCallback }>click here</div>
  )
}

export default UseCallbackAndUseMemo;