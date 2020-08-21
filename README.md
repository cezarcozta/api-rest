# API  

```ts
                  **Association**  

- Client(Smartphone / Browser / Other API) <===> Restaurant customer  

- API <===> Waiter(deliver: customer order(requests) / bring: dishes(responses))  

- Server <===> Kitchen(Cook the customer order delivered by the waiter(Process Requests))  
```

``
API is an acronym for Application Programming Interface, basically a set of routines and patterns, estabilished by an application, for those other applications can access it's funcionalities.
``

- Responsible for establish an comunnication between differents services.  
- Double Agent among technologies.  
- Intermediator for information exchange.  

## REST  

`An acronym for Representational State Transfer.`

- It will be done a simbolic data trasnfer in a representative way.

- The data transfer, usually uses the HTTP Protocol

- Rest delimits some obligations between those data transfer.

- Resource wiil be an entity or an object.

### RESTful  

RESTful, is an application in REST pattern.

### 6 Constraints for RESTful  

- Client / Server: Segregation between client and stored data  bringing portability  

- Stateless: Each request must have all the information necessary for the server response. The server can not remeber anything from the last request.  

- Cacheable: The response for the request, must be explicity if the client can or can not cache the request.  

- Layered System: The Client access an endpoint, the resource do not need to known the compĺexities it been taken to bring this response to the client request.  

- Code on demand(Optional): Gives the possibilities that the application can run codes on the client-side(browser/smartphone).

#### Best Pratices  

- Uses differents HTTP verbs for different actions.  
- Choose a pattern between singular and plural for endpoints  
- Do not type a slash at the end of the endpoint  

#### Verbs HTTP

- GET: Recive data from a resource  
- POST: Send data or information to be processed by a resource  
- PUT: Update data from a resource  
- DELETE: Delete an resource  

#### Responses Status  

- 1xx: Information  

- 2xx: Success  
  - 200: OK
  - 201: CREATED  
  - 204: No Content(PUT POST DELETE)  

- 3xx: Redirection  

- 4xx: Client Error  
  - 400: Bad Request
  - 404: Not Found

- 5xx: Server Error  
  - 500: Internal Server Error  

#### Run

- Clone this Repository  
  - `git clone https://github.com/cezarcozta/api-rest.git`  

- Access project folder  
  - `cd api-rest`  

- Install Dependencies  
  - `yarn`  

- Run
  - `yarn dev`

- Endpoints

```sh
GET : http://localhost:3000/users
GET : http://localhost:3000/users/users/:id
POST : http://localhost:3000/users/users
PUT : http://localhost:3000/users/users/:id
DELETE : http://localhost:3000/users/users/:id
```

##### Author  

- César Augusto Costa  
  - [cezarcozta.com](https://cezarcozta.com)
  - [Linkedin](https://www.linkdin.com/in/cezarcozta)
  - cezarcozta@gmail.com  
