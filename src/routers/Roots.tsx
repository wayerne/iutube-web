import React,{useState,useEffect,lazy,Suspense} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/init'

const SignRoot = lazy(() =>
import('./SignRoot')
  .then(({ SignRoot }) => ({ default: SignRoot })),
);
const BaseRoot = lazy(() =>
import('./BaseRoot')
  .then(({ BaseRoot }) => ({ default: BaseRoot })),
);
interface IRootProps {
}

const Root: React.FunctionComponent<IRootProps> = (props) => {
    const [userHasIn, setUserHasIn] = useState(false)
    useEffect(() => {
        const sub=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUserHasIn(true)
            } else {
                setUserHasIn(false)
            }
          });
          return ()=>{
            sub();
          }
    }, [])

    if(!userHasIn){
        return <div>
          <Suspense fallback={<h1>loading sign</h1>}>
            <SignRoot />
          </Suspense>
        </div>
    }
    return <div>
    <Suspense fallback={<h1>loading base</h1>}>
      <BaseRoot />
    </Suspense>
  </div>
};

export default Root;
