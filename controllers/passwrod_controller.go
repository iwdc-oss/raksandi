package controllers

import (
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/iwdc-oss/raksandi/helpers"
	"github.com/iwdc-oss/raksandi/models/webs"
	"github.com/iwdc-oss/raksandi/services"
)

type PasswordController struct {
	PasswordService *services.PasswordService
}

func NewPasswordController(passwordService *services.PasswordService) *PasswordController {
	return &PasswordController{
		PasswordService: passwordService,
	}
}

func (c *PasswordController) Create(writer http.ResponseWriter, request *http.Request) {
	var passwordCreateRequest webs.PasswordCreateRequest
	helpers.ReadFromRequestBody(request, &passwordCreateRequest)

	vars := mux.Vars(request)
	userId, err := strconv.Atoi(vars["userId"])
	helpers.PanicIfError(err)
	passwordCreateRequest.UserId = uint(userId)

	passwordCreateResponse := c.PasswordService.Create(request.Context(), passwordCreateRequest)

	webResponse := webs.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   passwordCreateResponse,
	}

	helpers.WriteToResponseBody(writer, webResponse)
}

func (c *PasswordController) Update(writer http.ResponseWriter, request *http.Request) {
	var passwordUpdateRequest webs.PasswordUpdateRequest
	helpers.ReadFromRequestBody(request, &passwordUpdateRequest)

	vars := mux.Vars(request)
	userId, err := strconv.Atoi(vars["userId"])
	helpers.PanicIfError(err)
	passwordUpdateRequest.UserId = uint(userId)
	passwordId, err := strconv.Atoi(vars["passwordId"])
	helpers.PanicIfError(err)
	passwordUpdateRequest.Id = uint(passwordId)

	passwordUpdateResponse := c.PasswordService.Update(request.Context(), passwordUpdateRequest)

	webResponse := webs.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   passwordUpdateResponse,
	}

	helpers.WriteToResponseBody(writer, webResponse)
}

func (c *PasswordController) Delete(writer http.ResponseWriter, request *http.Request) {
	var passwordDeleteRequest webs.PasswordDeleteRequest

	vars := mux.Vars(request)
	userId, err := strconv.Atoi(vars["userId"])
	helpers.PanicIfError(err)
	passwordDeleteRequest.UserId = uint(userId)
	passwordId, err := strconv.Atoi(vars["passwordId"])
	helpers.PanicIfError(err)
	passwordDeleteRequest.Id = uint(passwordId)

	c.PasswordService.Delete(request.Context(), passwordDeleteRequest)

	webResponse := webs.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
	}

	helpers.WriteToResponseBody(writer, webResponse)
}

func (c *PasswordController) FindById(writer http.ResponseWriter, request *http.Request) {
	var passwordFindByIdRequest webs.PasswordFindByIdRequest

	vars := mux.Vars(request)
	userId, err := strconv.Atoi(vars["userId"])
	helpers.PanicIfError(err)
	passwordFindByIdRequest.UserId = uint(userId)
	passwordId, err := strconv.Atoi(vars["passwordId"])
	helpers.PanicIfError(err)
	passwordFindByIdRequest.Id = uint(passwordId)

	passwordFindByIdResponse := c.PasswordService.FindById(request.Context(), passwordFindByIdRequest)

	webResponse := webs.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   passwordFindByIdResponse,
	}

	helpers.WriteToResponseBody(writer, webResponse)
}

func (c *PasswordController) FindAll(writer http.ResponseWriter, request *http.Request) {
	var passwordFindByAllRequest webs.PasswordFindByAllRequest

	vars := mux.Vars(request)
	userId, err := strconv.Atoi(vars["userId"])
	helpers.PanicIfError(err)
	passwordFindByAllRequest.UserId = uint(userId)

	passwordFindAllResponse := c.PasswordService.FindAll(request.Context(), passwordFindByAllRequest)

	webResponse := webs.WebResponse{
		Code:   http.StatusOK,
		Status: "OK",
		Data:   passwordFindAllResponse,
	}

	helpers.WriteToResponseBody(writer, webResponse)
}
