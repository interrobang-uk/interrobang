export interface AirtableRecord<T> {
  id: string
  createdTime: string
  fields: T
}

export interface AirtableRecordWithHTML<T> extends AirtableRecord<T> {
  html: string
}

export interface CaseStudyFields {
  Project: string
  Client: string
  Summary: string
  Slug: string
  "Date commenced": string
  "Skills we used": string[]
  "Client type": string
  "Policy areas": string[]
  "Team members who worked on this": string[]
  "Longer description": string
  "Show in list": boolean
  Icon?: string
}

export interface JobFields {
  "Job title": string
  Salary: string
  Location: string
  Description: string
  "Learn more": string
  Visible: boolean
}

export interface PageFields {
  Title
  Slug: string
  Content
}

export interface TeamMemberFields {
  "Long biography": string
  "Former clients": string[]
  "Examples of work": string[]
  Slug: string
  Name: string
  Disciplines: string[]
  Photo: Photo[]
  Role: string
  LinkedIn: string
  Specialisms: string[]
  Email: string
  Pronouns: string
  "Short biography": string
}

export interface Photo {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: Thumbnails
}

export interface Thumbnails {
  small: Full
  large: Full
  full: Full
}

export interface Full {
  url: string
  width: number
  height: number
}
