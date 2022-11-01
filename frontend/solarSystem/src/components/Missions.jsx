import { Component } from 'react';
import '../Missions.css';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="content-missions">
        <Title headline="Missões" />
        <div className="listMissions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
