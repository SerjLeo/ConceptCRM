import {AlertBase} from '../../utils/Alerts';

export enum DocumentsActionTypes {
    GET_DOCUMENTS = 'GET_DOCUMENTS',
    ADD_DOCUMENTS = 'ADD_DOCUMENTS',
    DOCUMENTS_LOADING = 'DOCUMENTS_LOADING',
    DOCUMENTS_ERROR = 'DOCUMENTS_ERROR',
}

export type DocumentType = 'word' | 'pdf'

export type Document = {
    type: DocumentType
    name: string
    link: string
}

export type DocumentState = {
    documents: Document[]
    loading: boolean
    initialLoading: boolean
}

export type AddDocumentForm = {
    name: string
    file: Blob
}

type DocumentErrorAction = {
    type: DocumentsActionTypes.DOCUMENTS_ERROR
    payload: { alert: AlertBase }
}

type GetDocumentsAction = {
    type: DocumentsActionTypes.GET_DOCUMENTS
    payload: { documents: Document[] }
}

type AddDocumentsAction = {
    type: DocumentsActionTypes.ADD_DOCUMENTS
    payload: { document: Document }
}

export type DocumentsAction = DocumentErrorAction | GetDocumentsAction | AddDocumentsAction
