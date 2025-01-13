# Note Taker

## Description
Note Taker is a web application that allows users to write, save, and delete notes. Built with Express.js on the backend, this application saves and retrieves note data from a JSON file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation
1. Clone the repository:

   git clone https://github.com/your-username/note-taker.git
  
2. Navigate to the project directory:
   
   cd note-taker
  
3. Install dependencies:
  
   npm install
  

## Usage
1. Open your web browser and navigate to `http://localhost:3001`
2. Click "Get Started" to access the notes page
3. Enter a note title and text
4. Click the save icon to save your note
5. View saved notes in the left-hand column
6. Click on a saved note to view it
7. Click the trash icon to delete a note
8. Click the plus icon to create a new note

## Features
- Create and save notes
- View previously saved notes
- Delete unwanted notes
- Responsive design
- Clear form functionality
- Real-time button state updates

## API Routes
- GET `/api/notes` - Retrieves all saved notes
- POST `/api/notes` - Creates a new note
- DELETE `/api/notes/:id` - Deletes a note by ID

## Technologies Used
- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Bootstrap
- Font Awesome

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  