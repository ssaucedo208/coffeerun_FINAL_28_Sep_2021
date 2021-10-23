// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    'use strict';
     var App = window.App || {};
    
      window.FirebaseConfig = {
        apiKey: "AIzaSyDxMDhB0gj2S2FefXQwJYOvAeWdofGvYg8",
        authDomain: "coffee-run-10f26.firebaseapp.com",
        projectId: "coffee-run-10f26",
        storageBucket: "coffee-run-10f26.appspot.com",
        messagingSenderId: "842086681573",
        appId: "1:842086681573:web:8a664dbe45943f622ffd0c",
        measurementId: "G-05SZL19T4K"
      };
     App.FirebaseConfig = FirebaseConfig;
     firebase.initializeApp(App.FirebaseConfig);

     window.App = App;
  
  })(window);

