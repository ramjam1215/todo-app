// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//ASIDE: i found these in the project overview settings,
//under the firebase SDK snippet
//also had the appID, and measurementId that isnt in the tutorial

export const environment = {
  production: false,
  firebase: {

    apiKey: 'AIzaSyD8qga2PVcdoBp78GF2WUxgx3VRIGRg8iE',
    authDomain: 'todo-app-b02a7.firebaseapp.com',
    databaseURL: 'https://todo-app-b02a7.firebaseio.com',
    projectId: 'todo-app-b02a7',
    storageBucket: 'todo-app-b02a7.appspot.com',
    messagingSenderId: '90788126121',
    appId: '1:90788126121:web:aa80864bf512a2c69bf8b8',
    measurementId: 'G-TJ7ZGZKR33'
  }
};


/*
 *<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD8qga2PVcdoBp78GF2WUxgx3VRIGRg8iE",
    authDomain: "todo-app-b02a7.firebaseapp.com",
    databaseURL: "https://todo-app-b02a7.firebaseio.com",
    projectId: "todo-app-b02a7",
    storageBucket: "todo-app-b02a7.appspot.com",
    messagingSenderId: "90788126121",
    appId: "1:90788126121:web:aa80864bf512a2c69bf8b8",
    measurementId: "G-TJ7ZGZKR33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
 **/

