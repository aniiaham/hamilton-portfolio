export enum SelectedPage {
  Home = "home",
  About = "about",
  Works = "works",
  Contact = "contact",
}

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  website: string;
}
