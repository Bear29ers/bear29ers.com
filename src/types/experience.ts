export interface Project {
  id: number;
  startAt: string;
  endAt: string;
  role: string;
  company: string;
  location: string;
  tagList: string[];
  description: string[];
  highlightList: string[];
}

export interface Experience {
  id: number;
  startAt: string;
  endAt: string;
  projects: Project[];
}
