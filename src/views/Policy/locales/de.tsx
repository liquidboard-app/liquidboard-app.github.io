
export const Security = () => (
  <>
    <h2>Datensicherheitsrichtlinie</h2>
                <p>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard wurde mit einem Datenschutz-First-Ansatz entwickelt. Ihre Daten verlassen niemals Ihr Gerät, es sei denn, Sie aktivieren ausdrücklich die iCloud-Synchronisierung. Wir haben keine Server, keine Konten und keinen Zugriff auf Ihre Inhalte.</p>

                <h2>Datenspeicherung</h2>
                <p>Alle Inhalte, die Sie in LiquidBoard erstellen – Textausschnitte, Bilder und Aufkleber – werden an einem von zwei Orten gespeichert:</p>
                <ul>
                  <li><strong>Speicherung auf dem Gerät</strong>– Von iOS verwaltet und nur für LiquidBoard zugänglich. Andere Apps können Ihre Daten nicht lesen.</li>
                  <li><strong>iCloud (optional)</strong>– Synchronisierung über Ihre persönliche Apple-ID mithilfe der verschlüsselten CloudKit-Infrastruktur von Apple.</li>
                </ul>
                <p>Auf unseren Servern werden keine Daten gespeichert. Wir betreiben keine Backend-Infrastruktur.</p>

                <h2>Verschlüsselung</h2>
                <p>Ihre Daten werden durch die Sicherheitsebenen von iOS und Apple geschützt:</p>
                <ul>
                  <li><strong>In Ruhe</strong>— Auf Ihrem Gerät gespeicherte Daten werden von iOS mithilfe Ihres Gerätepasscodes und der Secure Enclave verschlüsselt.</li>
                  <li><strong>Unterwegs</strong>— Wenn iCloud Sync aktiviert ist, werden Daten vor der Übertragung durch Apples CloudKit verschlüsselt.</li>
                  <li><strong>iCloud-Backup</strong>— Wenn Ihr Gerät in iCloud gesichert ist, sind App-Daten im verschlüsselten Backup-System von Apple enthalten.</li>
                </ul>

                <h2>Foto- und Bildsicherheit</h2>
                <p>LiquidBoard greift nur dann auf Ihre Fotobibliothek zu, wenn Sie sich ausdrücklich dafür entscheiden, ein Foto auszuwählen oder zu importieren. Die App:</p>
                <ul>
                  <li>Greift im Hintergrund nicht auf Ihre Fotobibliothek zu</li>
                  <li>Lädt keine Fotos auf einen Server hoch</li>
                  <li>Speichert ausgewählte Bilder lokal im Sandbox-Container der App</li>
                  <li>Verarbeitet die Aufklebererstellung vollständig auf dem Gerät</li>
                </ul>
                <p>Sie können den Fotozugriff jederzeit unter Einstellungen → Datenschutz & Sicherheit → Fotos widerrufen.</p>

                <h2>Sicherheit der Tastaturerweiterung</h2>
                <p>Die Tastaturerweiterung erfasst, protokolliert oder überträgt keine Tastenanschlagsdaten oder Texte, die Sie in anderen Apps eingeben.</p>
                <p>Für die Tastaturerweiterung ist Vollzugriff erforderlich, um Bilder und Aufkleber einzufügen und auf iCloud Sync zuzugreifen. Selbst wenn der Vollzugriff aktiviert ist, funktioniert die Tastaturerweiterung vollständig in der Sandbox-Umgebung von iOS. Es besteht keine Möglichkeit, Daten an externe Server zu senden.</p>

                <h2>Kein Datenzugriff Dritter</h2>
                <p>LiquidBoard integriert keines der folgenden Elemente:</p>
                <ul>
                  <li>Analyse- oder Absturzberichts-SDKs wie Firebase oder Mixpanel</li>
                  <li>Werbenetzwerke oder Tracking-SDKs</li>
                  <li>Cloud-Speicher- oder Verarbeitungsdienste von Drittanbietern</li>
                </ul>
                <p>Ihre Inhalte werden niemals an Dritte weitergegeben oder sind für diese zugänglich.</p>

                <h2>App-Sandbox</h2>
                <p>LiquidBoard läuft in der strengen App-Sandbox von iOS. Dies bedeutet, dass andere Apps auf Ihrem Gerät nicht auf die Daten von LiquidBoard zugreifen können und LiquidBoard nicht auf Daten anderer Apps zugreifen kann, mit Ausnahme von Inhalten, die Sie explizit über die Tastaturerweiterung einfügen.</p>

                <h2>Ihre Kontrolle</h2>
                <p>Sie haben jederzeit die volle Kontrolle über Ihre Daten:</p>
                <ul>
                  <li>Aktivieren oder deaktivieren Sie iCloud Sync in der App</li>
                  <li>Widerrufen Sie den Zugriff auf die Fotobibliothek in den iOS-Einstellungen</li>
                  <li>Deaktivieren Sie den Vollzugriff für die Tastatur unter Einstellungen → Allgemein → Tastatur → Tastaturen</li>
                  <li>Löschen Sie alle Daten, indem Sie die App löschen</li>
                </ul>

                <h2>Kontakt</h2>
                <p>Wenn Sie Fragen zum Datenschutz haben, kontaktieren Sie uns bitte unter:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Datenschutzrichtlinie</h2>
                <p>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard („wir“, „unser“ oder „die App“) verpflichtet sich, Ihre Privatsphäre zu schützen. In dieser Datenschutzrichtlinie wird erläutert, wie wir mit Informationen umgehen, wenn Sie LiquidBoard und seine Tastaturerweiterung verwenden.</p>

                <h2>Von uns erfasste Daten</h2>
                <p>LiquidBoard erhebt, speichert oder übermittelt keine personenbezogenen Daten an externe Server. Alle Daten, die Sie innerhalb der App erstellen – einschließlich Textausschnitte, Bilder, Aufkleber, Kategorien und Einstellungen – werden ausschließlich auf Ihrem Gerät oder in Ihrem persönlichen iCloud-Konto gespeichert.</p>

                <h2>Fotos & Bilder</h2>
                <p>LiquidBoard kann für folgende Zwecke Zugriff auf Ihre Fotobibliothek anfordern:</p>
                <ul>
                  <li>Einfügen von Bildern in Ihre Snippets</li>
                  <li>Erstellen Sie individuelle Aufkleber aus Ihren Fotos</li>
                </ul>
                <p>Von Ihnen ausgewählte Fotos werden lokal auf Ihrem Gerät gespeichert und/oder mit Ihrem persönlichen iCloud-Konto synchronisiert. Wir laden Ihre Fotos in keiner Weise hoch, übertragen sie oder greifen auf sie zu. Der Zugriff auf die Fotobibliothek wird nur in dem Moment genutzt, in dem Sie explizit ein Bild auswählen – die App greift nicht im Hintergrund auf Ihre Bibliothek zu.</p>

                <h2>Aufkleber</h2>
                <p>Mit LiquidBoard können Sie:</p>
                <ul>
                  <li>Erstellen Sie individuelle Aufkleber aus Ihren eigenen Fotos</li>
                  <li>Einfügen von Aufklebern über die Tastaturverlängerung</li>
                </ul>
                <p>Benutzerdefinierte Sticker, die Sie aus Ihren Fotos erstellen, werden nur auf Ihrem Gerät und/oder iCloud gespeichert. Es werden keine Aufkleberinhalte oder Bilddaten an uns übermittelt.</p>

                <h2>Tastaturerweiterung und voller Zugriff</h2>
                <p>Diese Tastaturerweiterung erfasst, zeichnet oder überträgt keine Tastenanschlagsdaten oder den von Ihnen eingegebenen Text.</p>
                <p>Für die Tastaturerweiterung von LiquidBoard muss der Vollzugriff aktiviert sein, um:</p>
                <ul>
                  <li>Fügen Sie Bilder und Aufkleber in andere Apps ein</li>
                  <li>Synchronisieren Sie Ihre Snippets und Sticker über iCloud auf Ihren Geräten</li>
                </ul>
                <p>Der Vollzugriff wird ausschließlich für diese Funktionen verwendet. Die Tastatur protokolliert, zeichnet oder überträgt nichts, was Sie in einer anderen App eingeben. Es werden keine Daten an einen externen Server gesendet.</p>

                <h2>iCloud-Synchronisierung</h2>
                <p>Wenn Sie die iCloud-Synchronisierung aktivieren, werden Ihre Textausschnitte, Bilder und Sticker über die iCloud-Infrastruktur von Apple mit Ihrer persönlichen Apple-ID synchronisiert. Diese Daten unterliegen der Datenschutzrichtlinie von Apple. Wir haben keinen Zugriff auf Ihre iCloud-Daten.</p>

                <h2>Datenaustausch</h2>
                <p>Wir verkaufen, teilen oder offenbaren Ihre Daten nicht an Dritte. Wir verwenden keine Analyse-, Werbe-SDKs oder Tracking-Tools von Drittanbietern.</p>

                <h2>Datenaufbewahrung und -löschung</h2>
                <p>Ihre Daten verbleiben auf Ihrem Gerät und/oder iCloud-Konto und unterliegen vollständig Ihrer Kontrolle. Sie können Ihre Daten jederzeit löschen, indem Sie:</p>
                <ul>
                  <li>Löschen einzelner Snippets, Bilder oder Sticker innerhalb der App</li>
                  <li>Widerrufen des Zugriffs auf die Fotobibliothek unter Einstellungen → Datenschutz → Fotos</li>
                  <li>Löschen der App, wodurch alle lokal gespeicherten Daten entfernt werden</li>
                  <li>Deaktivieren Sie die iCloud-Synchronisierung und entfernen Sie die iCloud-Daten der App über Einstellungen → [Ihr Name] → iCloud → Speicher verwalten</li>
                </ul>

                <h2>Privatsphäre von Kindern</h2>
                <p>LiquidBoard sammelt wissentlich keine Informationen von Kindern unter 13 Jahren. Die App sammelt keine personenbezogenen Daten von Benutzern.</p>

                <h2>Änderungen an dieser Richtlinie</h2>
                <p>Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden in der App und auf unserer Website mit einem aktualisierten Datum angezeigt.</p>

                <h2>Kontakt</h2>
                <p>Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Nutzungsbedingungen</h2>
                <p>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</p>
                <p>Durch das Herunterladen, Installieren oder Verwenden von LiquidBoard („die App“) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie die App bitte nicht.</p>

                <h2>Lizenz</h2>
                <p>Wir gewähren Ihnen eine begrenzte, nicht ausschließliche, nicht übertragbare und widerrufliche Lizenz zur Nutzung von LiquidBoard für Ihre persönlichen, nicht kommerziellen Zwecke, vorbehaltlich dieser Bedingungen.</p>
                <p>Sie dürfen nicht:</p>
                <ul>
                  <li>Die App oder ihren Inhalt kopieren, ändern oder verbreiten</li>
                  <li>Reverse Engineering oder Versuch, den Quellcode zu extrahieren</li>
                  <li>Nutzen Sie die App für rechtswidrige oder unbefugte Zwecke</li>
                  <li>Verkaufen, Unterlizenzieren oder Übertragen des Zugriffs auf die App an Dritte</li>
                </ul>

                <h2>Ihr Inhalt</h2>
                <p>Sie behalten das volle Eigentum an allen Textausschnitten, Bildern und Aufklebern, die Sie erstellen oder in LiquidBoard importieren. Wir erheben keinen Anspruch auf Rechte an Ihren Inhalten.</p>
                <p>Sie sind allein dafür verantwortlich, sicherzustellen, dass die Inhalte, die Sie mit der App erstellen oder einfügen, keine Rechte Dritter, einschließlich Urheberrechte, Markenrechte oder Datenschutzrechte, verletzen.</p>

                <h2>Akzeptable Verwendung</h2>
                <p>Sie erklären sich damit einverstanden, LiquidBoard nicht zum Erstellen, Speichern oder Verteilen von Inhalten zu verwenden, die:</p>
                <ul>
                  <li>Ist rechtswidrig, schädlich, bedrohlich oder belästigend</li>
                  <li>Die geistigen Eigentumsrechte anderer verletzen</li>
                  <li>Enthält Malware, Viren oder bösartigen Code</li>
                  <li>Verstößt gegen geltendes lokales, nationales oder internationales Recht</li>
                </ul>

                <h2>In-App-Käufe</h2>
                <p>LiquidBoard bietet optionale In-App-Käufe an, um zusätzliche Funktionen oder Inhalte freizuschalten. Alle Käufe werden von Apple über den App Store abgewickelt und unterliegen den Verkaufsbedingungen von Apple.</p>
                <ul>
                  <li>Käufe sind nicht erstattungsfähig, es sei denn, dies ist durch geltendes Recht oder die Rückerstattungsrichtlinie von Apple vorgeschrieben</li>
                  <li>Die Preise können je nach Region variieren und werden zum Zeitpunkt des Kaufs in Ihrer Landeswährung angezeigt</li>
                  <li>Gekaufte Funktionen sind an Ihre Apple-ID gebunden und können auf jedem Gerät wiederhergestellt werden, auf dem Sie mit derselben Apple-ID angemeldet sind</li>
                </ul>
                <p>Um eine Rückerstattung zu beantragen, wenden Sie sich bitte direkt an Apple unter:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Tastaturerweiterung und voller Zugriff</h2>
                <p>Die Aktivierung des Vollzugriffs für die Tastaturerweiterung ist erforderlich, um Bilder und Aufkleber in andere Apps einzufügen und die iCloud-Synchronisierung zu aktivieren. Vollzugriff gewährt uns keinen Zugriff auf alles, was Sie eingeben.</p>
                <p>Sie erkennen an, dass iOS durch die Aktivierung des Vollzugriffs einen Systemhinweis anzeigt, der Sie darüber informiert, dass der Tastaturentwickler möglicherweise auf Ihre Eingaben zugreifen könnte. Wir möchten es ausdrücklich sagen: LiquidBoard sammelt, protokolliert oder übermittelt keine Daten über Tastenanschläge.</p>

                <h2>iCloud-Synchronisierung</h2>
                <p>iCloud Sync ist eine optionale Funktion, die Ihr persönliches Apple iCloud-Konto verwendet, um Ihre Daten geräteübergreifend zu synchronisieren. Die Nutzung von iCloud unterliegt den Allgemeinen Geschäftsbedingungen von Apple. Wir sind nicht verantwortlich für Datenverluste, die durch Unterbrechungen des iCloud-Dienstes entstehen.</p>

                <h2>Haftungsausschluss</h2>
                <p>LiquidBoard wird „wie besehen“ und „wie verfügbar“ ohne Gewährleistungen jeglicher Art, weder ausdrücklich noch stillschweigend, bereitgestellt, einschließlich, aber nicht beschränkt auf Gewährleistungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck oder der Nichtverletzung von Rechten Dritter.</p>
                <p>Wir garantieren nicht, dass die App unterbrechungsfrei, fehlerfrei oder frei von Viren oder anderen schädlichen Komponenten ist.</p>

                <h2>Haftungsbeschränkung</h2>
                <p>Im größtmöglichen gesetzlich zulässigen Umfang haften wir nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden, einschließlich, aber nicht beschränkt auf Datenverlust, entgangenen Gewinn oder Verlust von Geschäftswert, die sich aus Ihrer Nutzung oder Unmöglichkeit der Nutzung der App ergeben.</p>

                <h2>Beendigung</h2>
                <p>Wir behalten uns das Recht vor, Ihren Zugriff auf die App jederzeit und ohne Vorankündigung zu beenden oder einzuschränken, wenn wir glauben, dass dies gegen diese Bedingungen verstößt oder für andere Benutzer, uns oder Dritte schädlich ist.</p>
                <p>Sie können die Nutzung der App jederzeit beenden, indem Sie sie von Ihrem Gerät löschen.</p>

                <h2>Änderungen dieser Bedingungen</h2>
                <p>Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Durch die fortgesetzte Nutzung der App nach der Veröffentlichung von Änderungen erklären Sie sich mit den überarbeiteten Bedingungen einverstanden. Wir werden Sie über die App oder unsere Website über wesentliche Änderungen informieren.</p>

                <h2>Geltendes Recht</h2>
                <p>Diese Bedingungen unterliegen den Gesetzen der Gerichtsbarkeit, in der der Entwickler seinen Sitz hat, und werden in Übereinstimmung mit diesen ausgelegt, ohne Rücksicht auf Kollisionsnormen.</p>

                <h2>Kontakt</h2>
                <p>Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte unter:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Zahlungs- und Rückerstattungsrichtlinien</h2>
                <p>Letzte Aktualisierung: 5. Juni 2026 · LiquidBoard</p>
                <p>LiquidBoard bietet optionale In-App-Käufe an, um Premium-Funktionen freizuschalten. Alle Zahlungen werden vollständig von Apple über den App Store abgewickelt. Wir verarbeiten oder speichern Ihre Zahlungsinformationen nicht und haben auch keinen Zugriff darauf.</p>

                <h2>Was Sie kaufen können</h2>
                <p>LiquidBoard bietet die folgenden optionalen Käufe an:</p>
                <ul>
                  <li>Premium-Funktionen – Einmalige oder Abonnement-Freischaltung für erweiterte App-Funktionalität</li>
                </ul>
                <p>Verfügbare Käufe und Preise werden zum Zeitpunkt des Kaufs in der App angezeigt. Die Preise können je nach Region variieren und werden in Ihrer Landeswährung angezeigt.</p>

                <h2>Zahlungsabwicklung</h2>
                <p>Alle Transaktionen werden sicher von Apple verarbeitet. Wir sehen oder speichern niemals Ihre Kreditkarte, Rechnungsadresse oder Zahlungsdetails.</p>
                <p>Durch den Abschluss eines Kaufs stimmen Sie den Verkaufsbedingungen des App Store von Apple zu. Ihre bei Apple hinterlegte Zahlungsmethode wird zum Zeitpunkt der Kaufbestätigung belastet.</p>

                <h2>Einkäufe wiederherstellen</h2>
                <p>Wenn Sie LiquidBoard neu installieren oder zu einem neuen Gerät wechseln, können Sie alle vorherigen Käufe ohne zusätzliche Kosten wiederherstellen, indem Sie die Option „Käufe wiederherstellen“ in der App verwenden. Käufe sind an Ihre Apple-ID gebunden und auf allen Geräten verfügbar, auf denen Sie mit demselben Konto angemeldet sind.</p>

                <h2>Abonnements</h2>
                <p>Wenn LiquidBoard abonnementbasierte Käufe anbietet:</p>
                <ul>
                  <li>Abonnements verlängern sich automatisch, sofern sie nicht mindestens 24 Stunden vor dem Ende des aktuellen Abrechnungszeitraums gekündigt werden</li>
                  <li>Die Verlängerung Ihrer Apple-ID wird innerhalb von 24 Stunden vor Ablauf des aktuellen Zeitraums in Rechnung gestellt</li>
                  <li>Sie können Abonnements jederzeit unter Einstellungen → [Ihr Name] → Abonnements verwalten oder kündigen</li>
                  <li>Die Kündigung eines Abonnements wird zum Ende des aktuellen kostenpflichtigen Zeitraums wirksam – bis dahin behalten Sie den Zugriff</li>
                  <li>Sofern kostenlose Probezeiträume angeboten werden, werden sie in ein kostenpflichtiges Abonnement umgewandelt, sofern sie nicht vor Ablauf der Probezeit gekündigt werden</li>
                </ul>

                <h2>Rückerstattungsrichtlinie</h2>
                <p>Wir bearbeiten Rückerstattungen nicht direkt. Alle Rückerstattungsanträge müssen an Apple gerichtet werden, da Apple der eingetragene Händler für alle App Store-Transaktionen ist.</p>
                <p>Apple wickelt Rückerstattungen nach eigenem Ermessen und in Übereinstimmung mit seinen Rückerstattungsrichtlinien ab. Zu den häufigsten berechtigten Fällen gehören versehentliche Käufe, nicht autorisierte Belastungen oder Käufe, die nicht wie beschrieben funktionierten.</p>
                <p>So beantragen Sie eine Rückerstattung bei Apple:</p>
                <ul>
                  <li>Gehe zu<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>und melden Sie sich mit Ihrer Apple-ID an</li>
                  <li>Suchen Sie den LiquidBoard-Kauf und tippen Sie auf „Problem melden“.</li>
                  <li>Wählen Sie den Grund aus und senden Sie Ihre Anfrage</li>
                </ul>
                <p>Apple antwortet in der Regel innerhalb weniger Werktage. Entscheidungen über Rückerstattungen werden ausschließlich von Apple getroffen.</p>

                <h2>Preisänderungen</h2>
                <p>Wir behalten uns das Recht vor, die Preise für In-App-Käufe jederzeit zu ändern. Preisänderungen für Abonnements werden im Voraus über die App oder den App Store mitgeteilt und treten zu Beginn Ihres nächsten Abrechnungszeitraums in Kraft. Sie werden von Apple benachrichtigt, bevor eine Änderung des Abonnementpreises wirksam wird.</p>

                <h2>Fehlgeschlagene oder unvollständige Käufe</h2>
                <p>Wenn ein Kauf fehlschlägt oder Ihnen eine Gebühr berechnet wird, Sie den Inhalt aber nicht erhalten, versuchen Sie bitte zunächst, Käufe in der App wiederherzustellen. Wenn das Problem weiterhin besteht, kontaktieren Sie uns unter<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>und wir werden umgehend nachforschen.</p>

                <h2>Kontakt</h2>
                <p>Bei Rechnungsfragen oder Kaufproblemen kontaktieren Sie uns unter:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Für Rückerstattungen nutzen Sie bitte den offiziellen Kanal von Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
