import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getDatabase } from "firebase/database";
import firebaseConfig from "../../config.json";
// Firebase Default App initialized before using any service
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()      
export const db = getFirestore()
export const database = getDatabase(app);
export const storage = getStorage()