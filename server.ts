import express from 'express';
import users from './data.json';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  return res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  try {
    const user = users.find(user => user.id === Number(id));

    if (!user) {
      return res.status(204).send('User not found');
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

app.post('/users', (req, res) => {
  const {
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  } = req.body;

  const user = {
    id: Math.floor(Math.random() * 100),
    name,
    username,
    email,
    address,
    phone,
    website,
    company,
  }

  users.push(user);

  return res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;

  try {
    const user = users.findIndex(user => user.id === Number(id));

    if (!user) {
      return res.status(204).send('User not found');
    }

    const { name, email } = req.body;

    users[user].name = name || users[user].name;
    users[user].email = email || users[user].email;

    const updatedUser = users.find(user => user.id === Number(id));

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  try {
    const user = users.findIndex(user => user.id === Number(id));

    const filteredUsers = users.filter(user => user.id !== Number(id));

    users.slice(user, 1);

    return res.status(200).json(filteredUsers);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});



app.listen(3000, () => {
  console.log('SERVER IS RUNNING');
})