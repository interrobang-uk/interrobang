export interface CaseStudyFields {
  Project: string
  Client: string
  Summary: string
  "Date commenced": string
  "Skills we used": string[]
  "Client type": string
  "Policy areas": string[]
  "Team members who worked on this": string
  "Longer description": string
}

export interface AirtableRecord<T> {
  id: string
  createdTime: string
  fields: T
}

export const getCaseStudies = async (): Promise<
  AirtableRecord<CaseStudyFields>[]
> => {
  const res = await fetch(
    "https://api.airtable.com/v0/app7BQQGtlXjcwjQW/Case%20studies?maxRecords=10000000",
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  )
  const data = await res.json()

  return data.records
}
