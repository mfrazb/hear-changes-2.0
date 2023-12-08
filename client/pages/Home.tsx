import './../stylesheets/Home.scss';
import CalendarContainer from './../components/CalendarContainer';
import EventsContainer from './../components/EventsContainer';

const Home = () => {
  // ADD STATE FOR CALENDAR & EVENTS HERE

  return (
    <div id='home-container'>
      <CalendarContainer />
      <EventsContainer />
    </div>
  );
};

export default Home;
