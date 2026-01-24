"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { assist } from "@sanity/assist";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    assist({
      translate: {
        field: {
          documentTypes: ["developer", "community", "project"],
          languages: [
            { id: "en", title: "English" },
            { id: "ar", title: "Arabic" },
          ],
          translationOutputs: (
            documentMember,
            enclosingType,
            translateFromLanguageId,
            translateToLanguageIds,
          ) => {
            // For localeString/localeText fields, translate from one language key to another
            if (
              (enclosingType.name === "localeString" ||
                enclosingType.name === "localeText") &&
              typeof documentMember.name === "string" &&
              translateFromLanguageId === documentMember.name &&
              translateToLanguageIds.length > 0
            ) {
              // Output to all requested language keys
              return translateToLanguageIds.map((langId) => ({
                id: langId,
                outputPath: [...documentMember.path.slice(0, -1), langId],
              }));
            }
            return undefined;
          },
        },
      },
    }),
  ],
});
