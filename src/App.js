import Test from './components/test';
import SchedulerTest from './components/ScheduleTest';
import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities';
import UseEffectAnduseLayoutEffect from './components/UseEffectAndUseLayoutEffect';
import UseState from './components/UseState';
import UseRef from './components/UseRef';
import UseCallbackAndUseMemo from './components/UseCallback&UseMemo';
import UseReducer from './components/UseReducer';
import ReactMemo from './components/ReactMemo';
// import App from './components/UseContext';
import SuspenseTest from './components/suspense/index';

export default function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      {/* <p>{count}</p>
      <input
        type="button"
        value="增加"
        onClick={() => {
          setCount(count + 1);
        }}
      /> */}
      {/* <Test /> */}
      {/* <SchedulerTest /> */}
      {/* <TasksWithDifferentPriorities /> */}
      {/* <UseEffectAnduseLayoutEffect /> */}
      {/* <UseState /> */}
      {/* <UseRef /> */}
      {/* <UseCallbackAndUseMemo /> */}
      {/* <UseReducer initialCount={3}/> */}
      {/* <ReactMemo /> */}
      <SuspenseTest />
    </div>
  );
}

// export default App;
