import { addDoc, auth, collection, db, doc, getDocs } from "./firebase.js"


// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         window.location.replace("./index.html")
//     } else {
//     }
// })

const authCheck = async () => {
    const userUid = localStorage.getItem("uid")
    console.log("userUid", userUid)
    if (!userUid) {
        window.location.replace("./index.html")
    }   
    const userDoc = await getDoc(doc(db, "users", userUid));
    // console.log(userDoc.data())
}

const blogpost = async () => {
    try{

        const title  = document.getElementById("title")
        const description = document.getElementById("description")
        const checkbox = document.getElementById("checkbox")
        
        const obj = {
            title: title.value,
            description: description.value,
            isprivate : checkbox.checked,
            uid : localStorage.getItem("uid")
        }
        
        await addDoc(collection(db, "blogs"), obj)
        alert("blog created successfully!")
        getPost()
    } 
    catch(error){
        console.log(error.message)
    }
             
}

const getPost = async () => {
    console.log("Fetching posts...");
    try {
        const parent = document.getElementById("parent");
        parent.innerHTML = ""; 

        const snapShot = await getDocs(collection(db, "blogs"));

        snapShot.forEach((doc) => {
            const data = doc.data();
            const isOwner = data.uid === localStorage.getItem("uid");

            if (data.isprivate && !isOwner) {
                return;
            }

            parent.innerHTML += `
                <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                    <h5>${data.title}</h5>
                    <p>${data.description}</p>
                    <p><strong>${data.isprivate ? "Private" : "Public"}</strong></p>
                    ${isOwner ? '<button onclick="editPost()">EDIT</button>' : ""}
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching posts:", error.message);
    }
};



window.blogpost = blogpost
window.authCheck = authCheck
window.getPost = getPost
