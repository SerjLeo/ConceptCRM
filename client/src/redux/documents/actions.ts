import {DocumentsAction, DocumentsActionTypes} from './types'
import {Dispatch} from 'redux'
import ApiService from '../../api/ApiService';

export const getDocuments = () => async (dispatch: Dispatch<DocumentsAction>) => {
  const documents = await ApiService.apiRequest('/documents')
  dispatch({ type: DocumentsActionTypes.GET_DOCUMENTS, payload: documents })
}
