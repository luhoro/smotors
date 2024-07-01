const Footer = () => {
  return (
    <footer style={{textAlign: "center", padding: "55px 0 90px 0"}}>
      <p>
        Todos os direitos reservados S-Motors &#169;
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  )
}

export default Footer
