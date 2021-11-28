package main

import (
	"log"
	"net/http"

	"github.com/go-playground/validator/v10"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/iwdc-oss/raksandi/apps"
	"github.com/iwdc-oss/raksandi/routes"
)

func main() {
	router := mux.NewRouter()
	router.Use(mux.CORSMethodMiddleware(router))

	db := apps.NewConnection()
	validate := validator.New()

	routes.NewPasswordRoute(db, router, validate)

	log.Println("Listening...")
	log.Fatal(http.ListenAndServe(":3000", router))
}
