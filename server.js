const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hellooooo!');
});

app.post('/submit', async(req, res) => {
    try {
        const {username,email,password}=req.body

        if(!username ){
            res.status(400).json("Username cannot be empty")
         }
         if(!email){
             res.status(400).json("Email cannot be empty")
         }
         const pass=password.length()
         if(pass<=8 || pass>=16){
             res.status(400).json("Password length should be greater than 8 or less than or equal to 16")
         
         }
        

        
    } catch (error) {
         res.status(500).json("internal server error")
    }

});


const port = 2204;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});  