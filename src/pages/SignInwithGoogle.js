import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth, db } from "../context/Firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }
  return (
    <div className="d-flex">
    <h4>OR Continue With Google</h4>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MZbrexS_jJJVoToqLeAcb7xZ8RwPqkDlcDZHdYYg7A&s" height={"50px"} width={"50px"} alt="Google_Login"/>
      </div>
    </div>
  );
}
export default SignInwithGoogle;