# MERN Quiz App

A full-stack quiz application built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- Take quizzes with multiple-choice questions
- Admin can add/delete questions
- MongoDB Atlas for database
- React Router for navigation

## 📦 Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Express, Node.js, Mongoose
- **Database:** MongoDB Atlas

##📁 Final Project Structure: 

        quiz-app/
        ├── client/                      # React frontend
        │   ├── public/
        │   ├── src/
        │   │   ├── components/          # Optional reusable components
        │   │   ├── pages/               # React pages
        │   │   │   ├── Quiz.js
        │   │   │   ├── Admin.js
        │   │   │   └── Result.js
        │   │   ├── App.js
        │   │   └── index.js
        │   ├── package.json
        │   └── .gitignore
        │
        ├── server/                     # Express backend
        │   ├── controllers/
        │   │   └── quizController.js
        │   ├── models/
        │   │   └── Question.js
        │   ├── routes/
        │   │   └── quizRoutes.js
        │   ├── seedQuestions.js        # Script to insert quiz questions
        │   ├── server.js
        │   ├── .env
        │   ├── package.json
        │   └── .gitignore
        │
        ├── screenshots/                # App screenshots for README
        │   ├── add question.png
        │   ├── admin.png
        │   ├── backend server.png
        │   ├── mongodb.png
        │   ├── question added.png
        │   ├── quiz questions.png
        │   └── result.png
        │
        ├── .gitignore
        ├── README.md
        └── package-lock.json


## 🛠️ Running Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/quiz-app.git
```

2.Install backend dependencies
```bash
cd quiz-app/server
npm install
```

3.install frontend dependencies
```bash
cd ../client
npm install
```

4.Add .env file in server/ with:
```bash
MONGO_URI=your_mongodb_connection_string
```

5.Start backend
```bash
cd ../server
node server.js
```

6.Start frontend
```bash
cd ../client
npm start
```

7.screenshots
![quiz questions](https://github.com/user-attachments/assets/fbb9089e-28f2-4f71-856e-1f0bbe6189b4)
![add question](https://github.com/user-attachments/assets/e4f4fb04-f8df-4919-95c5-fb28dc70b494)
![question added](https://github.com/user-attachments/assets/0882344d-d3cd-4448-abe0-a0ad8229019c)
![admin](https://github.com/user-attachments/assets/35e00056-f2aa-492b-a282-83a39a2d91e0)
![result](https://github.com/user-attachments/assets/4632dff7-c5bb-4cd0-958d-d58877250585)
![backend server](https://github.com/user-attachments/assets/69d082d4-882f-463e-960d-3432be9b3cd3)

