export interface HeaderContent {
    homeOption: string;
    servicesOption: string;
    contactOption: string;
}

export interface FooterContent{
    pageId: string;
    founderLabel: string;
    houseSearchLabel: string;
    houseSearchEmptyResultsLabel: string;
    houseSearchErrorLabel: string;
    houseTraitSearchLabel: string;
}

export interface MainPageContent{
    pageId: string;
    founderLabel: string;
    houseSearchLabel: string;
    houseSearchEmptyResultsLabel: string;
    houseSearchErrorLabel: string;
    houseTraitSearchLabel: string;
}

export interface ContentMap {
    [key: string]: HeaderContent | FooterContent | MainPageContent;
} 