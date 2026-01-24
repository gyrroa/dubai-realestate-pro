import { type SchemaTypeDefinition } from "sanity";
import { developerType } from "./developer";
import { communityType } from "./community";
import { projectType } from "./project";
import { localeString } from "./localeString";
import { localeText } from "./localeText";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [developerType, communityType, projectType, localeString, localeText],
};
