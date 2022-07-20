export type Course = {
  badge: boolean;
  createdBy: string;
  description: string;
  duration: number;
  hash: string;
  info?: {
    benefits: string[];
    descriptionSummary: string;
    descriptions: string[];
    requirements: string[];
  };
  poster: string;
  price: number;
  rating: number;
  technologies: string;
  updated: string;
  views: string;
};

export type ErrorProps = {
  statusCode: number;
  title: string;
};

export interface CourseWithMeta {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: number;
}

export type ProfileType = {
  profile: {
    name: string;
    email: string;
    hash: string;
    avatar: string;
  };
};

export type PropsHome = {
  data: Course[];
  meta: any;
  courses: {
    data: Course[];
    meta: CourseWithMeta;
  };
  children?: never;
};

export type ErrorResponse = {
  error: string;
  message: string;
  statusCode: number;
};
