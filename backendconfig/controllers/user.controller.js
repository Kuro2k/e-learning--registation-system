const User = require("./../models/user.models");
const jwt = require("jsonwebtoken");
const database = require("./../controllers/connection");

exports.login = (req, res) => {
  User.login(req.body, (result) => {
    if (result === null) {
      res.status(500).send("Đăng nhập sai tài khoản hoặc mật khẩu!");
    } else {
      const token = jwt.sign(
        {
          id: result[0].id,
          ssn: result[0].ssn,
          username: result[0].username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      const user = {
        id: result[0].id,
        ssn: result[0].ssn,
        last_name: result[0].last_name,
        first_name: result[0].first_name,
        gender: result[0].gender,
        dob: result[0].dob,
        phone_number: result[0].phone_number,
        address: result[0].address,
        username: result[0].username,
        email: result[0].email,
      };

      res.send({
        message: "Đăng nhập thành công!",
        token,
        user,
      });
    }
  });
};

exports.register = (req, res) => {
  User.register(req.body, (result) => {
    if (result === null) {
      res.status(500).send("Đăng ký không thành công!");
    } else {
      res.send(result);
    }
  });
};

exports.update = (req, res) => {
  User.update(req.params.id, req.body, (result) => {
    if (req.user.id === req.params.id) {
      if (result === null) {
        res.status(500).send(result);
      } else {
        res.send(result);
      }
    } else {
      res.status(400).send("Không thể cập nhật người dùng này!");
    }
  });
};

exports.updatepass = (req, res) => {
  User.updatepass(req.params.id, req.body, (result) => {
    if (req.user.id === req.params.id) {
      if (result === null) {
        res.status(500).send(result);
      } else {
        res.send(result);
      }
    } else {
      res.status(400).send("Không thể cập nhật người dùng này!");
    }
  });
};

exports.getInfo = (req, res) => {
  const { id } = req.params;
  if (req.user.id === id) {
    database.query(`call ViewLearner('${id}')`, (error, learner) => {
      if (learner.length == 0 || error) {
        res.status(500).send(error);
      } else {
        res.send(learner[0]);
      }
    });
  } else {
    res.status(400).send("Không thể chon người dùng này!");
  }
};

exports.getteachers = (req, res) => {
  database.query(
    `select * from user_system where id in ( select lecturerid from teaches where courseid = ? )`,
    req.params.id,
    (error, user) => {
      if (user.length == 0 || error) {
        res.status(500).send(error);
      } else {
        res.send(user);
      }
    }
  );
};
