# Clubs - Nimbus - NITH

This repository is a template for clubs's web pages.

## Development - guide for clubs/developers

### getting started

- make sure you have `nodejs`,`npm`,`git` installed on your machine.
- create a repository under your organization under whatever name like `chelix` / `chelix-nimbus`
- make sure you have enabled ssh authentication on your personal github account.
- get repository
  - clone this repository machine -- `git clone git@github.com:pixonoids/club-nimbus.git`
  - remove current remote `git remote remove origin`
  - add your remote `git remote add origin git@github.com:chelix/chelix-nimbus.git`
- set up firebase
  - install firebase-tools globally. `npm i -g firebase-tools`
  - `firebase login` - will open web browser - login with club email (gmail) firebase console.
  - create a project on firebase for this.
  - `firebase init hosting` - this will generate a firebase.json file
    - choose project
    - configure for spa
    - also setup github auto deploys (CI/CD) - will prompt you to install firebase app on your github organization and after that this will generate `.github/workflows/deploy_to_firebae.yml`
- install dependencies `npm install`
- run project `npm run dev`

### Development_Guide

this is a react project. simple structure just read it you will understand. at any element you can press F12 to go to its definition.

- you can use your own css/scss for components or you can use [tailwindcss](https://tailwindcss.com/docs/padding) - install tailwind intelliscence vscode extention for better support.

#### Static files

- **Images** - you can store images in `public/` folder. they will be available with path `/`
  > Make sure Images Size is not more that **250KB** - resize images accordingly, large images may cause longer load times and bad user experience.
- **Videos** - DO NOT upload videos to repository. Upload your videos to youtube and [Embed the youtube video](https://support.google.com/youtube/answer/171780?hl=en#zippy=) to your page instead.

## Need Help

- 🔥 [Git in 100 seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)
- 📚 [HTML Elements](https://www.w3schools.com/tags/ref_byfunc.asp) - just basics `[div,span,h1,p,pre,b,i,img,iframe,...]`
- 💄 [CSS](https://www.w3schools.com/css/default.asp) - or you can use [Tailwind](https://tailwindcss.com/docs/) classes

if you are facing any problems in setting up the environment you can contact the maintainers.
