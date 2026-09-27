import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Política de Segurança de Dados</PolicyHeading>
                <PolicyParagraph>Última atualização: 05 de junho de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>O LiquidBoard foi projetado com uma abordagem que prioriza a privacidade. Seus dados nunca saem do seu dispositivo, a menos que você opte explicitamente por ativar o iCloud Sync. Não temos servidores, nem contas, nem acesso ao seu conteúdo.</PolicyParagraph>

                <PolicyHeading>Armazenamento de dados</PolicyHeading>
                <PolicyParagraph>Todo o conteúdo que você cria no LiquidBoard – trechos de texto, imagens e adesivos – é armazenado em um dos dois locais:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Armazenamento no dispositivo</PolicyEmphasis>— Gerenciado por iOS e acessível apenas ao LiquidBoard. Outros aplicativos não conseguem ler seus dados.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opcional)</PolicyEmphasis>— Sincronizado através do seu ID Apple pessoal usando a infraestrutura CloudKit criptografada da Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Nenhum dado é armazenado em nossos servidores. Não operamos nenhuma infraestrutura de back-end.</PolicyParagraph>

                <PolicyHeading>Criptografia</PolicyHeading>
                <PolicyParagraph>Seus dados são protegidos pelas camadas de segurança do iOS e da Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Em repouso</PolicyEmphasis>— Os dados armazenados no seu dispositivo são criptografados pelo iOS usando a senha do seu dispositivo e o Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Em trânsito</PolicyEmphasis>— Se o iCloud Sync estiver ativado, os dados serão criptografados pelo CloudKit da Apple antes de serem transmitidos.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Backup do iCloud</PolicyEmphasis>— Se o backup do seu dispositivo for feito no iCloud, os dados do aplicativo serão incluídos no sistema de backup criptografado da Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Segurança de fotos e imagens</PolicyHeading>
                <PolicyParagraph>O LiquidBoard acessa sua biblioteca de fotos somente quando você escolhe explicitamente selecionar ou importar uma foto. O aplicativo:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Não acessa sua biblioteca de fotos em segundo plano</PolicyListItem>
                  <PolicyListItem>Não carrega fotos para nenhum servidor</PolicyListItem>
                  <PolicyListItem>Armazena imagens selecionadas localmente no contêiner em área restrita do aplicativo</PolicyListItem>
                  <PolicyListItem>Processa a criação de adesivos inteiramente no dispositivo</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Você pode revogar o acesso às fotos a qualquer momento em Configurações → Privacidade e segurança → Fotos.</PolicyParagraph>

                <PolicyHeading>Segurança de extensão de teclado</PolicyHeading>
                <PolicyParagraph>A extensão do teclado não coleta, registra ou transmite dados de pressionamento de tecla ou texto digitado em outros aplicativos.</PolicyParagraph>
                <PolicyParagraph>O acesso total é necessário para que a extensão do teclado cole imagens e adesivos e para acessar o iCloud Sync. Mesmo com o Acesso total habilitado, a extensão do teclado opera inteiramente no ambiente sandbox do iOS. Não tem capacidade de enviar dados para servidores externos.</PolicyParagraph>

                <PolicyHeading>Sem acesso a dados de terceiros</PolicyHeading>
                <PolicyParagraph>LiquidBoard não integra nenhum dos seguintes:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDKs de análise ou relatórios de falhas, como Firebase ou Mixpanel</PolicyListItem>
                  <PolicyListItem>Redes de publicidade ou SDKs de rastreamento</PolicyListItem>
                  <PolicyListItem>Serviços de armazenamento ou processamento em nuvem de terceiros</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Seu conteúdo nunca é compartilhado ou acessível a terceiros.</PolicyParagraph>

                <PolicyHeading>Caixa de areia de aplicativos</PolicyHeading>
                <PolicyParagraph>O LiquidBoard é executado na sandbox estrita de aplicativos do iOS. Isso significa que outros aplicativos no seu dispositivo não podem acessar os dados do LiquidBoard e o LiquidBoard não pode acessar dados pertencentes a outros aplicativos, exceto o conteúdo que você cola explicitamente por meio da extensão do teclado.</PolicyParagraph>

                <PolicyHeading>Seu controle</PolicyHeading>
                <PolicyParagraph>Você tem controle total sobre seus dados em todos os momentos:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Habilite ou desabilite o iCloud Sync no aplicativo</PolicyListItem>
                  <PolicyListItem>Revogar o acesso à biblioteca de fotos nas configurações do iOS</PolicyListItem>
                  <PolicyListItem>Desative o acesso total ao teclado em Configurações → Geral → Teclado → Teclados</PolicyListItem>
                  <PolicyListItem>Exclua todos os dados excluindo o aplicativo</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Contato</PolicyHeading>
                <PolicyParagraph>Se você tiver dúvidas sobre segurança de dados, entre em contato conosco:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>política de Privacidade</PolicyHeading>
                <PolicyParagraph>Última atualização: 05 de junho de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("nós", "nosso" ou "o aplicativo") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como lidamos com as informações quando você usa o LiquidBoard e sua extensão de teclado.</PolicyParagraph>

                <PolicyHeading>Dados que coletamos</PolicyHeading>
                <PolicyParagraph>O LiquidBoard não coleta, armazena ou transmite quaisquer dados pessoais para servidores externos. Todos os dados que você cria no aplicativo – incluindo trechos de texto, imagens, adesivos, categorias e configurações – são armazenados exclusivamente no seu dispositivo ou na sua conta pessoal do iCloud.</PolicyParagraph>

                <PolicyHeading>Fotos e imagens</PolicyHeading>
                <PolicyParagraph>A LiquidBoard poderá solicitar acesso à sua biblioteca de fotos para os seguintes fins:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Inserindo imagens em seus snippets</PolicyListItem>
                  <PolicyListItem>Criando adesivos personalizados a partir de suas fotos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>As fotos selecionadas são armazenadas localmente no seu dispositivo e/ou sincronizadas com sua conta pessoal do iCloud. Não carregamos, transmitimos ou acessamos suas fotos de forma alguma. O acesso à biblioteca de fotos só é usado no momento em que você escolhe explicitamente uma imagem — o aplicativo não acessa sua biblioteca em segundo plano.</PolicyParagraph>

                <PolicyHeading>Adesivos</PolicyHeading>
                <PolicyParagraph>LiquidBoard permite que você:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Crie adesivos personalizados com suas próprias fotos</PolicyListItem>
                  <PolicyListItem>Insira adesivos através da extensão do teclado</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Os adesivos personalizados que você cria a partir de suas fotos são armazenados apenas no seu dispositivo e/ou iCloud. Nenhum conteúdo de adesivo ou dados de imagem são transmitidos para nós.</PolicyParagraph>

                <PolicyHeading>Extensão de teclado e acesso total</PolicyHeading>
                <PolicyParagraph>Esta extensão de teclado não coleta, registra ou transmite quaisquer dados de pressionamento de tecla ou texto que você digita.</PolicyParagraph>
                <PolicyParagraph>A extensão de teclado do LiquidBoard requer que o Acesso Total esteja habilitado para:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Cole imagens e adesivos em outros aplicativos</PolicyListItem>
                  <PolicyListItem>Sincronize seus snippets e adesivos via iCloud em todos os seus dispositivos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>O Acesso Total é usado exclusivamente para esses recursos. O teclado não registra, grava ou transmite nada que você digita em qualquer outro aplicativo. Nenhum dado é enviado para nenhum servidor externo.</PolicyParagraph>

                <PolicyHeading>Sincronização do iCloud</PolicyHeading>
                <PolicyParagraph>Se você optar por ativar o iCloud Sync, seus trechos de texto, imagens e adesivos serão sincronizados por meio da infraestrutura iCloud da Apple usando seu ID Apple pessoal. Estes dados são regidos pela Política de Privacidade da Apple. Não temos acesso aos seus dados do iCloud.</PolicyParagraph>

                <PolicyHeading>Compartilhamento de dados</PolicyHeading>
                <PolicyParagraph>Não vendemos, compartilhamos ou divulgamos seus dados a terceiros. Não usamos análises de terceiros, SDKs de publicidade ou ferramentas de rastreamento.</PolicyParagraph>

                <PolicyHeading>Retenção e exclusão de dados</PolicyHeading>
                <PolicyParagraph>Seus dados permanecem no seu dispositivo e/ou conta iCloud e estão totalmente sob seu controle. Você pode excluir seus dados a qualquer momento:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Excluir trechos, imagens ou adesivos individuais no aplicativo</PolicyListItem>
                  <PolicyListItem>Revogar o acesso à biblioteca de fotos em Configurações → Privacidade → Fotos</PolicyListItem>
                  <PolicyListItem>Excluir o aplicativo, que remove todos os dados armazenados localmente</PolicyListItem>
                  <PolicyListItem>Desativando o iCloud Sync e removendo os dados do iCloud do aplicativo em Configurações → [Seu nome] → iCloud → Gerenciar armazenamento</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Privacidade infantil</PolicyHeading>
                <PolicyParagraph>O LiquidBoard não coleta intencionalmente nenhuma informação de crianças menores de 13 anos. O aplicativo não coleta dados pessoais de nenhum usuário.</PolicyParagraph>

                <PolicyHeading>Mudanças nesta política</PolicyHeading>
                <PolicyParagraph>Poderemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão refletidas no aplicativo e em nosso site com data atualizada.</PolicyParagraph>

                <PolicyHeading>Contato</PolicyHeading>
                <PolicyParagraph>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Termos de Uso</PolicyHeading>
                <PolicyParagraph>Última atualização: 05 de junho de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Ao baixar, instalar ou usar o LiquidBoard ("o Aplicativo"), você concorda em obedecer a estes Termos de Uso. Se você não concorda com estes termos, não use o aplicativo.</PolicyParagraph>

                <PolicyHeading>Licença</PolicyHeading>
                <PolicyParagraph>Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para usar o LiquidBoard para fins pessoais e não comerciais, sujeita a estes Termos.</PolicyParagraph>
                <PolicyParagraph>Você não pode:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Copiar, modificar ou distribuir o Aplicativo ou seu conteúdo</PolicyListItem>
                  <PolicyListItem>Faça engenharia reversa ou tente extrair o código-fonte</PolicyListItem>
                  <PolicyListItem>Use o aplicativo para qualquer finalidade ilegal ou não autorizada</PolicyListItem>
                  <PolicyListItem>Vender, sublicenciar ou transferir o acesso ao Aplicativo para terceiros</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Seu conteúdo</PolicyHeading>
                <PolicyParagraph>Você mantém total propriedade de todos os trechos de texto, imagens e adesivos criados ou importados para o LiquidBoard. Não reivindicamos quaisquer direitos sobre o seu conteúdo.</PolicyParagraph>
                <PolicyParagraph>Você é o único responsável por garantir que o conteúdo que você cria ou cola usando o Aplicativo não infringe quaisquer direitos de terceiros, incluindo direitos autorais, marca registrada ou direitos de privacidade.</PolicyParagraph>

                <PolicyHeading>Uso aceitável</PolicyHeading>
                <PolicyParagraph>Você concorda em não usar o LiquidBoard para criar, armazenar ou distribuir conteúdo que:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>É ilegal, prejudicial, ameaçador ou assediante</PolicyListItem>
                  <PolicyListItem>Viola os direitos de propriedade intelectual de terceiros</PolicyListItem>
                  <PolicyListItem>Contém malware, vírus ou código malicioso</PolicyListItem>
                  <PolicyListItem>Viola qualquer lei local, nacional ou internacional aplicável</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Compras no aplicativo</PolicyHeading>
                <PolicyParagraph>LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos ou conteúdos adicionais. Todas as compras são processadas pela Apple através da App Store e estão sujeitas aos Termos de Venda da Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>As compras não são reembolsáveis, exceto conforme exigido pela lei aplicável ou pela política de reembolso da Apple</PolicyListItem>
                  <PolicyListItem>Os preços podem variar de acordo com a região e são exibidos em sua moeda local no momento da compra</PolicyListItem>
                  <PolicyListItem>Os recursos adquiridos estão vinculados ao seu ID Apple e podem ser restaurados em qualquer dispositivo conectado com o mesmo ID Apple</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Para solicitar um reembolso, entre em contato diretamente com a Apple em:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Extensão de teclado e acesso total</PolicyHeading>
                <PolicyParagraph>É necessário ativar o acesso total para a extensão do teclado para colar imagens e adesivos em outros aplicativos e para ativar o iCloud Sync. O Acesso Total não nos concede acesso a nada que você digita.</PolicyParagraph>
                <PolicyParagraph>Você reconhece que, ao ativar o Acesso Total o iOS exibirá um aviso do sistema informando que o desenvolvedor do teclado poderá acessar sua digitação. Queremos ser explícitos: o LiquidBoard não coleta, registra ou transmite quaisquer dados de pressionamento de tecla.</PolicyParagraph>

                <PolicyHeading>Sincronização do iCloud</PolicyHeading>
                <PolicyParagraph>iCloud Sync é um recurso opcional que usa sua conta pessoal do Apple iCloud para sincronizar seus dados entre dispositivos. O uso do iCloud está sujeito aos Termos e Condições da Apple. Não nos responsabilizamos por qualquer perda de dados resultante de interrupções do serviço iCloud.</PolicyParagraph>

                <PolicyHeading>Isenção de responsabilidade de garantias</PolicyHeading>
                <PolicyParagraph>O LiquidBoard é fornecido "como está" e "conforme disponível" sem garantias de qualquer tipo, expressas ou implícitas, incluindo, entre outras, garantias de comercialização, adequação a uma finalidade específica ou não violação.</PolicyParagraph>
                <PolicyParagraph>Não garantimos que o Aplicativo será ininterrupto, livre de erros ou livre de vírus ou outros componentes prejudiciais.</PolicyParagraph>

                <PolicyHeading>Limitação de responsabilidade</PolicyHeading>
                <PolicyParagraph>Na extensão máxima permitida pela lei aplicável, não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, entre outros, perda de dados, perda de lucros ou perda de boa vontade, decorrentes do seu uso ou incapacidade de usar o Aplicativo.</PolicyParagraph>

                <PolicyHeading>Rescisão</PolicyHeading>
                <PolicyParagraph>Reservamo-nos o direito de encerrar ou restringir seu acesso ao Aplicativo a qualquer momento, sem aviso prévio, por conduta que acreditamos violar estes Termos ou ser prejudicial a outros usuários, a nós ou a terceiros.</PolicyParagraph>
                <PolicyParagraph>Você pode parar de usar o Aplicativo a qualquer momento, excluindo-o do seu dispositivo.</PolicyParagraph>

                <PolicyHeading>Alterações nestes Termos</PolicyHeading>
                <PolicyParagraph>Poderemos atualizar estes Termos de Uso de tempos em tempos. O uso continuado do Aplicativo após a publicação das alterações constitui sua aceitação dos Termos revisados. Iremos notificá-lo sobre alterações significativas através do Aplicativo ou do nosso site.</PolicyParagraph>

                <PolicyHeading>Lei Aplicável</PolicyHeading>
                <PolicyParagraph>Estes Termos são regidos e interpretados de acordo com as leis da jurisdição na qual o desenvolvedor está baseado, sem levar em conta conflitos de princípios legais.</PolicyParagraph>

                <PolicyHeading>Contato</PolicyHeading>
                <PolicyParagraph>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Política de Pagamento e Reembolso</PolicyHeading>
                <PolicyParagraph>Última atualização: 05 de junho de 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard oferece compras opcionais no aplicativo para desbloquear recursos premium. Todos os pagamentos são feitos inteiramente pela Apple através da App Store — nós não processamos, armazenamos ou temos acesso às suas informações de pagamento.</PolicyParagraph>

                <PolicyHeading>O que você pode comprar</PolicyHeading>
                <PolicyParagraph>LiquidBoard oferece as seguintes compras opcionais:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Recursos Premium — Desbloqueio único ou por assinatura para funcionalidade avançada do aplicativo</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>As compras e preços disponíveis são exibidos no aplicativo no momento da compra. Os preços podem variar de acordo com a região e são mostrados na sua moeda local.</PolicyParagraph>

                <PolicyHeading>Processamento de Pagamento</PolicyHeading>
                <PolicyParagraph>Todas as transações são processadas de forma segura pela Apple. Nunca vemos ou armazenamos seu cartão de crédito, endereço de cobrança ou quaisquer detalhes de pagamento.</PolicyParagraph>
                <PolicyParagraph>Ao concluir uma compra, você concorda com os Termos de Venda da App Store da Apple. Sua forma de pagamento registrada na Apple será cobrada no momento da confirmação da compra.</PolicyParagraph>

                <PolicyHeading>Restaurando compras</PolicyHeading>
                <PolicyParagraph>Se você reinstalar o LiquidBoard ou mudar para um novo dispositivo, poderá restaurar todas as compras anteriores sem nenhum custo adicional usando a opção Restaurar compras no aplicativo. As compras estão vinculadas ao seu ID Apple e estão disponíveis em todos os dispositivos conectados com a mesma conta.</PolicyParagraph>

                <PolicyHeading>Assinaturas</PolicyHeading>
                <PolicyParagraph>Se o LiquidBoard oferecer compras baseadas em assinatura:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>As assinaturas são renovadas automaticamente, a menos que sejam canceladas pelo menos 24 horas antes do final do período de cobrança atual</PolicyListItem>
                  <PolicyListItem>A renovação do seu ID Apple será cobrada 24 horas antes do final do período atual</PolicyListItem>
                  <PolicyListItem>Você pode gerenciar ou cancelar assinaturas a qualquer momento em Configurações → [Seu nome] → Assinaturas</PolicyListItem>
                  <PolicyListItem>O cancelamento de uma assinatura entra em vigor no final do período pago atual – você mantém o acesso até então</PolicyListItem>
                  <PolicyListItem>Os períodos de avaliação gratuita, se oferecidos, serão convertidos em uma assinatura paga, a menos que sejam cancelados antes do término da avaliação.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Política de Reembolso</PolicyHeading>
                <PolicyParagraph>Não processamos reembolsos diretamente. Todas as solicitações de reembolso devem ser enviadas à Apple, pois ela é o comerciante responsável por todas as transações da App Store.</PolicyParagraph>
                <PolicyParagraph>A Apple lida com os reembolsos a seu critério, de acordo com sua política de reembolso. Os casos elegíveis comuns incluem compras acidentais, cobranças não autorizadas ou compras que não funcionaram conforme descrito.</PolicyParagraph>
                <PolicyParagraph>Para solicitar um reembolso da Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Vá para<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>e faça login com seu ID Apple</PolicyListItem>
                  <PolicyListItem>Encontre a compra do LiquidBoard e toque em Reportar um problema</PolicyListItem>
                  <PolicyListItem>Selecione o motivo e envie sua solicitação</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>A Apple normalmente responde dentro de alguns dias úteis. As decisões de reembolso são tomadas exclusivamente pela Apple.</PolicyParagraph>

                <PolicyHeading>Mudanças de preço</PolicyHeading>
                <PolicyParagraph>Reservamo-nos o direito de alterar os preços das compras no aplicativo a qualquer momento. As alterações de preços das assinaturas serão comunicadas antecipadamente através da App ou App Store e entrarão em vigor no início do seu próximo ciclo de faturamento. Você será notificado pela Apple antes que qualquer alteração no preço da assinatura entre em vigor.</PolicyParagraph>

                <PolicyHeading>Compras falhadas ou incompletas</PolicyHeading>
                <PolicyParagraph>Se uma compra falhar ou você for cobrado, mas não receber o conteúdo, tente primeiro restaurar as compras no aplicativo. Se o problema persistir, entre em contato conosco em<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>e investigaremos imediatamente.</PolicyParagraph>

                <PolicyHeading>Contato</PolicyHeading>
                <PolicyParagraph>Para dúvidas sobre faturamento ou problemas de compra, entre em contato conosco:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Para reembolsos, use o canal oficial da Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
