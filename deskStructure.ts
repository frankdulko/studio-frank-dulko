import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {StructureBuilder, StructureResolverContext} from 'sanity/structure'

export const deskStructure = (S: StructureBuilder, context: StructureResolverContext) => {
  return S.list()
    .title('Content')
    .items([
      // Optional configuration
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        createIntent: true, // do not add an option for item creation
        menuItems: [], // allow an array of `S.menuItem()` to be injected to orderable document list menu
        // pass from the structure callback params above
        S,
        context,
      }),

      // ... all other desk items
    ])
}
