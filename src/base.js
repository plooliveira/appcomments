import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuuCrEXQ30TxCMCONwHkUMJtjxw8sS_JE",
    authDomain: "commentsreact-8394c.firebaseapp.com",
    databaseURL: "https://commentsreact-8394c.firebaseio.com",
    projectId: "commentsreact-8394c",
    storageBucket: "",
    messagingSenderId: "650418941966"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook' : new firebase.auth.FacebookAuthProvider()
}

export const auth = firebase.auth()
export default base