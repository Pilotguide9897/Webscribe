import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    console.log("Post to the db.");
    const jateDB = await openDB("jate", 1);
    const tx = jateDB.transaction("jate", "readwrite");
    const store = tx.objectStore("jate");
    // store and pass in the content.
    const request = store.add({ text: content });
    const result = await request;
    console.log("🚀 - data saved to the database", result);
  } catch (error) {
    console.error("putDb not implemented", error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    console.log('Get all the content from the db');
  } catch (error) {
    console.error("getDb not implemented", error);
  }
};

initdb();
