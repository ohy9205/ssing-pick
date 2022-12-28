import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  onValue,
  ref,
  remove,
  set,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const dbRef = ref(getDatabase());

// 리스트 읽기
export function getSongs(callback) {
  onValue(ref(database, "songs"), (snapshot) => {
    if (snapshot.exists()) {
      const songs = Object.values(snapshot.val());
      songs.sort((a, b) => b.date - a.date);
      callback(songs);
    } else {
      callback([]);
    }
  });
}

// 리스트 추가
export function addSong(song) {
  const id = uuidv4();
  set(ref(database, `songs/${id}`), {
    ...song,
    id,
    date: Date.now(),
  });
}

// 리스트 삭제
export function removeSong(id) {
  remove(child(dbRef, `songs/${id}`));
}
