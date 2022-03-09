import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAGxxRVbXIcLyhfD_8LWeCxP99mHSi5ji8',
  authDomain: 'movie-nextjs-46f44.firebaseapp.com',
  projectId: 'movie-nextjs-46f44',
  storageBucket: 'movie-nextjs-46f44.appspot.com',
  messagingSenderId: '710978134765',
  appId: '1:710978134765:web:c0a2a623b09cab900562e4',
  measurementId: 'G-84ZZ1G8VSD',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
