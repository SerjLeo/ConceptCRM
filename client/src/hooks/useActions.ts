import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../redux/user/actions'
import * as documentsActions from '../redux/documents/actions'
import * as calcActions from '../redux/calculator/actions'
import {useMemo} from 'react'

const allActions = {
  ...userActions,
  ...documentsActions,
  ...calcActions
}

const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}

export default useActions
