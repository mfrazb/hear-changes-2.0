// UPDATE STYLESHEET
import './../stylesheets/DateContainer.scss';
import format from 'date-fns/format';
import { getDay, getDate, getMonth, isSameMonth } from 'date-fns';
import { setDateBackgroundColor } from './../helpers/styles.helpers';

const DateContainer = props => {
  const { date, id, today } = props;
  return (
    <div
      id={format(new Date(id), 'dd-MM-yyyy')}
      className='date'
      style={{
        gridColumn: `${Number(getDay(date)) + 2}`,
        backgroundColor: `${setDateBackgroundColor(date, today)}`,
      }}>
      <p>{getDate(props.date)}</p>
    </div>
  );
};

export default DateContainer;
