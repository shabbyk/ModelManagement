import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiEndPoint;

function modelUrl(id) {
  return `${apiUrl}/${id}`;
}

export function getModels() {
  return http.get(apiUrl);
}

export function getModel(modelId) {
  return http.get(modelUrl(modelId));
}

export function saveModel(model) {
  
  let data = new FormData();
  Object.keys(model).forEach(element => {
    if(element === "files")
    {
      Array.from(model.files).forEach( file => {
        data.append("files[]", file);
      });
    } else {
      data.append(element, model[element]);
    }
  });

  if (model._id) {
    return http.put(modelUrl(model._id), data);
  }

  return http.post(apiUrl, data);
}
