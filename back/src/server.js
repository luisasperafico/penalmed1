const app = require('./app.js')
const port = app.get('port')

app.listen(port, () => console.log('Server running port ', port));