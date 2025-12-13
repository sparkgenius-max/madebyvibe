export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Client Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Testimonial Text',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'initial',
            title: 'Initial (Avatar)',
            type: 'string',
            description: 'Single letter for the avatar',
            validation: Rule => Rule.max(1)
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'company'
        }
    }
}
