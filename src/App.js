import { useState } from 'react';
import Test from './components/test';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <input
        type="button"
        value="增加"
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <Test />
    </div>
  );
}
