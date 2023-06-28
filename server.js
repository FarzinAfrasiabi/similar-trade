const next = require('next');
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require("path");

const port = 3000;
const developMode = true;       // Set true for develop mode

const dev = developMode ? process.env.NODE_ENV !== 'production' : false;
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(
        () => {
            const server = express();
            server.use(cookieParser());
            server.use(compression());
            server.use(cors());
            server.use(express.static(path.join(__dirname, 'public'), {maxAge: 172800000}));

            server.post('/api/*', (req, res) => {
                return handle(req, res);
            });

            server.get('*', (req, res) => {
                return handle(req, res);
            });

            server.listen(port, err => {
                if(err) {
                    throw err;
                }
                console.log('Server running on http://localhost:'+port)
            });
        }
    )
    .catch(e => {
        console.log(e.stack);
        process.exit(1);
    })
