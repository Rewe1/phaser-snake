const app = require('express')();
const fs = require('fs');

const host = require('os').hostname();
const port = 8080;

app.get('/', (req, res) =>
{
    fs.readFile(`${__dirname}/src/index.html`, (err, data) =>
    {
        try
        {
            if(err)
                throw err;
        }
        catch (exp)
        {
            console.log(exp);
            res.status(500).end('An error occurred! :c');
        }

        res.status(200).end(data);
    })
});

app.get('/bundle.js', (req, res) =>
{
    fs.readFile(`${__dirname}/build/bundle.js`, (err, data) =>
    {
        try
        {
            if(err)
                throw err;
        }
        catch (exp)
        {
            console.log(exp);
            res.status(500).end('An error occurred! :c');
        }

        res.status(200).end(data);
    })
})

app.listen(port, host, () =>
{
    console.log(`Listening on ${host}:${port}`);
});