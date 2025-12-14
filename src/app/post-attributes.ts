export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  date?: string;
  toc?: boolean;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
}
