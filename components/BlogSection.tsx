import useSWR from "swr"
import { blogUrl } from "../config"
import { parse } from "rss-to-json"

const BlogSection = () => {
  const { data, error } = useSWR(`${blogUrl}/feed`)

  const feed = parse(data)

  return null
}

export default BlogSection
