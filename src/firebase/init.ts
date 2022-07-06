
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB0usEWoVEpSiBZVMdfeWRFRGioPUpm-LM",
  authDomain: "iu-tube.firebaseapp.com",
  projectId: "iu-tube",
  storageBucket: "iu-tube.appspot.com",
  messagingSenderId: "562578079718",
  appId: "1:562578079718:web:e3ae9a400250fe2a2d2027",
  measurementId: "G-63THJNGE2D"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {app,auth}
