# Image Search App

This is a simple **Image Search App** that allows users to search for images using the **Unsplash API**. The app fetches and displays images based on user input and provides a **Load More** feature to view additional results.

## Features
- **Search for Images**: Users can enter a keyword to find relevant images.
- **Fetch Images from Unsplash API**: Uses Unsplash API to retrieve high-quality images.
- **Load More Functionality**: Allows users to load more images dynamically.
- **Responsive UI**: Designed with a modern and visually appealing user interface.

## Technologies Used
- **HTML** for structuring the webpage.
- **CSS** for styling the UI.
- **JavaScript (ES6)** for handling API calls and dynamic content rendering.
- **Unsplash API** for fetching images.

## How It Works
1. **User enters a search term** in the input field.
2. **Click the 'Search' button**, which triggers an API request to fetch images.
3. **Results are displayed** in a grid format.
4. **Click 'More Images' button** to fetch and display additional images from the next page.

## File Structure
```
/ Image-Search-App
  |-- index.html         # Main HTML file
  |-- style.css          # CSS file for styling
  |-- app.js             # JavaScript file for API interaction
```

## API Integration
The app makes use of the **Unsplash API** to fetch images dynamically. The API key is required to access the service.

```javascript
const accessKey = "YOUR_ACCESS_KEY";
const url = `https://api.unsplash.com/search/photos?query=${searchValue}&per_page=28&page=${page}&client_id=${accessKey}`;
```

## Setup and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Image-Search-App.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Image-Search-App
   ```
3. Open `index.html` in a browser.
4. Enter a keyword in the search bar and click **Search**.
5. Click **More Images** to load additional images.

## Future Improvements
- Implement a **dark mode** toggle.
- Add **pagination controls** for better navigation.
- Enhance UI with **animations and transitions**.

## License
This project is open-source and available under the **MIT License**.

---
💡 Feel free to contribute and improve this project!
