
const newman = require('newman');
 
newman.run({
    //collection: require('./collection/assignment.json'),
    collection:'https://api.postman.com/collections/22180294-7790913c-3864-4c2e-b394-7b664064a051?access_key=PMAT-01H90BRH8JQ8YA2TPM7TQGM0XS',
    //environment:require('./collection/environment.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});