import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from "./data"

function App() {

  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            title={item.title}
            location={item.location}
            map={item.googleMapsUrl}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
            image={item.imageUrl}
        />
    )
}) 

  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        {cards}
      </div>
    </div>
  );
}

export default App;
