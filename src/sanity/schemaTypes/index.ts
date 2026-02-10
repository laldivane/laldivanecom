import { type SchemaTypeDefinition } from 'sanity'
import { track } from './track'
import { visualArchive } from './visualArchive'
import { settings } from './settings'
import { story } from './story'
import { brandKit } from './brandKit'
import { homePage } from './homePage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [track, visualArchive, settings, story, brandKit, homePage],
}
