// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatch

  return (
    <div className="latest-match-container">
      <h1>Latest Matches</h1>
      <div className="left-content">
        <p className="left-content-heading">{competingTeam}</p>
        <p className="left-content-description">{date}</p>
        <p className="left-content-description">{venue}</p>
        <p className="left-content-description">{result}</p>
      </div>
      <div className="middle-content">
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="right-content">
        <p className="right-content-description">First Innings</p>
        <p className="right-content-description">{firstInnings}</p>
        <p className="right-content-description">second Innings</p>
        <p className="right-content-description">{secondInnings}</p>
        <p className="right-content-description">Man Of The Match</p>
        <p className="right-content-description">{manOfTheMatch}</p>
        <p className="right-content-description">Umpires</p>
        <p className="right-content-description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
