import './../stylesheets/CalendarContainer.scss';
import DateContainer from './DateContainer';
import startOfToday from 'date-fns/startOfToday';
import { addDays, endOfMonth } from 'date-fns';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';

const CalendarContainer = () => {
  const today = startOfToday();
  const lastDay = endOfMonth(addDays(today, 365));

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
        <div>{dates}</div>
      </div>
    </div>
  );
};

export default CalendarContainer;
