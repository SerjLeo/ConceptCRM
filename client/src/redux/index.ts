import {applyMiddleware, combineReducers, createStore} from 'redux'
import userReducer from './user'
import documentsReducer from './documents'
import calcReducer from './calculator'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  user: userReducer,
  documents: documentsReducer,
  calculator: calcReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
