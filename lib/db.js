// export default async () => {
//   const firebase = await import('firebase/app');

//   await import('firebase/database');

//   try {
//     firebase.initializeApp({
//       databaseURL: "https://vnnextjs.firebaseio.com"
//     });
//   } catch (error) {
//     /*
//      * We skip the "already exists" message which is
//      * not an actual error when we're hot-reloading.
//      */
//     if (!/already exists/u.test(error.message)) {
//       // eslint-disable-next-line no-console
//       console.error('Firebase initialization error', error.stack);
//     }
//   }

//   return firebase.database().ref('views');
// };


const admin = require('firebase-admin');
const { join } = require('path');
const cert = join(__dirname, '../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: "https://vnnextjs.firebaseio.com"
});

module.exports = admin.database();
