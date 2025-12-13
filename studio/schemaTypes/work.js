export default {
    name: 'work',
    title: 'Work / Project',
    type: 'document',
    groups: [
        { name: 'basic', title: 'Basic Info', default: true },
        { name: 'gallery', title: 'Gallery Images' },
        { name: 'segments', title: 'Work Segments' },
    ],
    fields: [
        // === BASIC INFO ===
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            group: 'basic',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'basic',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'client',
            title: 'Client Name',
            type: 'string',
            group: 'basic',
            validation: Rule => Rule.required()
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
            group: 'basic',
            initialValue: '2024'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            group: 'basic',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {
            name: 'mainImage',
            title: 'Hero Image (Main)',
            type: 'image',
            group: 'basic',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'statement',
            title: 'Project Statement',
            type: 'string',
            group: 'basic',
            description: 'Short bold headline, e.g. "A new personal brand identity, bespoke site and build"'
        },
        {
            name: 'description',
            title: 'Project Description',
            type: 'text',
            group: 'basic',
            rows: 4
        },
        {
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'url',
            group: 'basic',
            description: 'Link to the live project (optional)'
        },

        // === GALLERY IMAGES ===
        {
            name: 'galleryImage1',
            title: 'Gallery Image 1 (Left)',
            type: 'image',
            group: 'gallery',
            options: { hotspot: true }
        },
        {
            name: 'galleryImage2',
            title: 'Gallery Image 2 (Right)',
            type: 'image',
            group: 'gallery',
            options: { hotspot: true }
        },
        {
            name: 'galleryImageFull',
            title: 'Gallery Image Full Width',
            type: 'image',
            group: 'gallery',
            options: { hotspot: true }
        },

        // === WORK SEGMENTS ===
        {
            name: 'segment1',
            title: 'Work Segment 1 (e.g. Website)',
            type: 'object',
            group: 'segments',
            fields: [
                { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Website"' },
                { name: 'title', title: 'Title', type: 'string', description: 'e.g. "Exclusive yet progressive"' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
                { name: 'image1', title: 'Segment Image 1', type: 'image', options: { hotspot: true } },
                { name: 'image2', title: 'Segment Image 2', type: 'image', options: { hotspot: true } },
            ]
        },
        {
            name: 'segment2',
            title: 'Work Segment 2 (e.g. Logo) - Optional',
            type: 'object',
            group: 'segments',
            fields: [
                { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Logo"' },
                { name: 'title', title: 'Title', type: 'string', description: 'e.g. "Visual Identity System"' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
                { name: 'imageFull', title: 'Full Width Image', type: 'image', options: { hotspot: true } },
                { name: 'imageLeft', title: 'Grid Image Left', type: 'image', options: { hotspot: true } },
                { name: 'imageRight', title: 'Grid Image Right', type: 'image', options: { hotspot: true } },
            ]
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'client',
            media: 'mainImage'
        }
    }
}
