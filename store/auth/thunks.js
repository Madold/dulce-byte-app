import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { finishLogin, login, setAuthenticated, setErrorMessage, setUser, logout as logoutAction } from './authSlice'
import firestore from '@react-native-firebase/firestore';

GoogleSignin.configure({
    webClientId: "850245176593-ts0lpig9hob3458u3s94l0p00lguie6n.apps.googleusercontent.com"
})

export const signInWithGoogle = () => {
    return async (dispatch) => {
        try {
            dispatch(login())

            if (auth().currentUser) await auth().signOut()

            const deviceHasPlayServices = await GoogleSignin.hasPlayServices()

            if (!deviceHasPlayServices) {
                dispatch(setErrorMessage("Device does not have Google Play Services"))
                return
            }

            const { data } = await GoogleSignin.signIn()
            const { idToken } = data
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            const result = await auth().signInWithCredential(googleCredential)
            const { user } = result
            const { displayName, email, photoURL } = user

            await saveUserInDb({ displayName, email, photoURL, uid: user.uid })
            dispatch(setUser({ displayName, email, photoURL }))
            dispatch(finishLogin())
            dispatch(setAuthenticated(true))
        } catch (error) {
            console.log(error)
        }
    }
}

export const checkIsAuthenticated = () => {
    return async (dispatch) => {
        try {
            dispatch(login())

            const user = auth().currentUser

            if (!user) {
                dispatch(setAuthenticated(false))
                dispatch(finishLogin())
                return
            }

            const { displayName, email, photoURL } = user
            dispatch(setUser({ displayName, email, photoURL }))
            dispatch(setAuthenticated(true))
            dispatch(finishLogin())
        } catch (error) {
            console.log(error)
        }
    }
}

export const signOut = () => { 
    return async (dispatch) => {
        try {
            await auth().signOut()
            dispatch(setAuthenticated(false))
            dispatch(finishLogin())
            dispatch(logoutAction())
        } catch (error) {
            console.log(error)
        }
    }
}

const saveUserInDb = async (user) => { 
    await firestore()
    .collection("users")
    .doc(user.uid)
    .set(user)
}