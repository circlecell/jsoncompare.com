module.exports = {
    id: '/AppState',
    type: 'object',
    additionalProperties: false,
    properties: {
        simple: {
            type: 'string'
        },
        diff: {
            type: 'object',
            additionalProperties: false,
            properties: {
                left: {
                    type: 'string'
                },
                right: {
                    type: 'string'
                }
            }
        },
        batch: {
            type: 'array',
            items: {
                type: 'string'
            }
        }
    }
};
