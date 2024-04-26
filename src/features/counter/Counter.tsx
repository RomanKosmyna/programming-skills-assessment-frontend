import { useAppDispatch, useAppSelector } from '../../hooks'
import { addData } from './testDataSlice';

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering logic
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Inc</button>
       {count}
    </div>
  )
}