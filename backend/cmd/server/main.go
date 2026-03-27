package main

import (
	"log"
	"net/http"
	"os"

	delivery "companysite/internal/delivery/http"
	"companysite/internal/usecase"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	uc := usecase.NewCompanyUsecase()
	router := delivery.NewRouter(uc)

	log.Printf("Server running at http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
