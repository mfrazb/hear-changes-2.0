// UPDATE STYLESHEET
import './../stylesheets/DateContainer.scss';
import format from 'date-fns/format';
import getDate from 'date-fns/getDate';

const DateContainer = props => {
  return (
    <div id={format(new Date(props.id), 'dd-MM-yyyy')} className='date'>
      <p>{getDate(props.date)}</p>
    </div>
  );
};

export default DateContainer;
