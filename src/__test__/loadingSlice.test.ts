import {loadingActions} from '../components/store/slices/loading-slice';
import {LoadingReducer} from '../components/store/slices/loading-slice';

test('should return the initial state', () => {
  const previousState = {isLoading: false};
  expect(LoadingReducer(previousState, loadingActions.isLoading(true))).toEqual(
    {
      isLoading: true,
    }
  )
})
