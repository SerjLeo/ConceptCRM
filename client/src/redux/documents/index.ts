import {DocumentsAction, DocumentsActionTypes, DocumentState} from './types'
import UserStateFactory from './store'
import AlertService from '../../utils/Alerts';

const initialState: DocumentState = UserStateFactory()

const alertService = new AlertService()

const userReducer = (state = initialState, action: DocumentsAction): DocumentState => {
  switch (action.type) {
  case DocumentsActionTypes.GET_DOCUMENTS:
    return {documents: [], initialLoading: false, loading: false}
  case DocumentsActionTypes.ADD_DOCUMENTS:
    return {documents: [], initialLoading: false, loading: false}
  case DocumentsActionTypes.DOCUMENTS_ERROR:
    alertService.push(action.payload.alert)
    return {documents: [], initialLoading: false, loading: false}
  // case DocumentsActionTypes.DOCUMENTS_LOADING:
  //   return state
  default:
    return state
  }
}

export default userReducer
