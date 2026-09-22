import {blogPost} from './documents/blogPost'
import {experience} from './documents/experience'
import {skillCategory} from './documents/skillCategory'
import {siteSettings} from './singletons/siteSettings'

export const schemaTypes = [blogPost, experience, skillCategory, siteSettings]

export const singletonTypes = new Set(['siteSettings'])
