import { createServer } from 'http';

const PORT = process.env.PORT || 8080;

const server = createServer(({ headers, method, url }, res) => {
    const response = {
        headers,
        method,
        url
    };

    const body = JSON.stringify(response);

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
    });
    res.end(body, 'utf8');
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
