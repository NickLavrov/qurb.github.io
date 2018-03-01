import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ poll }) => (
  <div>
    <Link to="/polls/">{'<'} Back</Link>
    <br />
    <h3>{poll.title}</h3>
    <p>{poll.body}</p>
  </div>
))
