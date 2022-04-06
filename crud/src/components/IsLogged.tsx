function IsLogged() {
  return (
    localStorage.getItem('token')
  )
}

export default IsLogged