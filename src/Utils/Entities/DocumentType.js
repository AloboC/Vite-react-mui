export class DocumentType {
  //
  constructor(id, tipoDocumento, abrev) {
    this.ID_TIPO_DOC = id || -1
    this.TIPO_DOCUMENTO = tipoDocumento || ''
    this.ABREV = abrev || ''
  }
}
