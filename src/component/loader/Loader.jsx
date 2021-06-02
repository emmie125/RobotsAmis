import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const LoaderRobots = () => (
    <Dimmer active>
    <Loader size='big' content='Loading'/>
  </Dimmer>
)

export default LoaderRobots