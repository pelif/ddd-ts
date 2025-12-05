import { app } from './express';
import dotenv from 'dotenv';
dotenv.config();
var port = Number(process.env.PORT) || 3000;
app.listen(port, function() {
    console.log("Server is running on port ".concat(port));
});

//# sourceMappingURL=server.js.map