import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Datensicherheitsrichtlinie</PolicyHeading>
                <PolicyParagraph>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard wurde mit einem Datenschutz-First-Ansatz entwickelt. Ihre Daten verlassen niemals Ihr Gerät, es sei denn, Sie aktivieren ausdrücklich die iCloud-Synchronisierung. Wir haben keine Server, keine Konten und keinen Zugriff auf Ihre Inhalte.</PolicyParagraph>

                <PolicyHeading>Datenspeicherung</PolicyHeading>
                <PolicyParagraph>Alle Inhalte, die Sie in LiquidBoard erstellen – Textausschnitte, Bilder und Aufkleber – werden an einem von zwei Orten gespeichert:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Speicherung auf dem Gerät</PolicyEmphasis>– Von iOS verwaltet und nur für LiquidBoard zugänglich. Andere Apps können Ihre Daten nicht lesen.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (optional)</PolicyEmphasis>– Synchronisierung über Ihre persönliche Apple-ID mithilfe der verschlüsselten CloudKit-Infrastruktur von Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Auf unseren Servern werden keine Daten gespeichert. Wir betreiben keine Backend-Infrastruktur.</PolicyParagraph>

                <PolicyHeading>Verschlüsselung</PolicyHeading>
                <PolicyParagraph>Ihre Daten werden durch die Sicherheitsebenen von iOS und Apple geschützt:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>In Ruhe</PolicyEmphasis>— Auf Ihrem Gerät gespeicherte Daten werden von iOS mithilfe Ihres Gerätepasscodes und der Secure Enclave verschlüsselt.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Unterwegs</PolicyEmphasis>— Wenn iCloud Sync aktiviert ist, werden Daten vor der Übertragung durch Apples CloudKit verschlüsselt.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud-Backup</PolicyEmphasis>— Wenn Ihr Gerät in iCloud gesichert ist, sind App-Daten im verschlüsselten Backup-System von Apple enthalten.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Foto- und Bildsicherheit</PolicyHeading>
                <PolicyParagraph>LiquidBoard greift nur dann auf Ihre Fotobibliothek zu, wenn Sie sich ausdrücklich dafür entscheiden, ein Foto auszuwählen oder zu importieren. Die App:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Greift im Hintergrund nicht auf Ihre Fotobibliothek zu</PolicyListItem>
                  <PolicyListItem>Lädt keine Fotos auf einen Server hoch</PolicyListItem>
                  <PolicyListItem>Speichert ausgewählte Bilder lokal im Sandbox-Container der App</PolicyListItem>
                  <PolicyListItem>Verarbeitet die Aufklebererstellung vollständig auf dem Gerät</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Sie können den Fotozugriff jederzeit unter Einstellungen → Datenschutz & Sicherheit → Fotos widerrufen.</PolicyParagraph>

                <PolicyHeading>Sicherheit der Tastaturerweiterung</PolicyHeading>
                <PolicyParagraph>Die Tastaturerweiterung erfasst, protokolliert oder überträgt keine Tastenanschlagsdaten oder Texte, die Sie in anderen Apps eingeben.</PolicyParagraph>
                <PolicyParagraph>Für die Tastaturerweiterung ist Vollzugriff erforderlich, um Bilder und Aufkleber einzufügen und auf iCloud Sync zuzugreifen. Selbst wenn der Vollzugriff aktiviert ist, funktioniert die Tastaturerweiterung vollständig in der Sandbox-Umgebung von iOS. Es besteht keine Möglichkeit, Daten an externe Server zu senden.</PolicyParagraph>

                <PolicyHeading>Kein Datenzugriff Dritter</PolicyHeading>
                <PolicyParagraph>LiquidBoard integriert keines der folgenden Elemente:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Analyse- oder Absturzberichts-SDKs wie Firebase oder Mixpanel</PolicyListItem>
                  <PolicyListItem>Werbenetzwerke oder Tracking-SDKs</PolicyListItem>
                  <PolicyListItem>Cloud-Speicher- oder Verarbeitungsdienste von Drittanbietern</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Ihre Inhalte werden niemals an Dritte weitergegeben oder sind für diese zugänglich.</PolicyParagraph>

                <PolicyHeading>App-Sandbox</PolicyHeading>
                <PolicyParagraph>LiquidBoard läuft in der strengen App-Sandbox von iOS. Dies bedeutet, dass andere Apps auf Ihrem Gerät nicht auf die Daten von LiquidBoard zugreifen können und LiquidBoard nicht auf Daten anderer Apps zugreifen kann, mit Ausnahme von Inhalten, die Sie explizit über die Tastaturerweiterung einfügen.</PolicyParagraph>

                <PolicyHeading>Ihre Kontrolle</PolicyHeading>
                <PolicyParagraph>Sie haben jederzeit die volle Kontrolle über Ihre Daten:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Aktivieren oder deaktivieren Sie iCloud Sync in der App</PolicyListItem>
                  <PolicyListItem>Widerrufen Sie den Zugriff auf die Fotobibliothek in den iOS-Einstellungen</PolicyListItem>
                  <PolicyListItem>Deaktivieren Sie den Vollzugriff für die Tastatur unter Einstellungen → Allgemein → Tastatur → Tastaturen</PolicyListItem>
                  <PolicyListItem>Löschen Sie alle Daten, indem Sie die App löschen</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>Datenschutzrichtlinie</PolicyHeading>
                <PolicyParagraph>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard („wir“, „unser“ oder „die App“) verpflichtet sich, Ihre Privatsphäre zu schützen. In dieser Datenschutzrichtlinie wird erläutert, wie wir mit Informationen umgehen, wenn Sie LiquidBoard und seine Tastaturerweiterung verwenden.</PolicyParagraph>

                <PolicyHeading>Von uns erfasste Daten</PolicyHeading>
                <PolicyParagraph>LiquidBoard erhebt, speichert oder übermittelt keine personenbezogenen Daten an externe Server. Alle Daten, die Sie innerhalb der App erstellen – einschließlich Textausschnitte, Bilder, Aufkleber, Kategorien und Einstellungen – werden ausschließlich auf Ihrem Gerät oder in Ihrem persönlichen iCloud-Konto gespeichert.</PolicyParagraph>

                <PolicyHeading>Fotos & Bilder</PolicyHeading>
                <PolicyParagraph>LiquidBoard kann für folgende Zwecke Zugriff auf Ihre Fotobibliothek anfordern:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Einfügen von Bildern in Ihre Snippets</PolicyListItem>
                  <PolicyListItem>Erstellen Sie individuelle Aufkleber aus Ihren Fotos</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Von Ihnen ausgewählte Fotos werden lokal auf Ihrem Gerät gespeichert und/oder mit Ihrem persönlichen iCloud-Konto synchronisiert. Wir laden Ihre Fotos in keiner Weise hoch, übertragen sie oder greifen auf sie zu. Der Zugriff auf die Fotobibliothek wird nur in dem Moment genutzt, in dem Sie explizit ein Bild auswählen – die App greift nicht im Hintergrund auf Ihre Bibliothek zu.</PolicyParagraph>

                <PolicyHeading>Aufkleber</PolicyHeading>
                <PolicyParagraph>Mit LiquidBoard können Sie:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Erstellen Sie individuelle Aufkleber aus Ihren eigenen Fotos</PolicyListItem>
                  <PolicyListItem>Einfügen von Aufklebern über die Tastaturverlängerung</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Benutzerdefinierte Sticker, die Sie aus Ihren Fotos erstellen, werden nur auf Ihrem Gerät und/oder iCloud gespeichert. Es werden keine Aufkleberinhalte oder Bilddaten an uns übermittelt.</PolicyParagraph>

                <PolicyHeading>Tastaturerweiterung und voller Zugriff</PolicyHeading>
                <PolicyParagraph>Diese Tastaturerweiterung erfasst, zeichnet oder überträgt keine Tastenanschlagsdaten oder den von Ihnen eingegebenen Text.</PolicyParagraph>
                <PolicyParagraph>Für die Tastaturerweiterung von LiquidBoard muss der Vollzugriff aktiviert sein, um:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Fügen Sie Bilder und Aufkleber in andere Apps ein</PolicyListItem>
                  <PolicyListItem>Synchronisieren Sie Ihre Snippets und Sticker über iCloud auf Ihren Geräten</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Der Vollzugriff wird ausschließlich für diese Funktionen verwendet. Die Tastatur protokolliert, zeichnet oder überträgt nichts, was Sie in einer anderen App eingeben. Es werden keine Daten an einen externen Server gesendet.</PolicyParagraph>

                <PolicyHeading>iCloud-Synchronisierung</PolicyHeading>
                <PolicyParagraph>Wenn Sie die iCloud-Synchronisierung aktivieren, werden Ihre Textausschnitte, Bilder und Sticker über die iCloud-Infrastruktur von Apple mit Ihrer persönlichen Apple-ID synchronisiert. Diese Daten unterliegen der Datenschutzrichtlinie von Apple. Wir haben keinen Zugriff auf Ihre iCloud-Daten.</PolicyParagraph>

                <PolicyHeading>Datenaustausch</PolicyHeading>
                <PolicyParagraph>Wir verkaufen, teilen oder offenbaren Ihre Daten nicht an Dritte. Wir verwenden keine Analyse-, Werbe-SDKs oder Tracking-Tools von Drittanbietern.</PolicyParagraph>

                <PolicyHeading>Datenaufbewahrung und -löschung</PolicyHeading>
                <PolicyParagraph>Ihre Daten verbleiben auf Ihrem Gerät und/oder iCloud-Konto und unterliegen vollständig Ihrer Kontrolle. Sie können Ihre Daten jederzeit löschen, indem Sie:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Löschen einzelner Snippets, Bilder oder Sticker innerhalb der App</PolicyListItem>
                  <PolicyListItem>Widerrufen des Zugriffs auf die Fotobibliothek unter Einstellungen → Datenschutz → Fotos</PolicyListItem>
                  <PolicyListItem>Löschen der App, wodurch alle lokal gespeicherten Daten entfernt werden</PolicyListItem>
                  <PolicyListItem>Deaktivieren Sie die iCloud-Synchronisierung und entfernen Sie die iCloud-Daten der App über Einstellungen → [Ihr Name] → iCloud → Speicher verwalten</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Privatsphäre von Kindern</PolicyHeading>
                <PolicyParagraph>LiquidBoard sammelt wissentlich keine Informationen von Kindern unter 13 Jahren. Die App sammelt keine personenbezogenen Daten von Benutzern.</PolicyParagraph>

                <PolicyHeading>Änderungen an dieser Richtlinie</PolicyHeading>
                <PolicyParagraph>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden in der App und auf unserer Website mit einem aktualisierten Datum angezeigt.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Nutzungsbedingungen</PolicyHeading>
                <PolicyParagraph>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Durch das Herunterladen, Installieren oder Verwenden von LiquidBoard („die App“) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie die App bitte nicht.</PolicyParagraph>

                <PolicyHeading>Lizenz</PolicyHeading>
                <PolicyParagraph>Wir gewähren Ihnen eine begrenzte, nicht ausschließliche, nicht übertragbare und widerrufliche Lizenz zur Nutzung von LiquidBoard für Ihre persönlichen, nicht kommerziellen Zwecke, vorbehaltlich dieser Bedingungen.</PolicyParagraph>
                <PolicyParagraph>Sie dürfen nicht:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Die App oder ihren Inhalt kopieren, ändern oder verbreiten</PolicyListItem>
                  <PolicyListItem>Reverse Engineering oder Versuch, den Quellcode zu extrahieren</PolicyListItem>
                  <PolicyListItem>Nutzen Sie die App für rechtswidrige oder unbefugte Zwecke</PolicyListItem>
                  <PolicyListItem>Verkaufen, Unterlizenzieren oder Übertragen des Zugriffs auf die App an Dritte</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Ihr Inhalt</PolicyHeading>
                <PolicyParagraph>Sie behalten das volle Eigentum an allen Textausschnitten, Bildern und Aufklebern, die Sie erstellen oder in LiquidBoard importieren. Wir erheben keinen Anspruch auf Rechte an Ihren Inhalten.</PolicyParagraph>
                <PolicyParagraph>Sie sind allein dafür verantwortlich, sicherzustellen, dass die Inhalte, die Sie mit der App erstellen oder einfügen, keine Rechte Dritter, einschließlich Urheberrechte, Markenrechte oder Datenschutzrechte, verletzen.</PolicyParagraph>

                <PolicyHeading>Akzeptable Verwendung</PolicyHeading>
                <PolicyParagraph>Sie erklären sich damit einverstanden, LiquidBoard nicht zum Erstellen, Speichern oder Verteilen von Inhalten zu verwenden, die:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Ist rechtswidrig, schädlich, bedrohlich oder belästigend</PolicyListItem>
                  <PolicyListItem>Die geistigen Eigentumsrechte anderer verletzen</PolicyListItem>
                  <PolicyListItem>Enthält Malware, Viren oder bösartigen Code</PolicyListItem>
                  <PolicyListItem>Verstößt gegen geltendes lokales, nationales oder internationales Recht</PolicyListItem>
                </PolicyList>

                <PolicyHeading>In-App-Käufe</PolicyHeading>
                <PolicyParagraph>LiquidBoard bietet optionale In-App-Käufe an, um zusätzliche Funktionen oder Inhalte freizuschalten. Alle Käufe werden von Apple über den App Store abgewickelt und unterliegen den Verkaufsbedingungen von Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Käufe sind nicht erstattungsfähig, es sei denn, dies ist durch geltendes Recht oder die Rückerstattungsrichtlinie von Apple vorgeschrieben</PolicyListItem>
                  <PolicyListItem>Die Preise können je nach Region variieren und werden zum Zeitpunkt des Kaufs in Ihrer Landeswährung angezeigt</PolicyListItem>
                  <PolicyListItem>Gekaufte Funktionen sind an Ihre Apple-ID gebunden und können auf jedem Gerät wiederhergestellt werden, auf dem Sie mit derselben Apple-ID angemeldet sind</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Um eine Rückerstattung zu beantragen, wenden Sie sich bitte direkt an Apple unter:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Tastaturerweiterung und voller Zugriff</PolicyHeading>
                <PolicyParagraph>Die Aktivierung des Vollzugriffs für die Tastaturerweiterung ist erforderlich, um Bilder und Aufkleber in andere Apps einzufügen und die iCloud-Synchronisierung zu aktivieren. Vollzugriff gewährt uns keinen Zugriff auf alles, was Sie eingeben.</PolicyParagraph>
                <PolicyParagraph>Sie erkennen an, dass iOS durch die Aktivierung des Vollzugriffs einen Systemhinweis anzeigt, der Sie darüber informiert, dass der Tastaturentwickler möglicherweise auf Ihre Eingaben zugreifen könnte. Wir möchten es ausdrücklich sagen: LiquidBoard sammelt, protokolliert oder übermittelt keine Daten über Tastenanschläge.</PolicyParagraph>

                <PolicyHeading>iCloud-Synchronisierung</PolicyHeading>
                <PolicyParagraph>iCloud Sync ist eine optionale Funktion, die Ihr persönliches Apple iCloud-Konto verwendet, um Ihre Daten geräteübergreifend zu synchronisieren. Die Nutzung von iCloud unterliegt den Allgemeinen Geschäftsbedingungen von Apple. Wir sind nicht verantwortlich für Datenverluste, die durch Unterbrechungen des iCloud-Dienstes entstehen.</PolicyParagraph>

                <PolicyHeading>Haftungsausschluss</PolicyHeading>
                <PolicyParagraph>LiquidBoard wird „wie besehen“ und „wie verfügbar“ ohne Gewährleistungen jeglicher Art, weder ausdrücklich noch stillschweigend, bereitgestellt, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck oder der Nichtverletzung von Rechten Dritter.</PolicyParagraph>
                <PolicyParagraph>Wir garantieren nicht, dass die App unterbrechungsfrei, fehlerfrei oder frei von Viren oder anderen schädlichen Komponenten ist.</PolicyParagraph>

                <PolicyHeading>Haftungsbeschränkung</PolicyHeading>
                <PolicyParagraph>Im größtmöglichen gesetzlich zulässigen Umfang haften wir nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich, aber nicht beschränkt auf Datenverlust, entgangenen Gewinn oder Verlust von Geschäftswert, die sich aus Ihrer Nutzung oder Unmöglichkeit der Nutzung der App ergeben.</PolicyParagraph>

                <PolicyHeading>Beendigung</PolicyHeading>
                <PolicyParagraph>Wir behalten uns das Recht vor, Ihren Zugriff auf die App jederzeit und ohne Vorankündigung zu beenden oder einzuschränken, wenn wir glauben, dass dies gegen diese Bedingungen verstößt oder für andere Benutzer, uns oder Dritte schädlich ist.</PolicyParagraph>
                <PolicyParagraph>Sie können die Nutzung der App jederzeit beenden, indem Sie sie von Ihrem Gerät löschen.</PolicyParagraph>

                <PolicyHeading>Änderungen dieser Bedingungen</PolicyHeading>
                <PolicyParagraph>Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Durch die fortgesetzte Nutzung der App nach der Veröffentlichung von Änderungen erklären Sie sich mit den überarbeiteten Bedingungen einverstanden. Wir werden Sie über die App oder unsere Website über wesentliche Änderungen informieren.</PolicyParagraph>

                <PolicyHeading>Geltendes Recht</PolicyHeading>
                <PolicyParagraph>Diese Bedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der der Entwickler seinen Sitz hat und werden in Übereinstimmung mit diesen ausgelegt, ohne Rücksicht auf Kollisionsnormen.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Zahlungs- und Rückerstattungsrichtlinien</PolicyHeading>
                <PolicyParagraph>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard bietet optionale In-App-Käufe an, um Premium-Funktionen freizuschalten. Alle Zahlungen werden vollständig von Apple über den App Store abgewickelt. Wir verarbeiten oder speichern Ihre Zahlungsinformationen nicht und haben auch keinen Zugriff darauf.</PolicyParagraph>

                <PolicyHeading>Was Sie kaufen können</PolicyHeading>
                <PolicyParagraph>LiquidBoard bietet die folgenden optionalen Käufe an:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Premium-Funktionen – Einmalige oder Abonnement-Freischaltung für erweiterte App-Funktionalität</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Verfügbare Käufe und Preise werden zum Zeitpunkt des Kaufs in der App angezeigt. Die Preise können je nach Region variieren und werden in Ihrer Landeswährung angezeigt.</PolicyParagraph>

                <PolicyHeading>Zahlungsabwicklung</PolicyHeading>
                <PolicyParagraph>Alle Transaktionen werden sicher von Apple verarbeitet. Wir sehen oder speichern niemals Ihre Kreditkarte, Rechnungsadresse oder Zahlungsdetails.</PolicyParagraph>
                <PolicyParagraph>Durch den Abschluss eines Kaufs stimmen Sie den Verkaufsbedingungen des App Store von Apple zu. Ihre bei Apple hinterlegte Zahlungsmethode wird zum Zeitpunkt der Kaufbestätigung belastet.</PolicyParagraph>

                <PolicyHeading>Einkäufe wiederherstellen</PolicyHeading>
                <PolicyParagraph>Wenn Sie LiquidBoard neu installieren oder zu einem neuen Gerät wechseln, können Sie alle vorherigen Käufe ohne zusätzliche Kosten wiederherstellen, indem Sie die Option „Käufe wiederherstellen“ in der App verwenden. Käufe sind an Ihre Apple-ID gebunden und auf allen Geräten verfügbar, auf denen Sie mit demselben Konto angemeldet sind.</PolicyParagraph>

                <PolicyHeading>Abonnements</PolicyHeading>
                <PolicyParagraph>Wenn LiquidBoard abonnementbasierte Käufe anbietet:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor dem Ende des aktuellen Abrechnungszeitraums gekündigt werden</PolicyListItem>
                  <PolicyListItem>Die Verlängerung Ihrer Apple-ID wird innerhalb von 24 Stunden vor Ablauf des aktuellen Zeitraums in Rechnung gestellt</PolicyListItem>
                  <PolicyListItem>Sie können Abonnements jederzeit unter Einstellungen → [Ihr Name] → Abonnements verwalten oder kündigen</PolicyListItem>
                  <PolicyListItem>Die Kündigung eines Abonnements wird zum Ende des aktuellen kostenpflichtigen Zeitraums wirksam – bis dahin behalten Sie den Zugriff</PolicyListItem>
                  <PolicyListItem>Sofern kostenlose Probezeiträume angeboten werden, werden sie in ein kostenpflichtiges Abonnement umgewandelt, sofern sie nicht vor Ablauf der Probezeit gekündigt werden</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Rückerstattungsrichtlinie</PolicyHeading>
                <PolicyParagraph>Wir bearbeiten Rückerstattungen nicht direkt. Alle Rückerstattungsanträge müssen an Apple gerichtet werden, da Apple der eingetragene Händler für alle App Store-Transaktionen ist.</PolicyParagraph>
                <PolicyParagraph>Apple wickelt Rückerstattungen nach eigenem Ermessen und in Übereinstimmung mit seinen Rückerstattungsrichtlinien ab. Zu den häufigsten berechtigten Fällen gehören versehentliche Käufe, nicht autorisierte Belastungen oder Käufe, die nicht wie beschrieben funktionierten.</PolicyParagraph>
                <PolicyParagraph>So beantragen Sie eine Rückerstattung bei Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Gehe zu<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>und melden Sie sich mit Ihrer Apple-ID an</PolicyListItem>
                  <PolicyListItem>Suchen Sie den LiquidBoard-Kauf und tippen Sie auf „Problem melden“.</PolicyListItem>
                  <PolicyListItem>Wählen Sie den Grund aus und senden Sie Ihre Anfrage</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple antwortet in der Regel innerhalb weniger Werktage. Entscheidungen über Rückerstattungen werden ausschließlich von Apple getroffen.</PolicyParagraph>

                <PolicyHeading>Preisänderungen</PolicyHeading>
                <PolicyParagraph>Wir behalten uns das Recht vor, die Preise für In-App-Käufe jederzeit zu ändern. Preisänderungen für Abonnements werden im Voraus über die App oder den App Store mitgeteilt und treten zu Beginn Ihres nächsten Abrechnungszeitraums in Kraft. Sie werden von Apple benachrichtigt, bevor eine Änderung des Abonnementpreises wirksam wird.</PolicyParagraph>

                <PolicyHeading>Fehlgeschlagene oder unvollständige Käufe</PolicyHeading>
                <PolicyParagraph>Wenn ein Kauf fehlschlägt oder Ihnen eine Gebühr berechnet wird, Sie den Inhalt aber nicht erhalten, versuchen Sie bitte zunächst, Käufe in der App wiederherzustellen. Wenn das Problem weiterhin besteht, kontaktieren Sie uns unter<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>und wir werden umgehend nachforschen.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Bei Rechnungsfragen oder Kaufproblemen kontaktieren Sie uns unter:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Für Rückerstattungen nutzen Sie bitte den offiziellen Kanal von Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
