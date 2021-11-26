package domains

import "time"

type Password struct {
	Id             uint      `json:"id"`
	UserId         uint      `json:"user_id"`
	HashedPassword string    `json:"hashed_password"`
	CreatedAt      time.Time `json:"created_at"`
}
