import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Política de seguridad de datos</PolicyHeading>
                <PolicyParagraph>Última actualización: 05 de junio de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard está diseñado con un enfoque que prioriza la privacidad. Sus datos nunca salen de su dispositivo a menos que elija explícitamente habilitar iCloud Sync. No tenemos servidores, cuentas ni acceso a su contenido.</PolicyParagraph>

                <PolicyHeading>Almacenamiento de datos</PolicyHeading>
                <PolicyParagraph>Todo el contenido que crea en LiquidBoard (fragmentos de texto, imágenes y pegatinas) se almacena en uno de dos lugares:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Almacenamiento en el dispositivo</PolicyEmphasis>— Administrado por iOS y accesible solo para LiquidBoard. Otras aplicaciones no pueden leer sus datos.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opcional)</PolicyEmphasis>— Sincronizado a través de su ID personal de Apple utilizando la infraestructura cifrada CloudKit de Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>No se almacenan datos en nuestros servidores. No operamos ninguna infraestructura backend.</PolicyParagraph>

                <PolicyHeading>Cifrado</PolicyHeading>
                <PolicyParagraph>Tus datos están protegidos por las capas de seguridad de iOS y Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>En paz</PolicyEmphasis>— iOS cifra los datos almacenados en su dispositivo utilizando el código de acceso de su dispositivo y Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>En tránsito</PolicyEmphasis>— Si iCloud Sync está habilitado, CloudKit de Apple cifra los datos antes de transmitirlos.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Copia de seguridad de iCloud</PolicyEmphasis>— Si se realiza una copia de seguridad de su dispositivo en iCloud, los datos de la aplicación se incluyen en el sistema de copia de seguridad cifrado de Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Seguridad de fotografías e imágenes</PolicyHeading>
                <PolicyParagraph>LiquidBoard accede a su biblioteca de fotos solo cuando elige explícitamente seleccionar o importar una foto. La aplicación:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>No accede a tu biblioteca de fotos en segundo plano.</PolicyListItem>
                  <PolicyListItem>No sube fotos a ningún servidor.</PolicyListItem>
                  <PolicyListItem>Almacena las imágenes seleccionadas localmente en el contenedor de espacio aislado de la aplicación.</PolicyListItem>
                  <PolicyListItem>Procesa la creación de stickers completamente en el dispositivo.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Puede revocar el acceso a las fotos en cualquier momento en Configuración → Privacidad y seguridad → Fotos.</PolicyParagraph>

                <PolicyHeading>Seguridad de la extensión del teclado</PolicyHeading>
                <PolicyParagraph>La extensión de teclado no recopila, registra ni transmite ningún dato de pulsación de tecla ni texto que escriba en otras aplicaciones.</PolicyParagraph>
                <PolicyParagraph>Se requiere acceso completo para que la extensión del teclado pegue imágenes y pegatinas y para acceder a iCloud Sync. Incluso con el acceso total habilitado, la extensión del teclado funciona completamente dentro del entorno aislado de iOS. No tiene capacidad para enviar datos a servidores externos.</PolicyParagraph>

                <PolicyHeading>Sin acceso a datos de terceros</PolicyHeading>
                <PolicyParagraph>LiquidBoard no integra ninguno de los siguientes:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK de análisis o informes de fallos, como Firebase o Mixpanel</PolicyListItem>
                  <PolicyListItem>Redes publicitarias o SDK de seguimiento</PolicyListItem>
                  <PolicyListItem>Servicios de procesamiento o almacenamiento en la nube de terceros</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Su contenido nunca es compartido ni accesible por ningún tercero.</PolicyParagraph>

                <PolicyHeading>Zona de pruebas de la aplicación</PolicyHeading>
                <PolicyParagraph>LiquidBoard se ejecuta en la estricta zona de pruebas de aplicaciones de iOS. Esto significa que otras aplicaciones en su dispositivo no pueden acceder a los datos de LiquidBoard y LiquidBoard no puede acceder a datos que pertenecen a otras aplicaciones, excepto el contenido que usted pega explícitamente mediante la extensión del teclado.</PolicyParagraph>

                <PolicyHeading>Tu control</PolicyHeading>
                <PolicyParagraph>Tienes control total sobre tus datos en todo momento:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Habilite o deshabilite iCloud Sync desde la aplicación</PolicyListItem>
                  <PolicyListItem>Revocar el acceso a la biblioteca de fotos en la configuración de iOS</PolicyListItem>
                  <PolicyListItem>Deshabilite el acceso total para el teclado en Configuración → General → Teclado → Teclados</PolicyListItem>
                  <PolicyListItem>Eliminar todos los datos eliminando la aplicación</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Contacto</PolicyHeading>
                <PolicyParagraph>Si tiene preguntas sobre la seguridad de los datos, contáctenos en:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>política de privacidad</PolicyHeading>
                <PolicyParagraph>Última actualización: 05 de junio de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("nosotros", "nuestro" o "la aplicación") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo manejamos la información cuando utiliza LiquidBoard y su extensión de teclado.</PolicyParagraph>

                <PolicyHeading>Datos que recopilamos</PolicyHeading>
                <PolicyParagraph>LiquidBoard no recopila, almacena ni transmite ningún dato personal a servidores externos. Todos los datos que crea dentro de la aplicación, incluidos fragmentos de texto, imágenes, pegatinas, categorías y configuraciones, se almacenan exclusivamente en su dispositivo o en su cuenta personal de iCloud.</PolicyParagraph>

                <PolicyHeading>Fotos e imágenes</PolicyHeading>
                <PolicyParagraph>LiquidBoard puede solicitar acceso a su biblioteca de fotografías para los siguientes fines:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Insertar imágenes en sus fragmentos</PolicyListItem>
                  <PolicyListItem>Crear stickers personalizados a partir de tus fotos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Las fotos que seleccione se almacenan localmente en su dispositivo y/o se sincronizan con su cuenta personal de iCloud. No cargamos, transmitimos ni accedemos a sus fotos de ninguna manera. El acceso a la biblioteca de fotos solo se utiliza en el momento en que eliges explícitamente una imagen; la aplicación no accede a tu biblioteca en segundo plano.</PolicyParagraph>

                <PolicyHeading>Pegatinas</PolicyHeading>
                <PolicyParagraph>LiquidBoard le permite:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Crea stickers personalizados a partir de tus propias fotos</PolicyListItem>
                  <PolicyListItem>Insertar pegatinas a través de la extensión del teclado</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Los stickers personalizados que creas a partir de tus fotos se almacenan en tu dispositivo y/o iCloud únicamente. No se nos transmite ningún contenido de pegatinas ni datos de imágenes.</PolicyParagraph>

                <PolicyHeading>Extensión de teclado y acceso completo</PolicyHeading>
                <PolicyParagraph>Esta extensión de teclado no recopila, registra ni transmite ningún dato de pulsación de tecla ni texto que usted escriba.</PolicyParagraph>
                <PolicyParagraph>La extensión de teclado de LiquidBoard requiere que esté habilitado el acceso completo para:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Pega imágenes y stickers en otras aplicaciones</PolicyListItem>
                  <PolicyListItem>Sincroniza tus fragmentos y stickers a través de iCloud en todos tus dispositivos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>El acceso completo se utiliza únicamente para estas funciones. El teclado no registra, graba ni transmite nada de lo que escribes en ninguna otra aplicación. No se envían datos a ningún servidor externo.</PolicyParagraph>

                <PolicyHeading>Sincronización de iCloud</PolicyHeading>
                <PolicyParagraph>Si elige habilitar iCloud Sync, sus fragmentos de texto, imágenes y pegatinas se sincronizan a través de la infraestructura iCloud de Apple utilizando su ID de Apple personal. Estos datos se rigen por la Política de Privacidad de Apple. No tenemos acceso a sus datos de iCloud.</PolicyParagraph>

                <PolicyHeading>Compartir datos</PolicyHeading>
                <PolicyParagraph>No vendemos, compartimos ni revelamos sus datos a terceros. No utilizamos análisis de terceros, SDK publicitarios ni herramientas de seguimiento.</PolicyParagraph>

                <PolicyHeading>Retención y eliminación de datos</PolicyHeading>
                <PolicyParagraph>Sus datos permanecen en su dispositivo y/o cuenta de iCloud y están totalmente bajo su control. Podrás eliminar tus datos en cualquier momento mediante:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Eliminar fragmentos, imágenes o pegatinas individuales dentro de la aplicación</PolicyListItem>
                  <PolicyListItem>Revocar el acceso a la biblioteca de fotos en Configuración → Privacidad → Fotos</PolicyListItem>
                  <PolicyListItem>Eliminar la aplicación, que elimina todos los datos almacenados localmente</PolicyListItem>
                  <PolicyListItem>Deshabilitar iCloud Sync y eliminar los datos de iCloud de la aplicación desde Configuración → [Su nombre] → iCloud → Administrar almacenamiento</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Privacidad de los niños</PolicyHeading>
                <PolicyParagraph>LiquidBoard no recopila intencionalmente ninguna información de niños menores de 13 años. La aplicación no recopila datos personales de ningún usuario.</PolicyParagraph>

                <PolicyHeading>Cambios a esta política</PolicyHeading>
                <PolicyParagraph>Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se reflejará en la aplicación y en nuestro sitio web con una fecha actualizada.</PolicyParagraph>

                <PolicyHeading>Contacto</PolicyHeading>
                <PolicyParagraph>Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Condiciones de uso</PolicyHeading>
                <PolicyParagraph>Última actualización: 05 de junio de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Al descargar, instalar o utilizar LiquidBoard ("la Aplicación"), usted acepta estar sujeto a estos Términos de uso. Si no está de acuerdo con estos términos, no utilice la aplicación.</PolicyParagraph>

                <PolicyHeading>Licencia</PolicyHeading>
                <PolicyParagraph>Le otorgamos una licencia limitada, no exclusiva, intransferible y revocable para utilizar LiquidBoard para sus fines personales y no comerciales, sujeto a estos Términos.</PolicyParagraph>
                <PolicyParagraph>No puedes:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Copiar, modificar o distribuir la Aplicación o su contenido</PolicyListItem>
                  <PolicyListItem>Realizar ingeniería inversa o intentar extraer el código fuente.</PolicyListItem>
                  <PolicyListItem>Usar la aplicación para cualquier propósito ilegal o no autorizado</PolicyListItem>
                  <PolicyListItem>Vender, sublicenciar o transferir el acceso a la Aplicación a cualquier tercero</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Tu contenido</PolicyHeading>
                <PolicyParagraph>Usted conserva la propiedad total de todos los fragmentos de texto, imágenes y pegatinas que cree o importe a LiquidBoard. No reclamamos ningún derecho sobre su contenido.</PolicyParagraph>
                <PolicyParagraph>Usted es el único responsable de garantizar que el contenido que cree o pegue utilizando la Aplicación no infrinja ningún derecho de terceros, incluidos derechos de autor, marcas comerciales o derechos de privacidad.</PolicyParagraph>

                <PolicyHeading>Uso Aceptable</PolicyHeading>
                <PolicyParagraph>Acepta no utilizar LiquidBoard para crear, almacenar o distribuir contenido que:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Es ilegal, dañino, amenazante o acosador</PolicyListItem>
                  <PolicyListItem>Infringe los derechos de propiedad intelectual de otros</PolicyListItem>
                  <PolicyListItem>Contiene malware, virus o código malicioso.</PolicyListItem>
                  <PolicyListItem>Viola cualquier ley local, nacional o internacional aplicable.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Compras dentro de la aplicación</PolicyHeading>
                <PolicyParagraph>LiquidBoard ofrece compras opcionales dentro de la aplicación para desbloquear funciones o contenido adicionales. Apple procesa todas las compras a través de la App Store y están sujetas a los Términos de venta de Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Las compras no son reembolsables excepto según lo exija la ley aplicable o la política de reembolso de Apple.</PolicyListItem>
                  <PolicyListItem>Los precios pueden variar según la región y se muestran en su moneda local al momento de la compra.</PolicyListItem>
                  <PolicyListItem>Las funciones compradas están vinculadas a su ID de Apple y se pueden restaurar en cualquier dispositivo en el que haya iniciado sesión con el mismo ID de Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Para solicitar un reembolso, comuníquese directamente con Apple en:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Extensión de teclado y acceso completo</PolicyHeading>
                <PolicyParagraph>Es necesario habilitar el acceso completo para la extensión del teclado para pegar imágenes y pegatinas en otras aplicaciones y habilitar iCloud Sync. Acceso completo no nos otorga acceso a nada de lo que usted escribe.</PolicyParagraph>
                <PolicyParagraph>Usted reconoce que al habilitar el acceso completo, iOS mostrará un aviso del sistema informándole que el desarrollador del teclado podría acceder a su escritura. Queremos ser explícitos: LiquidBoard no recopila, registra ni transmite ningún dato de pulsación de teclas.</PolicyParagraph>

                <PolicyHeading>Sincronización de iCloud</PolicyHeading>
                <PolicyParagraph>iCloud Sync es una función opcional que utiliza su cuenta personal de Apple iCloud para sincronizar sus datos entre dispositivos. El uso de iCloud está sujeto a los Términos y condiciones de Apple. No somos responsables de ninguna pérdida de datos resultante de interrupciones del servicio iCloud.</PolicyParagraph>

                <PolicyHeading>Renuncia de garantías</PolicyHeading>
                <PolicyParagraph>LiquidBoard se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas, incluidas, entre otras, garantías de comerciabilidad, idoneidad para un propósito particular o no infracción.</PolicyParagraph>
                <PolicyParagraph>No garantizamos que la Aplicación será ininterrumpida, libre de errores o libre de virus u otros componentes dañinos.</PolicyParagraph>

                <PolicyHeading>Limitación de responsabilidad</PolicyHeading>
                <PolicyParagraph>En la máxima medida permitida por la ley aplicable, no seremos responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo, incluidos, entre otros, la pérdida de datos, la pérdida de ganancias o la pérdida de buena voluntad, que surjan de su uso o imposibilidad de usar la Aplicación.</PolicyParagraph>

                <PolicyHeading>Terminación</PolicyHeading>
                <PolicyParagraph>Nos reservamos el derecho de cancelar o restringir su acceso a la Aplicación en cualquier momento, sin previo aviso, por conducta que creemos que viola estos Términos o es perjudicial para otros usuarios, para nosotros o para terceros.</PolicyParagraph>
                <PolicyParagraph>Puede dejar de usar la Aplicación en cualquier momento eliminándola de su dispositivo.</PolicyParagraph>

                <PolicyHeading>Cambios a estos términos</PolicyHeading>
                <PolicyParagraph>Podemos actualizar estos Términos de uso de vez en cuando. El uso continuo de la Aplicación después de la publicación de los cambios constituye su aceptación de los Términos revisados. Le notificaremos sobre cambios significativos a través de la Aplicación o nuestro sitio web.</PolicyParagraph>

                <PolicyHeading>Ley aplicable</PolicyHeading>
                <PolicyParagraph>Estos Términos se rigen e interpretan de acuerdo con las leyes de la jurisdicción en la que tiene su sede el desarrollador, sin tener en cuenta los principios de conflicto de leyes.</PolicyParagraph>

                <PolicyHeading>Contacto</PolicyHeading>
                <PolicyParagraph>Si tiene alguna pregunta sobre estos Términos, contáctenos en:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Política de pago y reembolso</PolicyHeading>
                <PolicyParagraph>Última actualización: 05 de junio de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ofrece compras opcionales dentro de la aplicación para desbloquear funciones premium. Todos los pagos son manejados íntegramente por Apple a través de la App Store; no procesamos, almacenamos ni tenemos acceso a su información de pago.</PolicyParagraph>

                <PolicyHeading>Lo que puedes comprar</PolicyHeading>
                <PolicyParagraph>LiquidBoard ofrece las siguientes compras opcionales:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Funciones Premium: desbloqueo único o por suscripción para funcionalidad avanzada de la aplicación</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Las compras y los precios disponibles se muestran en la aplicación en el momento de la compra. Los precios pueden variar según la región y se muestran en su moneda local.</PolicyParagraph>

                <PolicyHeading>Procesamiento de pagos</PolicyHeading>
                <PolicyParagraph>Apple procesa todas las transacciones de forma segura. Nunca vemos ni almacenamos su tarjeta de crédito, dirección de facturación ni ningún detalle de pago.</PolicyParagraph>
                <PolicyParagraph>Al completar una compra, acepta los Términos de venta de la App Store de Apple. Se le cobrará a su método de pago registrado en Apple en el momento de la confirmación de la compra.</PolicyParagraph>

                <PolicyHeading>Restaurar compras</PolicyHeading>
                <PolicyParagraph>Si reinstalas LiquidBoard o cambias a un nuevo dispositivo, puedes restaurar todas las compras anteriores sin costo adicional usando la opción Restaurar compras dentro de la aplicación. Las compras están vinculadas a su ID de Apple y están disponibles en todos los dispositivos en los que haya iniciado sesión con la misma cuenta.</PolicyParagraph>

                <PolicyHeading>Suscripciones</PolicyHeading>
                <PolicyParagraph>Si LiquidBoard ofrece compras basadas en suscripción:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Las suscripciones se renuevan automáticamente a menos que se cancelen al menos 24 horas antes del final del período de facturación actual.</PolicyListItem>
                  <PolicyListItem>Se le cobrará a su ID de Apple la renovación dentro de las 24 horas anteriores al final del período actual.</PolicyListItem>
                  <PolicyListItem>Puede administrar o cancelar suscripciones en cualquier momento en Configuración → [Su nombre] → Suscripciones</PolicyListItem>
                  <PolicyListItem>La cancelación de una suscripción entra en vigor al final del período de pago actual; usted conserva el acceso hasta entonces</PolicyListItem>
                  <PolicyListItem>Los períodos de prueba gratuitos, si se ofrecen, se convertirán en una suscripción paga a menos que se cancelen antes de que finalice la prueba.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Política de reembolso</PolicyHeading>
                <PolicyParagraph>No procesamos reembolsos directamente. Todas las solicitudes de reembolso deben enviarse a Apple, ya que es el comerciante registrado para todas las transacciones de la App Store.</PolicyParagraph>
                <PolicyParagraph>Apple maneja los reembolsos a su discreción de acuerdo con su política de reembolso. Los casos elegibles comunes incluyen compras accidentales, cargos no autorizados o compras que no funcionaron como se describe.</PolicyParagraph>
                <PolicyParagraph>Para solicitar un reembolso de Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ir a<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</PolicyLink>e inicia sesión con tu ID de Apple</PolicyListItem>
                  <PolicyListItem>Busque la compra de LiquidBoard y toque Informar un problema</PolicyListItem>
                  <PolicyListItem>Seleccione el motivo y envíe su solicitud</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple suele responder en unos pocos días hábiles. Las decisiones de reembolso las toma únicamente Apple.</PolicyParagraph>

                <PolicyHeading>Cambios de precio</PolicyHeading>
                <PolicyParagraph>Nos reservamos el derecho de cambiar los precios de las compras dentro de la aplicación en cualquier momento. Los cambios de precios de las suscripciones se comunicarán con antelación a través de la aplicación o App Store y entrarán en vigor al inicio de su próximo ciclo de facturación. Apple le notificará antes de que entre en vigor cualquier cambio en el precio de la suscripción.</PolicyParagraph>

                <PolicyHeading>Compras fallidas o incompletas</PolicyHeading>
                <PolicyParagraph>Si una compra falla o se le cobra pero no recibe el contenido, primero intente restaurar las compras dentro de la aplicación. Si el problema persiste, contáctenos al<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>y lo investigaremos con prontitud.</PolicyParagraph>

                <PolicyHeading>Contacto</PolicyHeading>
                <PolicyParagraph>Para preguntas de facturación o problemas de compra, contáctenos en:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Para reembolsos, utilice el canal oficial de Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportarproblema.apple.com</PolicyLink></PolicyParagraph>
  </>
);
