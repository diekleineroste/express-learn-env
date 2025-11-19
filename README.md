# Project Setup

This project requires a specific folder structure for API calls to work correctly.

## 📁 Required Folder Structure

Inside the `public` directory, you **must create a folder** that contains all the JSON files used by the API.

Your structure should look like this:

public/
└── data/
├── file1.json
├── file2.json
└── ...

## ⚠️ Important

- The API expects to load all JSON files **from a folder inside `public`**.
- Make sure **all required JSON files** are placed in that folder.
- If the folder or files are missing, API calls will fail.

## ✅ Steps

1. Create a folder inside `public` (e.g., `public/data`).
2. Place all your `.json` files inside that folder.
3. Run the project.
4. Test the api call to `/api/folders/:name` (e.g., `/api/folders/data`).
