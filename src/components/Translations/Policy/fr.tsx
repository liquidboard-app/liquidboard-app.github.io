import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Politique de sécurité des données</PolicyHeading>
                <PolicyParagraph>Dernière mise à jour : 05 juin 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard est conçu avec une approche axée sur la confidentialité. Vos données ne quittent jamais votre appareil, sauf si vous choisissez explicitement d'activer iCloud Sync. Nous n'avons ni serveurs, ni comptes, ni accès à votre contenu.</PolicyParagraph>

                <PolicyHeading>Stockage des données</PolicyHeading>
                <PolicyParagraph>Tout le contenu que vous créez dans LiquidBoard (extraits de texte, images et autocollants) est stocké à l'un des deux emplacements suivants :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Stockage sur l'appareil</PolicyEmphasis>— Géré par iOS et accessible uniquement à LiquidBoard. Les autres applications ne peuvent pas lire vos données.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (facultatif)</PolicyEmphasis>- Synchronisé via votre identifiant Apple personnel à l'aide de l'infrastructure CloudKit cryptée d'Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Aucune donnée n'est stockée sur nos serveurs. Nous n’exploitons aucune infrastructure backend.</PolicyParagraph>

                <PolicyHeading>Cryptage</PolicyHeading>
                <PolicyParagraph>Vos données sont protégées par les couches de sécurité iOS et Apple :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Au repos</PolicyEmphasis>— Les données stockées sur votre appareil sont cryptées par iOS à l'aide du code d'accès de votre appareil et de Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>En transit</PolicyEmphasis>— Si iCloud Sync est activé, les données sont cryptées par CloudKit d'Apple avant d'être transmises.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Sauvegarde iCloud</PolicyEmphasis>— Si votre appareil est sauvegardé sur iCloud, les données des applications sont incluses dans le système de sauvegarde crypté d'Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Sécurité des photos et des images</PolicyHeading>
                <PolicyParagraph>LiquidBoard accède à votre photothèque uniquement lorsque vous choisissez explicitement de sélectionner ou d'importer une photo. L'application :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>N'accède pas à votre photothèque en arrière-plan</PolicyListItem>
                  <PolicyListItem>Ne télécharge pas de photos sur aucun serveur</PolicyListItem>
                  <PolicyListItem>Stocke les images sélectionnées localement dans le conteneur sandbox de l'application</PolicyListItem>
                  <PolicyListItem>Traite la création d’autocollants entièrement sur l’appareil</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Vous pouvez révoquer l'accès aux photos à tout moment dans Paramètres → Confidentialité et sécurité → Photos.</PolicyParagraph>

                <PolicyHeading>Sécurité des extensions de clavier</PolicyHeading>
                <PolicyParagraph>L'extension du clavier ne collecte, n'enregistre ni ne transmet les données de frappe ou le texte que vous saisissez dans d'autres applications.</PolicyParagraph>
                <PolicyParagraph>Un accès complet est requis pour que l'extension du clavier puisse coller des images et des autocollants et accéder à iCloud Sync. Même avec l'accès complet activé, l'extension du clavier fonctionne entièrement dans l'environnement sandbox d'iOS. Il n'a pas la capacité d'envoyer des données à des serveurs externes.</PolicyParagraph>

                <PolicyHeading>Aucun accès aux données de tiers</PolicyHeading>
                <PolicyParagraph>LiquidBoard n'intègre aucun des éléments suivants :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK d'analyse ou de rapport d'erreur, tels que Firebase ou Mixpanel</PolicyListItem>
                  <PolicyListItem>Réseaux publicitaires ou SDK de suivi</PolicyListItem>
                  <PolicyListItem>Services de stockage ou de traitement cloud tiers</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Votre contenu n’est jamais partagé ni accessible par un tiers.</PolicyParagraph>

                <PolicyHeading>Bac à sable d'application</PolicyHeading>
                <PolicyParagraph>LiquidBoard fonctionne dans le bac à sable strict des applications iOS. Cela signifie que les autres applications de votre appareil ne peuvent pas accéder aux données de LiquidBoard et que LiquidBoard ne peut pas accéder aux données appartenant à d'autres applications, à l'exception du contenu que vous collez explicitement via l'extension du clavier.</PolicyParagraph>

                <PolicyHeading>Votre contrôle</PolicyHeading>
                <PolicyParagraph>Vous avez à tout moment un contrôle total sur vos données :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Activer ou désactiver iCloud Sync depuis l'application</PolicyListItem>
                  <PolicyListItem>Révoquer l'accès à la photothèque dans les paramètres iOS</PolicyListItem>
                  <PolicyListItem>Désactivez l'accès complet au clavier dans Paramètres → Général → Clavier → Claviers</PolicyListItem>
                  <PolicyListItem>Supprimez toutes les données en supprimant l'application</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>Si vous avez des questions sur la sécurité des données, veuillez nous contacter à :<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>politique de confidentialité</PolicyHeading>
                <PolicyParagraph>Dernière mise à jour : 05 juin 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard (« nous », « notre » ou « l'application ») s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez LiquidBoard et son extension clavier.</PolicyParagraph>

                <PolicyHeading>Données que nous collectons</PolicyHeading>
                <PolicyParagraph>LiquidBoard ne collecte, ne stocke ni ne transmet aucune donnée personnelle à des serveurs externes. Toutes les données que vous créez dans l'application y compris les extraits de texte, les images, les autocollants, les catégories et les paramètres, sont stockées exclusivement sur votre appareil ou dans votre compte iCloud personnel.</PolicyParagraph>

                <PolicyHeading>Photos et images</PolicyHeading>
                <PolicyParagraph>LiquidBoard peut demander l'accès à votre photothèque aux fins suivantes :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Insérer des images dans vos extraits</PolicyListItem>
                  <PolicyListItem>Créer des autocollants personnalisés à partir de vos photos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Les photos que vous sélectionnez sont stockées localement sur votre appareil et/ou synchronisées avec votre compte iCloud personnel. Nous ne téléchargeons, ne transmettons ni n’accédons à vos photos de quelque manière que ce soit. L'accès à la photothèque n'est utilisé qu'au moment où vous choisissez explicitement une image : l'application n'accède pas à votre bibliothèque en arrière-plan.</PolicyParagraph>

                <PolicyHeading>Autocollants</PolicyHeading>
                <PolicyParagraph>LiquidBoard vous permet de :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Créez des autocollants personnalisés à partir de vos propres photos</PolicyListItem>
                  <PolicyListItem>Insérer des autocollants via l'extension du clavier</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Les autocollants personnalisés que vous créez à partir de vos photos sont stockés uniquement sur votre appareil et/ou iCloud. Aucun contenu d’autocollant ou donnée d’image ne nous est transmis.</PolicyParagraph>

                <PolicyHeading>Extension du clavier et accès complet</PolicyHeading>
                <PolicyParagraph>Cette extension de clavier ne collecte, n'enregistre ni ne transmet les données de frappe ou le texte que vous tapez.</PolicyParagraph>
                <PolicyParagraph>L'extension clavier de LiquidBoard nécessite que l'accès complet soit activé afin de :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Collez des images et des autocollants dans d'autres applications</PolicyListItem>
                  <PolicyListItem>Synchronisez vos extraits et autocollants via iCloud sur vos appareils</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>L'accès complet est utilisé uniquement pour ces fonctionnalités. Le clavier n'enregistre, n'enregistre ni ne transmet rien de ce que vous tapez dans une autre application. Aucune donnée n'est envoyée à un serveur externe.</PolicyParagraph>

                <PolicyHeading>Synchronisation iCloud</PolicyHeading>
                <PolicyParagraph>Si vous choisissez d'activer iCloud Sync, vos extraits de texte, images et autocollants sont synchronisés via l'infrastructure iCloud d'Apple à l'aide de votre identifiant Apple personnel. Ces données sont régies par la politique de confidentialité d'Apple. Nous n'avons pas accès à vos données iCloud.</PolicyParagraph>

                <PolicyHeading>Partage de données</PolicyHeading>
                <PolicyParagraph>Nous ne vendons, partageons ni divulguons vos données à des tiers. Nous n'utilisons aucune analyse tierce, aucun SDK publicitaire ou outil de suivi.</PolicyParagraph>

                <PolicyHeading>Conservation et suppression des données</PolicyHeading>
                <PolicyParagraph>Vos données restent sur votre appareil et/ou votre compte iCloud et sont entièrement sous votre contrôle. Vous pouvez supprimer vos données à tout moment en :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Suppression d'extraits, d'images ou d'autocollants individuels dans l'application</PolicyListItem>
                  <PolicyListItem>Révocation de l'accès à la photothèque dans Paramètres → Confidentialité → Photos</PolicyListItem>
                  <PolicyListItem>Suppression de l'application, qui supprime toutes les données stockées localement</PolicyListItem>
                  <PolicyListItem>Désactiver iCloud Sync et supprimer les données iCloud de l'application depuis Paramètres → [Votre nom] → iCloud → Gérer le stockage</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Confidentialité des enfants</PolicyHeading>
                <PolicyParagraph>LiquidBoard ne collecte sciemment aucune information auprès d'enfants de moins de 13 ans. L'application ne collecte aucune donnée personnelle d'aucun utilisateur.</PolicyParagraph>

                <PolicyHeading>Modifications de cette politique</PolicyHeading>
                <PolicyParagraph>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Tout changement sera reflété dans l'application et sur notre site Web avec une date mise à jour.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à :<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Conditions d'utilisation</PolicyHeading>
                <PolicyParagraph>Dernière mise à jour : 05 juin 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>En téléchargeant, en installant ou en utilisant LiquidBoard (« l'Application »), vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.</PolicyParagraph>

                <PolicyHeading>Licence</PolicyHeading>
                <PolicyParagraph>Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser LiquidBoard à vos fins personnelles et non commerciales, sous réserve des présentes Conditions.</PolicyParagraph>
                <PolicyParagraph>Vous ne pouvez pas :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Copier, modifier ou distribuer l'application ou son contenu</PolicyListItem>
                  <PolicyListItem>Ingénierie inverse ou tentative d'extraction du code source</PolicyListItem>
                  <PolicyListItem>Utiliser l'application à des fins illégales ou non autorisées</PolicyListItem>
                  <PolicyListItem>Vendre, accorder une sous-licence ou transférer l'accès à l'application à un tiers</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Votre contenu</PolicyHeading>
                <PolicyParagraph>Vous conservez l'entière propriété de tous les extraits de texte, images et autocollants que vous créez ou importez dans LiquidBoard. Nous ne revendiquons aucun droit sur votre contenu.</PolicyParagraph>
                <PolicyParagraph>Vous êtes seul responsable de vous assurer que le contenu que vous créez ou collez à l’aide de l’application ne viole aucun droit de tiers y compris les droits d’auteur, de marque ou de confidentialité.</PolicyParagraph>

                <PolicyHeading>Utilisation acceptable</PolicyHeading>
                <PolicyParagraph>Vous acceptez de ne pas utiliser LiquidBoard pour créer, stocker ou distribuer du contenu qui :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Est illégal, nuisible, menaçant ou harcelant</PolicyListItem>
                  <PolicyListItem>Enfreint les droits de propriété intellectuelle d’autrui</PolicyListItem>
                  <PolicyListItem>Contient des logiciels malveillants, des virus ou du code malveillant</PolicyListItem>
                  <PolicyListItem>Enfreint toute loi locale, nationale ou internationale applicable</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Achats intégrés</PolicyHeading>
                <PolicyParagraph>LiquidBoard propose des achats intégrés facultatifs pour débloquer des fonctionnalités ou du contenu supplémentaires. Tous les achats sont traités par Apple via l'App Store et sont soumis aux conditions de vente d'Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Les achats ne sont pas remboursables, sauf si la loi applicable ou la politique de remboursement d'Apple l'exige</PolicyListItem>
                  <PolicyListItem>Les prix peuvent varier selon la région et sont affichés dans votre devise locale au moment de l'achat</PolicyListItem>
                  <PolicyListItem>Les fonctionnalités achetées sont liées à votre identifiant Apple et peuvent être restaurées sur n'importe quel appareil connecté avec le même identifiant Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Pour demander un remboursement, veuillez contacter Apple directement à l'adresse suivante :<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Extension du clavier et accès complet</PolicyHeading>
                <PolicyParagraph>L'activation de l'accès complet pour l'extension du clavier est nécessaire pour coller des images et des autocollants dans d'autres applications et pour activer iCloud Sync. L'accès complet ne nous donne pas accès à tout ce que vous tapez.</PolicyParagraph>
                <PolicyParagraph>Vous reconnaissez qu'en activant l'accès complet, iOS affichera un avis système vous informant que le développeur du clavier pourrait potentiellement accéder à votre saisie. Nous voulons être explicites : LiquidBoard ne collecte, n'enregistre ni ne transmet aucune donnée de frappe.</PolicyParagraph>

                <PolicyHeading>Synchronisation iCloud</PolicyHeading>
                <PolicyParagraph>iCloud Sync est une fonctionnalité facultative qui utilise votre compte personnel Apple iCloud pour synchroniser vos données sur tous les appareils. L'utilisation d'iCloud est soumise aux conditions générales d'Apple. Nous ne sommes pas responsables de toute perte de données résultant des interruptions du service iCloud.</PolicyParagraph>

                <PolicyHeading>Exclusion de garanties</PolicyHeading>
                <PolicyParagraph>LiquidBoard est fourni « tel quel » et « tel que disponible » sans garantie d'aucune sorte, expresse ou implicite y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier ou de non-contrefaçon.</PolicyParagraph>
                <PolicyParagraph>Nous ne garantissons pas que l'application sera ininterrompue, sans erreur ou exempte de virus ou d'autres composants nuisibles.</PolicyParagraph>

                <PolicyHeading>Limitation de responsabilité</PolicyHeading>
                <PolicyParagraph>Dans la mesure permise par la loi applicable, nous ne serons pas responsables de tout dommage indirect, accidentel, spécial, consécutif ou punitif y compris, mais sans s'y limiter, la perte de données, la perte de profits ou la perte de clientèle, découlant de votre utilisation ou de votre incapacité à utiliser l'Application.</PolicyParagraph>

                <PolicyHeading>Terminaison</PolicyHeading>
                <PolicyParagraph>Nous nous réservons le droit de résilier ou de restreindre votre accès à l'Application à tout moment, sans préavis, pour une conduite qui, selon nous, viole les présentes Conditions ou est préjudiciable aux autres utilisateurs, à nous ou à des tiers.</PolicyParagraph>
                <PolicyParagraph>Vous pouvez cesser d'utiliser l'application à tout moment en la supprimant de votre appareil.</PolicyParagraph>

                <PolicyHeading>Modifications de ces conditions</PolicyHeading>
                <PolicyParagraph>Nous pouvons mettre à jour ces conditions d'utilisation de temps à autre. L'utilisation continue de l'application après la publication des modifications constitue votre acceptation des conditions révisées. Nous vous informerons des changements importants via l'application ou notre site Web.</PolicyParagraph>

                <PolicyHeading>Loi applicable</PolicyHeading>
                <PolicyParagraph>Les présentes Conditions sont régies et interprétées conformément aux lois de la juridiction dans laquelle le développeur est basé, sans égard aux principes de conflit de lois.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>Si vous avez des questions concernant ces Conditions, veuillez nous contacter à :<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Politique de paiement et de remboursement</PolicyHeading>
                <PolicyParagraph>Dernière mise à jour : 05 juin 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard propose des achats intégrés en option pour débloquer des fonctionnalités premium. Tous les paiements sont entièrement gérés par Apple via l'App Store : nous ne traitons pas, ne stockons pas et n'avons pas accès à vos informations de paiement.</PolicyParagraph>

                <PolicyHeading>Ce que vous pouvez acheter</PolicyHeading>
                <PolicyParagraph>LiquidBoard propose les achats optionnels suivants :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Fonctionnalités Premium – Déverrouillage unique ou par abonnement pour des fonctionnalités avancées de l'application</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Les achats disponibles et les prix sont affichés dans l'application au moment de l'achat. Les prix peuvent varier selon la région et sont affichés dans votre devise locale.</PolicyParagraph>

                <PolicyHeading>Traitement des paiements</PolicyHeading>
                <PolicyParagraph>Toutes les transactions sont traitées en toute sécurité par Apple. Nous ne voyons ni ne stockons jamais votre carte de crédit, votre adresse de facturation ou tout autre détail de paiement.</PolicyParagraph>
                <PolicyParagraph>En effectuant un achat, vous acceptez les conditions de vente de l'App Store d'Apple. Votre mode de paiement enregistré auprès d'Apple sera facturé au moment de la confirmation d'achat.</PolicyParagraph>

                <PolicyHeading>Restauration des achats</PolicyHeading>
                <PolicyParagraph>Si vous réinstallez LiquidBoard ou passez à un nouvel appareil, vous pouvez restaurer tous les achats précédents sans frais supplémentaires en utilisant l'option Restaurer les achats dans l'application. Les achats sont liés à votre identifiant Apple et sont disponibles sur tous les appareils connectés avec le même compte.</PolicyParagraph>

                <PolicyHeading>Abonnements</PolicyHeading>
                <PolicyParagraph>Si LiquidBoard propose des achats par abonnement :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période de facturation en cours</PolicyListItem>
                  <PolicyListItem>Votre identifiant Apple sera facturé pour le renouvellement dans les 24 heures précédant la fin de la période en cours.</PolicyListItem>
                  <PolicyListItem>Vous pouvez gérer ou annuler des abonnements à tout moment dans Paramètres → [Votre nom] → Abonnements</PolicyListItem>
                  <PolicyListItem>La résiliation d'un abonnement prend effet à la fin de la période payante en cours — vous conservez l'accès jusque-là</PolicyListItem>
                  <PolicyListItem>Les périodes d'essai gratuites, si elles sont proposées, seront converties en abonnement payant, sauf annulation avant la fin de l'essai.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Politique de remboursement</PolicyHeading>
                <PolicyParagraph>Nous ne traitons pas les remboursements directement. Toutes les demandes de remboursement doivent être soumises à Apple, car ils sont le commerçant officiel de toutes les transactions sur l'App Store.</PolicyParagraph>
                <PolicyParagraph>Apple gère les remboursements à sa discrétion conformément à sa politique de remboursement. Les cas éligibles courants incluent les achats accidentels, les frais non autorisés ou les achats qui n’ont pas fonctionné comme décrit.</PolicyParagraph>
                <PolicyParagraph>Pour demander un remboursement à Apple :</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Aller à<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</PolicyLink>et connectez-vous avec votre identifiant Apple</PolicyListItem>
                  <PolicyListItem>Recherchez l'achat du LiquidBoard et appuyez sur Signaler un problème.</PolicyListItem>
                  <PolicyListItem>Sélectionnez le motif et soumettez votre demande</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple répond généralement sous quelques jours ouvrables. Les décisions de remboursement sont prises uniquement par Apple.</PolicyParagraph>

                <PolicyHeading>Modifications de prix</PolicyHeading>
                <PolicyParagraph>Nous nous réservons le droit de modifier les prix des achats intégrés à tout moment. Les modifications de prix des abonnements seront communiquées à l'avance via l'App ou l'App Store et prendront effet au début de votre prochain cycle de facturation. Vous serez averti par Apple avant que toute modification du prix de l'abonnement ne prenne effet.</PolicyParagraph>

                <PolicyHeading>Achats échoués ou incomplets</PolicyHeading>
                <PolicyParagraph>Si un achat échoue ou si vous êtes facturé mais ne recevez pas le contenu, essayez d'abord de restaurer les achats dans l'application. Si le problème persiste, contactez-nous au<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>et nous enquêterons rapidement.</PolicyParagraph>

                <PolicyHeading>Contact</PolicyHeading>
                <PolicyParagraph>Pour des questions de facturation ou des problèmes d'achat, contactez-nous à :<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Pour les remboursements, veuillez utiliser le canal officiel d'Apple :<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">rapportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
