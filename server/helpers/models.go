package helpers

import (
	"github.com/iwdc-oss/raksandi/models/domains"
	"github.com/iwdc-oss/raksandi/models/webs"
)

func PasswordToPasswordResponse(password domains.Password) webs.PasswordResponse {
	return webs.PasswordResponse{
		Id:             password.Id,
		UserId:         password.UserId,
		HashedPassword: password.HashedPassword,
		CreatedAt:      password.CreatedAt,
	}
}

func PasswordToPasswordResponses(passwords []domains.Password) []webs.PasswordResponse {
	var passwordsResponses []webs.PasswordResponse
	for _, password := range passwords {
		passwordsResponses = append(passwordsResponses, PasswordToPasswordResponse(password))
	}

	return passwordsResponses
}
