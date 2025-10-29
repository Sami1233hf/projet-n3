/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  color: #333;
  line-height: 1.6;
}

/* Header */
header {
  background: #1b262c;
  color: white;
  padding: 20px 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

#logo {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  color: #bbe1fa;
}

/* Hero */
.hero {
  background: url('images/football-hero.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 80px 20px;
}

/* Sections */
section {
  padding: 50px 20px;
  max-width: 1000px;
  margin: auto;
  background: white;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.positions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.position-item {
  flex: 1 1 calc(25% - 20px);
  background: #3282b8;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

.position-item:hover {
  transform: scale(1.05);
  background: #0f4c75;
}

/* Quiz buttons */
.quiz-btn {
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  background: #1b262c;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.quiz-btn:hover {
  background: #3282b8;
}

/* Contact Form */
form input, form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background: #1b262c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background: #3282b8;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  background: #1b262c;
  color: white;
}