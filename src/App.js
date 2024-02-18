import './App.css';
import Hero from './components/Hero.jsx';
import Search from './components/Search.jsx';
import Profiles from './components/Profiles.jsx';
import { Data } from './data.js';
import SliderFrame from './components/SliderFrame.jsx';
import Testimonials from './components/Testimonials.jsx';

function App() {
  return (
    <div>
      <Hero />
      <div className='max-w-[1100px] mx-auto my-12'>
        <Search />

        {Data.map((user) => (
          <Profiles
            key={user.id}
            id={user.id}
            header={user.header}
            description={user.description}
            image={user.image}
            date={user.date}
          />
        ))}
      </div>

      <SliderFrame />
      <Testimonials />
    </div>
  );
}

export default App;
