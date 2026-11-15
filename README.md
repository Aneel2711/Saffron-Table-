# Saffron Table — Restaurant Website

A responsive restaurant landing website with English/Arabic language switching, RTL layout, a sample menu, and a demo reservation form.

## Project structure

```text
saffron-table-restaurant/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── images/
│       └── README.md
├── .gitignore
└── README.md
```

## Run locally

1. Extract the project ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Internet access is required for Google Fonts and the externally hosted Unsplash photos.

No build tools or package installation are required.

## Customize before publishing

- Replace **Saffron Table** with the restaurant's real name.
- Update the sample address, phone number, email, opening hours, menu, and prices in `index.html`.
- Replace the Unsplash image URLs with restaurant-owned or properly licensed images.
- Update social media links in the footer.
- Review the Arabic translations in `js/app.js`.

## Reservation form — important

The current reservation form is a front-end demonstration. It stores submitted reservations in the visitor's browser using `localStorage`; it does **not** send reservations to the restaurant and it is not a shared booking system.

For production, connect the form to a secure backend/API and database. Add server-side validation, spam protection, privacy notice, access controls, and notification delivery. Do not collect real customer data until that backend and privacy handling are implemented.

## Browser support

Designed for modern versions of Chrome, Edge, Firefox, and Safari.
