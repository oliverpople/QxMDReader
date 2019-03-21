import { NEWS_API_KEY } from "react-native-dotenv";

const url = `https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=${NEWS_API_KEY}`;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
