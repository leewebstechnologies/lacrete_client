type StaticImageData = import("next/image").StaticImageData;

export type hero = {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export type testimonial = {
  id: number;
  comment: string;
  image: StaticImageData;
  name: string;
}


export type category = {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: StaticImageData;
};


export type blog = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  image: string;
  content: string;
}







