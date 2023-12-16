const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const aboutRouter = require('./routes/about');
app.use('/about', aboutRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const blogRouter = require('./routes/blog');
app.use('/blog', blogRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

