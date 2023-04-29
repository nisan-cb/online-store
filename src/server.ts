import next from "next";
import session from "express-session";
import express, { Request, Response } from "express";

const dev = process.env.NODE_ENV !== 'production' || true;
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        server.use(session({
            secret: 'your-secret-key',
            resave: false,
            saveUninitialized: true
        }));

        // server.use((req, res, next) => {
        //     // Your middleware logic here
        //     next()
        // })
        server.all("*", (req: Request, res: Response) => {
            console.log("hello from express")
            // return "sss"
            // res.send("sss")
            return handle(req, res);
        });


        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`);
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })