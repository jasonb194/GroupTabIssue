import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Group Tab Issue',

  projectId: 'no22i08n',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  // beta: {
  //   form: {
  //     enhancedObjectDialog: {
  //       enabled: false,
  //     },
  //   },
  // },
  schema: {
    types: schemaTypes,
  },
})
