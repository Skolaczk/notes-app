import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBDGAshRWKomGH1iBz3gv2T7kOHnW6hjSQ',
  authDomain: 'notes-app-7bd1f.firebaseapp.com',
  projectId: 'notes-app-7bd1f',
  storageBucket: 'notes-app-7bd1f.appspot.com',
  messagingSenderId: '1035839415609',
  appId: '1:1035839415609:web:449416187b98c40f9874e8',
};

export const app = initializeApp(firebaseConfig);
