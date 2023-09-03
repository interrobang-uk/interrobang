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

  // TODO download pictures
  for (let i = 0; i < data[1].length; i++) {
    const member = data[1][i]

    const downloadUrl = member.fields.Photo?.[0].thumbnails.large.url
    const filename = member.fields.Photo?.[0].filename
    const res = await fetch(downloadUrl)
    const blob = await res.blob()

    let buffer = await blob.arrayBuffer()
    buffer = Buffer.from(buffer)
    fs.createWriteStream(`public/team/${member.id}.jpg`).write(buffer)
  }

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
