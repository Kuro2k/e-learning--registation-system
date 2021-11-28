const db = require("./../controllers/connection");

var User = function (data) {
  this.id = data.id;
  this.ssn = data.ssn;
  this.last_name = data.last_name;
  this.first_name = data.first_name;
  this.gender = data.gender;
  this.dob = data.dob;
  this.phone_number = data.phone_number;
  this.address = data.address;
  this.username = data.username;
  this.password_user = data.password_user;
  this.email = data.email;
};

User.login = (data, result) => {
  db.query(
    "select * from user_system where username = ? and password_user = ?",
    [data.username, data.password_user],
    (error, user) => {
      if (user.length == 0 || error) {
        result(null);
      } else {
        result(user);
      }
    }
  );
};

User.register = (data, result) => {
  const {
    last_name,
    first_name,
    gender,
    dob,
    phone_number,
    address,
    username,
    password_user,
    email,
  } = data;
  db.query(
    `call sign_up('${username}', '${last_name}', '${first_name}', '${gender}', '${dob}', '${phone_number}', '${address}', '${username}', '${password_user}', '${email}')`,
    (error, res) => {
      if (error) {
        console.log(error);
        result(null);
      } else {
        result("Đăng ký thành công!");
      }
    }
  );
};

User.update = (params, data, result) => {
  const {
    ssn,
    last_name,
    first_name,
    gender,
    dob,
    phone_number,
    address,
    email,
  } = data;

  db.query(
    `call update_info('${params}', '${ssn}', '${last_name}', '${first_name}', '${gender}', '${dob}', '${phone_number}', '${address}', '${email}')`,
    (error, res) => {
      if (error) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};

User.updatepass = (params, data, result) => {
  const { password_user } = data;
  db.query(
    `call update_pass('${params}', '${password_user}')`,
    (error, res) => {
      if (error) {
        result(null);
      } else {
        result(data);
      }
    }
  );
};

module.exports = User;