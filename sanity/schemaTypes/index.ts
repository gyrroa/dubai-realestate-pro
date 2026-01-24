import { type SchemaTypeDefinition } from "sanity";
import { developerType } from "./developer";
import { communityType } from "./community";
import { projectType } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [developerType, communityType, projectType],
};
