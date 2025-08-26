export const CardTimeLine = () => (
  <>
    {/* Auxiliar de Sistemas */}
    <li className="flex mb-12">
      <div className="flex flex-col items-center mr-6">
        <span className="w-4 h-4 bg-green-500 rounded-full block"></span>
        <span className="flex-1 w-1 bg-green-200"></span>
      </div>
      <div>
        <h3 className="text-green-600 font-bold text-lg">Auxiliar de Sistemas</h3>
        <span className="text-gray-500 text-sm">Febrero - Agosto de 2021</span>
        <p className="text-gray-700 mt-2">
          Desarrollé un sistema de gestión de clientes para optimizar el manejo de información. Fui responsable del mantenimiento de equipos informáticos y la instalación de cableado estructurado en distintas sucursales para mejorar la conectividad y el rendimiento de la red.
        </p>
      </div>
    </li>
    {/* Sistema de Gestión */}
    <li className="flex mb-12">
      <div className="flex flex-col items-center mr-6">
        <span className="w-4 h-4 bg-green-500 rounded-full block"></span>
        <span className="flex-1 w-1 bg-green-200"></span>
      </div>
      <div>
        <h3 className="text-green-600 font-bold text-lg">Sistema de Gestión</h3>
        <span className="text-gray-500 text-sm">Agosto de 2023</span>
        <p className="text-gray-700 mt-2">
          Diseñé y desarrollé un sistema personalizado para la administración de un condominio. Incluye módulos para pagos, comunicación con copropietarios y seguimiento de mantenimiento. Mejoró significativamente la organización y redujo el tiempo dedicado a tareas administrativas.
        </p>
      </div>
    </li>
    {/* Sistema de Ventas */}
    <li className="flex mb-12">
      <div className="flex flex-col items-center mr-6">
        <span className="w-4 h-4 bg-green-500 rounded-full block"></span>
        <span className="flex-1 w-1 bg-green-200"></span>
      </div>
      <div>
        <h3 className="text-green-600 font-bold text-lg">Sistema de Ventas</h3>
        <span className="text-gray-500 text-sm">Diciembre de 2024</span>
        <p className="text-gray-700 mt-2">
          Diseñé un sistema de ventas para una empresa de productos alimenticios, el cual permite registrar transacciones y emitir recibos mediante impresión Bluetooth. Esto permitió agilizar la atención al cliente y mejorar el control interno de ventas, sin integración con el sistema tributario.
        </p>
      </div>
    </li>
  </>
);