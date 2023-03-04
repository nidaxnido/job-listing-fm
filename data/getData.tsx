import fs from 'fs'
import path from 'path'

export async function getData() {
    const fullPath = path.join(process.cwd(), "data/data.json")

    const content = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(content)
}