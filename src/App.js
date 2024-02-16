import './App.css';
import Hero from './components/Hero.jsx';
import Search from './components/Search.jsx';
import Profiles from './components/Profiles.jsx';
import { Data } from './data.js';
function App() {
  return (
    <div>
      <Hero />
      <div className='max-w-[1200px] mx-auto my-12'>
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
        <h1 className='text-7xl text-center text-blue-400'>hello tailwind</h1>
      </div>
    </div>
  );
}

export default App;
