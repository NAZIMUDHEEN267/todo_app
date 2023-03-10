import notifee, { AndroidColor, RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native';

export default async function notification () {

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
        id: 'friend',
        name: 'Default Channel',
        sound: 'friend-request-14878',
        vibration: true,
        vibrationPattern: [300, 900],
        lights: true,
        lightColor: AndroidColor.RED
    });

    // Display a notification
    await notifee.displayNotification({
        title: '<p style="color: #fc7303;">Time to break fast</p>',
        body: `<p>${Date().toString()}  &#128197; </p>`,
        android: {
            channelId,
            smallIcon: 'todo_app',
            smallIconLevel: 45,
            largeIcon: require("../assets/images/app.png"),
            sound: 'todo',
            showTimestamp: true,
           actions: [{
            title: "Open app",
            pressAction: {id: "friend"}
           }]
        },
    });
}