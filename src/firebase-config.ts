import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCni2RrM-xLmLqLdcZuw-34oHEjUxh9lhI',

  authDomain: 'lego-store-d011a.firebaseapp.com',

  projectId: 'lego-store-d011a',

  storageBucket: 'lego-store-d011a.appspot.com',

  messagingSenderId: '114906864005',

  appId: '1:114906864005:web:3399fb4ef293ba949e4cec',
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
