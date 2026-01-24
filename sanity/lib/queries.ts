import { groq } from "next-sanity";

export const DEVELOPERS_HERO_QUERY = groq`*[_type == "developer"]{
  name,
  logo,
  hero_image
}`;

export const ALL_DEVELOPERS_QUERY = groq`*[_type == "developer"]`;

