import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

export const CounterRedux = () => {
  // Le useSelector me permet de m'abonner à une valeur de mon store
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Premier exemple Redux:</h1>
      <p>{count}</p>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};
