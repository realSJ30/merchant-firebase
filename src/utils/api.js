import { push, ref, remove, set, update } from "firebase/database";
import db from "./firebase";

const defaultPath = "categories";

export const removeData = ({ path = defaultPath }) => {
  const dataRef = ref(db, path);
  remove(dataRef).catch((err) => {
    console.log(err);
  });
};

export const pushData = ({ data, path = defaultPath }) => {
  const dataRef = ref(db, path);
  const newData = push(dataRef);
  set(newData, data).catch((err) => {
    console.log(err);
  });
};

export const updateData = ({ data, path = defaultPath }) => {
  const dataRef = ref(db, path);
  update(dataRef, data).catch((error) => {
    console.log(error);
  });
};
