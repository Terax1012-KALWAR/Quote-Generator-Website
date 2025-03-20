const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const copyQuoteBtn = document.getElementById('copy-quote');
const tweetQuoteBtn = document.getElementById('tweet-quote');
const exportQuoteBtn = document.getElementById('export-quote');
const quoteBox = document.getElementById('quote-box');

// ✅ Updated API URL with a CORS proxy
const url = 'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random';
const options = { method: 'GET', headers: { accept: 'application/json' } };

// Fetch a new quote and update the UI
async function fetchQuote() {
    showLoader();
    console.log('Fetching new quote...');

    // ✅ Add cache-busting to ensure fresh data
    const randomUrl = `${url}&nocache=${Date.now()}`;

    try {
        const response = await fetch(randomUrl, options);
        console.log('API Response:', response);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Data:', data);

        // ✅ Check if the response contains valid data
        if (Array.isArray(data) && data.length > 0 && data[0].q && data[0].a) {
            quoteText.innerText = `"${data[0].q}"`;
            quoteAuthor.innerText = `- ${data[0].a}`;
            setRandomBackground();
            quoteBox.classList.add('show');
        } else {
            throw new Error('Invalid data received from API');
        }
    } catch (error) {
        quoteText.innerText = 'Error fetching quote!';
        quoteAuthor.innerText = '';
        console.error('Error fetching quote:', error);
    }
}

// ✅ Show a loading indicator
function showLoader() {
    quoteText.innerHTML = '<div class="loader"></div>';
    quoteAuthor.innerText = '';
}

// ✅ Change background image randomly
function setRandomBackground() {
    const randomImageUrl = `https://source.unsplash.com/random/1920x1080?sig=${Math.random()}`;
    document.body.style.backgroundImage = `url('${randomImageUrl}')`;
}

// ✅ Copy the quote to clipboard
function copyToClipboard() {
    const quote = `${quoteText.innerText}\n${quoteAuthor.innerText}`;
    navigator.clipboard.writeText(quote).then(() => {
        alert('✅ Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// ✅ Share the quote on Twitter
function shareOnTwitter() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText + ' ' + quoteAuthor.innerText)}`;
    window.open(tweetUrl, '_blank');
}

// ✅ Export quote as an image
function exportAsImage() {
    html2canvas(document.querySelector('.container')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'quote.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// ✅ Event listeners for button clicks
newQuoteBtn.addEventListener('click', fetchQuote);
copyQuoteBtn.addEventListener('click', copyToClipboard);
tweetQuoteBtn.addEventListener('click', shareOnTwitter);
exportQuoteBtn.addEventListener('click', exportAsImage);

// ✅ Fetch a quote when the page loads
fetchQuote();
