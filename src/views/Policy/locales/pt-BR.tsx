
export const Security = () => (
  <>
    <h2>Política de Segurança de Dados</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>O LiquidBoard foi projetado com uma abordagem que prioriza a privacidade. Seus dados nunca saem do seu dispositivo, a menos que você opte explicitamente por ativar o iCloud Sync. Não temos servidores, nem contas, nem acesso ao seu conteúdo.</p>

                <h2>Armazenamento de dados</h2>
                <p>Todo o conteúdo que você cria no LiquidBoard – trechos de texto, imagens e adesivos – é armazenado em um dos dois locais:</p>
                <ul>
                  <li><strong>Armazenamento no dispositivo</strong>— Gerenciado por iOS e acessível apenas ao LiquidBoard. Outros aplicativos não conseguem ler seus dados.</li>
                  <li><strong>iCloud (opcional)</strong>— Sincronizado através do seu ID Apple pessoal usando a infraestrutura CloudKit criptografada da Apple.</li>
                </ul>
                <p>Nenhum dado é armazenado em nossos servidores. Não operamos nenhuma infraestrutura de back-end.</p>

                <h2>Criptografia</h2>
                <p>Seus dados são protegidos pelas camadas de segurança do iOS e da Apple:</p>
                <ul>
                  <li><strong>Em repouso</strong>— Os dados armazenados no seu dispositivo são criptografados pelo iOS usando a senha do seu dispositivo e o Secure Enclave.</li>
                  <li><strong>Em trânsito</strong>— Se o iCloud Sync estiver ativado, os dados serão criptografados pelo CloudKit da Apple antes de serem transmitidos.</li>
                  <li><strong>Backup do iCloud</strong>— Se o backup do seu dispositivo for feito no iCloud, os dados do aplicativo serão incluídos no sistema de backup criptografado da Apple.</li>
                </ul>

                <h2>Segurança de fotos e imagens</h2>
                <p>O LiquidBoard acessa sua biblioteca de fotos somente quando você escolhe explicitamente selecionar ou importar uma foto. O aplicativo:</p>
                <ul>
                  <li>Não acessa sua biblioteca de fotos em segundo plano</li>
                  <li>Não carrega fotos para nenhum servidor</li>
                  <li>Armazena imagens selecionadas localmente no contêiner em área restrita do aplicativo</li>
                  <li>Processa a criação de adesivos inteiramente no dispositivo</li>
                </ul>
                <p>Você pode revogar o acesso às fotos a qualquer momento em Configurações → Privacidade e segurança → Fotos.</p>

                <h2>Segurança de extensão de teclado</h2>
                <p>A extensão do teclado não coleta, registra ou transmite dados de pressionamento de tecla ou texto digitado em outros aplicativos.</p>
                <p>O acesso total é necessário para que a extensão do teclado cole imagens e adesivos e para acessar o iCloud Sync. Mesmo com o Acesso total habilitado, a extensão do teclado opera inteiramente no ambiente sandbox do iOS. Não tem capacidade de enviar dados para servidores externos.</p>

                <h2>Sem acesso a dados de terceiros</h2>
                <p>LiquidBoard não integra nenhum dos seguintes:</p>
                <ul>
                  <li>SDKs de análise ou relatórios de falhas, como Firebase ou Mixpanel</li>
                  <li>Redes de publicidade ou SDKs de rastreamento</li>
                  <li>Serviços de armazenamento ou processamento em nuvem de terceiros</li>
                </ul>
                <p>Seu conteúdo nunca é compartilhado ou acessível a terceiros.</p>

                <h2>Caixa de areia de aplicativos</h2>
                <p>O LiquidBoard é executado na sandbox estrita de aplicativos do iOS. Isso significa que outros aplicativos no seu dispositivo não podem acessar os dados do LiquidBoard e o LiquidBoard não pode acessar dados pertencentes a outros aplicativos, exceto o conteúdo que você cola explicitamente por meio da extensão do teclado.</p>

                <h2>Seu controle</h2>
                <p>Você tem controle total sobre seus dados em todos os momentos:</p>
                <ul>
                  <li>Habilite ou desabilite o iCloud Sync no aplicativo</li>
                  <li>Revogar o acesso à biblioteca de fotos nas configurações do iOS</li>
                  <li>Desative o acesso total ao teclado em Configurações → Geral → Teclado → Teclados</li>
                  <li>Exclua todos os dados excluindo o aplicativo</li>
                </ul>

                <h2>Contato</h2>
                <p>Se você tiver dúvidas sobre segurança de dados, entre em contato conosco:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>política de Privacidade</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>LiquidBoard ("nós", "nosso" ou "o aplicativo") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como lidamos com as informações quando você usa o LiquidBoard e sua extensão de teclado.</p>

                <h2>Dados que coletamos</h2>
                <p>O LiquidBoard não coleta, armazena ou transmite quaisquer dados pessoais para servidores externos. Todos os dados que você cria no aplicativo – incluindo trechos de texto, imagens, adesivos, categorias e configurações – são armazenados exclusivamente no seu dispositivo ou na sua conta pessoal do iCloud.</p>

                <h2>Fotos e imagens</h2>
                <p>A LiquidBoard poderá solicitar acesso à sua biblioteca de fotos para os seguintes fins:</p>
                <ul>
                  <li>Inserindo imagens em seus snippets</li>
                  <li>Criando adesivos personalizados a partir de suas fotos</li>
                </ul>
                <p>As fotos selecionadas são armazenadas localmente no seu dispositivo e/ou sincronizadas com sua conta pessoal do iCloud. Não carregamos, transmitimos ou acessamos suas fotos de forma alguma. O acesso à biblioteca de fotos só é usado no momento em que você escolhe explicitamente uma imagem — o aplicativo não acessa sua biblioteca em segundo plano.</p>

                <h2>Adesivos</h2>
                <p>LiquidBoard permite que você:</p>
                <ul>
                  <li>Crie adesivos personalizados com suas próprias fotos</li>
                  <li>Insira adesivos através da extensão do teclado</li>
                </ul>
                <p>Os adesivos personalizados que você cria a partir de suas fotos são armazenados apenas no seu dispositivo e/ou iCloud. Nenhum conteúdo de adesivo ou dados de imagem são transmitidos para nós.</p>

                <h2>Extensão de teclado e acesso total</h2>
                <p>Esta extensão de teclado não coleta, registra ou transmite quaisquer dados de pressionamento de tecla ou texto que você digita.</p>
                <p>A extensão de teclado do LiquidBoard requer que o Acesso Total esteja habilitado para:</p>
                <ul>
                  <li>Cole imagens e adesivos em outros aplicativos</li>
                  <li>Sincronize seus snippets e adesivos via iCloud em todos os seus dispositivos</li>
                </ul>
                <p>O Acesso Total é usado exclusivamente para esses recursos. O teclado não registra, grava ou transmite nada que você digita em qualquer outro aplicativo. Nenhum dado é enviado para nenhum servidor externo.</p>

                <h2>Sincronização do iCloud</h2>
                <p>Se você optar por ativar o iCloud Sync, seus trechos de texto, imagens e adesivos serão sincronizados por meio da infraestrutura iCloud da Apple usando seu ID Apple pessoal. Estes dados são regidos pela Política de Privacidade da Apple. Não temos acesso aos seus dados do iCloud.</p>

                <h2>Compartilhamento de dados</h2>
                <p>Não vendemos, compartilhamos ou divulgamos seus dados a terceiros. Não usamos análises de terceiros, SDKs de publicidade ou ferramentas de rastreamento.</p>

                <h2>Retenção e exclusão de dados</h2>
                <p>Seus dados permanecem no seu dispositivo e/ou conta iCloud e estão totalmente sob seu controle. Você pode excluir seus dados a qualquer momento:</p>
                <ul>
                  <li>Excluir trechos, imagens ou adesivos individuais no aplicativo</li>
                  <li>Revogar o acesso à biblioteca de fotos em Configurações → Privacidade → Fotos</li>
                  <li>Excluir o aplicativo, que remove todos os dados armazenados localmente</li>
                  <li>Desativando o iCloud Sync e removendo os dados do iCloud do aplicativo em Configurações → [Seu nome] → iCloud → Gerenciar armazenamento</li>
                </ul>

                <h2>Privacidade infantil</h2>
                <p>O LiquidBoard não coleta intencionalmente nenhuma informação de crianças menores de 13 anos. O aplicativo não coleta dados pessoais de nenhum usuário.</p>

                <h2>Mudanças nesta política</h2>
                <p>Poderemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas no aplicativo e em nosso site com data atualizada.</p>

                <h2>Contato</h2>
                <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Termos de Uso</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>Ao baixar, instalar ou usar o LiquidBoard ("o Aplicativo"), você concorda em obedecer a estes Termos de Uso. Se você não concorda com estes termos, não use o aplicativo.</p>

                <h2>Licença</h2>
                <p>Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o LiquidBoard para fins pessoais e não comerciais, sujeita a estes Termos.</p>
                <p>Você não pode:</p>
                <ul>
                  <li>Copiar, modificar ou distribuir o Aplicativo ou seu conteúdo</li>
                  <li>Faça engenharia reversa ou tente extrair o código-fonte</li>
                  <li>Use o aplicativo para qualquer finalidade ilegal ou não autorizada</li>
                  <li>Vender, sublicenciar ou transferir o acesso ao Aplicativo para terceiros</li>
                </ul>

                <h2>Seu conteúdo</h2>
                <p>Você mantém total propriedade de todos os trechos de texto, imagens e adesivos criados ou importados para o LiquidBoard. Não reivindicamos quaisquer direitos sobre o seu conteúdo.</p>
                <p>Você é o único responsável por garantir que o conteúdo que você cria ou cola usando o Aplicativo não infringe quaisquer direitos de terceiros, incluindo direitos autorais, marca registrada ou direitos de privacidade.</p>

                <h2>Uso aceitável</h2>
                <p>Você concorda em não usar o LiquidBoard para criar, armazenar ou distribuir conteúdo que:</p>
                <ul>
                  <li>É ilegal, prejudicial, ameaçador ou assediante</li>
                  <li>Viola os direitos de propriedade intelectual de terceiros</li>
                  <li>Contém malware, vírus ou código malicioso</li>
                  <li>Viola qualquer lei local, nacional ou internacional aplicável</li>
                </ul>

                <h2>Compras no aplicativo</h2>
                <p>LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos ou conteúdos adicionais. Todas as compras são processadas pela Apple através da App Store e estão sujeitas aos Termos de Venda da Apple.</p>
                <ul>
                  <li>As compras não são reembolsáveis, exceto conforme exigido pela lei aplicável ou pela política de reembolso da Apple</li>
                  <li>Os preços podem variar de acordo com a região e são exibidos em sua moeda local no momento da compra</li>
                  <li>Os recursos adquiridos estão vinculados ao seu ID Apple e podem ser restaurados em qualquer dispositivo conectado com o mesmo ID Apple</li>
                </ul>
                <p>Para solicitar um reembolso, entre em contato diretamente com a Apple em:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Extensão de teclado e acesso total</h2>
                <p>É necessário ativar o acesso total para a extensão do teclado para colar imagens e adesivos em outros aplicativos e para ativar o iCloud Sync. O Acesso Total não nos concede acesso a nada que você digita.</p>
                <p>Você reconhece que, ao ativar o Acesso Total o iOS exibirá um aviso do sistema informando que o desenvolvedor do teclado poderá acessar sua digitação. Queremos ser explícitos: o LiquidBoard não coleta, registra ou transmite quaisquer dados de pressionamento de tecla.</p>

                <h2>Sincronização do iCloud</h2>
                <p>iCloud Sync é um recurso opcional que usa sua conta pessoal do Apple iCloud para sincronizar seus dados entre dispositivos. O uso do iCloud está sujeito aos Termos e Condições da Apple. Não nos responsabilizamos por qualquer perda de dados resultante de interrupções do serviço iCloud.</p>

                <h2>Isenção de responsabilidade de garantias</h2>
                <p>O LiquidBoard é fornecido "como está" e "conforme disponível" sem garantias de qualquer tipo, expressas ou implícitas, incluindo, entre outras, garantias de comercialização, adequação a uma finalidade específica ou não violação.</p>
                <p>Não garantimos que o Aplicativo será ininterrupto, livre de erros ou livre de vírus ou outros componentes prejudiciais.</p>

                <h2>Limitação de responsabilidade</h2>
                <p>Na extensão máxima permitida pela lei aplicável, não seremos responsáveis ​​por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, entre outros, perda de dados, perda de lucros ou perda de boa vontade, decorrentes do seu uso ou incapacidade de usar o Aplicativo.</p>

                <h2>Rescisão</h2>
                <p>Reservamo-nos o direito de encerrar ou restringir seu acesso ao Aplicativo a qualquer momento, sem aviso prévio, por conduta que acreditamos violar estes Termos ou ser prejudicial a outros usuários, a nós ou a terceiros.</p>
                <p>Você pode parar de usar o Aplicativo a qualquer momento, excluindo-o do seu dispositivo.</p>

                <h2>Alterações nestes Termos</h2>
                <p>Poderemos atualizar estes Termos de Uso de tempos em tempos. O uso continuado do Aplicativo após a publicação das alterações constitui sua aceitação dos Termos revisados. Iremos notificá-lo sobre alterações significativas através do Aplicativo ou do nosso site.</p>

                <h2>Lei Aplicável</h2>
                <p>Estes Termos são regidos e interpretados de acordo com as leis da jurisdição na qual o desenvolvedor está baseado, sem levar em conta conflitos de princípios legais.</p>

                <h2>Contato</h2>
                <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Política de Pagamento e Reembolso</h2>
                <p>Última atualização: 05 de junho de 2026 · LiquidBoard</p>
                <p>LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos premium. Todos os pagamentos são feitos inteiramente pela Apple através da App Store — nós não processamos, armazenamos ou temos acesso às suas informações de pagamento.</p>

                <h2>O que você pode comprar</h2>
                <p>LiquidBoard oferece as seguintes compras opcionais:</p>
                <ul>
                  <li>Recursos Premium — Desbloqueio único ou por assinatura para funcionalidade avançada do aplicativo</li>
                </ul>
                <p>As compras e preços disponíveis são exibidos no aplicativo no momento da compra. Os preços podem variar de acordo com a região e são mostrados na sua moeda local.</p>

                <h2>Processamento de Pagamento</h2>
                <p>Todas as transações são processadas de forma segura pela Apple. Nunca vemos ou armazenamos seu cartão de crédito, endereço de cobrança ou quaisquer detalhes de pagamento.</p>
                <p>Ao concluir uma compra, você concorda com os Termos de Venda da App Store da Apple. Sua forma de pagamento registrada na Apple será cobrada no momento da confirmação da compra.</p>

                <h2>Restaurando compras</h2>
                <p>Se você reinstalar o LiquidBoard ou mudar para um novo dispositivo, poderá restaurar todas as compras anteriores sem nenhum custo adicional usando a opção Restaurar compras no aplicativo. As compras estão vinculadas ao seu ID Apple e estão disponíveis em todos os dispositivos conectados com a mesma conta.</p>

                <h2>Assinaturas</h2>
                <p>Se o LiquidBoard oferecer compras baseadas em assinatura:</p>
                <ul>
                  <li>As assinaturas são renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do final do período de cobrança atual</li>
                  <li>A renovação do seu ID Apple será cobrada 24 horas antes do final do período atual</li>
                  <li>Você pode gerenciar ou cancelar assinaturas a qualquer momento em Configurações → [Seu nome] → Assinaturas</li>
                  <li>O cancelamento de uma assinatura entra em vigor no final do período pago atual – você mantém o acesso até então</li>
                  <li>Os períodos de avaliação gratuita, se oferecidos, serão convertidos em uma assinatura paga, a menos que sejam cancelados antes do término da avaliação.</li>
                </ul>

                <h2>Política de Reembolso</h2>
                <p>Não processamos reembolsos diretamente. Todas as solicitações de reembolso devem ser enviadas à Apple, pois ela é o comerciante responsável por todas as transações da App Store.</p>
                <p>A Apple lida com os reembolsos a seu critério, de acordo com sua política de reembolso. Os casos elegíveis comuns incluem compras acidentais, cobranças não autorizadas ou compras que não funcionaram conforme descrito.</p>
                <p>Para solicitar um reembolso da Apple:</p>
                <ul>
                  <li>Vá para<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>e faça login com seu ID Apple</li>
                  <li>Encontre a compra do LiquidBoard e toque em Reportar um problema</li>
                  <li>Selecione o motivo e envie sua solicitação</li>
                </ul>
                <p>A Apple normalmente responde dentro de alguns dias úteis. As decisões de reembolso são tomadas exclusivamente pela Apple.</p>

                <h2>Mudanças de preço</h2>
                <p>Reservamo-nos o direito de alterar os preços das compras no aplicativo a qualquer momento. As alterações de preços das assinaturas serão comunicadas antecipadamente através da App ou App Store e entrarão em vigor no início do seu próximo ciclo de faturamento. Você será notificado pela Apple antes que qualquer alteração no preço da assinatura entre em vigor.</p>

                <h2>Compras falhadas ou incompletas</h2>
                <p>Se uma compra falhar ou você for cobrado, mas não receber o conteúdo, tente primeiro restaurar as compras no aplicativo. Se o problema persistir, entre em contato conosco em<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>e investigaremos imediatamente.</p>

                <h2>Contato</h2>
                <p>Para dúvidas sobre faturamento ou problemas de compra, entre em contato conosco:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Para reembolsos, use o canal oficial da Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
