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
            if (
              translateFromLanguageId === "en" &&
              translateToLanguageIds.includes("ar")
            ) {
              // Check if the current field is NOT an arabic field (doesn't end in _ar)
              if (
                typeof documentMember.name === "string" &&
                !documentMember.name.endsWith("_ar")
              ) {
                // Check if the enclosing type actually HAS the corresponding _ar field
                const arFieldName = `${documentMember.name}_ar`;
                const hasArField = (enclosingType as any).fields?.some(
                  (f: any) => f.name === arFieldName,
                );

                if (hasArField) {
                  // Replace the last part of the path (the field name) with the arabic field name
                  // Path is an array of segments, we need to create a new path array
                  const newPath = [...documentMember.path];
                  newPath[newPath.length - 1] = arFieldName;

                  return [
                    {
                      id: "ar",
                      outputPath: newPath,
                    },
                  ];
                }
              }
            }
            return undefined;
          },
        },
      },
    }),
  ],
});
