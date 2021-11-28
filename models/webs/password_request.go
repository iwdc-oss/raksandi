package webs

type PasswordCreateRequest struct {
	UserId         uint   `json:"-"`
	HashedPassword string `json:"hashed_password" validate:"min=5,required"`
}

type PasswordUpdateRequest struct {
	Id             uint   `json:"-"`
	UserId         uint   `json:"-"`
	HashedPassword string `json:"hashed_password" validate:"min=5,required"`
}

type PasswordDeleteRequest struct {
	Id     uint `json:"-"`
	UserId uint `json:"-"`
}

type PasswordFindByIdRequest struct {
	Id     uint `json:"-"`
	UserId uint `json:"-"`
}

type PasswordFindByAllRequest struct {
	UserId uint `json:"-"`
}
