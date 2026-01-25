import { groq } from "next-sanity";

// ==============================
// DEVELOPER QUERIES
// ==============================

export const DEVELOPERS_HERO_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  name,
  logo,
  hero_image,
  slug,
}`;

export const DEVELOPERS_BUTTON_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  logo,
  slug
}`;

export const DEVELOPERS_CAROUSEL_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  name,
  slug,
  hero_image,
}`;

export const DEVELOPERS_PAGE_QUERY = groq`*[_type == "developer" && _id == $developer_id][0] {
  _id,
  logo,
  description,
  dev_image,
}`;

export const DEVELOPERS_ALL_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  name,
  slug,
  order,
  description,
  logo,
  hero_image,
  dev_image,
  has_community,
}`;

export const DEVELOPERS_QUERY = groq`*[_type == "developer" && _id == $developer_id][0] {
  _id,
  name,
  slug,
  order,
  description,
  logo,
  hero_image,
  dev_image,
  has_community,
}`;

// ==============================
// PROJECT QUERIES
// ==============================

export const PROJECT_CARD_QUERY = groq`*[_type == "project" && developer._ref == $developer_id] | order(order asc){
  _id,
  name,
  location,
  starting_price,
  unit_type,
  slug,
  image,
}`;

export const PROJECT_ALL_QUERY = groq`*[_type == "project"] | order(order asc){
  _id,
  name,
  slug,
  order,
  description,
  location,
  starting_price,
  unit_type,
  slug,
  image,
  amenities,
  developer-> {
    _id,
    name,
  },
  community-> {
    _id,
    name,
  },
}`;

export const PROJECT_QUERY = groq`*[_type == "project" && _id == $project_id][0] {
  _id,
  name,
  slug,
  order,
  description,
  location,
  starting_price,
  unit_type,
  slug,
  image,
  amenities,
  developer-> {
    _id,
    name,
  },
  community-> {
    _id,
    name,
  },
}`;
