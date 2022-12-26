import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import uuid from "react-uuid";
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
export async function getSongs() {
  const snapshot = await get(child(dbRef, "songs"));
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  }
}

// 리스트 추가
export function addSong(song) {
  const id = uuidv4();
  set(ref(database, `songs/${id}`), {
    id,
    ...song,
  });
}

// 리스트 삭제
export function removeSong(id) {
  remove(child(dbRef, `songs/${id}`));
}
