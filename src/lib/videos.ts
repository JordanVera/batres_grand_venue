export type VideoItem = {
  id: number;
  title: string;
  type: "youtube" | "mp4" | "vimeo";
  youtubeId?: string;
  vimeoId?: string;
  src?: string;
  poster?: string;
};

export type EmbedItem = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 1,
    title: 'Batres Grand Venue',
    type: 'youtube',
    youtubeId: 'rZDkGWKBu9E',
    poster: '/gallery/gallery-01.jpg',
  },
];

export const EMBEDS_DATA: EmbedItem[] = [
  {
    id: 1,
    title: 'Book a Private Tour',
    type: 'external',
    url: 'https://www.batresgrandvenue.com/book-tour-private',
  },
];
