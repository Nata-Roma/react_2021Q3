import {errorActions} from '../components/store/slices/error-slice';
import {ErrorReducer} from '../components/store/slices/error-slice';

test('should return the initial state', () => {
  const previousState = {isError: false};
  expect(ErrorReducer(previousState, errorActions.isError(true))).toEqual(
    {
      isError: true,
    }
  )
})
