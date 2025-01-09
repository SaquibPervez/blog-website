import {signInWithEmailAndPassword ,auth, getDoc, db,doc,onAuthStateChanged,collection,getDocs} from "./firebase.js"


const authCheck = () => {
    const userUid = localStorage.getItem("uid")
    console.log("userUid", userUid)
    if (userUid) {
        window.location.replace("./dashboard.html")
    }

}



const email = document.getElementById("email");
const password = document.getElementById("password");


const Login = async () => {
    try{
        const response = await signInWithEmailAndPassword(auth, email.value, password.value)
        const uid = response.user.uid
        console.log(uid)
        localStorage.setItem("uid" , uid)
        const userDoc = await getDoc(doc(db, "users", uid));

        
        console.log("User:", userDoc.data());
        window.location.replace("./dashboard.html")
        alert("Login Successfully!")
    }
        
    catch(error){
        console.log("error", error.message)
        alert("error", error.code)
    }
}

// window.Login = Login
// window.authCheck = authCheck


