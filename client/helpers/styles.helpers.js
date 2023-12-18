import { getMonth, isSameMonth } from 'date-fns';

export function setDateBackgroundColor(date, today) {
  // if the curr month equals today's month, set background color to white
  if (isSameMonth(date, today)) return 'white';
  // if today's month is even, set odd months to main-color-shade1 and even months to main-color-shade2
  else if (getMonth(today) % 2 === 0)
    return getMonth(date) % 2 === 0
      ? 'var(--main-clr-shade2)'
      : 'var(--main-clr-shade1)';
  // if today's month is odd, set even months to main-color-shade1 and odd months to main-color-shade2
  else
    return getMonth(date) % 2 === 0
      ? 'var(--main-clr-shade1)'
      : 'var(--main-clr-shade2)';
}
