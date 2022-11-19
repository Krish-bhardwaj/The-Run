
import { createGlobalState } from 'react-hooks-global-state';
const {setGlobalState,useGlobalState} = createGlobalState({
    health:20
  })
  export {setGlobalState,useGlobalState} ;      