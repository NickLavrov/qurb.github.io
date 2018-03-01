
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ polls }) => (
  <div>
    <h1>It's POLLS time.</h1>
    <br />
    All Polls:
    <ul>
      {polls.map(poll => (
        <li key={poll.id}>
          <Link to={`/blog/polls/${poll.id}/`}>{poll.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
