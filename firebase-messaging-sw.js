if ('function' === typeof importScripts) {
    importScripts('https://www.gstatic.com/firebasejs/3.6.2/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/3.6.2/firebase-messaging.js');

    var config = {
        apiKey: "AIzaSyAOy-ggZOPeaDKsBH5ocTtKI8LAXYklLyc",
        authDomain: "price-track-41f36.firebaseapp.com",
        // databaseURL: "https://price-track-41f36.firebaseio.com",
        // storageBucket: "price-track-41f36.appspot.com",
        messagingSenderId: "889371045170"
    };
    firebase.initializeApp(config);

    var messaging = firebase.messaging();

    messaging.setBackgroundMessageHandler(function(payload) {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        var notificationTitle = payload.notification.title;
        var notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,
            click_action : "/"
        };
        return self.registration.showNotification(notificationTitle, notificationOptions);
    });

}
