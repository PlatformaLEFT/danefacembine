export type GeneralInfo = {
  buttons: {
    discord: { icon: string; name: string; url: string };
    facebook: { icon: string; name: string; url: string };
    instagram: { icon: string; name: string; url: string };
    tiktok: { icon: string; name: string; url: string };
    youtube: { icon: string; name: string; url: string };
  };
  donate: string;
  header: { text: string; title: string };
  join: { button: string; joinForm: string; text: string };
  logo: string;
  navText: string;
  postsShowMore: Post;
};

export type MemberInfo = {
  description: string;
  image: string;
  index: string;
  name: string;
};

export type Post = {
  imageUrl: string;
  index: string;
  url: string;
};

export type Analysis = {
  createdAt: string;
  createdBy: string;
  header: string;
  headerImage: string;
  likes: string;
  slug: string;
  text: string;
  title: string;
  comments: Comment[];
  index: string;
};

export type Comment = {
  createdAt: string;
  createdBy: string;
  text: string;
};

export type Campagnies = {
  createdAt: string;
  createdBy: string;
  header: string;
  headerImage: string;
  likes: string;
  slug: string;
  text: string;
  title: string;
  comments: Comment[];
  index: string;
};
