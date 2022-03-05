const app = require('./routes/index');
const http = require('http');
const dotenv = require('dotenv');
const routes = require('./routes/index');
const server = http.createServer(app);
const database = require("./database/index");
const morgan = require('morgan');



dotenv.config();

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})
