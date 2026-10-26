
const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} CampusEats &middot; BICS 3301, IIUM
      </p>
    </footer>
  )
}

export default Footer
