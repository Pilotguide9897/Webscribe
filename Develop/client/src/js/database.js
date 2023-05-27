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

export const putDb = async (content) => {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readwrite");
  try {
    console.log("Post to the db.");
    const store = tx.objectStore("jate");
    const request = store.add({ text: content });
    const result = await request;
    console.log("🚀 - data saved to the database", content, result);
  } catch (error) {
    console.error("putDb not implemented", error);
  } finally {
    if (tx.done) {
      console.log("Transaction completed");
    } else {
      console.error("Transaction aborted");
      tx.abort();
    }
  }
};

export const getDb = async () => {
  const jateDB = await openDB("jate", 1);
  const tx = jateDB.transaction("jate", "readonly");
  try {
    console.log("Get all the content from the db");
    const store = tx.objectStore("jate");
    const request = store.getAll();
    const result = await request;
    console.log("result.value", result);
    return result;
  } catch (error) {
    console.error("getDb not implemented", error);
  } finally {
    if (tx.done) {
      console.log("Transaction successfully completed");
    } else {
      console.error("Transaction aborted");
      tx.abort();
    }
  }
};

initdb();
