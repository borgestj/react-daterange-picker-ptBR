import { DefinedRange } from './types';

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  subHours,
} from 'date-fns';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Hoje',
    startDate: subHours(date, 3),
    endDate: subHours(date, 3),
  },
  {
    label: 'Ontem',
    startDate: addDays(subHours(date, 3), -1),
    endDate: addDays(subHours(date, 3), -1),
  },
  {
    label: 'Semana Atual',
    startDate: startOfWeek(subHours(date, 3)),
    endDate: endOfWeek(subHours(date, 3)),
  },
  {
    label: 'Semana Passada',
    startDate: startOfWeek(addWeeks(subHours(date, 3), -1)),
    endDate: endOfWeek(addWeeks(subHours(date, 3), -1)),
  },
  {
    label: 'últimos 7 Dias',
    startDate: addWeeks(subHours(date, 3), -1),
    endDate: subHours(date, 3),
  },
  {
    label: 'Mês Atual',
    startDate: startOfMonth(subHours(date, 3)),
    endDate: endOfMonth(subHours(date, 3)),
  },
  {
    label: 'Mês Passado',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
