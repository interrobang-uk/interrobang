import fetch from "isomorphic-fetch"
import {
  AirtableRecord,
  CaseStudyFields,
  JobFields,
  PageFields,
  TeamMemberFields,
} from "../airtable.types"

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
  await getBaseFields<PageFields>("app7BQQGtlXjcwjQW/Pages")

export const getJobs = async () =>
  await getBaseFields<JobFields>("app7BQQGtlXjcwjQW/Jobs")
