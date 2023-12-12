import './../stylesheets/CalendarContainer.scss';
import DateContainer from './DateContainer';
import startOfToday from 'date-fns/startOfToday';
import { addDays, endOfMonth, getDay } from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

function findFirstDate(selectedDate: Date) {
  // if the first day of the month for the selected date is 0, return first day of month for selected date 
  // if first day of month for selected date is not 0, subtract first day +1 from # of days in last month
  // this determines start date for entire calendar 
  return getDay(selectedDate);
}

const CalendarContainer = () => {
  const today = startOfToday();
  const lastDay = endOfMonth(addDays(today, 365));

  // include any trailing days from the previous month if the curr month does not start on a Sunday
  console.log(findFirstDate(today));

  // determine the first date to include in the calendar based on the day of the week of the calendar based on
  const allDates = eachDayOfInterval({
    start: new Date(today),
    end: new Date(lastDay),
  });

  const dates = allDates.map((date, index) => {
    return <DateContainer id={`${date}`} key={`date-${index}`} date={date} />;
  });

  return (
    <div id='calendar-container'>
      <h2 id='calendar-year'>2023</h2>
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
        <div className='month'>MONTH PLACEHOLDER</div>
        {dates}
      </div>
    </div>
  );
};

export default CalendarContainer;
