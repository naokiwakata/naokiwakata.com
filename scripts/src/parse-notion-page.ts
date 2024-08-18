import { PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

export type NotionPage = {
    pageId: string
    slug: string
    title: string
    createdAt: string
    tags: string[]
}

/** Parse Notion page properties. */
export const parseProperties = (
    response: QueryDatabaseResponse
): NotionPage[] =>
    response.results.map((pageObjectResponse) => {
        const pageId = pageObjectResponse.id
        const page = pageObjectResponse as PageObjectResponse
        const slug = slugFromPageObjectResponse(page)
        const title = titleFromPageObjectResponse(page)
        const createdAt = createdAtFromPageObjectResponse(page)
        const tags = tagsFromPageObjectResponse(page)
        return { pageId, slug, title, createdAt, tags }
    })

/** Parse Notion page slug. */
const slugFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.slug as {
        type: 'rich_text'
        rich_text: { plain_text: string }[]
    }
    return property.rich_text[0].plain_text
}

/** Parse Notion page title. */
const titleFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.title as {
        type: 'title'
        title: { plain_text: string }[]
    }
    return property.title[0].plain_text
}

/** Parse Notion page createdAt. */
const createdAtFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string => {
    const property = pageObjectResponse.properties.createdAt as {
        type: 'date'
        date: { start: string }
    }
    return property.date.start
}

/** Parse Notion page tags. */
const tagsFromPageObjectResponse = (
    pageObjectResponse: PageObjectResponse
): string[] => {
    const property = pageObjectResponse.properties.tags as {
        type: 'multi_select'
        multi_select: { id: string; name: string; color: string }[]
    }
    return property.multi_select.map((tag) => tag.name)
}
