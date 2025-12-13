export default {
    name: 'serviceCategory',
    title: 'Service Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string', // e.g., "Design"
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            hidden: true
        }
    ]
}
