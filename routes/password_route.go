package routes

import (
	"database/sql"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/gorilla/mux"
	"github.com/iwdc-oss/raksandi/controllers"
	"github.com/iwdc-oss/raksandi/repositories"
	"github.com/iwdc-oss/raksandi/services"
)

func NewPasswordRoute(db *sql.DB, router *mux.Router, validate *validator.Validate) {
	passwordRepository := repositories.NewPasswordRepository()
	passwordService := services.NewPasswordService(passwordRepository, db, validate)
	passwordController := controllers.NewPasswordController(passwordService)

	router.HandleFunc("/api/users/{userId}/passwords", passwordController.Create).Methods(http.MethodPost)
	router.HandleFunc("/api/users/{userId}/passwords/{passwordId}", passwordController.Update).Methods(http.MethodPut)
	router.HandleFunc("/api/users/{userId}/passwords/{passwordId}", passwordController.Delete).Methods(http.MethodDelete)
	router.HandleFunc("/api/users/{userId}/passwords/{passwordId}", passwordController.FindById).Methods(http.MethodGet)
	router.HandleFunc("/api/users/{userId}/passwords", passwordController.FindAll).Methods(http.MethodGet)

}
