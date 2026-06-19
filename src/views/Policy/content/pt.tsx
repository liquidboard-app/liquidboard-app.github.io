
export const Security = () => (
  <>
    <h2>Política de Segurança de Dados</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>LiquidBoard foi projetado com uma abordagem que prioriza a privacidade. Seus dados nunca deixam seu dispositivo a menos que você escolha explicitamente habilitar a sincronização com iCloud. Não temos servidores, não há contas e não temos acesso ao seu conteúdo.</p>

                <h2>Armazenamento de Dados</h2>
                <p>Todo o conteúdo que você criar no LiquidBoard — trechos de texto, imagens e adesivos — é armazenado em um dos dois lugares:</p>
                <ul>
                  <li><strong>Armazenamento no dispositivo</strong>— Gerenciado pelo iOS e acessível apenas ao LiquidBoard. Outros aplicativos não podem ler seus dados.</li>
                  <li><strong>iCloud (opcional)</strong>— Sincronizado através do seu ID Apple pessoal usando a infraestrutura criptografada CloudKit da Apple.</li>
                </ul>
                <p>Nenhum dado é armazenado em nossos servidores. Não operamos nenhuma infraestrutura de backend.</p>

                <h2>Criptografia</h2>
                <p>Seus dados são protegidos pelo iOS e pelas camadas de segurança da Apple:</p>
                <ul>
                  <li><strong>Em repouso</strong>— Dados armazenados no seu dispositivo são criptografados pelo iOS usando o código de acesso do seu dispositivo e o Secure Enclave.</li>
                  <li><strong>Em trânsito</strong>— Se a Sincronização do iCloud estiver ativada, os dados são criptografados pelo CloudKit da Apple antes de serem transmitidos.</li>
                  <li><strong>Backup do iCloud</strong>— Se o seu dispositivo estiver com backup no iCloud, os dados dos aplicativos estão incluídos no sistema de backup criptografado da Apple.</li>
                </ul>

                <h2>Segurança de Fotos e Imagens</h2>
                <p>O LiquidBoard acessa sua biblioteca de fotos apenas quando você escolhe explicitamente selecionar ou importar uma foto. O aplicativo:</p>
                <ul>
                  <li>Não acessa sua biblioteca de fotos em segundo plano</li>
                  <li>Não envia fotos para nenhum servidor</li>
                  <li>Armazena imagens selecionadas localmente no contêiner isolado do aplicativo</li>
                  <li>Processa a criação de adesivos inteiramente no dispositivo</li>
                </ul>
                <p>Você pode revogar o acesso às fotos a qualquer momento em Configurações → Privacidade e Segurança → Fotos.</p>

                <h2>Segurança da Extensão do Teclado</h2>
                <p>A extensão do teclado não coleta, registra ou transmite nenhum dado de teclas pressionadas ou texto que você digite em outros aplicativos.</p>
                <p>O Acesso Total é necessário para que a extensão do teclado cole imagens e adesivos, e para acessar a Sincronização do iCloud. Mesmo com o Acesso Total habilitado, a extensão do teclado opera inteiramente dentro do ambiente isolado do iOS. Ela não tem a capacidade de enviar dados para servidores externos.</p>

                <h2>Sem Acesso de Terceiros aos Dados</h2>
                <p>O LiquidBoard não integra nenhum dos seguintes:</p>
                <ul>
                  <li>SDKs de análise ou relatórios de falhas, como Firebase ou Mixpanel</li>
                  <li>Redes de publicidade ou SDKs de rastreamento</li>
                  <li>Serviços de armazenamento ou processamento em nuvem de terceiros</li>
                </ul>
                <p>Seu conteúdo nunca é compartilhado com terceiros nem acessível a eles.</p>

                <h2>Sandbox de Aplicativo</h2>
                <p>LiquidBoard funciona no sandbox estrito de aplicativos do iOS. Isso significa que outros aplicativos no seu dispositivo não podem acessar os dados do LiquidBoard e o LiquidBoard não pode acessar dados pertencentes a outros aplicativos, exceto o conteúdo que você explicitamente cola através da extensão do teclado.</p>

                <h2>Seu Controle</h2>
                <p>Você tem controle total sobre seus dados o tempo todo:</p>
                <ul>
                  <li>Ativar ou desativar a sincronização do iCloud dentro do aplicativo</li>
                  <li>Revogar acesso à biblioteca de fotos nas Configurações do iOS</li>
                  <li>Desative o Acesso Total para o teclado em Ajustes → Geral → Teclado → Teclados</li>
                  <li>Exclua todos os dados apagando o aplicativo</li>
                </ul>

                <h2>Contato</h2>
                <p>Se você tiver dúvidas sobre a segurança dos dados, por favor, entre em contato conosco em:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Política de Privacidade</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>LiquidBoard ("nós", "nosso" ou "o aplicativo") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como tratamos as informações quando você usa o LiquidBoard e sua extensão de teclado.</p>

                <h2>Dados Que Coletamos</h2>
                <p>O LiquidBoard não coleta, armazena ou transmite quaisquer dados pessoais para servidores externos. Todos os dados que você criar dentro do aplicativo — incluindo trechos de texto, imagens, adesivos, categorias e configurações — são armazenados exclusivamente no seu dispositivo ou na sua conta pessoal do iCloud.</p>

                <h2>Fotos e Imagens</h2>
                <p>O LiquidBoard pode solicitar acesso à sua biblioteca de fotos para os seguintes fins:</p>
                <ul>
                  <li>Inserindo imagens em seus trechos</li>
                  <li>Criando adesivos personalizados a partir de suas fotos</li>
                </ul>
                <p>As fotos que você seleciona são armazenadas localmente em seu dispositivo e/ou sincronizadas com sua conta pessoal do iCloud. Nós não fazemos upload, transmitimos ou acessamos suas fotos de nenhuma forma. O acesso à biblioteca de fotos é usado apenas no momento em que você escolhe explicitamente uma imagem — o aplicativo não acessa sua biblioteca em segundo plano.</p>

                <h2>Adesivos</h2>
                <p>O LiquidBoard permite que você:</p>
                <ul>
                  <li>Crie adesivos personalizados a partir de suas próprias fotos</li>
                  <li>Insira adesivos através da extensão do teclado</li>
                </ul>
                <p>Adesivos personalizados que você cria a partir de suas fotos são armazenados apenas no seu dispositivo e/ou iCloud. Nenhum conteúdo de adesivo ou dado de imagem é transmitido para nós.</p>

                <h2>Extensão de Teclado e Acesso Total</h2>
                <p>Esta extensão de teclado não coleta, registra ou transmite nenhum dado de tecla pressionada ou texto que você digite.</p>
                <p>A extensão de teclado do LiquidBoard requer que o Acesso Total seja ativado para:</p>
                <ul>
                  <li>Cole imagens e adesivos em outros aplicativos</li>
                  <li>Sincronize seus trechos e adesivos via iCloud em seus dispositivos</li>
                </ul>
                <p>O Acesso Total é usado exclusivamente para esses recursos. O teclado não registra, grava ou transmite nada do que você digita em qualquer outro aplicativo. Nenhum dado é enviado para qualquer servidor externo.</p>

                <h2>Sincronização do iCloud</h2>
                <p>Se você optar por ativar a Sincronização do iCloud, seus trechos de texto, imagens e adesivos serão sincronizados através da infraestrutura do iCloud da Apple usando seu ID Apple pessoal. Esses dados são regidos pela Política de Privacidade da Apple. Nós não temos acesso aos seus dados do iCloud.</p>

                <h2>Compartilhamento de Dados</h2>
                <p>Não vendemos, compartilhamos ou divulgamos seus dados a terceiros. Não utilizamos nenhum SDK de análise, publicidade ou ferramentas de rastreamento de terceiros.</p>

                <h2>Retenção e Exclusão de Dados</h2>
                <p>Seus dados permanecem no seu dispositivo e/ou conta do iCloud e estão totalmente sob seu controle. Você pode excluir seus dados a qualquer momento:</p>
                <ul>
                  <li>Excluindo trechos individuais, imagens ou adesivos dentro do aplicativo</li>
                  <li>Revogando o acesso à biblioteca de fotos em Ajustes → Privacidade → Fotos</li>
                  <li>Excluindo o aplicativo, o que remove todos os dados armazenados localmente</li>
                  <li>Desativando a Sincronização do iCloud e removendo os dados do iCloud do aplicativo em Ajustes → [Seu Nome] → iCloud → Gerenciar Armazenamento</li>
                </ul>

                <h2>Privacidade das Crianças</h2>
                <p>A LiquidBoard não coleta conscientemente nenhuma informação de crianças com menos de 13 anos. O aplicativo não coleta dados pessoais de nenhum usuário.</p>

                <h2>Alterações nesta Política</h2>
                <p>Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas no aplicativo e em nosso site com uma data atualizada.</p>

                <h2>Contato</h2>
                <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, por favor, entre em contato conosco em:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Termos de Uso</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>Ao baixar, instalar ou usar o LiquidBoard ("o Aplicativo"), você concorda em estar sujeito a estes Termos de Uso. Se você não concorda com estes termos, por favor, não use o Aplicativo.</p>

                <h2>Licença</h2>
                <p>Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o LiquidBoard para seus propósitos pessoais e não comerciais, sujeita a estes Termos.</p>
                <p>Você não pode:</p>
                <ul>
                  <li>Copiar, modificar ou distribuir o aplicativo ou seu conteúdo</li>
                  <li>Engenharia reversa ou tentativa de extrair o código-fonte</li>
                  <li>Use o aplicativo para qualquer propósito ilegal ou não autorizado</li>
                  <li>Vender, sublicenciar ou transferir o acesso ao aplicativo para qualquer terceiro</li>
                </ul>

                <h2>Seu Conteúdo</h2>
                <p>Você mantém a propriedade total de todos os trechos de texto, imagens e adesivos que você criar ou importar para o LiquidBoard. Nós não reivindicamos quaisquer direitos sobre seu conteúdo.</p>
                <p>Você é o único responsável por garantir que o conteúdo que você criar ou colar usando o Aplicativo não infrinja quaisquer direitos de terceiros, incluindo direitos autorais, marcas registradas ou direitos de privacidade.</p>

                <h2>Uso Aceitável</h2>
                <p>Você concorda em não usar o LiquidBoard para criar, armazenar ou distribuir conteúdo que:</p>
                <ul>
                  <li>É ilegal, prejudicial, ameaçador ou assediante</li>
                  <li>Viola os direitos de propriedade intelectual de terceiros</li>
                  <li>Contém malware, vírus ou código malicioso</li>
                  <li>Viola qualquer lei local, nacional ou internacional aplicável</li>
                </ul>

                <h2>Compras no Aplicativo</h2>
                <p>O LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos ou conteúdos adicionais. Todas as compras são processadas pela Apple através da App Store e estão sujeitas aos Termos de Venda da Apple.</p>
                <ul>
                  <li>As compras não são reembolsáveis, exceto quando exigido pela lei aplicável ou pela política de reembolso da Apple</li>
                  <li>Os preços podem variar conforme a região e são exibidos em sua moeda local no momento da compra</li>
                  <li>Os recursos comprados estão vinculados ao seu ID Apple e podem ser restaurados em qualquer dispositivo conectado com o mesmo ID Apple</li>
                </ul>
                <p>Para solicitar um reembolso, entre em contato diretamente com a Apple em:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Extensão do Teclado e Acesso Total</h2>
                <p>Habilitar Acesso Total para a extensão do teclado é necessário para colar imagens e adesivos em outros aplicativos e para ativar a Sincronização do iCloud. O Acesso Total não nos concede acesso a nada que você digite.</p>
                <p>Você reconhece que, ao ativar o Acesso Total, o iOS exibirá um aviso do sistema informando que o desenvolvedor do teclado pode potencialmente acessar sua digitação. Queremos ser explícitos: o LiquidBoard não coleta, registra ou transmite quaisquer dados de teclas digitadas.</p>

                <h2>Sincronização do iCloud</h2>
                <p>A sincronização do iCloud é um recurso opcional que usa sua conta pessoal da Apple iCloud para sincronizar seus dados entre dispositivos. O uso do iCloud está sujeito aos Termos e Condições da Apple. Não somos responsáveis por qualquer perda de dados resultante de interrupções no serviço do iCloud.</p>

                <h2>Isenção de Garantias</h2>
                <p>O LiquidBoard é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, sejam expressas ou implícitas, incluindo, mas não se limitando a, garantias de comerciabilidade, adequação a um propósito específico ou não violação.</p>
                <p>Não garantimos que o aplicativo será ininterrupto, sem erros ou livre de vírus ou outros componentes prejudiciais.</p>

                <h2>Limitação de Responsabilidade</h2>
                <p>Na máxima extensão permitida pela lei aplicável, não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de dados, perda de lucros ou perda de boa vontade, decorrentes do seu uso ou da sua incapacidade de usar o Aplicativo.</p>

                <h2>Rescisão</h2>
                <p>Reservamo-nos o direito de encerrar ou restringir seu acesso ao aplicativo a qualquer momento, sem aviso prévio, por conduta que acreditamos violar estes Termos ou ser prejudicial a outros usuários, a nós ou a terceiros.</p>
                <p>Você pode parar de usar o aplicativo a qualquer momento, excluindo-o do seu dispositivo.</p>

                <h2>Alterações nestes Termos</h2>
                <p>Podemos atualizar estes Termos de Uso de tempos em tempos. O uso contínuo do aplicativo após a postagem de alterações constitui sua aceitação dos Termos revisados. Notificaremos você sobre alterações significativas através do aplicativo ou do nosso site.</p>

                <h2>Lei Aplicável</h2>
                <p>Estes Termos são regidos e interpretados de acordo com as leis da jurisdição em que o desenvolvedor está baseado, sem considerar os princípios de conflito de leis.</p>

                <h2>Contato</h2>
                <p>Se você tiver alguma dúvida sobre estes Termos, por favor, entre em contato conosco em:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Política de Pagamento e Reembolso</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>O LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos premium. Todos os pagamentos são processados inteiramente pela Apple através da App Store — nós não processamos, armazenamos ou temos acesso às suas informações de pagamento.</p>

                <h2>O Que Você Pode Comprar</h2>
                <p>O LiquidBoard oferece as seguintes compras opcionais:</p>
                <ul>
                  <li>Recursos Premium — Desbloqueio único ou por assinatura para funcionalidades avançadas do aplicativo</li>
                </ul>
                <p>As compras disponíveis e os preços são exibidos no aplicativo no momento da compra. Os preços podem variar conforme a região e são exibidos na sua moeda local.</p>

                <h2>Processamento de Pagamentos</h2>
                <p>Todas as transações são processadas com segurança pela Apple. Nós nunca vemos ou armazenamos seu cartão de crédito, endereço de cobrança ou quaisquer detalhes de pagamento.</p>
                <p>Ao concluir uma compra, você concorda com os Termos de Venda da App Store da Apple. Seu método de pagamento registrado na Apple será cobrado no momento da confirmação da compra.</p>

                <h2>Restaurando Compras</h2>
                <p>Se você reinstalar o LiquidBoard ou mudar para um novo dispositivo, você pode restaurar todas as compras anteriores sem custo adicional usando a opção Restaurar Compras dentro do aplicativo. As compras estão vinculadas ao seu ID Apple e estão disponíveis em todos os dispositivos conectados com a mesma conta.</p>

                <h2>Assinaturas</h2>
                <p>Se o LiquidBoard oferecer compras baseadas em assinatura:</p>
                <ul>
                  <li>As assinaturas são renovadas automaticamente, a menos que canceladas pelo menos 24 horas antes do final do período de cobrança atual</li>
                  <li>Seu ID Apple será cobrado pela renovação dentro de 24 horas antes do término do período atual</li>
                  <li>Você pode gerenciar ou cancelar assinaturas a qualquer momento em Ajustes → [Seu Nome] → Assinaturas</li>
                  <li>O cancelamento de uma assinatura entra em vigor no final do período pago atual — você mantém o acesso até lá</li>
                  <li>Períodos de teste gratuito, se oferecidos, serão convertidos em uma assinatura paga, a menos que cancelados antes do término do teste</li>
                </ul>

                <h2>Política de Reembolso</h2>
                <p>Nós não processamos reembolsos diretamente. Todas as solicitações de reembolso devem ser enviadas à Apple, pois eles são o comerciante registrado para todas as transações da App Store.</p>
                <p>A Apple lida com reembolsos a seu critério, de acordo com sua política de reembolso. Casos comuns elegíveis incluem compras acidentais, cobranças não autorizadas ou compras que não funcionaram como descrito.</p>
                <p>Para solicitar um reembolso da Apple:</p>
                <ul>
                  <li>Vai em frente.<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>e faça login com seu ID Apple</li>
                  <li>Encontre a compra do LiquidBoard e toque em Reportar um Problema</li>
                  <li>Selecione o motivo e envie sua solicitação</li>
                </ul>
                <p>A Apple normalmente responde dentro de alguns dias úteis. As decisões de reembolso são tomadas exclusivamente pela Apple.</p>

                <h2>Alterações de Preço</h2>
                <p>Reservamo-nos o direito de alterar os preços de compras dentro do aplicativo a qualquer momento. Alterações de preços para assinaturas serão comunicadas antecipadamente através do aplicativo ou da App Store, e entrarão em vigor no início do seu próximo ciclo de faturamento. Você será notificado pela Apple antes que qualquer alteração no preço da assinatura entre em vigor.</p>

                <h2>Compras Falhadas ou Incompletas</h2>
                <p>Se uma compra falhar ou você for cobrado, mas não receber o conteúdo, por favor, primeiro tente restaurar as compras dentro do aplicativo. Se o problema persistir, entre em contato conosco em<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a>e nós investigaremos prontamente.</p>

                <h2>Contato</h2>
                <p>Para dúvidas sobre faturamento ou problemas de compra, entre em contato conosco em:<a href="mailto:votienthuan97@gmail.com">votienthuan97@gmail.com</a></p>
                <p>Para reembolsos, por favor use o canal oficial da Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
