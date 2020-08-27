const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        this._config = {
            apiKey: "AIzaSyAaq8ni2iYITq2XADlZ-aQcI9M-t0KIqa8",
            authDomain: "whatsapp-clone-b3945.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b3945.firebaseio.com",
            projectId: "whatsapp-clone-b3945",
            storageBucket: "whatsapp-clone-b3945.appspot.com",
            messagingSenderId: "1020944578060",
            appId: "1:1020944578060:web:4d6c82677402e659822029",
            measurementId: "G-CEWF38EXGC"
          };

        this.init();
    }

    init(){

        if(!this._initialized){

          // Initialize Firebase
          firebase.initializeApp(this._config);
          firebase.analytics();

            firebase.firestore().settings({});

          this._initialized = true;
            
        }
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

}