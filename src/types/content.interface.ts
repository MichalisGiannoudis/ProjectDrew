export interface HeaderContent {
    bioOption: string;
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
    nameLabel: string,
    progessionLabel: string,
    bioHeaderLabel: string,
    bioBodyLabel: string
    servicesLabel: string,
    service1Label: string,
    service2Label: string,
    service3Label: string,
    service4Label: string,
    service1Body: string,
    service2Body: string,
    service3Body: string,
    service4Body: string,
    contactMeLabel: string,
    contactNameLabel: string,
    contactNamePlaceholder: string,
    contactEmailLabel: string,
    contactEmailPlaceholder: string,
    contactMessageLabel: string,
    contactMessagePlaceholder: string,
}

export interface MilestoneContent {
    milestones: {
        yearLabel: string;
        titleLabel: string;
        descriptionLabel: string;
    }[];
}

export interface ContentMap {
    [key: string]: HeaderContent | FooterContent | MainPageContent | MilestoneContent;
} 