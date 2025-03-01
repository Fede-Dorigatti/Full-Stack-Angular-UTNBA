//webpack.config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2yB5Enu1_vomMglnLn9_FntNKItnU-4E",
  authDomain: "departamentos-mar-del-pl-f83de.firebaseapp.com",
  projectId: "departamentos-mar-del-pl-f83de",
  storageBucket: "departamentos-mar-del-pl-f83de.appspot.com",
  messagingSenderId: "538000446584",
  appId: "1:538000446584:web:0489fe3ebed1a633a7898d",
  measurementId: "G-NXTE2Y84JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};