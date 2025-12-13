export default {
    name: 'team',
    title: 'Team Member',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image'
        }
    }
}
