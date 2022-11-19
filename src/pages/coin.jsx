
import { createGlobalState } from 'react-hooks-global-state';
const {setGlobalState,useGlobalState} = createGlobalState({
    coin:100
  })
  export {setGlobalState,useGlobalState} ;