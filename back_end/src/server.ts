import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

app.use(express.json()); // Body-parser, for parsing json

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from TS Node Server")
});


app.listen(5000, () => console.log('Server is running'))