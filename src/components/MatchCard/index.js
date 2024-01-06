// Write your code here'

import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachMatch

  return (
    <li className="previous-matches-container">
      <img
        className="previous-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="previous-team">{competingTeam}</p>
      <p className="result-with-previous-team">{result}</p>
      <p className="previous-match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
