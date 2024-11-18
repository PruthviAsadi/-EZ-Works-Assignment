const express = require('express');
const bodyParser = require('body-parser');
const { opsRouter, clientRouter } = require('./routes/opsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/ops', opsRouter);
app.use('/client', clientRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
