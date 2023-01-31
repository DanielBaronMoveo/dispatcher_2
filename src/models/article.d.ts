export interface Article {
  status: string;
  totalResults?: number;
  articles: [
    {
      source: {
        id: string | null;
        name: string;
      };
      author: string | null;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    },
  ];
}

export interface SelectedArticle {
  urlToImage: string;
  publishedAt: string;
  title: string;
  author: string | null;
  description: string;
}
