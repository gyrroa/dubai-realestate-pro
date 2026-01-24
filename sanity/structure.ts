import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // All default document types except 'community'
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "community" && item.getId() !== "project",
      ),

      // Communities grouped by Developer
      S.listItem()
        .title("Communities per Developer")
        .child(
          S.documentTypeList("developer")
            .title("Developers")
            .child((developerId) =>
              S.documentList()
                .title("Communities")
                .schemaType("community")
                .filter(
                  '_type == "community" && developer._ref == $developerId',
                )
                .params({ developerId }),
            ),
        ),

      // Projects grouped by Developer
      S.listItem()
        .title("Projects per Developer")
        .child(
          S.documentTypeList("developer")
            .title("Developers")
            .child((developerId) =>
              S.documentList()
                .title("Projects")
                .schemaType("project")
                .filter('_type == "project" && developer._ref == $developerId')
                .params({ developerId }),
            ),
        ),
    ]);
