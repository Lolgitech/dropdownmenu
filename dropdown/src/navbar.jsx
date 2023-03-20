


function navbar() {
  return (
    <>
      <nav>
        <ul>
          <li className="my-btn">
            <Link to="/">Home</Link>
          </li>

          <li className="my-btn">
            <Link to="/about">About</Link>
          </li>

          <li className="my-btn">
            <Link to="/Connect">Connect</Link>
          </li>

          <li className="my-btn">
            <Link to="/my-work">My work</Link>
          </li>

          {/* <nav>
          <CustomDropdown />
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link> 
        </nav> */}
        </ul>
      </nav>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="my-work" element={<MyWorkPage />} />
            <Route path="connect" element={<ConnectPage />} />
            <Route path="Contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default navbar
