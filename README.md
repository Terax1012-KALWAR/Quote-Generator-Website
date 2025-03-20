# Quote Generator

A simple web application that fetches random quotes and displays them dynamically. Users can copy quotes, share them on Twitter, and export them as an image.

## Features

- Fetches random quotes from a public API.
- Displays a new quote at the click of a button.
- Supports copying quotes to the clipboard.
- Allows sharing quotes on Twitter.
- Exports quotes as an image.
- Changes the background dynamically with each quote.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- Unsplash API (for background images)
- html2canvas (for exporting quotes as images)

## Installation & Usage

1. Clone the repository:
2. Navigate to the project folder:
3. Open `index.html` in a web browser.

## API Used

This application fetches quotes from the **Quotable API**:

- API Endpoint: `https://api.quotable.io/random`
- Returns a random quote in JSON format.

## How It Works

1. When the page loads, a quote is fetched from the API.
2. Clicking the **New Quote** button fetches a fresh quote.
3. Clicking **Copy Quote** saves the quote to the clipboard.
4. Clicking **Tweet Quote** shares it on Twitter.
5. Clicking **Export as Image** saves the quote as a PNG file.
6. Each quote update changes the background image randomly.

## Deployment

This application is hosted on **Netlify**. You can access it using the following link:

🔗 https\://quote-generator001.netlify.app/

## Screenshots





## Dependencies

Make sure `html2canvas` is included in your project if you want to export quotes as an image.

## Submission

- **GitHub Repository**: [https://github.com/Terax1012-KALWAR/Quote-Generator-Website/tree/master](https://github.com/Terax1012-KALWAR/Quote-Generator-Website/tree/master)
- **Live Application**: [https://quote-generator001.netlify.app/](https://quote-generator001.netlify.app/)

## License

This project is licensed under the MIT License.

