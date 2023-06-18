import parse from "rss-to-json"
import { blogUrl } from "../../config"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        if (process.env.NODE_ENV === "production") throw "Not authorised"

        const feed = await parse(`${blogUrl}/feed`)

        res.status(200).json(feed)
        break

      default:
        throw "Method not allowed"
        break
    }
  } catch (e: any) {
    console.error(e)
    res.status(400).json({ error: e?.name || e })
  }
}

export default handler
