const NEWS_API_KEY = process.env.NEWS_API_KEY;

const BASE_PATH = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

const url = `${BASE_PATH}\`${NEWS_API_KEY}\``;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
