exports.getUsers = (req, res) => {
  res.send('All users visible to logged-in users');
};

exports.getUserById = (req, res) => {
  res.send(`User with ID ${req.params.userId}`);
};
