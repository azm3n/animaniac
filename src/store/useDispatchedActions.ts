import {useDispatch} from 'react-redux'
import {useMemo} from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
const useDispatchedActions = <T extends Record<string, Function>>(
  actions: T,
): T => {
  const dispatch = useDispatch()

  return useMemo(
    () =>
      Object.entries(actions).reduce(
        (acc, [key, action]) => ({
          ...acc,
          [key]: (...args: unknown[]) => dispatch(action(...args)),
        }),
        {} as T,
      ),

    [dispatch, actions],
  )
}

export default useDispatchedActions
