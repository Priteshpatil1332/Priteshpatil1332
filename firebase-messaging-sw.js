importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAFnzY61X6YVWaKB03ig6_a-EUQ6qfFRec",
  authDomain: "homora-41400.firebaseapp.com",
  projectId: "homora-41400",
  storageBucket: "homora-41400.firebasestorage.app",
  messagingSenderId: "252376803932",
  appId: "1:252376803932:web:595c23360a014a0cfc9499"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification("HOMORA 🔔", {
    body: payload.notification?.body || "New customer booking received!",
    icon: "/Priteshpatil1332/icon-192.png",
    vibrate: [300, 150, 300]
  });
});
