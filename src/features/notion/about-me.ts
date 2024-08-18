import path from "path"
import fs from 'fs'

export async function getAboutMe() {
    const filePath = path.join('exported-contents', 'about-me.md')
    const content = fs.readFileSync(filePath, { encoding: 'utf-8' })

    console.log('content', content)

    return content
}