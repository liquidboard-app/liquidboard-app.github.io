
export const Security = () => (
  <>
    <h2>Politique de sécurité des données</h2>
                <p>Dernière mise à jour : 05 juin 2026 · LiquidBoard</p>
                <p>LiquidBoard est conçu avec une approche axée sur la confidentialité. Vos données ne quittent jamais votre appareil, sauf si vous choisissez explicitement d'activer iCloud Sync. Nous n'avons ni serveurs, ni comptes, ni accès à votre contenu.</p>

                <h2>Stockage des données</h2>
                <p>Tout le contenu que vous créez dans LiquidBoard (extraits de texte, images et autocollants) est stocké à l'un des deux emplacements suivants :</p>
                <ul>
                  <li><strong>Stockage sur l'appareil</strong>— Géré par iOS et accessible uniquement à LiquidBoard. Les autres applications ne peuvent pas lire vos données.</li>
                  <li><strong>iCloud (facultatif)</strong>- Synchronisé via votre identifiant Apple personnel à l'aide de l'infrastructure CloudKit cryptée d'Apple.</li>
                </ul>
                <p>Aucune donnée n'est stockée sur nos serveurs. Nous n’exploitons aucune infrastructure backend.</p>

                <h2>Cryptage</h2>
                <p>Vos données sont protégées par les couches de sécurité iOS et Apple :</p>
                <ul>
                  <li><strong>Au repos</strong>— Les données stockées sur votre appareil sont cryptées par iOS à l'aide du code d'accès de votre appareil et de Secure Enclave.</li>
                  <li><strong>En transit</strong>— Si iCloud Sync est activé, les données sont cryptées par CloudKit d'Apple avant d'être transmises.</li>
                  <li><strong>Sauvegarde iCloud</strong>— Si votre appareil est sauvegardé sur iCloud, les données des applications sont incluses dans le système de sauvegarde crypté d'Apple.</li>
                </ul>

                <h2>Sécurité des photos et des images</h2>
                <p>LiquidBoard accède à votre photothèque uniquement lorsque vous choisissez explicitement de sélectionner ou d'importer une photo. L'application :</p>
                <ul>
                  <li>N'accède pas à votre photothèque en arrière-plan</li>
                  <li>Ne télécharge pas de photos sur aucun serveur</li>
                  <li>Stocke les images sélectionnées localement dans le conteneur sandbox de l'application</li>
                  <li>Traite la création d’autocollants entièrement sur l’appareil</li>
                </ul>
                <p>Vous pouvez révoquer l'accès aux photos à tout moment dans Paramètres → Confidentialité et sécurité → Photos.</p>

                <h2>Sécurité des extensions de clavier</h2>
                <p>L'extension du clavier ne collecte, n'enregistre ni ne transmet les données de frappe ou le texte que vous saisissez dans d'autres applications.</p>
                <p>Un accès complet est requis pour que l'extension du clavier puisse coller des images et des autocollants et accéder à iCloud Sync. Même avec l'accès complet activé, l'extension du clavier fonctionne entièrement dans l'environnement sandbox d'iOS. Il n'a pas la capacité d'envoyer des données à des serveurs externes.</p>

                <h2>Aucun accès aux données de tiers</h2>
                <p>LiquidBoard n'intègre aucun des éléments suivants :</p>
                <ul>
                  <li>SDK d'analyse ou de rapport d'erreur, tels que Firebase ou Mixpanel</li>
                  <li>Réseaux publicitaires ou SDK de suivi</li>
                  <li>Services de stockage ou de traitement cloud tiers</li>
                </ul>
                <p>Votre contenu n’est jamais partagé ni accessible par un tiers.</p>

                <h2>Bac à sable d'application</h2>
                <p>LiquidBoard fonctionne dans le bac à sable strict des applications iOS. Cela signifie que les autres applications de votre appareil ne peuvent pas accéder aux données de LiquidBoard et que LiquidBoard ne peut pas accéder aux données appartenant à d'autres applications, à l'exception du contenu que vous collez explicitement via l'extension du clavier.</p>

                <h2>Votre contrôle</h2>
                <p>Vous avez à tout moment un contrôle total sur vos données :</p>
                <ul>
                  <li>Activer ou désactiver iCloud Sync depuis l'application</li>
                  <li>Révoquer l'accès à la photothèque dans les paramètres iOS</li>
                  <li>Désactivez l'accès complet au clavier dans Paramètres → Général → Clavier → Claviers</li>
                  <li>Supprimez toutes les données en supprimant l'application</li>
                </ul>

                <h2>Contact</h2>
                <p>Si vous avez des questions sur la sécurité des données, veuillez nous contacter à :<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>politique de confidentialité</h2>
                <p>Dernière mise à jour : 05 juin 2026 · LiquidBoard</p>
                <p>LiquidBoard (« nous », « notre » ou « l'application ») s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez LiquidBoard et son extension clavier.</p>

                <h2>Données que nous collectons</h2>
                <p>LiquidBoard ne collecte, ne stocke ni ne transmet aucune donnée personnelle à des serveurs externes. Toutes les données que vous créez dans l'application, y compris les extraits de texte, les images, les autocollants, les catégories et les paramètres, sont stockées exclusivement sur votre appareil ou dans votre compte iCloud personnel.</p>

                <h2>Photos et images</h2>
                <p>LiquidBoard peut demander l'accès à votre photothèque aux fins suivantes :</p>
                <ul>
                  <li>Insérer des images dans vos extraits</li>
                  <li>Créer des autocollants personnalisés à partir de vos photos</li>
                </ul>
                <p>Les photos que vous sélectionnez sont stockées localement sur votre appareil et/ou synchronisées avec votre compte iCloud personnel. Nous ne téléchargeons, ne transmettons ni n’accédons à vos photos de quelque manière que ce soit. L'accès à la photothèque n'est utilisé qu'au moment où vous choisissez explicitement une image : l'application n'accède pas à votre bibliothèque en arrière-plan.</p>

                <h2>Autocollants</h2>
                <p>LiquidBoard vous permet de :</p>
                <ul>
                  <li>Créez des autocollants personnalisés à partir de vos propres photos</li>
                  <li>Insérer des autocollants via l'extension du clavier</li>
                </ul>
                <p>Les autocollants personnalisés que vous créez à partir de vos photos sont stockés uniquement sur votre appareil et/ou iCloud. Aucun contenu d’autocollant ou donnée d’image ne nous est transmis.</p>

                <h2>Extension du clavier et accès complet</h2>
                <p>Cette extension de clavier ne collecte, n'enregistre ni ne transmet les données de frappe ou le texte que vous tapez.</p>
                <p>L'extension clavier de LiquidBoard nécessite que l'accès complet soit activé afin de :</p>
                <ul>
                  <li>Collez des images et des autocollants dans d'autres applications</li>
                  <li>Synchronisez vos extraits et autocollants via iCloud sur vos appareils</li>
                </ul>
                <p>L'accès complet est utilisé uniquement pour ces fonctionnalités. Le clavier n'enregistre, n'enregistre ni ne transmet rien de ce que vous tapez dans une autre application. Aucune donnée n'est envoyée à un serveur externe.</p>

                <h2>Synchronisation iCloud</h2>
                <p>Si vous choisissez d'activer iCloud Sync, vos extraits de texte, images et autocollants sont synchronisés via l'infrastructure iCloud d'Apple à l'aide de votre identifiant Apple personnel. Ces données sont régies par la politique de confidentialité d'Apple. Nous n'avons pas accès à vos données iCloud.</p>

                <h2>Partage de données</h2>
                <p>Nous ne vendons, partageons ni divulguons vos données à des tiers. Nous n'utilisons aucune analyse tierce, aucun SDK publicitaire ou outil de suivi.</p>

                <h2>Conservation et suppression des données</h2>
                <p>Vos données restent sur votre appareil et/ou votre compte iCloud et sont entièrement sous votre contrôle. Vous pouvez supprimer vos données à tout moment en :</p>
                <ul>
                  <li>Suppression d'extraits, d'images ou d'autocollants individuels dans l'application</li>
                  <li>Révocation de l'accès à la photothèque dans Paramètres → Confidentialité → Photos</li>
                  <li>Suppression de l'application, qui supprime toutes les données stockées localement</li>
                  <li>Désactiver iCloud Sync et supprimer les données iCloud de l'application depuis Paramètres → [Votre nom] → iCloud → Gérer le stockage</li>
                </ul>

                <h2>Confidentialité des enfants</h2>
                <p>LiquidBoard ne collecte sciemment aucune information auprès d'enfants de moins de 13 ans. L'application ne collecte aucune donnée personnelle d'aucun utilisateur.</p>

                <h2>Modifications de cette politique</h2>
                <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Tout changement sera reflété dans l'application et sur notre site Web avec une date mise à jour.</p>

                <h2>Contact</h2>
                <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Conditions d'utilisation</h2>
                <p>Dernière mise à jour : 05 juin 2026 · LiquidBoard</p>
                <p>En téléchargeant, en installant ou en utilisant LiquidBoard (« l'Application »), vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.</p>

                <h2>Licence</h2>
                <p>Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser LiquidBoard à vos fins personnelles et non commerciales, sous réserve des présentes Conditions.</p>
                <p>Vous ne pouvez pas :</p>
                <ul>
                  <li>Copier, modifier ou distribuer l'application ou son contenu</li>
                  <li>Ingénierie inverse ou tentative d'extraction du code source</li>
                  <li>Utiliser l'application à des fins illégales ou non autorisées</li>
                  <li>Vendre, accorder une sous-licence ou transférer l'accès à l'application à un tiers</li>
                </ul>

                <h2>Votre contenu</h2>
                <p>Vous conservez l'entière propriété de tous les extraits de texte, images et autocollants que vous créez ou importez dans LiquidBoard. Nous ne revendiquons aucun droit sur votre contenu.</p>
                <p>Vous êtes seul responsable de vous assurer que le contenu que vous créez ou collez à l’aide de l’application ne viole aucun droit de tiers, y compris les droits d’auteur, de marque ou de confidentialité.</p>

                <h2>Utilisation acceptable</h2>
                <p>Vous acceptez de ne pas utiliser LiquidBoard pour créer, stocker ou distribuer du contenu qui :</p>
                <ul>
                  <li>Est illégal, nuisible, menaçant ou harcelant</li>
                  <li>Enfreint les droits de propriété intellectuelle d’autrui</li>
                  <li>Contient des logiciels malveillants, des virus ou du code malveillant</li>
                  <li>Enfreint toute loi locale, nationale ou internationale applicable</li>
                </ul>

                <h2>Achats intégrés</h2>
                <p>LiquidBoard propose des achats intégrés facultatifs pour débloquer des fonctionnalités ou du contenu supplémentaires. Tous les achats sont traités par Apple via l'App Store et sont soumis aux conditions de vente d'Apple.</p>
                <ul>
                  <li>Les achats ne sont pas remboursables, sauf si la loi applicable ou la politique de remboursement d'Apple l'exige</li>
                  <li>Les prix peuvent varier selon la région et sont affichés dans votre devise locale au moment de l'achat</li>
                  <li>Les fonctionnalités achetées sont liées à votre identifiant Apple et peuvent être restaurées sur n'importe quel appareil connecté avec le même identifiant Apple.</li>
                </ul>
                <p>Pour demander un remboursement, veuillez contacter Apple directement à l'adresse suivante :<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</a>.</p>

                <h2>Extension du clavier et accès complet</h2>
                <p>L'activation de l'accès complet pour l'extension du clavier est nécessaire pour coller des images et des autocollants dans d'autres applications et pour activer iCloud Sync. L'accès complet ne nous donne pas accès à tout ce que vous tapez.</p>
                <p>Vous reconnaissez qu'en activant l'accès complet, iOS affichera un avis système vous informant que le développeur du clavier pourrait potentiellement accéder à votre saisie. Nous voulons être explicites : LiquidBoard ne collecte, n'enregistre ni ne transmet aucune donnée de frappe.</p>

                <h2>Synchronisation iCloud</h2>
                <p>iCloud Sync est une fonctionnalité facultative qui utilise votre compte personnel Apple iCloud pour synchroniser vos données sur tous les appareils. L'utilisation d'iCloud est soumise aux conditions générales d'Apple. Nous ne sommes pas responsables de toute perte de données résultant des interruptions du service iCloud.</p>

                <h2>Exclusion de garanties</h2>
                <p>LiquidBoard est fourni « tel quel » et « tel que disponible » sans garantie d'aucune sorte, expresse ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier ou de non-contrefaçon.</p>
                <p>Nous ne garantissons pas que l'application sera ininterrompue, sans erreur ou exempte de virus ou d'autres composants nuisibles.</p>

                <h2>Limitation de responsabilité</h2>
                <p>Dans la mesure permise par la loi applicable, nous ne serons pas responsables de tout dommage indirect, accidentel, spécial, consécutif ou punitif, y compris, mais sans s'y limiter, la perte de données, la perte de profits ou la perte de clientèle, découlant de votre utilisation ou de votre incapacité à utiliser l'Application.</p>

                <h2>Terminaison</h2>
                <p>Nous nous réservons le droit de résilier ou de restreindre votre accès à l'Application à tout moment, sans préavis, pour une conduite qui, selon nous, viole les présentes Conditions ou est préjudiciable aux autres utilisateurs, à nous ou à des tiers.</p>
                <p>Vous pouvez cesser d'utiliser l'application à tout moment en la supprimant de votre appareil.</p>

                <h2>Modifications de ces conditions</h2>
                <p>Nous pouvons mettre à jour ces conditions d'utilisation de temps à autre. L'utilisation continue de l'application après la publication des modifications constitue votre acceptation des conditions révisées. Nous vous informerons des changements importants via l'application ou notre site Web.</p>

                <h2>Loi applicable</h2>
                <p>Les présentes Conditions sont régies et interprétées conformément aux lois de la juridiction dans laquelle le développeur est basé, sans égard aux principes de conflit de lois.</p>

                <h2>Contact</h2>
                <p>Si vous avez des questions concernant ces Conditions, veuillez nous contacter à :<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Politique de paiement et de remboursement</h2>
                <p>Dernière mise à jour : 05 juin 2026 · LiquidBoard</p>
                <p>LiquidBoard propose des achats intégrés en option pour débloquer des fonctionnalités premium. Tous les paiements sont entièrement gérés par Apple via l'App Store : nous ne traitons pas, ne stockons pas et n'avons pas accès à vos informations de paiement.</p>

                <h2>Ce que vous pouvez acheter</h2>
                <p>LiquidBoard propose les achats optionnels suivants :</p>
                <ul>
                  <li>Fonctionnalités Premium – Déverrouillage unique ou par abonnement pour des fonctionnalités avancées de l'application</li>
                </ul>
                <p>Les achats disponibles et les prix sont affichés dans l'application au moment de l'achat. Les prix peuvent varier selon la région et sont affichés dans votre devise locale.</p>

                <h2>Traitement des paiements</h2>
                <p>Toutes les transactions sont traitées en toute sécurité par Apple. Nous ne voyons ni ne stockons jamais votre carte de crédit, votre adresse de facturation ou tout autre détail de paiement.</p>
                <p>En effectuant un achat, vous acceptez les conditions de vente de l'App Store d'Apple. Votre mode de paiement enregistré auprès d'Apple sera facturé au moment de la confirmation d'achat.</p>

                <h2>Restauration des achats</h2>
                <p>Si vous réinstallez LiquidBoard ou passez à un nouvel appareil, vous pouvez restaurer tous les achats précédents sans frais supplémentaires en utilisant l'option Restaurer les achats dans l'application. Les achats sont liés à votre identifiant Apple et sont disponibles sur tous les appareils connectés avec le même compte.</p>

                <h2>Abonnements</h2>
                <p>Si LiquidBoard propose des achats par abonnement :</p>
                <ul>
                  <li>Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période de facturation en cours</li>
                  <li>Votre identifiant Apple sera facturé pour le renouvellement dans les 24 heures précédant la fin de la période en cours.</li>
                  <li>Vous pouvez gérer ou annuler des abonnements à tout moment dans Paramètres → [Votre nom] → Abonnements</li>
                  <li>La résiliation d'un abonnement prend effet à la fin de la période payante en cours — vous conservez l'accès jusque-là</li>
                  <li>Les périodes d'essai gratuites, si elles sont proposées, seront converties en abonnement payant, sauf annulation avant la fin de l'essai.</li>
                </ul>

                <h2>Politique de remboursement</h2>
                <p>Nous ne traitons pas les remboursements directement. Toutes les demandes de remboursement doivent être soumises à Apple, car ils sont le commerçant officiel de toutes les transactions sur l'App Store.</p>
                <p>Apple gère les remboursements à sa discrétion conformément à sa politique de remboursement. Les cas éligibles courants incluent les achats accidentels, les frais non autorisés ou les achats qui n’ont pas fonctionné comme décrit.</p>
                <p>Pour demander un remboursement à Apple :</p>
                <ul>
                  <li>Aller à<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</a>et connectez-vous avec votre identifiant Apple</li>
                  <li>Recherchez l'achat du LiquidBoard et appuyez sur Signaler un problème.</li>
                  <li>Sélectionnez le motif et soumettez votre demande</li>
                </ul>
                <p>Apple répond généralement sous quelques jours ouvrables. Les décisions de remboursement sont prises uniquement par Apple.</p>

                <h2>Modifications de prix</h2>
                <p>Nous nous réservons le droit de modifier les prix des achats intégrés à tout moment. Les modifications de prix des abonnements seront communiquées à l'avance via l'App ou l'App Store et prendront effet au début de votre prochain cycle de facturation. Vous serez averti par Apple avant que toute modification du prix de l'abonnement ne prenne effet.</p>

                <h2>Achats échoués ou incomplets</h2>
                <p>Si un achat échoue ou si vous êtes facturé mais ne recevez pas le contenu, essayez d'abord de restaurer les achats dans l'application. Si le problème persiste, contactez-nous au<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>et nous enquêterons rapidement.</p>

                <h2>Contact</h2>
                <p>Pour des questions de facturation ou des problèmes d'achat, contactez-nous à :<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Pour les remboursements, veuillez utiliser le canal officiel d'Apple :<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</a></p>
  </>
);
