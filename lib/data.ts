export type Video = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  creator: string;
  rating: string;
  quality: string;
  length: string;
  release: string;
};

export const categories = [
  { name: 'Romance', count: 48, icon: '✦' },
  { name: 'Drama', count: 32, icon: '◈' },
  { name: 'Fantasy', count: 26, icon: '✧' },
  { name: 'Studio', count: 19, icon: '⬢' }
];

export const featuredVideos: Video[] = [
  {
    slug: 'midnight-hours',
    title: 'Midnight Hours',
    description: 'An atmospheric late-night romance with premium production and moody cinematography.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    category: 'Romance',
    creator: 'Velvet Noir',
    rating: '4.9',
    quality: '4K',
    length: '32 min',
    release: '2026'
  },
  {
    slug: 'velvet-echo',
    title: 'Velvet Echo',
    description: 'Dark, sensual drama in a stylish city setting with layered character arcs and tense romance.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    category: 'Drama',
    creator: 'Luna Frame',
    rating: '4.8',
    quality: 'HD',
    length: '42 min',
    release: '2026'
  },
  {
    slug: 'golden-frames',
    title: 'Golden Frames',
    description: 'A glossy studio showcase mixing cinematic lighting, polished performance, and intimate storytelling.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    category: 'Studio',
    creator: 'Afterglow',
    rating: '4.7',
    quality: '1080p',
    length: '28 min',
    release: '2025'
  },
  {
    slug: 'afterglow-stories',
    title: 'Afterglow Stories',
    description: 'A dreamy collection of soft-focus scenes, romance, and elevated adult entertainment in motion.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    category: 'Fantasy',
    creator: 'Velvet Night',
    rating: '4.9',
    quality: '4K',
    length: '24 min',
    release: '2026'
  }
];

export const trendingNow = [
  {
    title: 'Cinematic Desire',
    score: '98%',
    tag: 'Hot',
    description: 'Elegant visuals with a modern adult-entertainment aesthetic.'
  },
  {
    title: 'Private Sessions',
    score: '96%',
    tag: 'New',
    description: 'Intimate, premium, and stylistically refined studio work.'
  },
  {
    title: 'Night Shift',
    score: '94%',
    tag: 'Trending',
    description: 'A sleek noir-inspired set with an immersive atmosphere.'
  }
];

export const videosBySlug: Record<string, Video> = Object.fromEntries(
  featuredVideos.map((video) => [video.slug, video])
);

export type Creator = {
  name: string;
  username: string;
  followers: string;
  likes: string;
  bio: string;
};

export const creators: Creator[] = [
  {
    name: 'Velvet Noir',
    username: 'velvetnoir',
    followers: '78.2K',
    likes: '19.4K',
    bio: 'Contemporary adult entertainment creator known for moody, romantic storytelling, cinematic direction, and premium production values.'
  },
  {
    name: 'Luna Frame',
    username: 'lunaframe',
    followers: '46.1K',
    likes: '12.6K',
    bio: 'Stylish creator focused on elevated visual narratives and sensual, modern scenes.'
  }
];
