import { createUserWithEmailAndPassword, auth, setDoc, doc, db} from "./firebase.js";


const authCheck = () =>{
    const userid = localStorage.getItem(uid)

    if(userid){
        window.location.replace("./index.html")
    }
}

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         window.location.replace("./dashboard.html")
//     } else {
//     }
// })

const email = document.getElementById('email');
const password = document.getElementById('password');  
const firstName = document.getElementById('firstName');
const lastName = document.getElementById("lastName")

const signUp = async () => {
   try {
        if (!email.value || !password.value) {
            alert("Please Enter Email or password")
            return
        }
        const response = await createUserWithEmailAndPassword(auth, email.value, password.value)
        console.log(response.user, "response")
        
        await setDoc(doc(db, "users", response.user.uid), {
            firstName : firstName.value ,
            lastName : lastName.value,
            email : email.value
        })

        window.location.href = "./index.html"
        alert("User successfully SignUp!")
    } catch (error) {
        console.log(error.message);
        alert(error.code)
    }
};

window.signUp = signUp
window.authCheck = authCheck