import fs from "fs"
import dotenv from "dotenv"
import { getCaseStudies, getPages, getTeamMembers } from "../lib/airtable"

dotenv.config()

const run = async (): Promise<void> => {
  console.log("⏳ Importing fresh content from Airtable...")

  const data = await Promise.all([
    await getCaseStudies(),
    await getTeamMembers(),
    await getPages(),
  ])

  fs.writeFileSync(
    "data/airtable-content.json",
    JSON.stringify(
      {
        caseStudies: data[0],
        teamMembers: data[1],
        pages: data[2],
      },
      null,
      2
    )
  )

  console.log("✅ Airtable content imported")
}

run()
