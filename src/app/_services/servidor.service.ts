import { Injectable, ɵConsole } from '@angular/core';
import { ConstantsService } from '../_services/constants.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bdd, Esquema, Campo } from '../_models/';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(
    private constantsService: ConstantsService,
    private http: HttpClient,
  ) { }


  crearServidor(data) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}comunicaciones/servidor`, data)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getListaServidores(offset, limit) {

    return this.http.get<any>(`${this.constantsService.baseAppUrl}comunicaciones/servidor/${offset}/${limit}`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getListaServidoresActivos() {

    return this.http.get<any>(`${this.constantsService.baseAppUrl}comunicaciones/servidores-activos`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getListaBdds(httpOptions): Observable<any> {

    return this.http.get<Bdd[]>(`${this.constantsService.baseAppUrl}promociones/servidores/databases`, httpOptions)
      .pipe(map(respuesta => {
        return respuesta;
      }));
    //return this.http.get(`${this.constantsService.baseAppUrl}promociones/servidores/databases`, httpOptions).map(response => response.json())    
  }

  getListaEsquemas(httpOptions): Observable<any> {

    return this.http.get<Esquema[]>(`${this.constantsService.baseAppUrl}promociones/esquemas`, httpOptions)
      .pipe(map(respuesta => {
        return respuesta;
      }));
    //return this.http.get(`${this.constantsService.baseAppUrl}promociones/servidores/databases`, httpOptions).map(response => response.json())    
  }

  getListaTablas(estados): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}sincronizador/lista-tablas`, { estados })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getListaCamposTabla(httpOptions): Observable<any> {
    return this.http.get<Campo[]>(`${this.constantsService.baseAppUrl}promociones/campos-tabla`, httpOptions)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  sincronizarTabla(tabla) {
    return this.http.patch<any>(`${this.constantsService.baseAppUrl}gestion/sincronizar-marca`, { tabla })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getListaLogs(): Observable<any> {
    return this.http.get<any[]>(`${this.constantsService.baseAppUrl}sincronizador/lista-logs`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  crearTabla(tabla) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}sincronizador/crear-tabla`, tabla)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  crearEditarTabla(tabla) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}sincronizador/crear-editar-tabla`, tabla)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFacturasNotasCFarmacias(codigo_auxiliar) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-farmacias`, { codigo_auxiliar })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getCobrosPagosFarmacias() {
    return this.http.get<any>(`${this.constantsService.baseAppUrl}cuadre/get-cobros-pagos-farmacias`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFacturasNotasCServidor(codigo_auxiliar) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-servidor`, { codigo_auxiliar })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getCobrosPagosServidor() {
    return this.http.get<any>(`${this.constantsService.baseAppUrl}cuadre/get-cobros-pagos-servidor`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getOficinas() {
    return this.http.get<any>(`${this.constantsService.baseAppUrl}cuadre/get-oficinas`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFacturasNotasCDetalleServidor(codigo_auxiliar) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-detalle-servidor`, { codigo_auxiliar })
      .pipe(map(respuesta => {
        return respuesta[0];
      }));
  }

  getFacturasNotasCDetalleFacturaServidor(codigo_auxiliar, factura) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-detalle-factura-servidor`, { codigo_auxiliar, factura })
      .pipe(map(respuesta => {
        return respuesta[0];
      }));
  }
  getFacturasNotasCDetalleFacturaFarmacia(serie_factura, numero_factura, ip) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-detalle-factura-farmacia`, { serie_factura, numero_factura, ip })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFacturasNotasCDetalleFarmacia(codigo_auxiliar, ip) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-facturas-notas-credito-detalle-farmacia`, { codigo_auxiliar, ip })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFormasPagoFarmacia(codigo_auxiliar, ip) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-formas-pago-farmacia`, { codigo_auxiliar, ip })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getFormasPagoServidor(codigo_auxiliar) {
    return this.http.post<any>(`${this.constantsService.baseAppUrl}cuadre/get-formas-pago-servidor`, { codigo_auxiliar })
      .pipe(map(respuesta => {
        return respuesta[0];
      }));
  }


  ////CORE MUNICIPALIDAD///////
  insertPago(cedula1, nombres, apellidos, email, impuesto, valorTotal, referencia, rutaArchivo) {
    let servicio = '001'
    let cedula = '1003785423'
    let fechaTransaccion = formatDate(new Date(), 'yyyy/MM/dd', 'en')
    let iva = ''
    let valorIva = ''
    let observacion = ''
    let usuarioCreacion = ''
    let fechaCreacion = formatDate(new Date(), 'yyyy/MM/dd', 'en')
    let nombresContribuyente = nombres
    let emailContribuyente = email
    let impuestoContribuyente = impuesto
    return this.http.post<any>(`${this.constantsService.baseAppUrl}pagos/insertPago`,
      { servicio, cedula, fechaTransaccion, valorTotal, iva, valorIva, observacion, usuarioCreacion, fechaCreacion, nombresContribuyente, emailContribuyente, impuestoContribuyente, referencia, rutaArchivo })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getAllPagosByEstado(estado): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}pagos/getAllPagosByEstado`, { estado })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  updatePagos(id, estado, usuario, fecha, observacion) {
    let fechaCreacion = formatDate(new Date(), 'yyyy/MM/dd', 'en')
    return this.http.post<any>(`${this.constantsService.baseAppUrl}pagos/updatePagos`,
      { id, estado, usuario, fecha, observacion })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  saveFile(nombre, link) {

    return this.http.post<any>(`${this.constantsService.baseAppUrl}pagos/saveFile`,
      { nombre, link })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getFile(nombre): Observable<Blob> {
    // return this.http.get('http://myip/image/nombre' + id, { responseType: "blob" });
    return this.http.get(`${this.constantsService.baseAppUrl}pagos/getFile?nombre=` + nombre, { responseType: "blob" })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getTramitesById(tramite): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}tramites/getTramitesByTramiteId`, { tramite })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getTramiteById(tramite): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}tramites/getRecorridoTramiteByTramite`, { tramite })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getDocumentoById(codigo): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}tramites/getDocumentoById`, { codigo })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getPuntoInformacionAll(): Observable<any> {
    return this.http.get<any[]>(`${this.constantsService.baseAppUrl}tramites/getTramitesAll`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  insertPrestamo(rec_mfn, pre_cedula, pre_nombres, pre_apellidos, pre_institucion,
    pre_nivel, pre_fecha_prestamo, pre_fecha_entrega, pre_observaciones, pre_estado, pre_campo_1,
    pre_campo_2, pre_campo_3, pre_campo_4) {
    pre_estado = "PRESTADO";
    pre_fecha_prestamo = new Date()
    return this.http.post<any>(`${this.constantsService.baseAppUrl}biblioteca/insertPrestamo`,
      {
        rec_mfn, pre_cedula, pre_nombres, pre_apellidos, pre_institucion,
        pre_nivel, pre_fecha_prestamo, pre_fecha_entrega, pre_observaciones, pre_estado, pre_campo_1,
        pre_campo_2, pre_campo_3, pre_campo_4
      })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  getAllRecursosByEstado(estado): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}biblioteca/getAllRecursosByEstado`, { estado })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getAllProducts(){
    return this.http.options(`${this.constantsService.baseAppUrl}api/restmigra`)
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }
  getRecursoById(id): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}biblioteca/getRecursoById`, { id })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  insertRecurso(product_sku, product_name, product_type, stock, date_update, user_update, observation) {
    date_update = new Date()
    // return this.http.post(`${this.constantsService.baseAppUrl}api/restmigra`,
    //   {
    //     product_sku, product_name, product_type, stock, date_update, user_update, observation
    //   })
    //   .pipe(map(respuesta => {
    //     return respuesta;
    //   }));
      return this.http.post(`${this.constantsService.baseAppUrl}api/restmigra`, {product_sku, product_name, product_type, stock, date_update, user_update, observation});
  }

  getAllPrestamosByEstado(pre_estado): Observable<any> {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}biblioteca/getAllPrestamosByEstado`, { pre_estado })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  updatePrestamo(pre_id, pre_estado, pre_fecha_entrega, pre_observaciones) {
    pre_fecha_entrega = new Date()
    return this.http.post<any>(`${this.constantsService.baseAppUrl}biblioteca/updatePrestamo`,
      { pre_id, pre_estado, pre_fecha_entrega, pre_observaciones })
      .pipe(map(respuesta => {
        return respuesta;
      }));
  }

  abrirFieldWeb(token) {
    return this.http.post<any[]>(`${this.constantsService.baseAppUrl}fielweb/obtenerUrl`, { token })
      .pipe(map(respuesta => {
        console.log(respuesta)
        return respuesta;

      }));
  }
}
