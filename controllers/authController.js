const users = require('../data/users');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'sk'; 

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: '1h'
  });

  return res.json({
    message: 'Login successful',
    token: token
  });
};
