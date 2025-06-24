import { ContentMap } from "@/types/content.interface";
import { HeaderContentEN, HeaderContentGR } from "./header.content";
import { FooterContentEN, FooterContentGR } from "./footer.content"
import { MainPageContentEN, MainPageContentGR } from "./mainPage.content";

export const contentMap: ContentMap = {
    'headerEN': HeaderContentEN,
    'headerGR': HeaderContentGR,
    'footerEN': FooterContentEN,
    'footerGR': FooterContentGR,
    'mainPageEN': MainPageContentEN,
    'mainPageGR': MainPageContentGR
}
