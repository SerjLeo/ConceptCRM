import {IconMap} from '../../pages/Calculators/entities/constants';

export type CalcFieldType = 'text' | 'number' | 'select' | 'range'

type CalcFieldBase = {
    description: string
    name: string
    placeholder?: string
    tooltip?: string
}

export type TextCalcField = CalcFieldBase & {
    type: 'text'
}

export type NumberCalcField = CalcFieldBase & {
    type: 'number'
}

export type SelectCalcField = CalcFieldBase & {
    type: 'select'
    variants: {
        text: string
        value: string | number
    }[]
}

export type CalcField = TextCalcField | NumberCalcField | SelectCalcField

export type CalcGroup = {
    id: number
    title: string
    fields: CalcField[]
}

export type CalcIcon = keyof typeof IconMap

export type Calculator = {
    id: number
    link: string
    icon: CalcIcon
    title: string
    groups: CalcGroup[]
}

export enum CalcActionTypes {
    GET_RESULT = 'GET_RESULT',
    CALC_ERROR = 'CALC_ERROR'
}

export type CalcState = {
    result: string
}

type GetResultAction = {
    type: CalcActionTypes.GET_RESULT
}

type CalcErrorAction = {
    type: CalcActionTypes.CALC_ERROR
}

export type CalcAction = GetResultAction | CalcErrorAction