# Decoded Codex

## Live Site URL:  <https://www.decodedcodex.com/>

---

### Table of Contents

1. [Workflow](#workflow)

2. [Description](#description)

3. [Project Structure](#all-the-files-in-the-project)

---

#### Workflow

Run in terminal:

* `git checkout develop` (Ensure you are working on the develop branch. Do not work directly on "main" branch.)

* `npm start` (Run a local server to observe live changes to code)

After making changes to the code, run in terminal:

* `npm run build` (Rebuild the _site output folder)

* `git add .` (Add the modified files to git)

* `git commit -m "example: message"` (The message for the commit explaining the changes)

* `git push origin develop` (Push the changes to the GitHub repo branch develop)

---

#### Description

Decoded Codex is a website for exploring the world's various Religions and Philosophies. I have been heavily interested in studying Religion and Philosophy for over ten years, and frequently find people misunderstanding these topics. This website is both for others - that they can learn about these subjects that shape our world and societies, and for me - to finally document my own research in writing (or code!).

Decodedcodex.com launched live officially (very bare bones) on October 1st of 2025, but I first began the development around September 21st of 2025. You can follow my commit history and everything I have done on my GitHub (linked on the bottom of every page on the site). Quite a bit a research went into what the site should look like, the tools to use, and the entire process of development. SSG (Static Site Generators) seemed to be a good choice for consistantly structuring the code and writing markdown files for ease of content updates, as this will be a text/article heavy site. I choose to use Eleventy (11ty), as the learning curve seemed a bit easier, runs in JavaScript (a language I am familiar with already), and still allows for alot of control over the project.

Going through the entire process from just simply having a homepage on a local development server, to building and deploying the project live required alot more than I had realized at first, but I learned so many things along the way. I wanted to try to follow modern development industry standards to familiarize my self with at the least a somewhat professional development process.

What I used and learned in the development of Decoded Codex:

* **HTML**: Site structure

* **Markdown**: Content writing

* **CSS**: Styling and design

* **JavaScript**: Interactivity and dynamic content

* **Node.js & npm**: Runtime environment and package management

* **Eleventy (11ty)**: Static Site Generator

* **Nunjucks**: Templating for reusable layouts

* **YAML**: Managing metadata and github actions

* **GitHub Actions**: Site build and deployment

* **Git/GitHub**: Version control and project hosting

* **Industry Standards**: Organized file structure, Commits, Workflows, Maintaining multiple branches, Pull requests, Issues, and Testing

---

#### All the files in the project

**_includes**

This is a folder for Nunjucks (.njk) templates used throughout the site. Inside is "base.njk" which contains:

* The boilerplate HTML needed on each page.

  * This is essential HTML code needed for device web browsers to render the page.

* The "header", which has the Navigation bar at the top of every page

  * The header holds the Nav Bar, displayed on every page of the site for easy access to the main site homepage, the about page, and the contact page.

* The "main" section, which holds the individual content of each page, varying depending on which page is being loaded

  * This is a placeholder. The pages load their own unique content from their individual files

* The "footer", which displays the copyright and project name, and a link to the github repository

  * The footer is shown on every page of the site, always showing the project name, copyright, and a link to the GitHub repository.

* JavaScript conditionals intended to reduce page load times and unnecessary overhead on other pages

  * "if loadSearch" is intended to 'ask the question' if it is necessary to load the search bar on whatever the current page is. It is only needed on the Home Page "index.html/md", but I haven't decided if I want it on every other page sitewide yet, so it is used to reduce the overhead of loading the search bar on every page if the search bar is not even being displayed on that specific page.

  * "if loadTopics" does the same as above. It is not necessary to run the script for displaying every topic card image and links for the topic pages on every single page of the site, as the Home Page "index.html/md" is the only page that needs to run this script.

---

> [!IMPORTANT]
> **_site (-- DO NOT DIRECTLY MODIFY --)**

This is the "output" folder for the SSG (Static Site Generator). It holds the final build of the site, and should NEVER be directly modified. This entire folder and subfolders/files within are automatically generated with `npm run build`. This folder, all subfolders/files within should NEVER be directly modified. All files and folders inside of `_site` are linked to corresponding files in the project as their source. The `_site` folder contains the following:

* about

  * this is the final build of the about page in HTML. Its source is the "about.md" file.

* contact

  * this is the final build of the contact page in HTML. Its source is the "contact.md" file.

* index

  * this is the final build of the home page in HTML. Its source is the "index.md" file.

* css

  * this is the final build of the css (styling). Its source is the "style.css" file.

* images

  * this contains all image files used throughout the site, output build only. Its source is the "images" folder (a completely different folder not inside of "_site")

* js

  * search.js is the final build of the JavaScript for the "PageFind" search bar UI.

  * topic.js is the final build of the JavaScript used for displaying the "topic cards" or individual topic pages on the Home Page of the site.

* pagefind

  * This folder is generated by the Pagefind CLI after the Eleventy build. It contains the static search index, WASM files for client-side searching, and the Pagefind UI library.

* topics

  * this is the final build of all the current individual topic pages.

---

**.github / workflows (deploy.yml)**

This is the file used for the final site deployment through GitHub. It uses the "Main" branch of the repo for building and deploying the site. It will automatically run `npm install` to ensure packages and dependencies are updated and included. It will automatically run `npm run build` to ensure a fresh build of the `_site` output folder, which is the actual folder/files used for the final site. GitHub Actions runs, building the static site and assets, and deploys through GitHub Pages hosting.

---

**css (style.css)**

This is the Cascading Style Sheet for the entire site. It contains all the styling code used throughout every page of the site. Use caution when modifying, as changes are site-wide and can easily break the user-friendly display and responsive design even with very small changes.

style.css has been modified numerous times to ensure a friendly user interface and layout for most, if not all, devices. Spacing is used between all elements for clarity and an uncluttered feel, and a common dark and gold theme style is used on all pages. (Note: I strongly dislike "light mode" or bright displays, which cause me discomfort personally having several eye issues. Please avoid large bright or white areas when modifying CSS.)

Max character width is set to 120ch in "main", so text is not stretched excessively long across wider displays/screens. Line-height is set to 1.75 in "p" as the default is too cramped. Most elements are "centered" to the middle of the page, except for main bodies of text and lists.

> [!IMPORTANT]
> **Image Rendering and CSS**

All site images are very particular on how they are displayed, and it was a significant challenge to get every image to display correctly. There are many bizarre edge cases that occurred, such as nearly all images displaying properly except for one or two that may be slightly cut off. The behavior is somewhat unpredictable, and any changes to how images are displayed need to be thoroughly checked and reviewed site-wide. Use caution editing the CSS that may affect images. Many hours were spent on just getting the images to display correctly on most devices, and they are often the first thing to break when changes are made.

---

**images**

This folder contains all images/pictures used throughout the site, and this is the source folder for adding or removing any images. "Home" contains the main site image (a mystical looking open book written in an unknown language). "topics" contains the images for all topic/subject pages. All images are AI generated using Google Gemini. Changes to images are welcome, but need strict approval to maintain proper representation of the corresponding subject. Consider the imagery used particularly in religions, whereby it may be offensive in some cases to the practitioners.

The images are rendered by providing the image source path in the `image:` tag at the very top of each markdown page, using the placeholder `{{ image }}` within the in-line HTML `img` tags, and are defined by the class: `topic-page-image`.

---

**js (JavaScript)**

This folder contains the JavaScript (JS) for the project.

* **search.js** is the script for the "PageFind" search system.

  * PageFind is a simple search function to automatically display results indexed within the site. Users can type in keywords to get results for the corresponding page on the site, allowing for ease of navigation and information locating. The Pagefind tool crawls the files in the output folder `_site`, analyzing the texts, headings, and metadata to create a search index. Pagefind builds the index and WebAssembly files for rapid site searching, and the pre-built UI (user interface) components that are utilized in `search.js`.

* index.md contains the "div" tag that holds the Pagefind UI search bar, with an id of "search".

* The base function is actually very simple, straightforward, and automatic; however, I personally found a few minor issues and improvements to make.

  * By default, when a Pagefind result is displayed, the "text" of the result is the clickable link, but the image displayed in the same result is not "clickable". This seemed very unintuitive from a user perspective, so I added code to access the whole "element" of the result, so that users can click anywhere in the "box" of each search result to navigate to the corresponding page.

  * "search: false" and "search: true". Pagefind locates any result on any page of the site. It also seemed strange to get results in the search for the Home Page, considering the search bar is only located on the Home Page itself. It seemed redundant to have search results displayed for a page that the user is already on. Using `search: false` in the front matter of the markdown files excludes that page from showing up in the Pagefind search results. This is also used on topic pages that are created but seem "out of place" currently, to hide them completely.

  * There is a small "form" function intended to resolve browser "errors/issues" for the search system being listed as an HTML "form" but not having a designated form "ID" tag. I don't believe it is working correctly as is, but it is overall a very minor perfectionist issue.

  * A function for ensuring the DOM (Document Object Model) is loaded before rendering the search bar UI exists to ensure the site is effectively loaded prior to generating the search bar for usage.

* **topics.js** is the script for filtering the "topic cards".

  * Each topic page exists in a "collection" of Topics, each having "tags" in their metadata.

  * There is a function for checking that the DOM (Document Object Model) is fully loaded before running the main function "initTopics". This ensures that the HTML is loaded before running the main JavaScript, to avoid errors. Issues have occurred where the filter buttons did not function as they were loaded prior to the "topics", thereby not "finding" anything to filter.

  * Each topic page has "tags" at the very top of each markdown file, allowing for filters to be used to access the corresponding page. This is used currently with the buttons on the homepage, but allows for more future content filtering later.

---

**node_modules**

This folder contains all the third-party libraries and dependencies required by the project (such as Eleventy and Pagefind). It is automatically generated by running `npm install` based on the definitions in `package.json`. This folder is excluded from version control via `.gitignore` to keep the repository size manageable; it can be reconstructed at any time.

---

**pages**

This folder holds all the "pages" of the site, all of which are markdown files. At the top level, it holds "about.md", "contact.md" and "index.md".

* about.md is the "about" page for the site. It has the main site image (the mystical open book picture), and a short summary of what decodedcodex is, the author, and what to expect from the site for users.

* contact.md is the "contact" page for the site. It has the main site image (the mystical open book picture) and a functional contact form, with the script that runs the form at the bottom of the page.

  * The contact form utilizes "form-spree", a third-party form management system. This will take the input from the form, and submit it to form-spree, which will then email me the input from the form. This provides a barrier between me and the users, so I do not need to publicly list my email on the site, but can be emailed directly by any user on my site. The free tier allows for 50 form submissions per month. Both the email field and text field of the form are "required", reducing the ability of spam, and having the user enter a valid email address.

  * By default, if a user submitted the form it would redirect them to a designated form spree submission successful page. Then, if the user clicked "back" on the browser to return to decodedcodex, it would show the contact page with the form still filled out from their previous submission. This seemed problematic to me for several reasons. The redirect seemed inconvenient, and I wanted the submission to feel more effortless. The text still being "filled out" inside the form even after a user successfully submitted the form also seemed strange to me.

  * The script at the bottom ideally does two things. One, it prevents the default page redirect, and instead displays text on the page itself whether or not the submission was successful. Two, it will reset the form upon a successful submission, clearing all the form fields, emptying the input boxes.

* index.md is the primary "Home Page" for the entire site.

  * "eleventyExcludeFromCollections: true" causes this page to not be included in the "collection" of topics and topic pages.

  * "loadSearch: true" causes this page to render the Pagefind search bar.

  * "loadTopics: true" causes this page to load the "Topics", the collection of subject pages inside the "topics" folder.

  * The "div" tag with the id of "search" is used to display the Pagefind search bar, it is the container actually holding the UI.

  * The "div" tag with the id of "filter-buttons" is used to display the buttons on the homepage for filtering the topics.

  * The "div" tag with the id of "topic-grid" is used to display the "grid" of the "topics". The topics are inside of a collection, which I am currently iterating over using a for loop, in reverse. I happened to build the pages in alphabetical order, and by default the topics are shown in order of most recent. Using "reverse" puts the topics back in alphabetical order.

**topics**

This folder contains all of the "topics". It is the individual pages or subjects, for each topic. Each of these follow a similar format, but differ on content. These are still in early stages, and it is undecided how these will look and change over time. Currently, as of December 28th 2025, only Buddhism.md and Christianity.md contain any meaningful content. The research required is extensive, and maintaining accuracy is crucial for each subject. This is the part of the project (Decoded Codex) that will take the most time, possibly my entire lifetime if the project lives that long. These are the "meat and potatoes" of the website.

---

> [!IMPORTANT]
> **.eleventy.js Configuration**

This is the primary configuration file for Eleventy (11ty), the Static Site Generator (SSG) used for this project.

* "addCollection" is used to build the collection of "topics". All markdown files within the "pages/topics" directory are passed into the collectionApi that Eleventy provides. This is used for maintaining and displaying all the topic pages on the Home Page (index.md/html), and for filtering the topics. The project has many pages, and likely over time will have a substantial amount of pages in total. This is used to dynamically "collect" all the topic pages, past, present and future, and render them. Without this function, none of the pages will show up on the Home Page.

* "addPassthroughCopy" is used to link various files into the build such as: CSS, JS, and images. These files will not be properly linked, or function in the final output without being added to "addPassthroughCopy" eleventyConfig. Any additional "loose" files may need to be added to this list in order to work correctly.

* `setWatchThrottleWaitTime` halts the build process after detecting changes from saved files. This is useful to prevent errors in the build process during live development with conflicting or mismatched files saving and re-building simultaneously.

* The final "return" takes input of "pages" (all files within the pages folder, including topics), outputs the final build into "_site", and includes the files within "_includes" (the Nunjucks templates).

---

**.gitignore**

Everything inside this file will be ignored by Git. If a file should not be included in Git or the GitHub repo, add the exact file name to this file. `node_modules` and `_site` are both in this file. The `node_modules` folder is massive and contains numerous temporary build artifacts. Any necessary dependencies are recorded in `package.json` and `package-lock.json`, and it is highly inefficient to push the `node_modules` folder every time a change is made. The `_site` folder contains the final output, but it is automatically re-generated by GitHub running the build process on their end. Nothing in this file is directly modified anyway, and there should be no need to include it in Git history.

---

**CNAME**

This is a "Canonical Name", which is used as a DNS (Domain Name System) record for the domain name used for the site. It is needed to "point" to the correct domain name where the site is accessed.

---

**package-lock.json**

This is a JSON file containing all Node Package Manager (NPM) packages and dependencies. This is used to track all dependencies used within the project, ensuring different devices and programmers can work on the same project in a consistent manner.

---

**package.json**

This is a JSON file that provides metadata and basic information of the dependencies used for the project. It also hosts the scripts used in the terminal to run commands for the project, such as `build` and `start`.
