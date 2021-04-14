import { DefinedRange } from './types';

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
} from 'date-fns';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Hoje',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Ontem',
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },
  {
    label: 'Semana Atual',
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Semana Passada',
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  {
    label: 'últimos 7 Dias',
    startDate: addWeeks(date, -1),
    endDate: date,
  },
  {
    label: 'Mês Atual',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Mês Passado',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
