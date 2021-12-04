# Rak Sandi

## About

## Why?

## Contributing

## Installation

## Server Installation

### Running with Docker Container

Step 1: Install Docker in [Docker Installation](https://docs.docker.com/engine/install/) based on your system operation

Step 2: Run docker-compose file for creating a container that can use in [http://localhost:3000](http://localhost:3000) for accessing the server

```bash
docker-compose up
```

### Running Locally

Step 1: Install MySQL in [MySQL Installation](https://www.mysql.com/downloads/)

Step 2: Setup the database

```bash
mysql -u root -p
```

- Insert your root password

```sql
CREATE DATABASE raksandi;
USE raksandi;
SOURCE ./docs/doc.sql;
```

Step 3: Install Golang in [Golang Installation](https://go.dev/doc/install)

Step 4: Run Golang server

```bash
cd server
go run main.go
```
