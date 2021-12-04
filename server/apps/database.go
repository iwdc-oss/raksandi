package apps

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/iwdc-oss/raksandi/helpers"
	"github.com/joho/godotenv"
)

func NewConnection() *sql.DB {
	err := godotenv.Load(".env")
	helpers.PanicIfError(err)

	mysqlUser := os.Getenv("MYSQL_USER")
	mysqlPassword := os.Getenv("MYSQL_PASSWORD")
	mysqlHost := os.Getenv("MYSQL_HOST")
	mysqlPort := os.Getenv("MYSQL_PORT")
	mysqlDatabase := os.Getenv("MYSQL_DATABASE")

	fmt.Println(mysqlUser, mysqlPassword, mysqlHost, mysqlPort, mysqlDatabase)

	db, err := sql.Open("mysql", mysqlUser+":"+mysqlPassword+"@tcp("+mysqlHost+":"+mysqlPort+")/"+mysqlDatabase+"?parseTime=true")
	helpers.PanicIfError(err)

	db.SetConnMaxLifetime(time.Minute * 60)
	db.SetMaxOpenConns(60)
	db.SetMaxIdleConns(50)

	return db
}
