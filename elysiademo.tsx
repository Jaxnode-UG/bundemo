import Elysia from 'elysia';
import { html } from '@elysiajs/html'

new Elysia()
    .use(html)
	.get('/', () => '<h1>Hello JaxNode!</h1>')
    .get('/jsx', () => (
        <html lang='en'>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))
    .get('/id/:id', ({ params: { id }}) => { 
        return { "myid": id } 
    })
	.listen(3000);