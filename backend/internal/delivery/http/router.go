package deliveryhttp

import (
    "net/http"

    "github.com/go-chi/chi/v5"
    "github.com/go-chi/chi/v5/middleware"

    "companysite/internal/usecase"
)

func NewRouter(uc usecase.CompanyUsecase) http.Handler {
    r := chi.NewRouter()
    r.Use(middleware.Logger)

    r.Get("/api/company", CompanyInfoHandler(uc))

    // serve static built React files (assumes `frontend/dist` after `npm run build`)
    fs := http.FileServer(http.Dir("frontend/dist"))
    r.Handle("/*", fs)

    return r
}
