 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
		apiKey: "AIzaSyCQJkj-tpXgcRF0Wsn2d7mp7hcaDx8Jdbc",
		authDomain: "authentication-9b9a9.firebaseapp.com",
		databaseURL: "https://authentication-9b9a9-default-rtdb.firebaseio.com",
		projectId: "authentication-9b9a9",
		storageBucket: "authentication-9b9a9.appspot.com",
		messagingSenderId: "226458372232",
		appId: "1:226458372232:web:4b38ac83233edb5b4a773d"
	
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })