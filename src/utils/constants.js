const GOOGLE_API_KEY = "AIzaSyCUBiR2MnoqsWRs_FJ8Mlji4FjeBJGl7ho";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=14&regionCode=RO&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const mockCommentsData = [
  {
    name: "Cristian manolescu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "Cristian manolescu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [
          {
            name: "Cristian manolescu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "Cristian manolescu",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Cristian manolescu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "Cristian manolescu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
    ],
  },
  {
    name: "Cristian manolescu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Cristian manolescu",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
];
