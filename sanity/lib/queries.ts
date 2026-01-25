import { groq } from "next-sanity";

export const DEVELOPERS_HERO_QUERY = groq`*[_type == "developer"]{
  _id,
  name,
  logo,
  hero_image
}`;

export const ALL_DEVELOPERS_QUERY = groq`*[_type == "developer"]`;

