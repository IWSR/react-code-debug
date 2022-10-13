import Test from './components/test';
import SchedulerTest from './components/ScheduleTest';
import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities';
import UseEffectAnduseLayoutEffect from './components/UseEffectAndUseLayoutEffect';
import UseState from './components/UseState';

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
      <UseState />
    </div>
  );
}
