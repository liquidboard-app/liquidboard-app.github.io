import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Politica sulla Sicurezza dei Dati</PolicyHeading>
                <PolicyParagraph>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard è progettato con un approccio incentrato sulla privacy. I tuoi dati non lasciano mai il tuo dispositivo a meno che tu non scelga esplicitamente di abilitare la sincronizzazione iCloud. Non abbiamo server, account o accesso ai tuoi contenuti.</PolicyParagraph>

                <PolicyHeading>Archiviazione dei dati</PolicyHeading>
                <PolicyParagraph>Tutti i contenuti che crei in LiquidBoard — frammenti di testo, immagini e adesivi — vengono memorizzati in uno di due luoghi:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Archiviazione sul dispositivo</PolicyEmphasis>— Gestito da iOS e accessibile solo a LiquidBoard. Altre app non possono leggere i tuoi dati.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opzionale)</PolicyEmphasis>— Sincronizzato tramite il tuo ID Apple personale utilizzando l'infrastruttura CloudKit crittografata di Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Nessun dato viene memorizzato sui nostri server. Non gestiamo alcuna infrastruttura backend.</PolicyParagraph>

                <PolicyHeading>Crittografia</PolicyHeading>
                <PolicyParagraph>I tuoi dati sono protetti da iOS e dagli strati di sicurezza di Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>A riposo</PolicyEmphasis>— I dati memorizzati sul tuo dispositivo sono crittografati da iOS utilizzando il codice del dispositivo e il Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>In transito</PolicyEmphasis>— Se la sincronizzazione iCloud è abilitata i dati vengono crittografati da CloudKit di Apple prima di essere trasmessi.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Backup iCloud</PolicyEmphasis>— Se il tuo dispositivo è eseguito il backup su iCloud i dati delle app sono inclusi nel sistema di backup crittografato di Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Sicurezza di Foto e Immagini</PolicyHeading>
                <PolicyParagraph>LiquidBoard accede alla tua libreria fotografica solo quando scegli esplicitamente di selezionare o importare una foto. L'app:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Non accede alla tua libreria fotografica in background</PolicyListItem>
                  <PolicyListItem>Non carica foto su nessun server</PolicyListItem>
                  <PolicyListItem>Memorizza le immagini selezionate localmente nel contenitore isolato dell'app</PolicyListItem>
                  <PolicyListItem>Elabora la creazione di adesivi interamente sul dispositivo</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Puoi revocare l'accesso alle foto in qualsiasi momento in Impostazioni → Privacy e Sicurezza → Foto.</PolicyParagraph>

                <PolicyHeading>Sicurezza dell'estensione della tastiera</PolicyHeading>
                <PolicyParagraph>L'estensione della tastiera non raccoglie, registra né trasmette alcun dato dei tasti premuti o del testo che digiti in altre app.</PolicyParagraph>
                <PolicyParagraph>È richiesto l'accesso completo all'estensione della tastiera per incollare immagini e adesivi e per accedere alla sincronizzazione iCloud. Anche con l'accesso completo abilitato, l'estensione della tastiera funziona interamente all'interno dell'ambiente sandbox di iOS. Non ha la possibilità di inviare dati a server esterni.</PolicyParagraph>

                <PolicyHeading>Nessun accesso ai dati da parte di terzi</PolicyHeading>
                <PolicyParagraph>LiquidBoard non integra nessuno dei seguenti:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK per analisi o segnalazione di crash, come Firebase o Mixpanel</PolicyListItem>
                  <PolicyListItem>Reti pubblicitarie o SDK di tracciamento</PolicyListItem>
                  <PolicyListItem>Servizi di archiviazione o elaborazione cloud di terze parti</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>I tuoi contenuti non vengono mai condivisi né sono accessibili a terzi.</PolicyParagraph>

                <PolicyHeading>Sandbox dell'app</PolicyHeading>
                <PolicyParagraph>LiquidBoard funziona nel rigido sandbox delle app di iOS. Questo significa che altre app sul tuo dispositivo non possono accedere ai dati di LiquidBoard e LiquidBoard non può accedere ai dati appartenenti ad altre app, tranne il contenuto che incolli esplicitamente tramite l'estensione della tastiera.</PolicyParagraph>

                <PolicyHeading>Il tuo controllo</PolicyHeading>
                <PolicyParagraph>Hai il pieno controllo dei tuoi dati in ogni momento:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Abilita o disabilita la sincronizzazione iCloud dall'interno dell'app</PolicyListItem>
                  <PolicyListItem>Revoca l'accesso alla libreria fotografica nelle Impostazioni iOS</PolicyListItem>
                  <PolicyListItem>Disattiva l'accesso completo per la tastiera in Impostazioni → Generali → Tastiera → Tastiere</PolicyListItem>
                  <PolicyListItem>Elimina tutti i dati eliminando l'app</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Contatto</PolicyHeading>
                <PolicyParagraph>Se avete domande sulla sicurezza dei dati, vi preghiamo di contattarci a:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>Informativa sulla Privacy</PolicyHeading>
                <PolicyParagraph>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard ("noi", "nostro" o "l'app") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come gestiamo le informazioni quando utilizzi LiquidBoard e la sua estensione della tastiera.</PolicyParagraph>

                <PolicyHeading>Dati che raccogliamo</PolicyHeading>
                <PolicyParagraph>LiquidBoard non raccoglie, memorizza né trasmette alcun dato personale a server esterni. Tutti i dati che crei all'interno dell'app — inclusi frammenti di testo, immagini, adesivi, categorie e impostazioni — sono memorizzati esclusivamente sul tuo dispositivo o nel tuo account iCloud personale.</PolicyParagraph>

                <PolicyHeading>Foto e Immagini</PolicyHeading>
                <PolicyParagraph>LiquidBoard potrebbe richiedere l'accesso alla tua libreria fotografica per i seguenti scopi:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Inserire immagini nei tuoi snippet</PolicyListItem>
                  <PolicyListItem>Creare adesivi personalizzati dalle tue foto</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Le foto che selezioni sono memorizzate localmente sul tuo dispositivo e/o sincronizzate con il tuo account personale iCloud. Non carichiamo, trasmettiamo né accediamo alle tue foto in alcun modo. L'accesso alla libreria fotografica viene utilizzato solo nel momento in cui scegli esplicitamente un'immagine: l'app non accede alla tua libreria in background.</PolicyParagraph>

                <PolicyHeading>Adesivi</PolicyHeading>
                <PolicyParagraph>LiquidBoard ti permette di:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Crea adesivi personalizzati dalle tue foto</PolicyListItem>
                  <PolicyListItem>Inserisci adesivi tramite l'estensione della tastiera</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Gli adesivi personalizzati che crei dalle tue foto sono memorizzati solo sul tuo dispositivo e/o su iCloud. Nessun contenuto degli adesivi o dati delle immagini vengono trasmessi a noi.</PolicyParagraph>

                <PolicyHeading>Estensione Tastiera e Accesso Completo</PolicyHeading>
                <PolicyParagraph>Questa estensione della tastiera non raccoglie, registra né trasmette alcun dato di battitura o testo che digiti.</PolicyParagraph>
                <PolicyParagraph>L'estensione della tastiera di LiquidBoard richiede che l'accesso completo sia abilitato al fine di:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Incolla immagini e adesivi in altre app</PolicyListItem>
                  <PolicyListItem>Sincronizza i tuoi frammenti e adesivi tramite iCloud su tutti i tuoi dispositivi</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>L'accesso completo è utilizzato esclusivamente per queste funzionalità. La tastiera non registra, memorizza o trasmette nulla di ciò che digiti in altre app. Nessun dato viene inviato a server esterni.</PolicyParagraph>

                <PolicyHeading>Sincronizzazione iCloud</PolicyHeading>
                <PolicyParagraph>Se scegli di attivare la sincronizzazione iCloud i tuoi frammenti di testo, immagini e adesivi vengono sincronizzati tramite l'infrastruttura iCloud di Apple utilizzando il tuo ID Apple personale. Questi dati sono regolati dall'Informativa sulla privacy di Apple. Non abbiamo accesso ai tuoi dati iCloud.</PolicyParagraph>

                <PolicyHeading>Condivisione dei dati</PolicyHeading>
                <PolicyParagraph>Non vendiamo, condividiamo o divulghiamo i tuoi dati a terzi. Non utilizziamo alcun SDK di analytics, pubblicità o strumenti di tracciamento di terze parti.</PolicyParagraph>

                <PolicyHeading>Conservazione e Cancellazione dei Dati</PolicyHeading>
                <PolicyParagraph>I tuoi dati rimangono sul tuo dispositivo e/o sul tuo account iCloud e sono completamente sotto il tuo controllo. Puoi eliminare i tuoi dati in qualsiasi momento tramite:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Eliminare singoli frammenti, immagini o adesivi all'interno dell'app</PolicyListItem>
                  <PolicyListItem>Revocare l'accesso alla libreria fotografica in Impostazioni → Privacy → Foto</PolicyListItem>
                  <PolicyListItem>Eliminare l'app, che rimuove tutti i dati memorizzati localmente</PolicyListItem>
                  <PolicyListItem>Disattivare la sincronizzazione iCloud e rimuovere i dati iCloud dell'app da Impostazioni → [Il tuo nome] → iCloud → Gestisci spazio</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Privacy dei bambini</PolicyHeading>
                <PolicyParagraph>LiquidBoard non raccoglie consapevolmente alcuna informazione da bambini di età inferiore ai 13 anni. L'app non raccoglie dati personali da nessun utente.</PolicyParagraph>

                <PolicyHeading>Modifiche a Questa Politica</PolicyHeading>
                <PolicyParagraph>Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Eventuali modifiche saranno riportate nell'app e sul nostro sito web con una data aggiornata.</PolicyParagraph>

                <PolicyHeading>Contatto</PolicyHeading>
                <PolicyParagraph>Se avete domande riguardo a questa Informativa sulla privacy, vi preghiamo di contattarci a:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Termini di utilizzo</PolicyHeading>
                <PolicyParagraph>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Scaricando, installando o utilizzando LiquidBoard ("l'App"), accetti di essere vincolato da questi Termini di Utilizzo. Se non accetti questi termini, ti preghiamo di non utilizzare l'App.</PolicyParagraph>

                <PolicyHeading>Licenza</PolicyHeading>
                <PolicyParagraph>Ti concediamo una licenza limitata, non esclusiva, non trasferibile e revocabile per utilizzare LiquidBoard per i tuoi scopi personali e non commerciali, soggetta a questi Termini.</PolicyParagraph>
                <PolicyParagraph>Non puoi:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Copiare, modificare o distribuire l'App o il suo contenuto</PolicyListItem>
                  <PolicyListItem>Fare reverse engineering o tentare di estrarre il codice sorgente</PolicyListItem>
                  <PolicyListItem>Usa l'app per qualsiasi scopo illegale o non autorizzato</PolicyListItem>
                  <PolicyListItem>Vendere, concedere in sublicenza o trasferire l'accesso all'App a terzi</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Il tuo contenuto</PolicyHeading>
                <PolicyParagraph>Mantieni la piena proprietà di tutti i frammenti di testo, immagini e sticker che crei o importi in LiquidBoard. Non rivendichiamo alcun diritto sul tuo contenuto.</PolicyParagraph>
                <PolicyParagraph>Sei l'unicamente responsabile di garantire che i contenuti che crei o incolli utilizzando l'App non violino i diritti di terzi, inclusi i diritti d'autore i marchi o i diritti alla privacy.</PolicyParagraph>

                <PolicyHeading>Uso Accettabile</PolicyHeading>
                <PolicyParagraph>Accetti di non utilizzare LiquidBoard per creare, conservare o distribuire contenuti che:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>È illegale, dannoso, minaccioso o molesto</PolicyListItem>
                  <PolicyListItem>Viola i diritti di proprietà intellettuale di altri</PolicyListItem>
                  <PolicyListItem>Contiene malware, virus o codice dannoso</PolicyListItem>
                  <PolicyListItem>Viola qualsiasi legge locale, nazionale o internazionale applicabile</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Acquisti In-App</PolicyHeading>
                <PolicyParagraph>LiquidBoard offre acquisti opzionali all'interno dell'app per sbloccare funzionalità o contenuti aggiuntivi. Tutti gli acquisti sono gestiti da Apple tramite l'App Store e sono soggetti ai Termini di vendita di Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Gli acquisti non sono rimborsabili salvo quanto richiesto dalla legge applicabile o dalla politica di rimborso di Apple</PolicyListItem>
                  <PolicyListItem>I prezzi possono variare a seconda della regione e sono visualizzati nella tua valuta locale al momento dell'acquisto</PolicyListItem>
                  <PolicyListItem>Le funzionalità acquistate sono collegate al tuo ID Apple e possono essere ripristinate su qualsiasi dispositivo connesso con lo stesso ID Apple</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Per richiedere un rimborso, contattare direttamente Apple al:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Estensione Tastiera e Accesso Completo</PolicyHeading>
                <PolicyParagraph>Abilitare l'accesso completo per l'estensione della tastiera è necessario per incollare immagini e adesivi in altre app e per abilitare la sincronizzazione iCloud. L'accesso completo non ci consente di accedere a nulla di ciò che digiti.</PolicyParagraph>
                <PolicyParagraph>Riconosci che abilitando l'Accesso Completo, iOS mostrerà un avviso di sistema informandoti che lo sviluppatore della tastiera potrebbe potenzialmente accedere alla tua digitazione. Vogliamo essere chiari: LiquidBoard non raccoglie, registra né trasmette alcun dato di battitura.</PolicyParagraph>

                <PolicyHeading>Sincronizzazione iCloud</PolicyHeading>
                <PolicyParagraph>La sincronizzazione iCloud è una funzione opzionale che utilizza il tuo account personale Apple iCloud per sincronizzare i tuoi dati tra i dispositivi. L'uso di iCloud è soggetto ai Termini e alle Condizioni di Apple. Non siamo responsabili per eventuali perdite di dati derivanti da interruzioni del servizio iCloud.</PolicyParagraph>

                <PolicyHeading>Esclusione di garanzie</PolicyHeading>
                <PolicyParagraph>LiquidBoard è fornito "così com'è" e "secondo disponibilità" senza garanzie di alcun tipo, espresse o implicite, incluse ma non limitate a garanzie di commerciabilità, idoneità a un particolare scopo o non violazione.</PolicyParagraph>
                <PolicyParagraph>Non garantiamo che l'App sarà ininterrotta, priva di errori o priva di virus o altri componenti dannosi.</PolicyParagraph>

                <PolicyHeading>Limitazione di responsabilità</PolicyHeading>
                <PolicyParagraph>Nella massima misura consentita dalla legge applicabile, non saremo responsabili per qualsiasi danno indiretto, incidentale, speciale, consequenziale o punitivo, inclusi, ma non limitati a, perdita di dati, perdita di profitti o perdita di avviamento commerciale, derivanti dal tuo utilizzo o dall'incapacità di utilizzare l'App.</PolicyParagraph>

                <PolicyHeading>Terminazione</PolicyHeading>
                <PolicyParagraph>Ci riserviamo il diritto di terminare o limitare il tuo accesso all'App in qualsiasi momento, senza preavviso, per comportamenti che riteniamo violino questi Termini o siano dannosi per altri utenti, per noi o per terze parti.</PolicyParagraph>
                <PolicyParagraph>Puoi smettere di usare l'App in qualsiasi momento eliminandola dal tuo dispositivo.</PolicyParagraph>

                <PolicyHeading>Modifiche a questi termini</PolicyHeading>
                <PolicyParagraph>Potremmo aggiornare questi Termini di Utilizzo di tanto in tanto. L'uso continuato dell'App dopo la pubblicazione delle modifiche costituisce la tua accettazione dei Termini revisionati. Ti informeremo delle modifiche significative attraverso l'App o il nostro sito web.</PolicyParagraph>

                <PolicyHeading>Legge applicabile</PolicyHeading>
                <PolicyParagraph>Questi Termini sono disciplinati e interpretati in conformità con le leggi della giurisdizione in cui è basato lo sviluppatore, senza riguardo ai principi di conflitto di leggi.</PolicyParagraph>

                <PolicyHeading>Contatto</PolicyHeading>
                <PolicyParagraph>Se avete domande su questi Termini, vi preghiamo di contattarci a:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Politica di Pagamento e Rimborso</PolicyHeading>
                <PolicyParagraph>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard offre acquisti in-app opzionali per sbloccare funzionalità premium. Tutti i pagamenti sono gestiti interamente da Apple tramite l'App Store — non elaboriamo, memorizziamo né abbiamo accesso alle tue informazioni di pagamento.</PolicyParagraph>

                <PolicyHeading>Cosa puoi acquistare</PolicyHeading>
                <PolicyParagraph>LiquidBoard offre i seguenti acquisti opzionali:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Funzionalità Premium — Sblocco una tantum o in abbonamento per funzionalità avanzate dell'app</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Gli acquisti disponibili e i prezzi sono mostrati all'interno dell'App al momento dell'acquisto. I prezzi possono variare in base alla regione e sono indicati nella tua valuta locale.</PolicyParagraph>

                <PolicyHeading>Elaborazione dei pagamenti</PolicyHeading>
                <PolicyParagraph>Tutte le transazioni sono elaborate in modo sicuro da Apple. Non vediamo né memorizziamo mai la tua carta di credito, l'indirizzo di fatturazione o qualsiasi dettaglio di pagamento.</PolicyParagraph>
                <PolicyParagraph>Completando un acquisto, accetti i Termini di vendita dell'App Store di Apple. Il metodo di pagamento registrato su Apple verrà addebitato al momento della conferma dell'acquisto.</PolicyParagraph>

                <PolicyHeading>Ripristino degli acquisti</PolicyHeading>
                <PolicyParagraph>Se reinstalli LiquidBoard o passi a un nuovo dispositivo, puoi ripristinare tutti gli acquisti precedenti senza costi aggiuntivi utilizzando l'opzione Ripristina acquisti all'interno dell'App. Gli acquisti sono collegati al tuo Apple ID e sono disponibili su tutti i dispositivi connessi con lo stesso account.</PolicyParagraph>

                <PolicyHeading>Abbonamenti</PolicyHeading>
                <PolicyParagraph>Se LiquidBoard offre acquisti basati su abbonamento:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Gli abbonamenti si rinnovano automaticamente a meno che non vengano cancellati almeno 24 ore prima della fine del periodo di fatturazione corrente</PolicyListItem>
                  <PolicyListItem>Il tuo ID Apple verrà addebitato per il rinnovo entro 24 ore prima della fine del periodo corrente</PolicyListItem>
                  <PolicyListItem>Puoi gestire o annullare gli abbonamenti in qualsiasi momento in Impostazioni → [Il tuo nome] → Abbonamenti</PolicyListItem>
                  <PolicyListItem>La cancellazione di un abbonamento ha effetto alla fine del periodo pagato corrente — conserverai l'accesso fino ad allora</PolicyListItem>
                  <PolicyListItem>I periodi di prova gratuiti, se offerti, si convertiranno in un abbonamento a pagamento a meno che non vengano cancellati prima della fine del periodo di prova</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Politica di rimborso</PolicyHeading>
                <PolicyParagraph>Non elaboriamo rimborsi direttamente. Tutte le richieste di rimborso devono essere inviate ad Apple, poiché sono il commerciante registrato per tutte le transazioni dell'App Store.</PolicyParagraph>
                <PolicyParagraph>Apple gestisce i rimborsi a sua discrezione in conformità con la sua politica di rimborso. I casi comuni eleggibili includono acquisti accidentali, addebiti non autorizzati o acquisti che non hanno funzionato come descritto.</PolicyParagraph>
                <PolicyParagraph>Per richiedere un rimborso da Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Vai avanti.<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>e accedi con il tuo ID Apple</PolicyListItem>
                  <PolicyListItem>Trova l'acquisto di LiquidBoard e tocca Segnala un problema</PolicyListItem>
                  <PolicyListItem>Seleziona il motivo e invia la tua richiesta</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple risponde solitamente entro pochi giorni lavorativi. Le decisioni sui rimborsi sono prese esclusivamente da Apple.</PolicyParagraph>

                <PolicyHeading>Variazioni di prezzo</PolicyHeading>
                <PolicyParagraph>Ci riserviamo il diritto di modificare i prezzi degli acquisti in-app in qualsiasi momento. Le modifiche dei prezzi per gli abbonamenti saranno comunicate in anticipo tramite l'App o l'App Store e entreranno in vigore all'inizio del tuo prossimo ciclo di fatturazione. Sarai informato da Apple prima che qualsiasi modifica del prezzo dell'abbonamento entri in vigore.</PolicyParagraph>

                <PolicyHeading>Acquisti falliti o incompleti</PolicyHeading>
                <PolicyParagraph>Se un acquisto fallisce o ti viene addebitato ma non ricevi il contenuto, prova prima a ripristinare gli acquisti all'interno dell'App. Se il problema persiste, contattaci a<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>e indagheremo prontamente.</PolicyParagraph>

                <PolicyHeading>Contatto</PolicyHeading>
                <PolicyParagraph>Per domande sulla fatturazione o problemi di acquisto, contattaci a:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>Per i rimborsi, si prega di utilizzare il canale ufficiale di Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
