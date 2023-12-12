// UPDATE STYLESHEET
import './../stylesheets/DateContainer.scss';
import format from 'date-fns/format';
import { getDay, getDate } from 'date-fns';

const DateContainer = props => {
  return (
    <div
      id={format(new Date(props.id), 'dd-MM-yyyy')}
      className='date'
      style={{ gridColumn: `${Number(getDay(props.date)) + 2}` }}>
      <p>{getDate(props.date)}</p>
    </div>
  );
};

export default DateContainer;
