# How to Add Video Chat to Your Preact PWA using OpenTok 

Is becoming healthier one of your New Year's resolutions? This application will help you to track your progress by enabling you to blog about daily activity, diet, energy levels, mood and more using Netlify CMS powered by Preact CLI. Share your app with any professionals you work with (personal trainer, nutritionist, therapist) and receive live video coaching directly from the platform with OpenTok.

## Build Instructions

> **Important**: [Node.js](https://nodejs.org/en/) > V6.x is a minimum requirement.

``` bash

# install Preact CLI globally from NPM
npm i -g preact-cli

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

### How to setup Netlify CMS

- Deploy on netlify using the CLI or the Netlify bot for [github](https://app.netlify.com/start).

- Enable Git gateway https://docs.netlify.com/visitor-access/git-gateway/.

- Enable Identity for your app https://docs.netlify.com/visitor-access/identity/.

- For most Blogs, change (Identity > Settings > Registration preferences) to invite only.

- Invite yourself to the Identity tab in Netlify console.

- Accept the invite from your email inbox.

- Done!

*Note:* Go to `https://<your-domain>/admin` in order to access Netlify CMS.

## Code of Conduct

In the interest of fostering an open and welcoming environment, we strive to make participation in our project and our community a harassment-free experience for everyone. Please check out our [Code of Conduct][coc] in full.

## Contributing 
We :heart: contributions from everyone! Check out the [Contributing Guidelines][contributing] for more information.

[![contributions welcome][contribadge]][issues]

## License

This project is subject to the [MIT License][license]

[logo]: nexmo.png "Nexmo"
[contribadge]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat "Contributions Welcome"

[coc]: CODE_OF_CONDUCT.md "Code of Conduct"
[contributing]: CONTRIBUTING.md "Contributing"
[license]: LICENSE "MIT License"

[issues]: ./../../issues "Issues"
