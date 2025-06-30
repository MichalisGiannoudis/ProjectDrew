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
    serviceLabel1: string,
    serviceLabel2: string,
    serviceLabel3: string,
    serviceLabel4: string,
    serviceBody1: string,
    serviceBody2: string,
    serviceBody3: string,
    serviceBody4: string,
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