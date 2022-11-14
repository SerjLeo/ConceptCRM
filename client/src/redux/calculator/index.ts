import {CalcAction, CalcActionTypes, CalcState} from './types'
import CalcStateFactory from './store'

const initialState: CalcState = CalcStateFactory()

const calcReducer = (state = initialState, action: CalcAction): CalcState => {
  switch (action.type) {
  case CalcActionTypes.GET_RESULT:
    return {result: ''}
  case CalcActionTypes.CALC_ERROR:
  default:
    return state
  }
}

export default calcReducer
