const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
 
const app = express();
const port = process.env.PORT || 3000;
 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.post('/submit-form', (req, res) => {
    const { username, firstName, lastName, phoneNumber, password, confirmPassword } = req.body;

    res.json({ message: 'Success', username, firstName, lastName, phoneNumber, password, confirmPassword });
});
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
