// ?######################################## ARRAY PARA GENERAR EL MENU ########################################
const OpcionesMenu = [
  {
    title: 'Inicio',
    level: '1',
    id: '0000000000',
    path: '/',
    icon: 'home'
  },
  {
    title: 'Panel De Control',
    level: '1',
    id: '1000000000',
    path: '#',
    icon: 'briefcase',
    childrens: [
      {
        title: 'Mantenimiento',
        level: '2',
        id: '10010000000',
        path: '#',
        icon: 'wrench',
        childrens: [
          {
            title: 'Empresas',
            level: '3',
            id: '1001010000',
            path: '/panelcontrol/mantenimiento/empresas',
            path2: '/panelcontrol/mantenimiento/empresas/detalles',

            icon: ''
          },
          {
            title: 'Periodos',
            level: '3',
            id: '1001020000',
            path: '/panelcontrol/mantenimiento/periodos',
            path2: '/panelcontrol/mantenimiento/periodos/detalles',

            icon: ''
          },
          {
            title: 'Tipos de Identificación',
            level: '3',
            id: '1001030000',
            path: '/panelcontrol/mantenimiento/tiposidentificacion',
            path2: '/panelcontrol/mantenimiento/tiposidentificacion/detalles',

            icon: ''
          },
          {
            title: 'Tipos de Usuario',
            level: '3',
            id: '1001040000',
            path: '/panelcontrol/mantenimiento/tiposusuarios',
            path2: '/panelcontrol/mantenimiento/tiposusuarios/detales',
            icon: ''
          },
          {
            title: 'Usuarios',
            level: '3',
            id: '1001050000',
            path: '/panelcontrol/mantenimiento/usuarios',
            path2: '/panelcontrol/mantenimiento/usuarios/detalles',
            icon: ''
          }
        ]
      }
    ]
  },

  {
    title: 'Facturación',
    level: '1',
    id: '2000000000',
    path: '#',
    icon: 'coin-dollar',
    childrens: [
      {
        title: 'Mantenimiento',
        level: '2',
        id: '2001000000',
        path: '#',
        icon: '',
        childrens: [
          {
            title: 'Cajas',
            level: '3',
            id: '2001010000',
            path: '/facturacion/mantenimiento/cajas',
            path2: '/facturacion/mantenimiento/cajas/detalles',
            icon: ''
          },
          {
            title: 'Clientes',
            level: '3',
            id: '2001020000',
            path: '/facturacion/mantenimiento/clientes',
            path2: '/facturacion/mantenimiento/clientes/detalles',
            icon: ''
          },
          {
            title: 'Comanda',
            level: '3',
            id: '2001030000',
            path: '/facturacion/mantenimiento/comanda',
            path2: '/facturacion/mantenimiento/comanda/detalles',
            icon: ''
          },
          {
            title: 'Puestos de Venta',
            level: '3',
            id: '2001040000',
            path: '/facturacion/mantenimiento/puestoventa',
            path2: '/facturacion/mantenimiento/puestoventa/detalles',
            icon: ''
          },
          {
            title: 'Puntos de Venta',
            level: '3',
            id: '2001050000',
            path: '/facturacion/mantenimiento/puntoventa',
            path2: '/facturacion/mantenimiento/puntoventa/detalles',
            icon: ''
          },
          {
            title: 'Ruteros',
            level: '3',
            id: '2001060000',
            path: '/facturacion/mantenimiento/ruteros',
            path2: '/facturacion/mantenimiento/ruteros/detalles',
            icon: ''
          },
          {
            title: 'Vendedores',
            level: '3',
            id: '2001070000',
            path: '/facturacion/mantenimiento/vendedores',
            path2: '/facturacion/mantenimiento/vendedores/detalles',
            icon: ''
          },
          {
            title: 'Zonas Cliente',
            level: '3',
            id: '2001080000',
            path: '/facturacion/mantenimiento/zonaclientes',
            path2: '/facturacion/mantenimiento/zonaclientes/detalles',
            icon: ''
          }
        ]
      },
      {
        title: 'Transacciones',
        level: '2',
        id: '2002000000',
        path: '#',
        icon: '',
        childrens: [
          {
            title: 'Facturación Cuentas',
            level: '3',
            id: '2002010000',
            path: '/facturacion/transacciones/facturacioncuentas',
            icon: ''
          },
          {
            title: 'Factura Rápida',
            level: '3',
            id: '2002020000',
            path: '/facturacion/transacciones/facturarapida',
            icon: ''
          },
          {
            title: 'Nota Crédito',
            level: '3',
            id: '2002030000',
            path: '/facturacion/transacciones/notacredito',
            icon: ''
          },
          {
            title: 'Pedidos',
            level: '3',
            id: '2002040000',
            path: '/facturacion/transacciones/pedidos',
            icon: ''
          }
        ]
      },
      {
        title: 'Consultas',
        level: '2',
        id: '2003000000',
        path: '#',
        icon: '',
        childrens: [
          {
            title: 'Consultas factura 1',
            level: '3',
            id: '2003010000',
            path: '/facturacion/consultas/consultasfactura1',
            icon: ''
          }
        ]
      },
      {
        title: 'Reportes',
        level: '2',
        id: '2004000000',
        path: '#',
        icon: '',
        childrens: [
          {
            title: 'Reportes factura 1',
            level: '2',
            id: '2004010000',
            path: '/facturacion/reportes/reportesfactura1',
            icon: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Inventario',
    level: '1',
    id: '3000000000',
    path: '#',
    icon: 'download',
    childrens: [
      {
        title: 'Mantenimiento',
        level: '2',
        id: '3001000000',
        path: '#',
        icon: '',
        childrens: [
          {
            title: 'Bodegas',
            level: '3',
            id: '3001010000',
            path: '/inventario/mantenimiento/bodegas',
            icon: ''
          },
          {
            title: 'Categorías',
            level: '3',
            id: '3001020000',
            path: '/inventario/mantenimiento/categorias',
            icon: ''
          },
          {
            title: 'Familias',
            level: '3',
            id: '3001030000',
            path: '/inventario/mantenimiento/familia',
            icon: ''
          },
          {
            title: 'Grupos',
            level: '3',
            id: '3001040000',
            path: '/inventario/mantenimiento/grupos',
            icon: ''
          },
          {
            title: 'Marcas',
            level: '3',
            id: '3001050000',
            path: '/inventario/mantenimiento/marcas',
            icon: ''
          },
          {
            title: 'Medidas Comerciales',
            level: '3',
            id: '3001060000',
            path: '/inventario/mantenimiento/medidascomerciales',
            icon: ''
          },
          {
            title: 'Productos',
            level: '3',
            id: '3001070000',
            path: '/inventario/mantenimiento/productos',
            icon: ''
          },
          {
            title: 'Proveedores',
            level: '3',
            id: '3001080000',
            path: '/inventario/mantenimiento/proveedores',
            icon: ''
          },
          {
            title: 'Sub Categorías',
            level: '3',
            id: '3001090000',
            path: '/inventario/mantenimiento/subcategorias',
            icon: ''
          },
          {
            title: 'Presentación Compras',
            level: '3',
            id: '3001100000',
            path: '/inventario/mantenimiento/presentacioncompras',
            icon: ''
          }
        ]
      },
      {
        title: 'Transacciones',
        level: '2',
        id: '3002000000',
        path: '#',
        icon: ''
        // childrens: [],
      },
      {
        title: 'Consultas',
        level: '2',
        id: '3003000000',
        path: '#',
        icon: ''
        // childrens: [],
      },
      {
        title: 'Reportes',
        level: '2',
        id: '3004000000',
        path: '#',
        icon: ''
        // childrens: [],
      }
    ]
  }
]
export default OpcionesMenu

// todo##############################################################################
/**
 * OBTENER LA RUTA DE CADA PAGINA
 * @param {String} id id de la pagina a consultar
 * @returns {object} objeto con la info necesaria para acceder a la pagina
 */
export const getRutaById = (id) => {
  const ArrRutas = []
  // ---------------------------------- Desmenuzar El menu ----------------------------------
  const generarArrMenu = (Arr) => {
    Arr.forEach((item) => {
      ArrRutas.push({ id: item.id, title: item.title, path: item.path })
      if (item.childrens) generarArrMenu(item.childrens)
    })
  }
  generarArrMenu(OpcionesMenu)
  // retorna la ruta solicitada

  return ArrRutas.find((el) => el.id === id)
}
