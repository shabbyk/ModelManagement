const models = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Carlo",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Marie",
    modelWear: "M",
    height: 175,
    bust: 100,
    waist: 73,
    lowHip: 110,
    highHip: 110,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Johan",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Borris",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Monty",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Raj",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Rahul",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Huma",
    modelWear: "M",
    height: 173,
    bust: 106,
    waist: 76,
    lowHip: 110,
    highHip: 110,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Daisy",
    modelWear: "M",
    height: 171,
    bust: 106,
    waist: 76,
    lowHip: 120,
    highHip: 120,
  },
];

export function getModels() {
  return models;
}

export function getModel(id) {
  return models.find((m) => m._id === id);
}

export function saveModel(id) {
  return models.find((m) => m._id === id);
}
