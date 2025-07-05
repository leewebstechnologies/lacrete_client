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

export type team = {
  id: number;
  image: StaticImageData;
  name: string;
  position: string;
};

export type category = {
  id: number;
  title: string;
  desc: string;
  category: string;
  image: StaticImageData;
};

// export type blog = {
//   id: number;
//   title: string;
//   desc: string;
//   slug: string;
//   image: StaticImageData;
//   content: string;
// };


export type blog = {
  id: number;
  slug: string;
  title: string;
  desc: string;
  image: string;
  content: string;
}







