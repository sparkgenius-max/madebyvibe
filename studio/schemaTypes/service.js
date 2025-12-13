export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string', // e.g., "Logo Design"
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'serviceCategory' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'shortDescription',
            title: 'Short Description (for Listing/Navbar)',
            type: 'text',
            rows: 2
        },
        // Detail Page Content
        {
            name: 'detailHeroTitle',
            title: 'Detail Page Hero Title',
            type: 'string'
        },
        {
            name: 'detailHeroDescriptionLead',
            title: 'Detail Page Lead Description',
            type: 'text',
            rows: 3
        },
        {
            name: 'detailHeroDescription',
            title: 'Detail Page Main Description',
            type: 'text',
            rows: 5
        },
        {
            name: 'detailImage',
            title: 'Detail Page Large Image/Video',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'approachTitle',
            title: 'Approach Title',
            type: 'string'
        },
        {
            name: 'approachText',
            title: 'Approach Text',
            type: 'text',
            rows: 3
        },
        {
            name: 'capabilities',
            title: 'Capabilities List (Detail Page)',
            type: 'array',
            of: [{ type: 'string' }]
        },
        // Homepage Expertise Image (Legacy/Shared)
        {
            name: 'image',
            title: 'Card Image (Homepage)',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'showOnHomepage',
            title: 'Show on Homepage Expertise?',
            type: 'boolean',
            initialValue: false
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
}
