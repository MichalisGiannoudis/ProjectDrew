export interface HeaderContent {
    homeOption: string;
    servicesOption: string;
    contactOption: string;
}

export interface FooterContent{
    nameLabel: string;
    progessionLabel: string;
    contactLabel: string;
    officeLabel: string;
    officeAddress: string;
    daysLabel: string;
    hoursLabel: string;
}

export interface MainPageContent{
    upperMotoLabel: string,
    lowerMotoLabel: string,
    nameLabel: string,
    progessionLabel: string,
    bioHeaderLabel: string,
    bioBodyLabel: string
    exp1Label: string,
    exp2Label: string,
    exp3Label: string,
    exp4Label: string,
    exp5Label: string,
}

export interface ContentMap {
    [key: string]: HeaderContent | FooterContent | MainPageContent;
} 