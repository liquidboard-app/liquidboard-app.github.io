
export const Security = () => (
  <>
    <h2>Política de seguridad de datos</h2>
                <p>Última actualización: 05 de junio de 2026 · LiquidBoard</p>
                <p>LiquidBoard está diseñado con un enfoque que prioriza la privacidad. Sus datos nunca salen de su dispositivo a menos que elija explícitamente habilitar iCloud Sync. No tenemos servidores, cuentas ni acceso a su contenido.</p>

                <h2>Almacenamiento de datos</h2>
                <p>Todo el contenido que crea en LiquidBoard (fragmentos de texto, imágenes y pegatinas) se almacena en uno de dos lugares:</p>
                <ul>
                  <li><strong>Almacenamiento en el dispositivo</strong>— Administrado por iOS y accesible solo para LiquidBoard. Otras aplicaciones no pueden leer sus datos.</li>
                  <li><strong>iCloud (opcional)</strong>— Sincronizado a través de su ID personal de Apple utilizando la infraestructura cifrada CloudKit de Apple.</li>
                </ul>
                <p>No se almacenan datos en nuestros servidores. No operamos ninguna infraestructura backend.</p>

                <h2>Cifrado</h2>
                <p>Tus datos están protegidos por las capas de seguridad de iOS y Apple:</p>
                <ul>
                  <li><strong>En paz</strong>— iOS cifra los datos almacenados en su dispositivo utilizando el código de acceso de su dispositivo y Secure Enclave.</li>
                  <li><strong>En tránsito</strong>— Si iCloud Sync está habilitado, CloudKit de Apple cifra los datos antes de transmitirlos.</li>
                  <li><strong>Copia de seguridad de iCloud</strong>— Si se realiza una copia de seguridad de su dispositivo en iCloud, los datos de la aplicación se incluyen en el sistema de copia de seguridad cifrado de Apple.</li>
                </ul>

                <h2>Seguridad de fotografías e imágenes</h2>
                <p>LiquidBoard accede a su biblioteca de fotos solo cuando elige explícitamente seleccionar o importar una foto. La aplicación:</p>
                <ul>
                  <li>No accede a tu biblioteca de fotos en segundo plano.</li>
                  <li>No sube fotos a ningún servidor.</li>
                  <li>Almacena las imágenes seleccionadas localmente en el contenedor de espacio aislado de la aplicación.</li>
                  <li>Procesa la creación de stickers completamente en el dispositivo.</li>
                </ul>
                <p>Puede revocar el acceso a las fotos en cualquier momento en Configuración → Privacidad y seguridad → Fotos.</p>

                <h2>Seguridad de la extensión del teclado</h2>
                <p>La extensión de teclado no recopila, registra ni transmite ningún dato de pulsación de tecla ni texto que escriba en otras aplicaciones.</p>
                <p>Se requiere acceso completo para que la extensión del teclado pegue imágenes y pegatinas, y para acceder a iCloud Sync. Incluso con el acceso total habilitado, la extensión del teclado funciona completamente dentro del entorno aislado de iOS. No tiene capacidad para enviar datos a servidores externos.</p>

                <h2>Sin acceso a datos de terceros</h2>
                <p>LiquidBoard no integra ninguno de los siguientes:</p>
                <ul>
                  <li>SDK de análisis o informes de fallos, como Firebase o Mixpanel</li>
                  <li>Redes publicitarias o SDK de seguimiento</li>
                  <li>Servicios de procesamiento o almacenamiento en la nube de terceros</li>
                </ul>
                <p>Su contenido nunca es compartido ni accesible por ningún tercero.</p>

                <h2>Zona de pruebas de la aplicación</h2>
                <p>LiquidBoard se ejecuta en la estricta zona de pruebas de aplicaciones de iOS. Esto significa que otras aplicaciones en su dispositivo no pueden acceder a los datos de LiquidBoard y LiquidBoard no puede acceder a datos que pertenecen a otras aplicaciones, excepto el contenido que usted pega explícitamente mediante la extensión del teclado.</p>

                <h2>Tu control</h2>
                <p>Tienes control total sobre tus datos en todo momento:</p>
                <ul>
                  <li>Habilite o deshabilite iCloud Sync desde la aplicación</li>
                  <li>Revocar el acceso a la biblioteca de fotos en la configuración de iOS</li>
                  <li>Deshabilite el acceso total para el teclado en Configuración → General → Teclado → Teclados</li>
                  <li>Eliminar todos los datos eliminando la aplicación</li>
                </ul>

                <h2>Contacto</h2>
                <p>Si tiene preguntas sobre la seguridad de los datos, contáctenos en:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>política de privacidad</h2>
                <p>Última actualización: 05 de junio de 2026 · LiquidBoard</p>
                <p>LiquidBoard ("nosotros", "nuestro" o "la aplicación") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo manejamos la información cuando utiliza LiquidBoard y su extensión de teclado.</p>

                <h2>Datos que recopilamos</h2>
                <p>LiquidBoard no recopila, almacena ni transmite ningún dato personal a servidores externos. Todos los datos que crea dentro de la aplicación, incluidos fragmentos de texto, imágenes, pegatinas, categorías y configuraciones, se almacenan exclusivamente en su dispositivo o en su cuenta personal de iCloud.</p>

                <h2>Fotos e imágenes</h2>
                <p>LiquidBoard puede solicitar acceso a su biblioteca de fotografías para los siguientes fines:</p>
                <ul>
                  <li>Insertar imágenes en sus fragmentos</li>
                  <li>Crear stickers personalizados a partir de tus fotos</li>
                </ul>
                <p>Las fotos que seleccione se almacenan localmente en su dispositivo y/o se sincronizan con su cuenta personal de iCloud. No cargamos, transmitimos ni accedemos a sus fotos de ninguna manera. El acceso a la biblioteca de fotos solo se utiliza en el momento en que eliges explícitamente una imagen; la aplicación no accede a tu biblioteca en segundo plano.</p>

                <h2>Pegatinas</h2>
                <p>LiquidBoard le permite:</p>
                <ul>
                  <li>Crea stickers personalizados a partir de tus propias fotos</li>
                  <li>Insertar pegatinas a través de la extensión del teclado</li>
                </ul>
                <p>Los stickers personalizados que creas a partir de tus fotos se almacenan en tu dispositivo y/o iCloud únicamente. No se nos transmite ningún contenido de pegatinas ni datos de imágenes.</p>

                <h2>Extensión de teclado y acceso completo</h2>
                <p>Esta extensión de teclado no recopila, registra ni transmite ningún dato de pulsación de tecla ni texto que usted escriba.</p>
                <p>La extensión de teclado de LiquidBoard requiere que esté habilitado el acceso completo para:</p>
                <ul>
                  <li>Pega imágenes y stickers en otras aplicaciones</li>
                  <li>Sincroniza tus fragmentos y stickers a través de iCloud en todos tus dispositivos</li>
                </ul>
                <p>El acceso completo se utiliza únicamente para estas funciones. El teclado no registra, graba ni transmite nada de lo que escribes en ninguna otra aplicación. No se envían datos a ningún servidor externo.</p>

                <h2>Sincronización de iCloud</h2>
                <p>Si elige habilitar iCloud Sync, sus fragmentos de texto, imágenes y pegatinas se sincronizan a través de la infraestructura iCloud de Apple utilizando su ID de Apple personal. Estos datos se rigen por la Política de Privacidad de Apple. No tenemos acceso a sus datos de iCloud.</p>

                <h2>Compartir datos</h2>
                <p>No vendemos, compartimos ni revelamos sus datos a terceros. No utilizamos análisis de terceros, SDK publicitarios ni herramientas de seguimiento.</p>

                <h2>Retención y eliminación de datos</h2>
                <p>Sus datos permanecen en su dispositivo y/o cuenta de iCloud y están totalmente bajo su control. Podrás eliminar tus datos en cualquier momento mediante:</p>
                <ul>
                  <li>Eliminar fragmentos, imágenes o pegatinas individuales dentro de la aplicación</li>
                  <li>Revocar el acceso a la biblioteca de fotos en Configuración → Privacidad → Fotos</li>
                  <li>Eliminar la aplicación, que elimina todos los datos almacenados localmente</li>
                  <li>Deshabilitar iCloud Sync y eliminar los datos de iCloud de la aplicación desde Configuración → [Su nombre] → iCloud → Administrar almacenamiento</li>
                </ul>

                <h2>Privacidad de los niños</h2>
                <p>LiquidBoard no recopila intencionalmente ninguna información de niños menores de 13 años. La aplicación no recopila datos personales de ningún usuario.</p>

                <h2>Cambios a esta política</h2>
                <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se reflejará en la aplicación y en nuestro sitio web con una fecha actualizada.</p>

                <h2>Contacto</h2>
                <p>Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Condiciones de uso</h2>
                <p>Última actualización: 05 de junio de 2026 · LiquidBoard</p>
                <p>Al descargar, instalar o utilizar LiquidBoard ("la Aplicación"), usted acepta estar sujeto a estos Términos de uso. Si no está de acuerdo con estos términos, no utilice la aplicación.</p>

                <h2>Licencia</h2>
                <p>Le otorgamos una licencia limitada, no exclusiva, intransferible y revocable para utilizar LiquidBoard para sus fines personales y no comerciales, sujeto a estos Términos.</p>
                <p>No puedes:</p>
                <ul>
                  <li>Copiar, modificar o distribuir la Aplicación o su contenido</li>
                  <li>Realizar ingeniería inversa o intentar extraer el código fuente.</li>
                  <li>Usar la aplicación para cualquier propósito ilegal o no autorizado</li>
                  <li>Vender, sublicenciar o transferir el acceso a la Aplicación a cualquier tercero</li>
                </ul>

                <h2>Tu contenido</h2>
                <p>Usted conserva la propiedad total de todos los fragmentos de texto, imágenes y pegatinas que cree o importe a LiquidBoard. No reclamamos ningún derecho sobre su contenido.</p>
                <p>Usted es el único responsable de garantizar que el contenido que cree o pegue utilizando la Aplicación no infrinja ningún derecho de terceros, incluidos derechos de autor, marcas comerciales o derechos de privacidad.</p>

                <h2>Uso Aceptable</h2>
                <p>Acepta no utilizar LiquidBoard para crear, almacenar o distribuir contenido que:</p>
                <ul>
                  <li>Es ilegal, dañino, amenazante o acosador</li>
                  <li>Infringe los derechos de propiedad intelectual de otros</li>
                  <li>Contiene malware, virus o código malicioso.</li>
                  <li>Viola cualquier ley local, nacional o internacional aplicable.</li>
                </ul>

                <h2>Compras dentro de la aplicación</h2>
                <p>LiquidBoard ofrece compras opcionales dentro de la aplicación para desbloquear funciones o contenido adicionales. Apple procesa todas las compras a través de la App Store y están sujetas a los Términos de venta de Apple.</p>
                <ul>
                  <li>Las compras no son reembolsables excepto según lo exija la ley aplicable o la política de reembolso de Apple.</li>
                  <li>Los precios pueden variar según la región y se muestran en su moneda local al momento de la compra.</li>
                  <li>Las funciones compradas están vinculadas a su ID de Apple y se pueden restaurar en cualquier dispositivo en el que haya iniciado sesión con el mismo ID de Apple.</li>
                </ul>
                <p>Para solicitar un reembolso, comuníquese directamente con Apple en:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</a>.</p>

                <h2>Extensión de teclado y acceso completo</h2>
                <p>Es necesario habilitar el acceso completo para la extensión del teclado para pegar imágenes y pegatinas en otras aplicaciones y habilitar iCloud Sync. Acceso completo no nos otorga acceso a nada de lo que usted escribe.</p>
                <p>Usted reconoce que al habilitar el acceso completo, iOS mostrará un aviso del sistema informándole que el desarrollador del teclado podría acceder a su escritura. Queremos ser explícitos: LiquidBoard no recopila, registra ni transmite ningún dato de pulsación de teclas.</p>

                <h2>Sincronización de iCloud</h2>
                <p>iCloud Sync es una función opcional que utiliza su cuenta personal de Apple iCloud para sincronizar sus datos entre dispositivos. El uso de iCloud está sujeto a los Términos y condiciones de Apple. No somos responsables de ninguna pérdida de datos resultante de interrupciones del servicio iCloud.</p>

                <h2>Renuncia de garantías</h2>
                <p>LiquidBoard se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, garantías de comerciabilidad, idoneidad para un propósito particular o no infracción.</p>
                <p>No garantizamos que la Aplicación será ininterrumpida, libre de errores o libre de virus u otros componentes dañinos.</p>

                <h2>Limitación de responsabilidad</h2>
                <p>En la máxima medida permitida por la ley aplicable, no seremos responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluidos, entre otros, la pérdida de datos, la pérdida de ganancias o la pérdida de buena voluntad, que surjan de su uso o imposibilidad de usar la Aplicación.</p>

                <h2>Terminación</h2>
                <p>Nos reservamos el derecho de cancelar o restringir su acceso a la Aplicación en cualquier momento, sin previo aviso, por conducta que creemos que viola estos Términos o es perjudicial para otros usuarios, para nosotros o para terceros.</p>
                <p>Puede dejar de usar la Aplicación en cualquier momento eliminándola de su dispositivo.</p>

                <h2>Cambios a estos términos</h2>
                <p>Podemos actualizar estos Términos de uso de vez en cuando. El uso continuo de la Aplicación después de la publicación de los cambios constituye su aceptación de los Términos revisados. Le notificaremos sobre cambios significativos a través de la Aplicación o nuestro sitio web.</p>

                <h2>Ley aplicable</h2>
                <p>Estos Términos se rigen e interpretan de acuerdo con las leyes de la jurisdicción en la que tiene su sede el desarrollador, sin tener en cuenta los principios de conflicto de leyes.</p>

                <h2>Contacto</h2>
                <p>Si tiene alguna pregunta sobre estos Términos, contáctenos en:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Política de pago y reembolso</h2>
                <p>Última actualización: 05 de junio de 2026 · LiquidBoard</p>
                <p>LiquidBoard ofrece compras opcionales dentro de la aplicación para desbloquear funciones premium. Todos los pagos son manejados íntegramente por Apple a través de la App Store; no procesamos, almacenamos ni tenemos acceso a su información de pago.</p>

                <h2>Lo que puedes comprar</h2>
                <p>LiquidBoard ofrece las siguientes compras opcionales:</p>
                <ul>
                  <li>Funciones Premium: desbloqueo único o por suscripción para funcionalidad avanzada de la aplicación</li>
                </ul>
                <p>Las compras y los precios disponibles se muestran en la aplicación en el momento de la compra. Los precios pueden variar según la región y se muestran en su moneda local.</p>

                <h2>Procesamiento de pagos</h2>
                <p>Apple procesa todas las transacciones de forma segura. Nunca vemos ni almacenamos su tarjeta de crédito, dirección de facturación ni ningún detalle de pago.</p>
                <p>Al completar una compra, acepta los Términos de venta de la App Store de Apple. Se le cobrará a su método de pago registrado en Apple en el momento de la confirmación de la compra.</p>

                <h2>Restaurar compras</h2>
                <p>Si reinstalas LiquidBoard o cambias a un nuevo dispositivo, puedes restaurar todas las compras anteriores sin costo adicional usando la opción Restaurar compras dentro de la aplicación. Las compras están vinculadas a su ID de Apple y están disponibles en todos los dispositivos en los que haya iniciado sesión con la misma cuenta.</p>

                <h2>Suscripciones</h2>
                <p>Si LiquidBoard ofrece compras basadas en suscripción:</p>
                <ul>
                  <li>Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del período de facturación actual.</li>
                  <li>Se le cobrará a su ID de Apple la renovación dentro de las 24 horas anteriores al final del período actual.</li>
                  <li>Puede administrar o cancelar suscripciones en cualquier momento en Configuración → [Su nombre] → Suscripciones</li>
                  <li>La cancelación de una suscripción entra en vigor al final del período de pago actual; usted conserva el acceso hasta entonces</li>
                  <li>Los períodos de prueba gratuitos, si se ofrecen, se convertirán en una suscripción paga a menos que se cancelen antes de que finalice la prueba.</li>
                </ul>

                <h2>Política de reembolso</h2>
                <p>No procesamos reembolsos directamente. Todas las solicitudes de reembolso deben enviarse a Apple, ya que es el comerciante registrado para todas las transacciones de la App Store.</p>
                <p>Apple maneja los reembolsos a su discreción de acuerdo con su política de reembolso. Los casos elegibles comunes incluyen compras accidentales, cargos no autorizados o compras que no funcionaron como se describe.</p>
                <p>Para solicitar un reembolso de Apple:</p>
                <ul>
                  <li>Ir a<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</a>e inicia sesión con tu ID de Apple</li>
                  <li>Busque la compra de LiquidBoard y toque Informar un problema</li>
                  <li>Seleccione el motivo y envíe su solicitud</li>
                </ul>
                <p>Apple suele responder en unos pocos días hábiles. Las decisiones de reembolso las toma únicamente Apple.</p>

                <h2>Cambios de precio</h2>
                <p>Nos reservamos el derecho de cambiar los precios de las compras dentro de la aplicación en cualquier momento. Los cambios de precios de las suscripciones se comunicarán con antelación a través de la aplicación o App Store y entrarán en vigor al inicio de su próximo ciclo de facturación. Apple le notificará antes de que entre en vigor cualquier cambio en el precio de la suscripción.</p>

                <h2>Compras fallidas o incompletas</h2>
                <p>Si una compra falla o se le cobra pero no recibe el contenido, primero intente restaurar las compras dentro de la aplicación. Si el problema persiste, contáctenos al<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>y lo investigaremos con prontitud.</p>

                <h2>Contacto</h2>
                <p>Para preguntas de facturación o problemas de compra, contáctenos en:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Para reembolsos, utilice el canal oficial de Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</a></p>
  </>
);
