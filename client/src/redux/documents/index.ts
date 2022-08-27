import {DocumentsAction, DocumentsActionTypes, DocumentState} from './types'
import UserStateFactory from './store'

const initialState: DocumentState = UserStateFactory()

const userReducer = (state = initialState, action: DocumentsAction): DocumentState => {
  switch (action.type) {
  case DocumentsActionTypes.GET_DOCUMENTS:
    return {documents: [], error: '', initialLoading: false, loading: false}
  case DocumentsActionTypes.ADD_DOCUMENTS:
    return {documents: [], error: '', initialLoading: false, loading: false}
  case DocumentsActionTypes.DOCUMENTS_ERROR:
    return {documents: [], error: '', initialLoading: false, loading: false}
  // case DocumentsActionTypes.DOCUMENTS_LOADING:
  //   return state
  default:
    return state
  }
}

export default userReducer
