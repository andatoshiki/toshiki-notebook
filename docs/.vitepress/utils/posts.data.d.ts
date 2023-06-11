export interface PostData {
    title: string
    href: string
    create: number
    update: number
    keywords?: string[]
    cover?: string
    excerpt: string
}
export declare const data: PostData[]
