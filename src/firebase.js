import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({databaseURL: 'https://guidedvuefire9665.firebaseio.com' })
    .database()

export const dessRef = db.ref('desserts')