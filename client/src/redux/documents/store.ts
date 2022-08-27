import {DocumentState} from './types'

const DocumentsStateFactory: () => DocumentState = () => ({
  documents: [],
  error: '',
  initialLoading: false,
  loading: false
})

export default DocumentsStateFactory
