# Project Setup

This project requires a specific folder structure for API calls to work correctly.

## 📁 Required Folder Structure

Inside the `public` directory, you **must create a folder** that contains all the JSON files used by the API.

Your structure should look like this:

public/  
└── data/  
&nbsp;&nbsp;&nbsp;&nbsp;├── file1.json  
&nbsp;&nbsp;&nbsp;&nbsp;├── file2.json  
&nbsp;&nbsp;&nbsp;&nbsp;└── ...

## ⚠️ Important

- The API expects to load all JSON files **from a folder inside `public`**.
- Make sure **all required JSON files** are placed in that folder.
- If the folder or files are missing, API calls will fail.

## ✅ Steps

1. Create the `public` folder in the root directory.
2. Create a folder inside `public` (e.g., `public/data`).
3. Place all your `.json` files inside that folder.
4. Run the project.
5. Test the api call to `/api/folders/:name` (e.g., `/api/folders/data`).
