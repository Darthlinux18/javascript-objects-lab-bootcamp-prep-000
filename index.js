var recipes = {};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign ({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes
}

function deleteFromObjectByKey (object, key) {
<<<<<<< HEAD
  var object2 = Object.assign ({}, object);
  delete(object2[key]);
=======
<<<<<<< HEAD
  var object2 = Object.assign({}, object)
=======
  var object2 = Object.assign({}, obj)
>>>>>>> c2196caaffa6d2126f4fac6d95380d4cc73396cb
  delete object2[key]
>>>>>>> 5a69f5232dad92418ef390e1da2c4402195c13c6
  return object2
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object
}
