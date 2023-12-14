import './Home.scss';
import CalendarContainer from '../../components/Calendar/CalendarContainer';
import EventsContainer from '../../components/EventsList/EventsContainer';

const Home = () => {
  // ADD STATE FOR CALENDAR & EVENTS HERE

  return (
    <div id='home-container'>
      <CalendarContainer />
      {/*TODO: Add Map Container Here*/}
      <EventsContainer />
    </div>
  );
};

export default Home;
