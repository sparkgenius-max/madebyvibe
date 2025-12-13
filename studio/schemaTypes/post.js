export default {
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: (new Date()).toISOString()
        },
        {
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
            description: 'e.g., "5 min read"'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Web Development', value: 'web-development' },
                    { title: 'Web Design', value: 'web-design' },
                    { title: 'Branding', value: 'branding' },
                    { title: 'News & Culture', value: 'news-culture' },
                    { title: 'UX/UI', value: 'ux-ui' },
                    { title: 'Strategy', value: 'strategy' }
                ]
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
            initialValue: 'Vibe Team'
        },
        {
            name: 'authorRole',
            title: 'Author Role',
            type: 'string',
            initialValue: 'Content Creator'
        },
        {
            name: 'authorImage',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true }
                }
            ]
        }
    ],

    preview: {
        select: {
            title: 'title',
            author: 'authorName',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        },
    },
}
