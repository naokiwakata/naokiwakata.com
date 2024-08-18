import { notionClient, queryDatabase } from "./notion-api"
import { NotionPage, parseProperties } from "./parse-notion-page";
import { EXPORTED_POSTS_RELATIVE_PATH } from "./constants";
import fs from 'fs/promises'
import { NotionToMarkdown } from "notion-to-md/build/notion-to-md";

const n2m = new NotionToMarkdown({ notionClient: notionClient })

const exportMarkdownsFromNotionDatabase = async () => {
    const queryDatabaseResponse = await queryDatabase()
    const notionPages = parseProperties(queryDatabaseResponse)
    await makeExportedDirectory()

    console.log(`notionPages count: ${notionPages.length}`)
    for (const page of notionPages) {
        writeMarkdownFile(page)
    }
}

/** Once removes exported directory and make a new one. */
const makeExportedDirectory = async () => {
    await fs.mkdir(EXPORTED_POSTS_RELATIVE_PATH)
}

/** Writes markdown file of given post data. */
const writeMarkdownFile = async (notionPage: NotionPage) => {
    const pageId = notionPage.pageId
    const title = notionPage.title
    const slug = notionPage.slug
    console.log(`exporting page: ${title} (${pageId})`)
    const mdString = await createMarkdownStringByPage(notionPage)
    try {
        await fs.writeFile(
            `${EXPORTED_POSTS_RELATIVE_PATH}/${slug}.md`,
            mdString
        )
        console.info(`Successfully exported: ${title} (${pageId})`)
    } catch (e) {
        console.error(
            `An error occurred when exporting page: ${title} (${pageId}): ${e}`
        )
    }
}

const createMarkdownStringByPage = async (
    notionPage: NotionPage
): Promise<string> => {
    const pageId = notionPage.pageId
    const mdBlocks = await n2m.pageToMarkdown(pageId)
    const markdownString = n2m.toMarkdownString(mdBlocks).parent
    return `${markdownString}`
}

    /** Executes task. */
    ; (async () => {
        await exportMarkdownsFromNotionDatabase()
    })()