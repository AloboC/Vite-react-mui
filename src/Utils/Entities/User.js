export class User {
  // ?.................................. CONSTRUCTOR ...........................................

  constructor(
    id,
    nombre,
    ape1,
    ape2,
    direction,
    telefono,
    email,
    tipoUsuario,
    fechaIngreso
  ) {
    this.ID_USUARIO = id || -1
    this.NOMBRE = nombre || ''
    this.APELLIDO1 = ape1 || ''
    this.APELLIDO2 = ape2 || ''
    this.DIRECCION = direction || ''
    this.TELEFONO = telefono || ''
    this.EMAIL = email || ''
    this.TIPO_USUARIO = tipoUsuario || -1
    this.FECHA_INGRESO = fechaIngreso || ''
  }

  // ?............................. RETORNAR NOMBRE COMPLETO ........................................

  getFullName() {
    return `${this.NOMBRE} ${this.APELLIDO1 || ''} ${this.APELLIDO2 || ''}`
  }
}
