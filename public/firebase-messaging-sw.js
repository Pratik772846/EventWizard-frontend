
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCBaETgN5SCzk-W3xe81zZi7hz_lT9oUEg",
    authDomain: "event-managment-388210.firebaseapp.com",
    projectId: "event-managment-388210",
    storageBucket: "event-managment-388210.appspot.com",
    messagingSenderId: "742359631413",
    appId: "1:742359631413:web:67e9c9dca009b50bf3937c"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});