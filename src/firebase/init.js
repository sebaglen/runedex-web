import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyClwIFPaBzPYxhGbsGqLxjIRAUngdQeQiw",
  authDomain: "runedex-77a4c.firebaseapp.com",
  databaseURL: "https://runedex-77a4c.firebaseio.com",
  projectId: "runedex-77a4c",
  storageBucket: "runedex-77a4c.appspot.com",
  messagingSenderId: "100766885712",
  appId: "1:100766885712:web:879df63a0d32e96b3e2e55"
}

firebase.initializeApp(config)
