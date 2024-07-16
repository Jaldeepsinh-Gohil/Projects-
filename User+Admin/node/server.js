const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');
const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'adminDB'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('Connected to database.');
});

const generateAccessToken = (user) => {
    return jwt.sign(user, user.stat, { expiresIn: '2h' });
};

// Register user
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const hp = md5(password);
    const id = uuidv4();
    const searchuser =  'SELECT * FROM admins WHERE name = ?';
    db.query(searchuser,[username],(err,result) =>{
        if (err) throw err;
        if (result.length > 0) {
           return res.status(400).send('User already exists');
        
    }else {
        const sql = 'INSERT INTO admins (id, name, email, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [id, username, email, hp], (err) => {
            if (err) return res.status(500).send(err);
            else {return res.status(200).send('Signup successful');}
        });
    };
    });
});
// Login user
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    const hp = md5(password);
    // const isaadmin = JSON.parse(isadmin);
    const sql = 'SELECT * FROM admins WHERE email = ?';
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(204).json({err});
        if (result.length > 0) {
            if(hp === md5(result[0].password)){
                const stat = result[0].status;
                const user = { email: email, stat: stat };
                const token = generateAccessToken(user);
                if(stat === 'active'){
                    return res.status(200).json({token});
                }else if(stat === 'disabled'){
                   return  res.status(201).json({token});
                }
            }else{
               return res.status(202).json({});
            }
        } else {
           return res.status(203).json({});
        }
    });
});
app.get('/getusers',(req,res) => {
    db.query('SELECT * FROM admins',(error,results)=>{
        if(error){
            return res.status(500).json({error});
        }
        return res.json(results);
    });
});
// Middleware to authenticate token
// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (!token) return res.sendStatus(403);

//     jwt.verify(token,req.user.stat, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// // // Admin route
// app.get('/adminhomepage', authenticateToken, (req, res) => {
//     if (req.user.stat === 'disabled') return res.sendStatus(403);
//     return res.status(200).send('Welcome to the admin dashboard');
// });

// // // User route
// app.get('/userhomepage', authenticateToken, (req, res) => {
//     if (req.user.stat === 'active') return res.sendStatus(403);
//     return res.status(200).send('Welcome to the user dashboard');
// });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
