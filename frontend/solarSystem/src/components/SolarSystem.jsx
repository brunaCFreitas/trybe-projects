import { Component } from 'react';
import '../Planets.css';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <ul className="listPlanets">
          {planets.map(({ name, image }) => (
            <PlanetCard
              className={ name }
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))}
        </ul>
      </>
    );
  }
}

export default SolarSystem;
