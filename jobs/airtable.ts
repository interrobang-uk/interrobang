import fs from "fs"
import dotenv from "dotenv"
import {
  getCaseStudies,
  getJobs,
  getPages,
  getTeamMembers,
} from "../lib/airtable"

dotenv.config()

const run = async (): Promise<void> => {
  console.log("⏳ Importing fresh content from Airtable...")

  const data = await Promise.all([
    await getCaseStudies(),
    await getTeamMembers(),
    await getPages(),
    await getJobs(),
  ])

  // download featured case study images
  for (let i = 0; i < data[0].length; i++) {
    const item = data[0][i]

    const downloadUrl = item.fields.Photo?.[0].thumbnails.large.url

    if (downloadUrl) {
      const res = await fetch(downloadUrl)
      const blob = await res.blob()

      let buffer = await blob.arrayBuffer()
      buffer = Buffer.from(buffer)
      fs.createWriteStream(
        `public/work/${item.fields.Photo?.[0].filename}`
      ).write(buffer)
    }
  }

  // download team member portraits
  for (let i = 0; i < data[1].length; i++) {
    const item = data[1][i]

    const downloadUrl = item.fields.Photo?.[0].thumbnails.large.url
    // const filename = item.fields.Photo?.[0].filename
    const res = await fetch(downloadUrl)
    const blob = await res.blob()

    let buffer = await blob.arrayBuffer()
    buffer = Buffer.from(buffer)
    fs.createWriteStream(
      `public/team/${item.fields.Photo?.[0].filename}`
    ).write(buffer)
  }

  fs.writeFileSync(
    "data/airtable-content.json",
    JSON.stringify(
      {
        caseStudies: data[0],
        teamMembers: data[1],
        pages: data[2],
        jobs: data[3],
      },
      null,
      2
    )
  )

  console.log("✅ Airtable content imported")
}

run()
