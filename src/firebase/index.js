import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDuslbbbUXN8cwEcRTQmnvzdmZKrjlBNO8',
  authDomain: 'vue-project-901fa.firebaseapp.com',
  projectId: 'vue-project-901fa',
  storageBucket: 'vue-project-901fa.appspot.com',
  messagingSenderId: '850431995532',
  appId: '1:850431995532:web:741ff27b808a90b66255a9'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
