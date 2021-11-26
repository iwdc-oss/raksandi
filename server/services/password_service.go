package services

import (
	"context"
	"database/sql"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/iwdc-oss/raksandi/helpers"
	"github.com/iwdc-oss/raksandi/models/domains"
	"github.com/iwdc-oss/raksandi/models/webs"
	"github.com/iwdc-oss/raksandi/repositories"
	"golang.org/x/crypto/bcrypt"
)

type PasswordService struct {
	PasswordRepository *repositories.PasswordRepository
	DB                 *sql.DB
	Validate           *validator.Validate
}

func NewPasswordService(passwordRepository *repositories.PasswordRepository, db *sql.DB, validate *validator.Validate) *PasswordService {
	return &PasswordService{
		PasswordRepository: passwordRepository,
		DB:                 db,
		Validate:           validate,
	}
}

func (s *PasswordService) Create(ctx context.Context, request webs.PasswordCreateRequest) webs.PasswordResponse {
	err := s.Validate.Struct(request)
	helpers.PanicIfError(err)

	tx, err := s.DB.Begin()
	helpers.PanicIfError(err)
	defer helpers.CommitOrRollBack(tx)

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(request.HashedPassword), 12)
	helpers.PanicIfError(err)

	password := domains.Password{
		UserId:         request.UserId,
		HashedPassword: string(hashedPassword),
	}

	password = s.PasswordRepository.Create(ctx, tx, password)

	createdAt := time.Now()
	password.CreatedAt = createdAt

	return helpers.PasswordToPasswordResponse(password)
}

func (s *PasswordService) Update(ctx context.Context, request webs.PasswordUpdateRequest) webs.PasswordResponse {
	err := s.Validate.Struct(request)
	helpers.PanicIfError(err)

	tx, err := s.DB.Begin()
	helpers.PanicIfError(err)
	defer helpers.CommitOrRollBack(tx)

	password := domains.Password{
		Id:     request.Id,
		UserId: request.UserId,
	}

	password, err = s.PasswordRepository.FindById(ctx, tx, password)
	helpers.PanicIfError(err)

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(request.HashedPassword), 12)
	helpers.PanicIfError(err)

	password.HashedPassword = string(hashedPassword)
	password = s.PasswordRepository.Update(ctx, tx, password)

	return helpers.PasswordToPasswordResponse(password)
}

func (s *PasswordService) Delete(ctx context.Context, request webs.PasswordDeleteRequest) {
	tx, err := s.DB.Begin()
	helpers.PanicIfError(err)
	defer helpers.CommitOrRollBack(tx)

	password := domains.Password{
		Id:     request.Id,
		UserId: request.UserId,
	}

	password, err = s.PasswordRepository.FindById(ctx, tx, password)
	helpers.PanicIfError(err)

	s.PasswordRepository.Delete(ctx, tx, password)
}

func (s *PasswordService) FindById(ctx context.Context, request webs.PasswordFindByIdRequest) webs.PasswordResponse {
	tx, err := s.DB.Begin()
	helpers.PanicIfError(err)
	defer helpers.CommitOrRollBack(tx)

	password := domains.Password{
		Id:     request.Id,
		UserId: request.UserId,
	}

	password, err = s.PasswordRepository.FindById(ctx, tx, password)
	helpers.PanicIfError(err)

	return helpers.PasswordToPasswordResponse(password)
}

func (s *PasswordService) FindAll(ctx context.Context, request webs.PasswordFindByAllRequest) []webs.PasswordResponse {
	tx, err := s.DB.Begin()
	helpers.PanicIfError(err)
	defer helpers.CommitOrRollBack(tx)

	passwords, err := s.PasswordRepository.FindAll(ctx, tx, request.UserId)
	helpers.PanicIfError(err)

	return helpers.PasswordToPasswordResponses(passwords)
}
