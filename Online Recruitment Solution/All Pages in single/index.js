if (!localStorage.getItem("Login")) localStorage.setItem("Login", "[]");

// Fade-in feature sections on page load
window.addEventListener("load", function () {
  var features = document.querySelectorAll(".feature");
  for (var i = 0; i < features.length; i++) {
    features[i].classList.add("fade-in");
  }
});

function HandleLoginOpen() {
  document.querySelector(".user").classList.toggle("d-none");
  document.getElementById("user").scrollIntoView();
}

var noti;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        noti = new Notification("you have seen nothing 😉", {
          body: "Come Back Please",
          icon: "Logo.png",
        });
      }
    });
  } else {
    Notification.requestPermission();
    noti.close();
  }
});

function HandleLogin() {
  let email = document.getElementById("LoginEmail").value;
  let password = document.getElementById("LoginPassword").value;
  let logInStored = localStorage.getItem("Login");
  let logInList = JSON.parse(logInStored);
  let logInFiltered = logInList.filter((value) => {
    return value.email === email && value.password === password ? true : false;
  });
  if (logInFiltered.length !== 0) {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        let minutes =
          Math.floor(new Date().getTime() / (1000 * 60)) -
          logInFiltered[0].Date;
        noti = new Notification("Welcome Again 😉", {
          body: `So What do you think hah tell me honestly \n by the way you last log in ${minutes} minutes`,
          icon: "logo192.png",
        });
      }
      let l = logInList.filter((value) => {
        return value.email !== email && value.password !== password
          ? true
          : false;
      });
      localStorage.setItem(
        "Login",
        JSON.stringify([
          ...l,
          {
            ...logInFiltered[0],
            Date: Math.floor(new Date().getTime() / (1000 * 60)),
          },
        ])
      );
      setTimeout(
        () => alert(" Welcome Back we are glead to meet you again 😉"),
        0
      );
      HandleLoginOpen();
    })();
  } else {
    alert(
      "This accound is Not Registered Or you have Entered Wrong Password please try again!"
      );
    }
  }
  function HandleSignUp() {
    let fullName = document.getElementById("SignupFullName").value;
  let email = document.getElementById("SignupEmail").value;
  let password = document.getElementById("SignupPassword").value;
  let signUpStored = localStorage.getItem("Login");
  let signUpList = JSON.parse(signUpStored);
  let signUpFiltered = signUpList.filter((value) => {
    return value.email === email ? true : false;
  });
  if (signUpFiltered.length === 0) {
    localStorage.setItem(
      "Login",
      JSON.stringify([
        ...signUpList,
        {
          fullName: fullName,
          email: email,
          password: password,
          Date: Math.floor(new Date().getTime() / (1000 * 60)),
        },
      ])
    );
    HandleLoginOpen();
  } else {
    alert("This accound is aleardy exist please login!");
  }
}

// function fetchHandle(){
//   let location=document.getElementById("Input-Location").value;
//   let title=document.getElementById("Input-Job-Title").value;
// }

const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);
