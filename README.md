# REST API (MongoDB-Express-Node)

REST API using Framework Expressjs and Database MongoDB.

## Description

This website contains about making and applying REST API using Expressjs and MongoDB where there are errors handling with various conditions.

## Installation

Cloning this repository and open project in your computer. Then, run this command below in your terminal.

```
npm install
```

Then, import mongoDB document in folder database with name studentDocs.json to your computer.

## Usage

If you have installed the package manager, you can run this command below in your terminal.

```
nodemon index
```

To test API, you can using [Postman](https://www.postman.com/). Below is the command to run HTTP request methods.

- Get all students

```
GET localhost:3000/api/students
```

- Add new student

```
POST localhost:3000/api/students
```

- Get student by ID

```
GET localhost:3000/api/students/:id
```

- Update student by ID

```
PATCH localhost:3000/api/students/:id
```

- Delete student by ID

```
DELETE localhost:3000/api/students/:id
```
