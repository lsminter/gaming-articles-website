import firebase from './firebase';
import 'firebase/firestore';


const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data}, { merge: true });
}

export default function createArticle(data) {
  const article = firestore.collection('articles').doc();
  article.set(data)

  return article;
}