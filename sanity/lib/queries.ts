import { groq } from "next-sanity";

// ==============================
// DEVELOPER QUERIES
// ==============================

export const DEVELOPERS_HERO_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  name {en, ar},
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
  name {en, ar},
  slug,
  hero_image,
}`;

export const DEVELOPERS_PAGE_QUERY = groq`*[_type == "developer" && slug.current == $slug][0] {
  _id,
  logo,
  description {en, ar},
  dev_image,
}`;

export const DEVELOPERS_ALL_QUERY = groq`*[_type == "developer"] | order(order asc){
  _id,
  name {en, ar},
  slug,
  order,
  description {en, ar},
  logo,
  hero_image,
  dev_image,
  has_community,
}`;

export const DEVELOPERS_QUERY = groq`*[_type == "developer" && slug.current == $slug][0] {
  _id,
  name {en, ar},
  slug,
  order,
  description {en, ar},
  logo,
  hero_image,
  dev_image,
  has_community,
}`;

// ==============================
// PROJECT QUERIES
// ==============================

export const PROJECT_CARD_QUERY = groq`*[_type == "project" && developer->slug.current == $slug] | order(order asc){
  _id,
  name {en, ar},
  location {en, ar},
  starting_price {en, ar},
  unit_type[] {en, ar},
  slug,
  image,
}`;

export const PROJECT_ALL_QUERY = groq`*[_type == "project"] | order(order asc){
  _id,
  name {en, ar},
  slug,
  order,
  description {en, ar},
  location {en, ar},
  starting_price {en, ar},
  unit_type[] {en, ar},
  image,
  amenities[] {en, ar},
  developer-> {
    _id,
    name {en, ar},
  },
  community-> {
    _id,
    name {en, ar},
  },
}`;

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  name {en, ar},
  slug,
  order,
  description {en, ar},
  location {en, ar},
  starting_price {en, ar},
  unit_type[] {en, ar},
  image,
  amenities[] {en, ar},
  developer-> {
    _id,
    name {en, ar},
  },
  community-> {
    _id,
    name {en, ar},
  },
}`;
