import {DocumentState} from './types'

const DocumentsStateFactory: () => DocumentState = () => ({
  documents: [],
  initialLoading: false,
  loading: false
})

export default DocumentsStateFactory
