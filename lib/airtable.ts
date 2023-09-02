import fetch from "isomorphic-fetch"

export interface AirtableRecord<T> {
  id: string
  createdTime: string
  fields: T
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
  "Team members who worked on this": string
  "Longer description": string
}

export interface PageFields {
  Title
  Slug: string
  Content
}

export interface TeamMemberFields {
  Title
  Slug: string
  Content
}

export const getBaseFields = async <T>(
  // path including the app/base and view IDs
  // MUST start with a /
  path: string
): Promise<AirtableRecord<T>[]> => {
  const res = await fetch(
    `https://api.airtable.com/v0/${path}?maxRecords=1000`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  )
  const data = await res.json()

  return data.records
}

export const getCaseStudies = async () =>
  await getBaseFields<CaseStudyFields>("app7BQQGtlXjcwjQW/Case%20studies")

export const getTeamMembers = async () =>
  await getBaseFields<TeamMemberFields>("app7BQQGtlXjcwjQW/Team%20members")

export const getPages = async () =>
  await getBaseFields<PageFields>("appMTMhO4nu9hJIac/All")
