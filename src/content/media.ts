export type MediaItem = {
  id: string;
  type: "video" | "podcast" | "article";
  title: string;
  description?: string;
  url: string;
  thumbnail: string;
  duration?: string;
  date?: string;
  embedUrl?: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: "yt-1",
    type: "video",
    title: "April Armstrong on NBC-New Mexico",
    description: "April Armstrong shares 5 tips to make a new start with ease.",
    url: "https://www.youtube.com/watch?v=3iuUBIqVLo8&list=PLrGbuSJdBwUrlBcScNiAe7TRm2pvmuT_y&index=4",
    thumbnail: "https://i.ytimg.com/vi/3iuUBIqVLo8/hqdefault.jpg",
    duration: "3:13",
    date: "2018-10-11",
  },
  {
    id: "yt-2",
    type: "video",
    title: "April Armstrong on CW-Chicago",
    description: "April Armstrong shares holiday tips to help you advance your career in the new year.",
    url: "https://www.youtube.com/watch?v=ZhpC47fVhYE&list=PLrGbuSJdBwUrlBcScNiAe7TRm2pvmuT_y&index=8",
    thumbnail: "https://i.ytimg.com/vi/ZhpC47fVhYE/hqdefault.jpg",
    duration: "4:15",
    date: "2019-06-20",
  },
  {
    id: "yt-3",
    type: "video",
    title: "April Armstrong on FOX News-Virginia",
    description: "More than 30% of Americans are not happy in their jobs. This doesn't have to be you. April Armstrong gives tips to change it up in your job.",
    url: "https://www.youtube.com/watch?v=mrxzxFmU9RQ&list=PLrGbuSJdBwUrlBcScNiAe7TRm2pvmuT_y&index=1",
    thumbnail: "https://i.ytimg.com/vi/mrxzxFmU9RQ/hqdefault.jpg",
    duration: "3:51",
    date: "2018-09-15",
  },
  {
    id: "pod-1",
    type: "podcast",
    title: "Ep. 623 - The Day One Executive with April Armstrong",
    description: "Every single person has the innate ability to become a good leader, and the only thing you have to do is tap this power deep within you.",
    url: "https://podcasts.apple.com/us/podcast/ep-623-the-day-one-executive-with-april/id1290656762?i=1000597255849",
    embedUrl: "https://embed.podcasts.apple.com/us/podcast/ep-623-the-day-one-executive-with-april/id1290656762?i=1000597255849",
    thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/9c/24/a7/9c24a774-e41e-9264-1411-2b25fb11cb8d/mza_1282604419138732931.jpg/300x300bb.webp",
    duration: "36:00",
    date: "2023-01-30",
  },
  {
    id: "pod-2",
    type: "podcast",
    title: "Leading Change During a Crisis — April Armstrong",
    url: "https://podcasts.apple.com/us/podcast/leading-change-during-a-crisis-april-armstrong/id1439952788?i=1000474311042",
    embedUrl: "https://embed.podcasts.apple.com/us/podcast/leading-change-during-a-crisis-april-armstrong/id1439952788?i=1000474311042",
    thumbnail: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/2a/fa/4e/2afa4e60-4f29-10dc-21cd-1fa5ef49e881/mza_10503026220572189676.png/300x300bb.webp",
    description: "Leading complex changes – especially during a crisis – requires leaders to be master balancers in that they have to manage both the human aspects of change.",
    duration: "56 min",
    date: "2020-05-12",
  },
  {
    id: "pod-3",
    type: "podcast",
    title: "April Armstrong - You Don’t Have to Have Your Own Business to Be an Entrepreneur",
    description: "Have you ever thought about being your own boss and maybe you’re reluctant to leap? What if you could have your cake and eat it too?",
    url: "https://music.amazon.com/podcasts/f9dd9712-098b-40b1-aa16-4d0b031dddc3/episodes/18bf578c-42b9-4eef-8862-875dfd8fd9f4/imperfect-brilliance-with-betsy-mcloughlin-april-armstrong---you-don%E2%80%99t-have-to-have-your-own-business-to-be-an-entrepreneur",
    embedUrl: "https://music.amazon.com/podcasts/f9dd9712-098b-40b1-aa16-4d0b031dddc3/episodes/18bf578c-42b9-4eef-8862-875dfd8fd9f4/imperfect-brilliance-with-betsy-mcloughlin-april-armstrong---you-don%E2%80%99t-have-to-have-your-own-business-to-be-an-entrepreneur",
    thumbnail: "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/f9dd9712-098b-40b1-aa16-4d0b031dddc3/18bf578c-42b9-4eef-8862-875dfd8fd9f4-787604756._SX768_SY768_BL0_QL100__UX358_FMwebp_QL85_.jpg",
    duration: "56 min",
    date: "2019-11-26",
  },
  {
    id: "art-1",
    type: "article",
    title: "Eight Perspectives Every Executive Needs To Make Sound Decisions In A Crisis",
    description: "A practical framework of eight perspectives leaders should convene to make timely, sound decisions in a crisis.",
    url: "https://www.forbes.com/councils/forbescoachescouncil/2020/05/06/eight-perspectives-every-executive-needs-to-make-sound-decisions-in-a-crisis/",
    thumbnail: "/logos/Frobes1.png",
    date: "2020-05-06",
  },
  {
    id: "art-2",
    type: "article",
    title: "16 Ways Professionals Can Avoid Overcommitting Themselves",
    description: "Forbes Coaches Council members share practical rules and strategies to prevent overcommitment and burnout.",
    url: "https://www.forbes.com/councils/forbescoachescouncil/2022/08/02/16-ways-professionals-can-avoid-overcommitting-themselves/",
    thumbnail: "/logos/Forbes2.png",
    date: "2022-08-02",
  },
  {
    id: "art-3",
    type: "article",
    title: "12 Effective Ways For Managers To Get Employees Re-Engaged",
    description: "Practical tactics from Forbes Coaches Council to help managers reignite employee engagement.",
    url: "https://www.forbes.com/councils/forbescoachescouncil/2021/11/02/12-effective-ways-for-managers-to-get-employees-re-engaged/",
    thumbnail: "/logos/Forbes3.png",
    date: "2021-11-02",
  },
];


