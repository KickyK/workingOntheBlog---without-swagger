const { response } = require("express")

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog app with Node.js, Express and MongoDb',
            version: '1.0.0',
            description: 'This is a CRUD app example'
        },
        servers: {
            {
                url: 'http://localhost:5000',
                description: 'Development server'
            }
        },
        components: {
            schemas: {
                Book: {
                    type: 'object',
                    require: ['title', 'post'],
                    properties: {
                        title: {
                            type: 'string',
                            description: 'The title of the blog'
                        },
                        post: {
                            type: 'integer',
                            description: 'Text for post'
                        }
                    }
                }
            }
        
        }        
            
    },
    apis: ['./routes/admin.js']
}

module.exports = options
