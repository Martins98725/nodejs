import http from "node:http";

const server = http.createServer((request, response) => {
    const { method, url } = request

    if(method === "GET" && url === "/users"){
        return response.end("listagem de usuario");
    }
    if(method === "POST" && url === "/users"){
        return response.end("criação de usuario");
    }



    return response.end("Hello World")
})

server.listen(3333)
 