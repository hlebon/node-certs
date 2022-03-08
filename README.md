# commands
1. npm install
2. node -e "fs.renameSync('example', 'hello')" // to rename a folder
3. node -e "fs.rmdirSync('public', {recursive: true})" // to remove a folder 
4. node -e "fs.openSync('index.hbs', 'w')" // to create a file
5. node -e "fs.mkdirSync('views')" // to create a folder

# termns
1. A **Fastify** plugin is a function that accepts a server instance and options as parameters. It may accept a third parameter, a next callback or it may return a promise (which is what an async function does). So the app.js file is actually exporting a Fastify plugin.

2. `"dev": "fastify start -w -l info -P app.js"` the `-w` means "watch and reload the project as we work on it" and the `-P` means "prettify the log output"

3. in fastify everything is a plugin (plugin, routes, libraries)

4. A key difference between **Express middleware** and **Fastify plugins** is that Express middleware is executed for every request (if reachable) but Fastify plugins are called only at initialization time. Fastify plugins are always asynchronous (either with a callback or a returned promise) to allow for asynchronous initialization of every plugin.

5. `The fastify.get` method can accept a normal synchronous function or an async function. Whatever is returned from the function or async function is automatically processed and sent as the content of the HTTP response. Alternatively the `reply.send` method can be used (e.g. `reply.send({root: true})`), which is similar to the res.send method of Express. This can be useful when working with nested callback APIs.

6. When a route is defined in a subfolder, by default, the fastify-autoload plugin will register that route prefixed with the name of the subfolder. 


7. The original focus of the Fastify framework was on building RESTful JSON services, whereas Express is more geared towards template rendering (and static serving static content)

8. (express): first `npm install -g express-generator@4` then `express --hbs express-web-server`

