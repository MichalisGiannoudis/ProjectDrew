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
}

export interface ContentMap {
    [key: string]: HeaderContent | FooterContent | MainPageContent;
} 