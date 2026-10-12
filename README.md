# Vivek Pandit — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, and SCSS, customized from the uploaded React portfolio starter template. It includes a home/intro section, about, skills, education and experience timeline, projects, learning credentials, contact links, and dark/light theme switching.

## Run locally

You need Node.js and npm installed.

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

Create an optimized production build with:

```bash
npm run build
```

## Before publishing — personalize these items

Search the source for `YOUR_EMAIL`, `https://github.com/`, and `https://www.linkedin.com/` and replace the placeholder contact/social URLs with your real ones.

1. **Profile photo:** the hero currently uses a VP monogram so it works immediately. To use a photo, add it to `src/assets/images/` and replace the `.profile-placeholder` markup in `src/components/Main.tsx` with an `<img>` element; add suitable styling in `src/index.scss`.
2. **Resume:** add your PDF as `public/Vivek-Pandit-Resume.pdf` to activate the View Resume button.
3. **Project links:** edit `src/components/Project.tsx`; replace `#` with the correct repository or live-demo URLs.
4. **Education and experience:** review `src/components/Timeline.tsx` for exact dates, official institution/program names, and descriptions. The current entries are based on details supplied during previous conversations; please verify before publishing.
5. **Skills and certifications:** edit `src/components/Expertise.tsx` and `src/components/Timeline.tsx` to include only skills and credentials you can confidently discuss in an interview.
6. **Email contact:** edit the email link in `src/components/Contact.tsx`.

## Deploy

You can deploy the production `build` folder to Netlify or another static hosting service. For GitHub Pages, follow the current GitHub Pages instructions for React apps and configure the repository base path as needed.

## Design notes

- Responsive layout for desktop and mobile
- Dark and light themes
- Keyboard-accessible navigation buttons and visible section anchors
- Reduced-motion preference support
- Project and contact details are intentionally editable
