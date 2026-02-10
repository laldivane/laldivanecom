/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path will render this component.
 * To learn more about the structure of this file, please see:
 * https://github.com/sanity-io/next-sanity
 */
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
