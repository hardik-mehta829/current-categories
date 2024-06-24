declare module 'currentcategories' {
  export const supportedCategories: {
    category: string;
    subCategories?: string[];
  }[];
}
