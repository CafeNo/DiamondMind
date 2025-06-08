package main

import (
    "log"
    "net/http"

    delivery "companysite/internal/delivery/http"
    "companysite/internal/usecase"
)

func main() {
    uc := usecase.NewCompanyUsecase()
    router := delivery.NewRouter(uc)

    log.Println("🚀  Server running at http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", router))
}
