import React from "react";
import { getUrlFromFirebase } from "../data/firebase";

const useUrlImage = (isUploadExist, name) => {
  const [url, setUrl] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (isUploadExist) {
      getUrlFromFirebase(name)
        .then((url) => {
          setUrl(url);
        })
        .catch((err) => {
          switch (err.code) {
            case "storage/object-not-found":
              // File doesn't exist
              setError(err);
              break;
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              setError(err);
              break;
            case "storage/canceled":
              // User canceled the upload
              setError(err);
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect the server response
              setError(err);
              break;
          }
        });
    }
  }, [isUploadExist]);

  return [url, error];
};

export default useUrlImage;
