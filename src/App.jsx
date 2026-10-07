import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="/">
          <span className="brand-mark">V</span>
          <span>VentureRoster</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#find-instructors">Find Instructors</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#for-instructors">For Instructors</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-ghost">Log in</button>
          <button className="btn btn-primary">Post a Requirement</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">ADVENTURE TALENT NETWORK</span>

            <h1>
              Find the right
              <span> adventure instructor.</span>
            </h1>

            <p className="hero-text">
              Connect with skilled trekking instructors, camp instructors,
              trip coordinators and outdoor professionals for your next
              adventure program.
            </p>

            <div className="search-card" id="find-instructors">
              <div className="search-field">
                <span className="search-icon">⌕</span>
                <div>
                  <label htmlFor="role">What are you looking for?</label>
                  <select id="role" defaultValue="all">
                    <option value="all">All adventure roles</option>
                    <option value="trekking">Trekking Instructor</option>
                    <option value="camp">Camp Instructor</option>
                    <option value="trip">Trip Coordinator</option>
                    <option value="support">Activity Supporting Staff</option>
                    <option value="first-aid">First Aid Instructor</option>
                  </select>
                </div>
              </div>

              <div className="search-divider" />

              <div className="search-field">
                <span className="search-icon">⌖</span>
                <div>
                  <label htmlFor="location">Location</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Search location"
                  />
                </div>
              </div>

              <button className="search-button">Search talent</button>
            </div>

            <div className="hero-proof">
              <div className="proof-avatars">
                <span>A</span>
                <span>R</span>
                <span>S</span>
                <span>+</span>
              </div>
              <p>
                Built for <strong>adventure companies</strong> and outdoor
                program teams.
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Adventure instructor showcase">
            <div className="visual-card visual-card-main">
              <div className="mountain-art">
                <div className="sun" />
                <div className="mountain mountain-back" />
                <div className="mountain mountain-front" />
                <div className="trail" />
              </div>

              <div className="profile-card">
                <div className="profile-avatar">AK</div>
                <div>
                  <strong>Adventure Instructor</strong>
                  <span>Experienced • Verified</span>
                </div>
                <span className="verified">✓</span>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Verified talent</strong>
                <span>Profiles ready to hire</span>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <strong>₹500–₹5,000</strong>
              <span>Typical daily range</span>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div>
            <strong>01</strong>
            <span>Find specialized talent</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Review experience & courses</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Connect and hire</span>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <span className="eyebrow">SIMPLE BY DESIGN</span>
            <h2>From requirement to roster.</h2>
            <p>
              A focused hiring experience built specifically for outdoor
              adventure teams.
            </p>
          </div>

          <div className="feature-grid">
            <article>
              <span>01</span>
              <h3>Search</h3>
              <p>
                Filter instructors by role, location, experience and relevant
                outdoor courses.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Compare</h3>
              <p>
                Review profiles, experience, certifications and expected
                per-day rates before choosing.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Connect</h3>
              <p>
                Shortlist the right people and move your adventure program
                forward.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-section" id="for-instructors">
          <div>
            <span className="eyebrow">FOR OUTDOOR PROFESSIONALS</span>
            <h2>Make your adventure experience discoverable.</h2>
            <p>
              Create a professional instructor profile and let adventure
              companies find your skills.
            </p>
          </div>

          <button className="btn btn-light">Create instructor profile</button>
        </section>
      </main>

      <footer>
        <div className="brand">
          <span className="brand-mark">V</span>
          <span>VentureRoster</span>
        </div>
        <p>Adventure talent, connected.</p>
      </footer>
    </div>
  )
}

export default App
