const GOOGLE_API_KEY = "AIzaSyCAn_uHt9Pk09a5RoRMdNiz9IWqZfbYSAk";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=RO&key=" +
  GOOGLE_API_KEY;
// OLD https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=14&regionCode=RO&key=

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=" +
  GOOGLE_API_KEY +
  "&q=";

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
