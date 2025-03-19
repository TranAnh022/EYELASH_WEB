export enum SelectedPage {
  Home = "home",
  AboutUs = "aboutus",
  PriceLists = "pricelists",
  Contactus = "contactus",
}

export interface AboutUsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface PriceType {
  name: string,
  description: string,
  image:string,
}