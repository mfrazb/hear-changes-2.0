import DateContainer from './DateContainer';
import { setDateBackgroundColor } from './../../helpers/styles.helpers.js';
import startOfToday from 'date-fns/startOfToday';
import {
  addDays,
  eachDayOfInterval,
  eachMonthOfInterval,
  endOfMonth,
  getDay,
  getDaysInMonth,
  getYear,
  startOfMonth,
  subDays,
  subMonths,
} from 'date-fns';

function findFirstDate(selectedDate: Date) {
  // input - default - today's date
  // input - user-selected - today's date in past or future years
  // output - first date to populate calendar

  let startDate = startOfMonth(selectedDate);
  const dayOfStartDate = Number(getDay(startDate));

  if (dayOfStartDate !== 0) {
    const lastDayPrevMo = endOfMonth(subMonths(selectedDate, 1));
    startDate = subDays(lastDayPrevMo, dayOfStartDate - 1);
  }

  return startDate;
}

function getMonthGridRows(arr) {
  // input - array of months
  // output - array of subarrays of starting and ending grid row positions for each month - ex. [1, 6]

  let rowCount = 2;
  const monthGridRows = arr.map((month, index) => {
    const firstDay = getDay(month);
    const lastDay = getDay(endOfMonth(month));
    const increment = getDaysInMonth(month) - (7 - firstDay + (lastDay + 1));

    const firstRow = rowCount;
    if (firstDay <= 3 || index === 0) rowCount += 1;
    rowCount += increment / 7;
    if (lastDay >= 3 || index === arr.length - 1) rowCount += 1;
    const lastRow = rowCount;

    return [firstRow, lastRow];
  });

  return monthGridRows;
}

const CalendarContainer = () => {
  const today = startOfToday();

  // start date - include all dates for current mo and trailing dates for prev mo
  const startDate = findFirstDate(today);
  // end date - last day of month for current date one year from today
  const endDate = endOfMonth(addDays(today, 365));

  const allDates = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });

  const allMonths = eachMonthOfInterval({
    start: new Date(today),
    end: new Date(endDate),
  });

  const dates = allDates.map((date, index) => {
    return (
      <DateContainer
        id={`${date}`}
        date={date}
        today={today}
        key={`date-${index}`}
      />
    );
  });

  const monthGridPositions = getMonthGridRows(allMonths);

  const months = allMonths.map((month, index) => {
    return (
      <h2
        id={`${month.toLocaleString('default', { month: 'short' })}-${getYear(
          month,
        )}`}
        className='month'
        style={{
          gridRow: `${monthGridPositions[index][0]} / ${monthGridPositions[index][1]}`,
          backgroundColor: `${setDateBackgroundColor(month, today)}`,
        }}
        key={`${month}-${index}`}>
        {month.toLocaleString('default', { month: 'long' })}
      </h2>
    );
  });

  return (
    <div id='calendar-container'>
      <h1 id='calendar-year'>2023</h1>
      {/*
      FORM FOR USER TO CHANGE YEAR
      <form id='user-yr' action='#' className='header2 year'>
        <input id='yearSelected' type='text' name='yearSelected' value='Year' />
  </form>*/}
      <div id='calendar-dates'>
        <div className='day res'></div>
        <div className='day full-text'>Sunday</div>
        <div className='day short-text'>Sun</div>
        <div className='day abbr-text'>S</div>
        <div className='day full-text'>Monday</div>
        <div className='day short-text'>Mon</div>
        <div className='day abbr-text'>M</div>
        <div className='day full-text'>Tuesday</div>
        <div className='day short-text'>Tues</div>
        <div className='day abbr-text'>T</div>
        <div className='day full-text'>Wednesday</div>
        <div className='day short-text'>Wed</div>
        <div className='day abbr-text'>W</div>
        <div className='day full-text'>Thursday</div>
        <div className='day short-text'>Thur</div>
        <div className='day abbr-text'>Th</div>
        <div className='day full-text'>Friday</div>
        <div className='day short-text'>Fri</div>
        <div className='day abbr-text'>F</div>
        <div className='day full-text'>Saturday</div>
        <div className='day short-text'>Sat</div>
        <div className='day abbr-text'>S</div>
        {months}
        {dates}
      </div>
    </div>
  );
};

export default CalendarContainer;
