export default interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  date?: string;
  category?: string;
  tags?: string[];
  toc?: boolean;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
}
