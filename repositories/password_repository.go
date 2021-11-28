package repositories

import (
	"context"
	"database/sql"
	"errors"

	"github.com/iwdc-oss/raksandi/helpers"
	"github.com/iwdc-oss/raksandi/models/domains"
)

type PasswordRepository struct {
}

func NewPasswordRepository() *PasswordRepository {
	return &PasswordRepository{}
}

func (r *PasswordRepository) Create(ctx context.Context, tx *sql.Tx, password domains.Password) domains.Password {
	SQL := "INSERT INTO passwords (user_id, hashed_password) VALUES (?, ?)"
	res, err := tx.ExecContext(ctx, SQL, password.UserId, password.HashedPassword)
	helpers.PanicIfError(err)

	id, err := res.LastInsertId()
	helpers.PanicIfError(err)

	password.Id = uint(id)

	return password
}

func (r *PasswordRepository) Update(ctx context.Context, tx *sql.Tx, password domains.Password) domains.Password {
	SQL := "UPDATE passwords SET hashed_password = ? WHERE id = ? AND user_id = ?"
	_, err := tx.ExecContext(ctx, SQL, password.HashedPassword, password.Id, password.UserId)
	helpers.PanicIfError(err)

	return password
}

func (r *PasswordRepository) Delete(ctx context.Context, tx *sql.Tx, password domains.Password) {
	SQL := "DELETE FROM passwords WHERE id = ? AND user_id = ?"
	_, err := tx.ExecContext(ctx, SQL, password.Id, password.UserId)
	helpers.PanicIfError(err)
}

func (r *PasswordRepository) FindById(ctx context.Context, tx *sql.Tx, password domains.Password) (domains.Password, error) {
	SQL := "SELECT id, user_id, hashed_password, created_at FROM passwords WHERE id = ? AND user_id = ?"
	rows, err := tx.QueryContext(ctx, SQL, password.Id, password.UserId)
	helpers.PanicIfError(err)
	defer rows.Close()

	if !rows.Next() {
		return domains.Password{}, errors.New("there'is not password")
	}

	var passwordToS domains.Password
	rows.Scan(&passwordToS.Id, &passwordToS.UserId, &passwordToS.HashedPassword, &passwordToS.CreatedAt)

	return passwordToS, nil
}

func (r *PasswordRepository) FindAll(ctx context.Context, tx *sql.Tx, userId uint) ([]domains.Password, error) {
	SQL := "SELECT id, user_id, hashed_password, created_at FROM passwords WHERE user_id = ?"
	rows, err := tx.QueryContext(ctx, SQL, userId)
	helpers.PanicIfError(err)
	defer rows.Close()

	var passwords []domains.Password
	for rows.Next() {
		var password domains.Password
		rows.Scan(&password.Id, &password.UserId, &password.HashedPassword, &password.CreatedAt)

		passwords = append(passwords, password)
	}

	return passwords, nil
}
