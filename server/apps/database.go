package apps

import (
	"database/sql"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

func NewConnection() *sql.DB {
	DB_NAME := os.Getenv("DB_NAME")
	DB_PASSWORD := os.Getenv("DB_PASSWORD")

	db, err := sql.Open("mysql", DB_NAME+":"+DB_PASSWORD+"@tcp(localhost:3306)/raksandi?parseTime=true")
	if err != nil {
		panic(err)
	}

	db.SetConnMaxLifetime(time.Minute * 60)
	db.SetMaxOpenConns(60)
	db.SetMaxIdleConns(50)

	return db
}
