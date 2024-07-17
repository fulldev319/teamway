# Personality Test Application

This is a simple personality test application built with React.js and Flask. It consists of a series of questions that determine whether the user is more of an introvert or an extrovert. The application is styled using Material-UI and includes features like loading indicators, warning notifications, and navigation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Features

- **Dynamic Question Loading:** Questions are fetched dynamically from the backend.
- **Loading Indicator:** Displays a loading indicator while fetching questions.
- **Snackbar Warning:** Shows a warning notification if the user tries to submit without answering all questions.
- **Navigation:** Includes navigation buttons to move between questions and return to the home page.
- **Result Display:** Shows the personality result (Introvert or Extrovert) based on the answers.
- **Styling:** Uses Material-UI for a clean and modern user interface.
- **Unit Tests:** Includes unit tests for key components and features.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Python](https://www.python.org/) (v3.6 or later)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/teamway.git
   cd teamway/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install the required Python packages:

   ```bash
   pip install flask
   pip install flask_cors
   ```

4. Start the Flask server:

   ```bash
   python app.py
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

   ```bash
   cd teamway/frontend
   ```

2. Install the required npm packages:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

The application should now be running locally on `http://localhost:3000`.

## Usage

### Landing Page

The landing page provides an introduction and a button to start the personality test.

### Personality Test

- The test consists of multiple questions loaded dynamically from the backend.
- Users can navigate between questions and submit their answers.
- If a user tries to submit without answering all questions, a Snackbar warning will appear.

### Result Page

- After submitting the answers, users are redirected to the result page.
- The result page displays whether the user is an introvert or an extrovert.
- Users can return to the home page using the provided button.

## Testing

### Running Unit Tests

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Run the tests using npm:

   ```bash
   npm test
   ```

Unit tests are written using Jest and React Testing Library.
