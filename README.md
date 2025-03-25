# Lizard-Index
This document outlines the steps required to maintain and update your reptile care website. It is intended for content editors, developers, and future maintainers of the project to ensure consistency and smooth ongoing development.

## 1. Updating Text on a Webpage **Purpose:** To correct, improve, or refresh the written content of any webpage.
### Steps:
1. Open the project in the code editor, Visual Studio Code.
2. Locate the HTML file that contains the text you want to update. For example:

   index.html
   about.html
   leopard-gecko.html

3. Find the specific <p>, <h1> etc TML tag containing the text you would like to change.
4. Edit the text content directly in the HTML:
5. Save your changes.
6. Test the page in a browser first to ensure the changes look correct.
7. When satisfied, commit and push the changes (see section 5).



## 2. Creating a New Webpage **Purpose:** To add additional information or care guides for new reptiles.
### Steps:
1. Create a new HTML file in the project folder. Example: new-lizard.html
2. Add the basic structure to html file:

   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>Green Iguana Care</title>
     <link rel="stylesheet" href="style.css">
   </head>
   <body>
     <header></header>
     <main>
       <h1>Green Iguana Care Guide</h1>
       <p>Green iguanas are large, arboreal lizards from Central America...</p>
     </main>
     <footer></footer>
   </body>
   </html>

3. Link to the new page from other pages, like the navigation bar:

   <a href="new-lizard.html">New Lizard</a>

4. Save, test in browser first, and push changes to the live site.



## 3. Inserting an Image**Purpose:** To make pages more visual and educational using reptile photos or diagrams.
### Steps:
1. Place your image in the images folder or copy using "copy image address".
2. Use the <img> tag where you want the image to appear:

   <img src="images/new-lizard.jpg" alt="New Lizard Photo 1" width="400">

3. Use the "alt" attribute for accessibility and readability.
4. To style the image, use CSS:
   ```css
   img {
     border-radius: 10px;
     margin: 10px 0;
     max-width: 100%;
   }
   ```



## 4. Creating a Link**Purpose:** To allow users to navigate between internal pages or visit external resources.
### Internal Link:
<a href="Internal-Link.html">Internal Link Example</a>

### External Link:
<a href="https://externallink.com">External Link Example</a>

### Email Link:
<a href="mailto:johndoe@gmail.com">Email Link Example</a>



## 5. Uploading Updated Content to a Website
### If using GitHub & GitHub Pages:
1. Save in your code editor (VSCode).
2. Open Source Control:
   save files
   Commit files in Source Control
   Write message to explain commit
   Sync Changes in Source Control
3. Visit GitHub link (e.g., `https://shahrozirl.github.io/Lizard-Index/`) to view changes.



## General Maintenance Tips
- Keep filenames lowercase and hyphenated: `green-iguana.html`
- Always compress and optimize images before uploading (if downloading).
- Regularly check links and fix broken URLs (if using external sites).
- Keep your `README.md` and site map up to date (include last updated for easier reflecting).
- Use consistent formatting and layout styles across all pages.
- Backup your code regularly via GitHub or other version control.

### Last Updated: **March 25th 2025**  
Maintained by: **[Muhammad Shahroz Khalid]**

### NOTE: ALWAYS INCLUDE LAST UPDATED/MAINTAINED BY FOR EASIER REFLECTING AND BACKLOGGING