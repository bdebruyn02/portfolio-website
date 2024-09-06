export type linksT = {
  name: string;
  href: string;
};

export type skillExpT = {
  category: string;
  technologies: string[];
};

export type projectT = {
  name: string;
  photoName: string;
  shortDesc: string;
  href: string;
};

export type portfolioData = {
  links?: linksT[];
  about_me?: string;
  skills_exp?: skillExpT[];
  projects?: projectT[];
}
