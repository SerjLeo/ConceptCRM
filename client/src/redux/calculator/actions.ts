import ApiService from '../../api/ApiService'
import {CalcAction, CalcActionTypes} from './types'
import {Dispatch} from 'redux'
import AlertService from '../../utils/Alerts';
const alertService = new AlertService()

export const getResult = (form: Record<string, unknown>, url: string) => async (dispatch: Dispatch<CalcAction>) => {
  const {result, errors} = await ApiService.apiRequest(`/calc/${url}`, form)
  if(errors) {
    alertService.push({type: 'error', message: 'Ошибка при расчетах'})
    dispatch({type: CalcActionTypes.CALC_ERROR})
    return
  }
  dispatch({type: CalcActionTypes.GET_RESULT, payload: {result}})
}
