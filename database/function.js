// const { limitCount } = require('../lib/settings');
const db = require('../app/models/');
const Users = db.users;

async function addUser(email, password, role, apikey) {
  let obj = {
    email,
    password,
    role,
    apikey,
  };
  Users.create(obj);
}
// module.exports.addUser = addUser;

async function checkEmail(email) {
  let users = await Users.findOne({ email: email });
  if (users !== null) {
    return users.email;
  } else {
    return false;
  }
}
// module.exports.checkEmail = checkEmail;

async function getApikey(id) {
  let users = await Users.findOne({ _id: id });
  return { apikey: users.apikey, userName: users.username };
}
// module.exports.getApikey = getApikey;

async function getRole(id) {
  let users = await Users.findOne({ _id: id });
  return { role: users.role, apikey: users.apikey };
}
// module.exports.getRole = getRole;

async function cekKey(apikey) {
  let db = await Users.findOne({ apikey: apikey });
  if (db === null) {
    return false;
  } else {
    return db.apikey;
  }
}
// module.exports.cekKey = cekKey;

async function findAllUser() {
  let result = await Users.find();
  if (result === null) {
    return false;
  } else {
    return result;
  }
}
// module.exports.findAllUser = findAllUser;

module.exports = {
  findAllUser,
  cekKey,
  addUser,
  getRole,
  checkEmail,
  getApikey,
};