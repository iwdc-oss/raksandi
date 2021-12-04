FROM golang:1.16-alpine

WORKDIR /app

COPY . .

RUN go build -o raksandi-backend

EXPOSE 3000

CMD ./raksandi-backend