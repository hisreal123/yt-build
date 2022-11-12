export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: { name: string; image: string };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Category {
  localeCompare(b: Category): number;
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  _type: string;
}

export interface ButtonTyping {
 url: string
 name: string
}
