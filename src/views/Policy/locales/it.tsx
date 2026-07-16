
export const Security = () => (
  <>
    <h2>Politica sulla Sicurezza dei Dati</h2>
                <p>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</p>
                <p>LiquidBoard è progettato con un approccio incentrato sulla privacy. I tuoi dati non lasciano mai il tuo dispositivo a meno che tu non scelga esplicitamente di abilitare la sincronizzazione iCloud. Non abbiamo server, account o accesso ai tuoi contenuti.</p>

                <h2>Archiviazione dei dati</h2>
                <p>Tutti i contenuti che crei in LiquidBoard — frammenti di testo, immagini e adesivi — vengono memorizzati in uno di due luoghi:</p>
                <ul>
                  <li><strong>Archiviazione sul dispositivo</strong>— Gestito da iOS e accessibile solo a LiquidBoard. Altre app non possono leggere i tuoi dati.</li>
                  <li><strong>iCloud (opzionale)</strong>— Sincronizzato tramite il tuo ID Apple personale utilizzando l'infrastruttura CloudKit crittografata di Apple.</li>
                </ul>
                <p>Nessun dato viene memorizzato sui nostri server. Non gestiamo alcuna infrastruttura backend.</p>

                <h2>Crittografia</h2>
                <p>I tuoi dati sono protetti da iOS e dagli strati di sicurezza di Apple:</p>
                <ul>
                  <li><strong>A riposo</strong>— I dati memorizzati sul tuo dispositivo sono crittografati da iOS utilizzando il codice del dispositivo e il Secure Enclave.</li>
                  <li><strong>In transito</strong>— Se la sincronizzazione iCloud è abilitata i dati vengono crittografati da CloudKit di Apple prima di essere trasmessi.</li>
                  <li><strong>Backup iCloud</strong>— Se il tuo dispositivo è eseguito il backup su iCloud i dati delle app sono inclusi nel sistema di backup crittografato di Apple.</li>
                </ul>

                <h2>Sicurezza di Foto e Immagini</h2>
                <p>LiquidBoard accede alla tua libreria fotografica solo quando scegli esplicitamente di selezionare o importare una foto. L'app:</p>
                <ul>
                  <li>Non accede alla tua libreria fotografica in background</li>
                  <li>Non carica foto su nessun server</li>
                  <li>Memorizza le immagini selezionate localmente nel contenitore isolato dell'app</li>
                  <li>Elabora la creazione di adesivi interamente sul dispositivo</li>
                </ul>
                <p>Puoi revocare l'accesso alle foto in qualsiasi momento in Impostazioni → Privacy e Sicurezza → Foto.</p>

                <h2>Sicurezza dell'estensione della tastiera</h2>
                <p>L'estensione della tastiera non raccoglie, registra né trasmette alcun dato dei tasti premuti o del testo che digiti in altre app.</p>
                <p>È richiesto l'accesso completo all'estensione della tastiera per incollare immagini e adesivi e per accedere alla sincronizzazione iCloud. Anche con l'accesso completo abilitato, l'estensione della tastiera funziona interamente all'interno dell'ambiente sandbox di iOS. Non ha la possibilità di inviare dati a server esterni.</p>

                <h2>Nessun accesso ai dati da parte di terzi</h2>
                <p>LiquidBoard non integra nessuno dei seguenti:</p>
                <ul>
                  <li>SDK per analisi o segnalazione di crash, come Firebase o Mixpanel</li>
                  <li>Reti pubblicitarie o SDK di tracciamento</li>
                  <li>Servizi di archiviazione o elaborazione cloud di terze parti</li>
                </ul>
                <p>I tuoi contenuti non vengono mai condivisi né sono accessibili a terzi.</p>

                <h2>Sandbox dell'app</h2>
                <p>LiquidBoard funziona nel rigido sandbox delle app di iOS. Questo significa che altre app sul tuo dispositivo non possono accedere ai dati di LiquidBoard e LiquidBoard non può accedere ai dati appartenenti ad altre app, tranne il contenuto che incolli esplicitamente tramite l'estensione della tastiera.</p>

                <h2>Il tuo controllo</h2>
                <p>Hai il pieno controllo dei tuoi dati in ogni momento:</p>
                <ul>
                  <li>Abilita o disabilita la sincronizzazione iCloud dall'interno dell'app</li>
                  <li>Revoca l'accesso alla libreria fotografica nelle Impostazioni iOS</li>
                  <li>Disattiva l'accesso completo per la tastiera in Impostazioni → Generali → Tastiera → Tastiere</li>
                  <li>Elimina tutti i dati eliminando l'app</li>
                </ul>

                <h2>Contatto</h2>
                <p>Se avete domande sulla sicurezza dei dati, vi preghiamo di contattarci a:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Informativa sulla Privacy</h2>
                <p>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</p>
                <p>LiquidBoard ("noi", "nostro" o "l'app") si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come gestiamo le informazioni quando utilizzi LiquidBoard e la sua estensione della tastiera.</p>

                <h2>Dati che raccogliamo</h2>
                <p>LiquidBoard non raccoglie, memorizza né trasmette alcun dato personale a server esterni. Tutti i dati che crei all'interno dell'app — inclusi frammenti di testo, immagini, adesivi, categorie e impostazioni — sono memorizzati esclusivamente sul tuo dispositivo o nel tuo account iCloud personale.</p>

                <h2>Foto e Immagini</h2>
                <p>LiquidBoard potrebbe richiedere l'accesso alla tua libreria fotografica per i seguenti scopi:</p>
                <ul>
                  <li>Inserire immagini nei tuoi snippet</li>
                  <li>Creare adesivi personalizzati dalle tue foto</li>
                </ul>
                <p>Le foto che selezioni sono memorizzate localmente sul tuo dispositivo e/o sincronizzate con il tuo account personale iCloud. Non carichiamo, trasmettiamo né accediamo alle tue foto in alcun modo. L'accesso alla libreria fotografica viene utilizzato solo nel momento in cui scegli esplicitamente un'immagine: l'app non accede alla tua libreria in background.</p>

                <h2>Adesivi</h2>
                <p>LiquidBoard ti permette di:</p>
                <ul>
                  <li>Crea adesivi personalizzati dalle tue foto</li>
                  <li>Inserisci adesivi tramite l'estensione della tastiera</li>
                </ul>
                <p>Gli adesivi personalizzati che crei dalle tue foto sono memorizzati solo sul tuo dispositivo e/o su iCloud. Nessun contenuto degli adesivi o dati delle immagini vengono trasmessi a noi.</p>

                <h2>Estensione Tastiera e Accesso Completo</h2>
                <p>Questa estensione della tastiera non raccoglie, registra né trasmette alcun dato di battitura o testo che digiti.</p>
                <p>L'estensione della tastiera di LiquidBoard richiede che l'accesso completo sia abilitato al fine di:</p>
                <ul>
                  <li>Incolla immagini e adesivi in altre app</li>
                  <li>Sincronizza i tuoi frammenti e adesivi tramite iCloud su tutti i tuoi dispositivi</li>
                </ul>
                <p>L'accesso completo è utilizzato esclusivamente per queste funzionalità. La tastiera non registra, memorizza o trasmette nulla di ciò che digiti in altre app. Nessun dato viene inviato a server esterni.</p>

                <h2>Sincronizzazione iCloud</h2>
                <p>Se scegli di attivare la sincronizzazione iCloud i tuoi frammenti di testo, immagini e adesivi vengono sincronizzati tramite l'infrastruttura iCloud di Apple utilizzando il tuo ID Apple personale. Questi dati sono regolati dall'Informativa sulla privacy di Apple. Non abbiamo accesso ai tuoi dati iCloud.</p>

                <h2>Condivisione dei dati</h2>
                <p>Non vendiamo, condividiamo o divulghiamo i tuoi dati a terzi. Non utilizziamo alcun SDK di analytics, pubblicità o strumenti di tracciamento di terze parti.</p>

                <h2>Conservazione e Cancellazione dei Dati</h2>
                <p>I tuoi dati rimangono sul tuo dispositivo e/o sul tuo account iCloud e sono completamente sotto il tuo controllo. Puoi eliminare i tuoi dati in qualsiasi momento tramite:</p>
                <ul>
                  <li>Eliminare singoli frammenti, immagini o adesivi all'interno dell'app</li>
                  <li>Revocare l'accesso alla libreria fotografica in Impostazioni → Privacy → Foto</li>
                  <li>Eliminare l'app, che rimuove tutti i dati memorizzati localmente</li>
                  <li>Disattivare la sincronizzazione iCloud e rimuovere i dati iCloud dell'app da Impostazioni → [Il tuo nome] → iCloud → Gestisci spazio</li>
                </ul>

                <h2>Privacy dei bambini</h2>
                <p>LiquidBoard non raccoglie consapevolmente alcuna informazione da bambini di età inferiore ai 13 anni. L'app non raccoglie dati personali da nessun utente.</p>

                <h2>Modifiche a Questa Politica</h2>
                <p>Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Eventuali modifiche saranno riportate nell'app e sul nostro sito web con una data aggiornata.</p>

                <h2>Contatto</h2>
                <p>Se avete domande riguardo a questa Informativa sulla privacy, vi preghiamo di contattarci a:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Termini di utilizzo</h2>
                <p>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</p>
                <p>Scaricando, installando o utilizzando LiquidBoard ("l'App"), accetti di essere vincolato da questi Termini di Utilizzo. Se non accetti questi termini, ti preghiamo di non utilizzare l'App.</p>

                <h2>Licenza</h2>
                <p>Ti concediamo una licenza limitata, non esclusiva, non trasferibile e revocabile per utilizzare LiquidBoard per i tuoi scopi personali e non commerciali, soggetta a questi Termini.</p>
                <p>Non puoi:</p>
                <ul>
                  <li>Copiare, modificare o distribuire l'App o il suo contenuto</li>
                  <li>Fare reverse engineering o tentare di estrarre il codice sorgente</li>
                  <li>Usa l'app per qualsiasi scopo illegale o non autorizzato</li>
                  <li>Vendere, concedere in sublicenza o trasferire l'accesso all'App a terzi</li>
                </ul>

                <h2>Il tuo contenuto</h2>
                <p>Mantieni la piena proprietà di tutti i frammenti di testo, immagini e sticker che crei o importi in LiquidBoard. Non rivendichiamo alcun diritto sul tuo contenuto.</p>
                <p>Sei l'unicamente responsabile di garantire che i contenuti che crei o incolli utilizzando l'App non violino i diritti di terzi, inclusi i diritti d'autore i marchi o i diritti alla privacy.</p>

                <h2>Uso Accettabile</h2>
                <p>Accetti di non utilizzare LiquidBoard per creare, conservare o distribuire contenuti che:</p>
                <ul>
                  <li>È illegale, dannoso, minaccioso o molesto</li>
                  <li>Viola i diritti di proprietà intellettuale di altri</li>
                  <li>Contiene malware, virus o codice dannoso</li>
                  <li>Viola qualsiasi legge locale, nazionale o internazionale applicabile</li>
                </ul>

                <h2>Acquisti In-App</h2>
                <p>LiquidBoard offre acquisti opzionali all'interno dell'app per sbloccare funzionalità o contenuti aggiuntivi. Tutti gli acquisti sono gestiti da Apple tramite l'App Store e sono soggetti ai Termini di vendita di Apple.</p>
                <ul>
                  <li>Gli acquisti non sono rimborsabili salvo quanto richiesto dalla legge applicabile o dalla politica di rimborso di Apple</li>
                  <li>I prezzi possono variare a seconda della regione e sono visualizzati nella tua valuta locale al momento dell'acquisto</li>
                  <li>Le funzionalità acquistate sono collegate al tuo ID Apple e possono essere ripristinate su qualsiasi dispositivo connesso con lo stesso ID Apple</li>
                </ul>
                <p>Per richiedere un rimborso, contattare direttamente Apple al:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Estensione Tastiera e Accesso Completo</h2>
                <p>Abilitare l'accesso completo per l'estensione della tastiera è necessario per incollare immagini e adesivi in altre app e per abilitare la sincronizzazione iCloud. L'accesso completo non ci consente di accedere a nulla di ciò che digiti.</p>
                <p>Riconosci che abilitando l'Accesso Completo, iOS mostrerà un avviso di sistema informandoti che lo sviluppatore della tastiera potrebbe potenzialmente accedere alla tua digitazione. Vogliamo essere chiari: LiquidBoard non raccoglie, registra né trasmette alcun dato di battitura.</p>

                <h2>Sincronizzazione iCloud</h2>
                <p>La sincronizzazione iCloud è una funzione opzionale che utilizza il tuo account personale Apple iCloud per sincronizzare i tuoi dati tra i dispositivi. L'uso di iCloud è soggetto ai Termini e alle Condizioni di Apple. Non siamo responsabili per eventuali perdite di dati derivanti da interruzioni del servizio iCloud.</p>

                <h2>Esclusione di garanzie</h2>
                <p>LiquidBoard è fornito "così com'è" e "secondo disponibilità" senza garanzie di alcun tipo, espresse o implicite, incluse ma non limitate a garanzie di commerciabilità, idoneità a un particolare scopo o non violazione.</p>
                <p>Non garantiamo che l'App sarà ininterrotta, priva di errori o priva di virus o altri componenti dannosi.</p>

                <h2>Limitazione di responsabilità</h2>
                <p>Nella massima misura consentita dalla legge applicabile, non saremo responsabili per qualsiasi danno indiretto, incidentale, speciale, consequenziale o punitivo, inclusi, ma non limitati a, perdita di dati, perdita di profitti o perdita di avviamento commerciale, derivanti dal tuo utilizzo o dall'incapacità di utilizzare l'App.</p>

                <h2>Terminazione</h2>
                <p>Ci riserviamo il diritto di terminare o limitare il tuo accesso all'App in qualsiasi momento, senza preavviso, per comportamenti che riteniamo violino questi Termini o siano dannosi per altri utenti, per noi o per terze parti.</p>
                <p>Puoi smettere di usare l'App in qualsiasi momento eliminandola dal tuo dispositivo.</p>

                <h2>Modifiche a questi termini</h2>
                <p>Potremmo aggiornare questi Termini di Utilizzo di tanto in tanto. L'uso continuato dell'App dopo la pubblicazione delle modifiche costituisce la tua accettazione dei Termini revisionati. Ti informeremo delle modifiche significative attraverso l'App o il nostro sito web.</p>

                <h2>Legge applicabile</h2>
                <p>Questi Termini sono disciplinati e interpretati in conformità con le leggi della giurisdizione in cui è basato lo sviluppatore, senza riguardo ai principi di conflitto di leggi.</p>

                <h2>Contatto</h2>
                <p>Se avete domande su questi Termini, vi preghiamo di contattarci a:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Politica di Pagamento e Rimborso</h2>
                <p>Ultimo aggiornamento: 05 giugno 2026 · LiquidBoard</p>
                <p>LiquidBoard offre acquisti in-app opzionali per sbloccare funzionalità premium. Tutti i pagamenti sono gestiti interamente da Apple tramite l'App Store — non elaboriamo, memorizziamo né abbiamo accesso alle tue informazioni di pagamento.</p>

                <h2>Cosa puoi acquistare</h2>
                <p>LiquidBoard offre i seguenti acquisti opzionali:</p>
                <ul>
                  <li>Funzionalità Premium — Sblocco una tantum o in abbonamento per funzionalità avanzate dell'app</li>
                </ul>
                <p>Gli acquisti disponibili e i prezzi sono mostrati all'interno dell'App al momento dell'acquisto. I prezzi possono variare in base alla regione e sono indicati nella tua valuta locale.</p>

                <h2>Elaborazione dei pagamenti</h2>
                <p>Tutte le transazioni sono elaborate in modo sicuro da Apple. Non vediamo né memorizziamo mai la tua carta di credito, l'indirizzo di fatturazione o qualsiasi dettaglio di pagamento.</p>
                <p>Completando un acquisto, accetti i Termini di vendita dell'App Store di Apple. Il metodo di pagamento registrato su Apple verrà addebitato al momento della conferma dell'acquisto.</p>

                <h2>Ripristino degli acquisti</h2>
                <p>Se reinstalli LiquidBoard o passi a un nuovo dispositivo, puoi ripristinare tutti gli acquisti precedenti senza costi aggiuntivi utilizzando l'opzione Ripristina acquisti all'interno dell'App. Gli acquisti sono collegati al tuo Apple ID e sono disponibili su tutti i dispositivi connessi con lo stesso account.</p>

                <h2>Abbonamenti</h2>
                <p>Se LiquidBoard offre acquisti basati su abbonamento:</p>
                <ul>
                  <li>Gli abbonamenti si rinnovano automaticamente a meno che non vengano cancellati almeno 24 ore prima della fine del periodo di fatturazione corrente</li>
                  <li>Il tuo ID Apple verrà addebitato per il rinnovo entro 24 ore prima della fine del periodo corrente</li>
                  <li>Puoi gestire o annullare gli abbonamenti in qualsiasi momento in Impostazioni → [Il tuo nome] → Abbonamenti</li>
                  <li>La cancellazione di un abbonamento ha effetto alla fine del periodo pagato corrente — conserverai l'accesso fino ad allora</li>
                  <li>I periodi di prova gratuiti, se offerti, si convertiranno in un abbonamento a pagamento a meno che non vengano cancellati prima della fine del periodo di prova</li>
                </ul>

                <h2>Politica di rimborso</h2>
                <p>Non elaboriamo rimborsi direttamente. Tutte le richieste di rimborso devono essere inviate ad Apple, poiché sono il commerciante registrato per tutte le transazioni dell'App Store.</p>
                <p>Apple gestisce i rimborsi a sua discrezione in conformità con la sua politica di rimborso. I casi comuni eleggibili includono acquisti accidentali, addebiti non autorizzati o acquisti che non hanno funzionato come descritto.</p>
                <p>Per richiedere un rimborso da Apple:</p>
                <ul>
                  <li>Vai avanti.<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>e accedi con il tuo ID Apple</li>
                  <li>Trova l'acquisto di LiquidBoard e tocca Segnala un problema</li>
                  <li>Seleziona il motivo e invia la tua richiesta</li>
                </ul>
                <p>Apple risponde solitamente entro pochi giorni lavorativi. Le decisioni sui rimborsi sono prese esclusivamente da Apple.</p>

                <h2>Variazioni di prezzo</h2>
                <p>Ci riserviamo il diritto di modificare i prezzi degli acquisti in-app in qualsiasi momento. Le modifiche dei prezzi per gli abbonamenti saranno comunicate in anticipo tramite l'App o l'App Store e entreranno in vigore all'inizio del tuo prossimo ciclo di fatturazione. Sarai informato da Apple prima che qualsiasi modifica del prezzo dell'abbonamento entri in vigore.</p>

                <h2>Acquisti falliti o incompleti</h2>
                <p>Se un acquisto fallisce o ti viene addebitato ma non ricevi il contenuto, prova prima a ripristinare gli acquisti all'interno dell'App. Se il problema persiste, contattaci a<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>e indagheremo prontamente.</p>

                <h2>Contatto</h2>
                <p>Per domande sulla fatturazione o problemi di acquisto, contattaci a:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>Per i rimborsi, si prega di utilizzare il canale ufficiale di Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
