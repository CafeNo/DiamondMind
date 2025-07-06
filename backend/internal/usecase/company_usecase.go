package usecase

import "companysite/internal/entity"

type CompanyUsecase interface {
    GetInfo() entity.CompanyInfo
}

type companyUsecase struct{}

func NewCompanyUsecase() CompanyUsecase {
    return &companyUsecase{}
}

func (u *companyUsecase) GetInfo() entity.CompanyInfo {
    return entity.CompanyInfo{
        Name:   "Aurelia",
        Slogan: "Innovate. Inspire. Impact.",
        About:  "We create value by turning bold ideas into tangible digital experiences.",
    }
}
