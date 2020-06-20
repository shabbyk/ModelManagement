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
  if (model._id) {
    const body = { ...model };
    delete body._id;
    return http.put(modelUrl(model._id), body);
  }

  return http.post(apiUrl, model);
}
