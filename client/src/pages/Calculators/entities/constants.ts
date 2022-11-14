import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import {Calculator} from '../../../redux/calculator/types';

export const IconMap = {
  audio: VolumeUpIcon
}

const EAcoustic: Calculator = {
  id: 1,
  title: 'Электро-акустический расчет',
  link: 'ea',
  icon: 'audio',
  groups: [
    {
      id: 1,
      title: 'Параметры громкоговорителя',
      fields: [
        {
          name: 'spl',
          description: 'чувствительность громкоговорителя (SPL, дБ)',
          type: 'text'
        },
        {
          name: 'speakerPower',
          description: 'мощность громкоговорителя (P, Вт)',
          type: 'text'
        },
        {
          name: 'odw',
          description: 'ширина диаграммы направленности (ШДН, град)',
          type: 'text'
        },
        {
          name: 'speakerType',
          description: 'тип громкоговорителя',
          type: 'select',
          variants: [
            { text: 'потолочные', value: 1 },
            { text: 'настенные', value: 2 },
            { text: 'рупорные', value: 3 },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Параметры озвучиваемого помещения',
      fields: [
        {
          name: 'noisePower',
          description: 'уровень шума в помещении (N, дБ)',
          type: 'text'
        },
        {
          name: 'ceilingHeight',
          description: 'высота потолков (H, м)',
          type: 'text'
        },
        {
          name: 'roomLength',
          description: 'длина помещения (A, м)',
          type: 'text'
        },
        {
          name: 'roomWidth',
          description: 'ширина помещения (B, м)',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      title: 'Дополнительные параметры',
      fields: [
        {
          name: 'soundPressure',
          description: 'запас по звуковому давлению (ЗД, дБ)',
          type: 'text'
        },
        {
          name: 'calculatedPointDistance',
          description: 'расстояние от громкоговорителя до расчетной точки (r, м)',
          type: 'text'
        }
      ]
    }
  ]

}

export const CalcList: Calculator[] = [
  EAcoustic
]