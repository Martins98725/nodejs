import http from "node:http";


const users = [];

const server = http.createServer((request, response) => {
    const { method, url } = request;

    if(method === "GET" && url === "/users"){
        return response.setHeader("Content-type", "application/json")
        .end(JSON.stringify(users));
    };
    if(method === "POST" && url === "/users"){
        users.push({
            id: 1,
            name: "John Doe", 
            email: "JohnDoe@example.com",
        });

        return response.writeHead(201).end("criação de usuario");
    };



    return response.writeHead(404).end("Not found");
});

server.listen(3333);
 