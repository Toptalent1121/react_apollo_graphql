const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://root:admin@cluster0-ofthu.mongodb.net/graphql?retryWrites=true&w=majority',
                { useNewUrlParser: true, useUnifiedTopology: true} )
        .then(() => {console.log('connected to the MongoDB')})
        .catch((e) => { console.log(e)});

// mongoose.connection.once('open', () => { console.log('connected to the databse')});

// allow cros origin request
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening on port 4000');
});