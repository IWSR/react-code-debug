import { useLayoutEffect, useEffect, useState } from "react";

function UseEffectAnduseLayoutEffect() {
  const [text, setText] = useState(0);

  useEffect(() => {
    console.log('useEffect create');
    
    return () => {
      console.log('useEffect destroy');
    }
  }, [text]);

  useLayoutEffect(() => {
    let i = 0;
    while (i < 10000000000) {
      i += 1
    }
    console.log('useLayoutEffect create', i);

    return () => {
      console.log('useLayoutEffect destroy');
    }
  }, [text]);

  return (
    <div onClick={ () => { setText(1) } }>{ text }</div>
  )
}

export default UseEffectAnduseLayoutEffect;