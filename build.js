'use strict';
const fs = require('fs');
const obj = require('./podcasts.json');
let content = '# Web Development Podcasts\n\n';

// create contributing instructions
const contribute = ('## Contributing \n' +
'1. Fork it\n' +
'2. Add a podcast to `podcasts.json`\n' +
'3. Run `node build` to update `README.md` with your changes\n' +
'4. Create your feature branch (`git checkout -b my-new-feature`)\n' +
'5. Commit your changes (`git commit -am "Add some feature"`)\n' +
'6. Push to the branch (`git push origin my-new-feature`)\n' +
'7. Create new Pull Request');

content += contribute + '\n';

// create heading for podcasts list
content += '\n#Podcast List\n';

// create list of podcasts
for (const podcasts of obj) {
  content += (
    `\n<img src="${podcasts.thumb}" width="100" alt="${podcasts.title}">
    [${podcasts.title}](${podcasts.url})\n
${podcasts.description}\n\n`
  );
}

// create README with the list of podcasts
fs.writeFile('./README.md', content, function (err) {
  if (err) throw err;
  console.log('Updated podcasts list');
});