package deliveryhttp

import (
    "encoding/json"
    "net/http"

    "companysite/internal/usecase"
)

func CompanyInfoHandler(uc usecase.CompanyUsecase) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(uc.GetInfo())
    }
}
