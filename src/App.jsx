import './App.css'

function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  )
}

function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Department:</strong> {department}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  )
}

function App() {
  // Student 1 details
  const student1Name = 'vikas'
  const student1Department = 'CSE'
  const student1Year = '3rd Year'

  // Student 2 details
  const student2Name = 'vishnu'
  const student2Department = 'Computer Science'
  const student2Year = '3rd Year'

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="student-section">
          <h2>Student 1</h2>

          <StudentProfile
            name={student1Name}
            department={student1Department}
            year={student1Year}
          />
        </section>

        <section className="student-section">
          <h2>Student 2</h2>

          <StudentProfile
            name={student2Name}
            department={student2Department}
            year={student2Year}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App