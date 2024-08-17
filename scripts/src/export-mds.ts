import { queryDatabase } from "./notion-api"

const exportMarkdownsFromNotionDatabase = async () => {
    const queryDatabaseResponse = await queryDatabase()
    console.log(queryDatabaseResponse)
}

    ; (async () => {
        await exportMarkdownsFromNotionDatabase()
    })()