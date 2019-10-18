const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, './fake-db.json'));
const middlewares = jsonServer.defaults();
const SECRET_KEY = 'JS_TEAM_PRO';
const saltRounds = 10;
const cors = require('cors');

// khai bao protected routes
const protectedRoutes = ['/profile', '/orders'];

const authenticationMiddleware = (req, res, next) => {
  if (protectedRoutes.includes(req.url)) {
    const token = req.headers.Authorization || req.headers.authorization;

    // token null => not authorized
    if (!token) {
      res.json({
        error: true,
        message: 'Not Authorization',
      });
      return;
    } // parse data tu fake-db.json
    const data = JSON.parse(fs.readFileSync('./fake-db.json')); // assign data to users
    const { users } = data; // decode token
    const decoded = jwt.decode(token); // get accessKey from decoded
    const accessKey = decoded ? decoded.accessKey : null; // accessKey null => not authorized
    if (!accessKey) {
      res.json({
        error: true,
        message: 'Not Authentication',
      });
      return;
    } // user is found or not found
    const existedUser = users.find((u) => u.accessKey === accessKey);
    if (!existedUser) {
      res.json({
        error: true,
        message: 'Not found!',
      });
      return;
    } // ???
    delete existedUser.password;
    delete existedUser.accessKey;
    req.user = { ...existedUser };
    next();
  } else {
    next();
  }
};

server.use(cors());
server.use(middlewares);
server.use(authenticationMiddleware);
server.use(jsonServer.bodyParser);

server.get('/', (req, res) => res.send('Please do not disturb'));

server.get('/products', (req, res) => {
  const products = router.db.get('products').value();
  res.json({
    products: products || [],
  });
});

server.get('/categories', (req, res) => {
  const categories = router.db.get('categories').value();
  res.json({
    categories: categories || [],
  });
});

server.post('/auth/sign-up', (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;

  // createdAt
  const createdAt = new Date().toISOString();

  // bcrypt hash + salt
  const hashedPassword = bcrypt.hashSync(password, saltRounds);
  const accessKey = uuidv1();
  const token = jwt.sign({ accessKey }, SECRET_KEY);
  const data = JSON.parse(fs.readFileSync('./fake-db.json')); // check if user is existed
  const { users } = data;
  const existedUser = users.find((u) => u.email === email);
  if (existedUser) {
    res.json({
      error: true,
      message: 'User existed',
    });
    return;
  }

  // create new user and push to array
  const newUser = {
    id: users.length + 1,
    firstName,
    lastName,
    email,
    password: hashedPassword,
    accessKey,
    createdAt,
    admin: false,
  };

  users.push(newUser);
  // replace old data
  data.users = [...users];
  fs.writeFileSync('./fake-db.json', JSON.stringify(data)); // ???
  delete newUser.accessKey;
  delete newUser.password;
  res.json({
    token,
    user: newUser,
  });
});

server.post('/auth/sign-in', (req, res) => {
  const { email, password } = req.body;
  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { users } = data;
  const existedUser = users.find((u) => u.email === email);
  if (!existedUser) {
    res.json({
      error: true,
      message: 'Wrong user or password',
    });
    return;
  }
  if (!bcrypt.compareSync(password, existedUser.password)) {
    res.json({
      error: true,
      message: 'Wrong user or password',
    });
    return;
  }
  const accessKey = uuidv1();
  const token = jwt.sign({ accessKey }, SECRET_KEY);
  existedUser.accessKey = accessKey;
  const indexOfUser = users.findIndex((u) => u.email === existedUser.email);
  users[indexOfUser] = { ...existedUser };
  data.users = [...users];
  fs.writeFileSync('./fake-db.json', JSON.stringify(data));
  delete existedUser.accessKey;
  delete existedUser.password;
  res.json({
    token,
    user: existedUser,
  });
});

server.get('/profile', (req, res) => {
  const curUser = { ...req.user };
  if (!curUser) {
    res.status(400);
    res.json({
      error: true,
      message: 'Not found user!',
    });
    return;
  }
  delete curUser.accessKey;
  delete curUser.password;
  res.json({
    user: curUser,
  });
});

server.put('/profile', (req, res) => {
  const user = { ...req.user };
  if (!user) {
    res.status(400);
    res.json({
      error: true,
      message: 'User is not found...',
    });
    return;
  }
  const {
    id, firstName, lastName, email,
  } = req.body;
  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { users } = data; // eslint-disable-next-line no-shadow
  const userIndex = users.findIndex((user) => user.id === id);
  if (users[userIndex]) {
    users[userIndex] = {
      ...users[userIndex],
      firstName,
      lastName,
      email,
    };
    fs.writeFileSync('./fake-db.json', JSON.stringify(data));
  }
  delete users[userIndex].accessKey;
  delete users[userIndex].password;
  res.json({
    user: users[userIndex],
  });
});

server.post('/orders', (req, res) => {
  // from token-header
  const user = { ...req.user };
  if (!user) {
    res.status(400);
    res.json({
      error: true,
      message: 'User is not found...',
    });
    return;
  } // from body
  const { id, cartList, total } = req.body;
  const createdAt = new Date().toISOString();
  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { orders } = data;
  const newOrder = {
    id: orders.length + 1,
    uid: id,
    cartList,
    total,
    createdAt,
  };
  orders.push(newOrder);
  data.orders = [...orders];
  fs.writeFileSync('./fake-db.json', JSON.stringify(data));
  res.json({ order: newOrder });
});

server.get('/orders', (req, res) => {
  // from token-header
  const user = { ...req.user };
  if (!user) {
    res.status(400);
    res.json({
      error: true,
      message: 'User is not found...',
    });
    return;
  }
  const data = JSON.parse(fs.readFileSync('./fake-db.json'));
  const { orders } = data;
  const userOrders = orders.filter((order) => order.uid === user.id);
  res.json({ order: userOrders });
});

server.use(router);

server.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 5000');
});
