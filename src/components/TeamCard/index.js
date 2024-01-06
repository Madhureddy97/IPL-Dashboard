// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {individualTeam} = props
  const {id, name, teamImageUrl} = individualTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="each-team-container">
        <img className="each-team-logo" src={teamImageUrl} alt={name} />
        <p className="each-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
