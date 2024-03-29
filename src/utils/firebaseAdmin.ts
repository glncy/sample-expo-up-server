import { getApp, getApps, initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getDatabase } from "firebase-admin/database";
import { getStorage } from "firebase-admin/storage";

const GOOGLE_SERVICE_CREDENTIAL = process.env.GOOGLE_SERVICE_CREDENTIAL;
const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;

if (!GOOGLE_SERVICE_CREDENTIAL) {
  throw new Error("GOOGLE_SERVICE_CREDENTIAL is not defined");
}

if (!FIREBASE_DATABASE_URL) {
  throw new Error("FIREBASE_DATABASE_URL is not defined");
}

// convert base64 encoded service account key to json object
const serviceAccount = JSON.parse(
  Buffer.from(GOOGLE_SERVICE_CREDENTIAL, "base64").toString()
);

const app = !getApps().length
  ? initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: FIREBASE_DATABASE_URL,
      storageBucket: FIREBASE_STORAGE_BUCKET,
    })
  : getApp();

export const db = getDatabase(app);
export const bucket = getStorage(app).bucket();
