
export const Security = () => (
  <>
    <h2>Polityka bezpieczeństwa danych</h2>
                <p>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</p>
                <p>LiquidBoard został zaprojektowany z podejściem priorytetowo traktującym prywatność. Twoje dane nigdy nie opuszczają urządzenia, chyba że wyraźnie zdecydujesz się włączyć synchronizację iCloud. Nie mamy żadnych serwerów, żadnych kont i nie mamy dostępu do Twoich treści.</p>

                <h2>Przechowywanie danych</h2>
                <p>Wszystkie treści, które tworzysz w LiquidBoard — fragmenty tekstu, obrazy i naklejki — są przechowywane w jednym z dwóch miejsc:</p>
                <ul>
                  <li><strong>Pamięć w urządzeniu</strong>— Zarządzane przez iOS i dostępne tylko dla LiquidBoard. Inne aplikacje nie mogą odczytywać Twoich danych.</li>
                  <li><strong>iCloud (opcjonalnie)</strong>— Synchronizowane przez Twój osobisty identyfikator Apple ID przy użyciu szyfrowanej infrastruktury CloudKit firmy Apple.</li>
                </ul>
                <p>Na naszych serwerach nie są przechowywane żadne dane. Nie prowadzimy żadnej infrastruktury zaplecza.</p>

                <h2>Szyfrowanie</h2>
                <p>Twoje dane są chronione przez iOS i warstwy zabezpieczeń Apple:</p>
                <ul>
                  <li><strong>W spoczynku</strong>— Dane przechowywane na Twoim urządzeniu są szyfrowane przez iOS za pomocą kodu dostępu do urządzenia i Secure Enclave.</li>
                  <li><strong>W tranzycie</strong>— Jeśli synchronizacja iCloud jest włączona, dane są szyfrowane przez CloudKit Apple przed przesłaniem.</li>
                  <li><strong>Kopia zapasowa iCloud</strong>— Jeśli Twoje urządzenie jest zabezpieczone kopią zapasową w iCloud, dane aplikacji są uwzględnione w zaszyfrowanym systemie kopii zapasowych Apple.</li>
                </ul>

                <h2>Bezpieczeństwo zdjęć i obrazów</h2>
                <p>LiquidBoard uzyskuje dostęp do Twojej biblioteki zdjęć tylko wtedy, gdy wyraźnie zdecydujesz się wybrać lub importować zdjęcie. Aplikacja:</p>
                <ul>
                  <li>Nie uzyskuje dostępu do Twojej biblioteki zdjęć w tle</li>
                  <li>Nie przesyła zdjęć na żaden serwer</li>
                  <li>Przechowuje wybrane obrazy lokalnie w izolowanym kontenerze aplikacji</li>
                  <li>Przetwarza tworzenie naklejek całkowicie na urządzeniu</li>
                </ul>
                <p>Możesz cofnąć dostęp do zdjęć w dowolnym momencie w Ustawieniach → Prywatność i bezpieczeństwo → Zdjęcia.</p>

                <h2>Bezpieczeństwo Rozszerzenia Klawiatury</h2>
                <p>Rozszerzenie klawiatury nie zbiera, nie rejestruje ani nie przesyła żadnych danych o naciśnięciach klawiszy ani tekstu, który wpisujesz w innych aplikacjach.</p>
                <p>Wymagany jest pełny dostęp, aby rozszerzenie klawiatury mogło wklejać obrazy i naklejki oraz uzyskiwać dostęp do synchronizacji iCloud. Nawet przy włączonym pełnym dostępie, rozszerzenie klawiatury działa całkowicie w środowisku odizolowanym iOS. Nie ma możliwości wysyłania danych do zewnętrznych serwerów.</p>

                <h2>Brak dostępu danych osób trzecich</h2>
                <p>LiquidBoard nie integruje żadnego z poniższych:</p>
                <ul>
                  <li>SDK analityczne lub do raportowania awarii, takie jak Firebase lub Mixpanel</li>
                  <li>Sieci reklamowe lub zestawy SDK do śledzenia</li>
                  <li>Usługi przechowywania lub przetwarzania w chmurze świadczone przez podmioty trzecie</li>
                </ul>
                <p>Twoje treści nigdy nie są udostępniane ani dostępne dla żadnej strony trzeciej.</p>

                <h2>Piaskownica aplikacji</h2>
                <p>LiquidBoard działa w rygorystycznym środowisku piaskownicy aplikacji iOS. Oznacza to, że inne aplikacje na Twoim urządzeniu nie mogą uzyskać dostępu do danych LiquidBoard, a LiquidBoard nie może uzyskać dostępu do danych należących do innych aplikacji, z wyjątkiem treści, które jawnie wklejasz za pomocą rozszerzenia klawiatury.</p>

                <h2>Twoja kontrola</h2>
                <p>Masz pełną kontrolę nad swoimi danymi przez cały czas:</p>
                <ul>
                  <li>Włącz lub wyłącz synchronizację iCloud w aplikacji</li>
                  <li>Cofnij dostęp do biblioteki zdjęć w ustawieniach iOS</li>
                  <li>Wyłącz pełen dostęp dla klawiatury w Ustawienia → Ogólne → Klawiatura → Klawiatury</li>
                  <li>Usuń wszystkie dane, usuwając aplikację</li>
                </ul>

                <h2>Kontakt</h2>
                <p>Jeśli masz pytania dotyczące bezpieczeństwa danych, skontaktuj się z nami pod:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Privacy = () => (<>
    <h2>Polityka prywatności</h2>
                <p>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</p>
                <p>LiquidBoard („my”, „nasze” lub „aplikacja”) zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób przetwarzamy informacje, gdy korzystasz z LiquidBoard i jego rozszerzenia klawiatury.</p>

                <h2>Dane, które zbieramy</h2>
                <p>LiquidBoard nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych na zewnętrzne serwery. Wszystkie dane tworzone w aplikacji — w tym fragmenty tekstów, obrazy, naklejki, kategorie i ustawienia — są przechowywane wyłącznie na Twoim urządzeniu lub w Twoim osobistym koncie iCloud.</p>

                <h2>Zdjęcia i obrazy</h2>
                <p>LiquidBoard może poprosić o dostęp do Twojej biblioteki zdjęć w następujących celach:</p>
                <ul>
                  <li>Wstawianie obrazów do swoich fragmentów</li>
                  <li>Tworzenie własnych naklejek z twoich zdjęć</li>
                </ul>
                <p>Zdjęcia, które wybierzesz, są przechowywane lokalnie na Twoim urządzeniu i/lub synchronizowane z Twoim osobistym kontem iCloud. Nie przesyłamy, nie transmitujemy ani nie uzyskujemy dostępu do Twoich zdjęć w żaden sposób. Dostęp do biblioteki zdjęć jest używany tylko w momencie, gdy wyraźnie wybierzesz obraz — aplikacja nie uzyskuje dostępu do Twojej biblioteki w tle.</p>

                <h2>Naklejki</h2>
                <p>LiquidBoard pozwala ci:</p>
                <ul>
                  <li>Twórz własne naklejki ze swoich zdjęć</li>
                  <li>Wstaw naklejki za pomocą rozszerzenia klawiatury</li>
                </ul>
                <p>Niestandardowe naklejki, które tworzysz ze swoich zdjęć, są przechowywane wyłącznie na Twoim urządzeniu i/lub w iCloud. Żadne treści naklejek ani dane obrazów nie są przesyłane do nas.</p>

                <h2>Rozszerzenie klawiatury i pełny dostęp</h2>
                <p>To rozszerzenie klawiatury nie zbiera, nie rejestruje ani nie przesyła żadnych danych o naciśnięciach klawiszy ani tekstu, który wpisujesz.</p>
                <p>Rozszerzenie klawiatury LiquidBoard wymaga włączenia pełnego dostępu w celu:</p>
                <ul>
                  <li>Wklejaj obrazy i naklejki do innych aplikacji</li>
                  <li>Synchronizuj swoje fragmenty i naklejki za pomocą iCloud na wszystkich swoich urządzeniach</li>
                </ul>
                <p>Pełny dostęp jest używany wyłącznie do tych funkcji. Klawiatura nie rejestruje, nie zapisuje ani nie przesyła niczego, co wpisujesz w innych aplikacjach. Żadne dane nie są wysyłane do żadnego zewnętrznego serwera.</p>

                <h2>Synchronizacja iCloud</h2>
                <p>Jeśli zdecydujesz się włączyć synchronizację iCloud, Twoje fragmenty tekstu, obrazy i naklejki będą synchronizowane za pośrednictwem infrastruktury iCloud firmy Apple przy użyciu Twojego osobistego Apple ID. Tymi danymi reguluje Polityka prywatności Apple. Nie mamy dostępu do Twoich danych w iCloud.</p>

                <h2>Udostępnianie danych</h2>
                <p>Nie sprzedajemy, nie udostępniamy ani nie ujawniamy Twoich danych żadnym osobom trzecim. Nie korzystamy z żadnych analiz, SDK reklamowych ani narzędzi śledzących stron trzecich.</p>

                <h2>Przechowywanie i usuwanie danych</h2>
                <p>Twoje dane pozostają na Twoim urządzeniu i/lub koncie iCloud i są w pełni pod Twoją kontrolą. Możesz usunąć swoje dane w dowolnym momencie poprzez:</p>
                <ul>
                  <li>Usuwanie poszczególnych fragmentów, obrazów lub naklejek w aplikacji</li>
                  <li>Cofanie dostępu do biblioteki zdjęć w Ustawienia → Prywatność → Zdjęcia</li>
                  <li>Usunięcie aplikacji, co powoduje usunięcie wszystkich lokalnie przechowywanych danych</li>
                  <li>Wyłączanie synchronizacji iCloud i usuwanie danych aplikacji z iCloud w Ustawienia → [Twoje imię] → iCloud → Zarządzaj pamięcią</li>
                </ul>

                <h2>Prywatność dzieci</h2>
                <p>LiquidBoard nie zbiera świadomie żadnych informacji od dzieci poniżej 13 roku życia. Aplikacja nie zbiera danych osobowych od żadnych użytkowników.</p>

                <h2>Zmiany w niniejszej polityce</h2>
                <p>Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. Wszelkie zmiany zostaną odzwierciedlone w aplikacji i na naszej stronie internetowej z aktualną datą.</p>

                <h2>Kontakt</h2>
                <p>Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami pod adresem:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Terms = () => (<>
    <h2>Warunki użytkowania</h2>
                <p>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</p>
                <p>Pobierając, instalując lub korzystając z LiquidBoard („Aplikacja”), zgadzasz się na przestrzeganie niniejszych Warunków użytkowania. Jeśli nie zgadzasz się z tymi warunkami, prosimy nie korzystać z Aplikacji.</p>

                <h2>Licencja</h2>
                <p>Udzielamy Ci ograniczonej, niewyłącznej, niezbywalnej, odwołalnej licencji na korzystanie z LiquidBoard do celów osobistych, niekomercyjnych, zgodnie z tymi Warunkami.</p>
                <p>Nie wolno ci:</p>
                <ul>
                  <li>Kopiuj, modyfikuj lub rozpowszechniaj aplikację lub jej zawartość</li>
                  <li>Inżynieria wsteczna lub próba wydobycia kodu źródłowego</li>
                  <li>Używaj aplikacji w jakimkolwiek nielegalnym lub nieautoryzowanym celu</li>
                  <li>Sprzedawać, udzielać sublicencji ani przenosić dostępu do Aplikacji na jakąkolwiek osobę trzecią</li>
                </ul>

                <h2>Twoje Treści</h2>
                <p>Zachowujesz pełną własność wszystkich fragmentów tekstu, obrazów i naklejek, które tworzysz lub importujesz do LiquidBoard. Nie rościmy sobie żadnych praw do twoich treści.</p>
                <p>Jesteś wyłącznie odpowiedzialny za zapewnienie, że treści, które tworzysz lub wklejasz za pomocą aplikacji, nie naruszają praw osób trzecich, w tym praw autorskich, znaków towarowych ani praw do prywatności.</p>

                <h2>Dozwolone użytkowanie</h2>
                <p>Zgadzasz się nie używać LiquidBoard do tworzenia, przechowywania ani rozpowszechniania treści, które:</p>
                <ul>
                  <li>Jest nielegalne, szkodliwe, groźne lub nękające</li>
                  <li>Narusza prawa własności intelektualnej innych</li>
                  <li>Zawiera złośliwe oprogramowanie, wirusy lub szkodliwy kod</li>
                  <li>Narusza jakiekolwiek obowiązujące prawo lokalne, krajowe lub międzynarodowe</li>
                </ul>

                <h2>Zakupy w aplikacji</h2>
                <p>LiquidBoard oferuje opcjonalne zakupy w aplikacji w celu odblokowania dodatkowych funkcji lub treści. Wszystkie zakupy są przetwarzane przez Apple za pośrednictwem App Store i podlegają Warunkom sprzedaży Apple.</p>
                <ul>
                  <li>Zakupy nie podlegają zwrotowi, chyba że wymaga tego obowiązujące prawo lub polityka zwrotów Apple</li>
                  <li>Ceny mogą się różnić w zależności od regionu i są wyświetlane w lokalnej walucie w momencie zakupu</li>
                  <li>Zakupione funkcje są powiązane z Twoim Apple ID i mogą być przywrócone na dowolnym urządzeniu zalogowanym tym samym Apple ID</li>
                </ul>
                <p>Aby poprosić o zwrot pieniędzy, skontaktuj się bezpośrednio z Apple pod adresem:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</p>

                <h2>Rozszerzenie klawiatury i pełny dostęp</h2>
                <p>Włączenie Pełnego Dostępu dla rozszerzenia klawiatury jest wymagane, aby wklejać obrazy i naklejki do innych aplikacji oraz aby włączyć synchronizację z iCloud. Pełny Dostęp nie daje nam dostępu do żadnych wpisywanych przez Ciebie danych.</p>
                <p>Potwierdzasz, że włączając Pełny Dostęp, iOS wyświetli powiadomienie systemowe informujące, że twórca klawiatury może potencjalnie uzyskać dostęp do twojego sposobu pisania. Chcemy to wyraźnie zaznaczyć: LiquidBoard nie zbiera, nie rejestruje ani nie przesyła żadnych danych dotyczących naciśnięć klawiszy.</p>

                <h2>Synchronizacja iCloud</h2>
                <p>Synchronizacja iCloud jest opcjonalną funkcją, która używa Twojego osobistego konta Apple iCloud do synchronizacji danych między urządzeniami. Korzystanie z iCloud podlega Warunkom i Zasady Apple. Nie ponosimy odpowiedzialności za utratę danych wynikającą z przerw w świadczeniu usług iCloud.</p>

                <h2>Wyłączenie gwarancji</h2>
                <p>LiquidBoard jest udostępniany „tak jak jest” i „w miarę dostępności” bez jakichkolwiek gwarancji, zarówno wyraźnych, jak i dorozumianych, w tym między innymi gwarancji przydatności handlowej, przydatności do określonego celu lub braku naruszeń.</p>
                <p>Nie gwarantujemy, że aplikacja będzie działać bez przerw, bez błędów ani wolna od wirusów lub innych szkodliwych składników.</p>

                <h2>Ograniczenie odpowiedzialności</h2>
                <p>W maksymalnym zakresie dozwolonym przez obowiązujące prawo, nie ponosimy odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, w tym między innymi za utratę danych, utratę zysków lub utratę renomy, wynikające z korzystania przez Ciebie z Aplikacji lub niemożności jej używania.</p>

                <h2>Zakończenie</h2>
                <p>Zastrzegamy sobie prawo do zakończenia lub ograniczenia Twojego dostępu do Aplikacji w dowolnym momencie, bez powiadomienia, z powodu zachowania, które naszym zdaniem narusza te Warunki lub jest szkodliwe dla innych użytkowników, nas lub osób trzecich.</p>
                <p>Możesz przestać korzystać z aplikacji w dowolnym momencie, usuwając ją ze swojego urządzenia.</p>

                <h2>Zmiany w niniejszych warunkach</h2>
                <p>Możemy od czasu do czasu aktualizować niniejsze Warunki korzystania. Kontynuowanie korzystania z aplikacji po wprowadzeniu zmian oznacza akceptację zmienionych Warunków. O istotnych zmianach powiadomimy Cię za pośrednictwem aplikacji lub naszej strony internetowej.</p>

                <h2>Prawo właściwe</h2>
                <p>Niniejsze Warunki są regulowane i interpretowane zgodnie z prawem jurysdykcji, w której znajduje się deweloper, bez względu na zasady kolizji praw.</p>

                <h2>Kontakt</h2>
                <p>Jeśli masz jakiekolwiek pytania dotyczące tych Warunków, prosimy o kontakt pod adresem:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
  </>);

export const Payment = () => (<>
    <h2>Polityka płatności i zwrotów</h2>
                <p>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</p>
                <p>LiquidBoard oferuje opcjonalne zakupy w aplikacji, aby odblokować funkcje premium. Wszystkie płatności są w pełni obsługiwane przez Apple za pośrednictwem App Store — nie przetwarzamy, nie przechowujemy ani nie mamy dostępu do Twoich informacji płatniczych.</p>

                <h2>Co możesz kupić</h2>
                <p>LiquidBoard oferuje następujące opcjonalne zakupy:</p>
                <ul>
                  <li>Funkcje Premium — Jednorazowe lub subskrypcyjne odblokowanie zaawansowanej funkcjonalności aplikacji</li>
                </ul>
                <p>Dostępne zakupy i ceny są wyświetlane w aplikacji w momencie zakupu. Ceny mogą się różnić w zależności od regionu i są podawane w Twojej lokalnej walucie.</p>

                <h2>Przetwarzanie płatności</h2>
                <p>Wszystkie transakcje są przetwarzane bezpiecznie przez Apple. Nigdy nie widzimy ani nie przechowujemy Twojej karty kredytowej, adresu rozliczeniowego ani żadnych danych płatniczych.</p>
                <p>Dokonując zakupu, zgadzasz się na Warunki sprzedaży App Store Apple. Twoja metoda płatności zarejestrowana w Apple zostanie obciążona w momencie potwierdzenia zakupu.</p>

                <h2>Przywracanie zakupów</h2>
                <p>Jeśli ponownie zainstalujesz LiquidBoard lub przejdziesz na nowe urządzenie, możesz przywrócić wszystkie wcześniejsze zakupy bez dodatkowych kosztów, korzystając z opcji Przywróć zakupy w aplikacji. Zakupy są powiązane z Twoim Apple ID i są dostępne na wszystkich urządzeniach zalogowanych na to samo konto.</p>

                <h2>Subskrypcje</h2>
                <p>Jeśli LiquidBoard oferuje zakupy w formie subskrypcji:</p>
                <ul>
                  <li>Subskrypcje odnawiają się automatycznie, chyba że zostaną anulowane co najmniej 24 godziny przed końcem bieżącego okresu rozliczeniowego</li>
                  <li>Twoje Apple ID zostanie obciążone opłatą za odnowienie w ciągu 24 godzin przed zakończeniem bieżącego okresu</li>
                  <li>Możesz zarządzać subskrypcjami lub je anulować w dowolnym momencie w Ustawieniach → [Twoje imię] → Subskrypcje</li>
                  <li>Anulowanie subskrypcji wchodzi w życie na koniec bieżącego opłaconego okresu — do tego czasu zachowujesz dostęp</li>
                  <li>Bezpłatne okresy próbne, jeśli są oferowane, zostaną przekształcone w płatną subskrypcję, chyba że zostaną anulowane przed zakończeniem okresu próbnego</li>
                </ul>

                <h2>Polityka zwrotów</h2>
                <p>Nie przetwarzamy zwrotów bezpośrednio. Wszystkie prośby o zwrot muszą być zgłaszane do Apple, ponieważ są one sprzedawcą rejestrowym wszystkich transakcji w App Store.</p>
                <p>Apple rozpatruje zwroty według własnego uznania, zgodnie z polityką zwrotów. Do najczęstszych przypadków kwalifikujących się należą przypadkowe zakupy, nieautoryzowane opłaty lub zakupy, które nie działały zgodnie z opisem.</p>
                <p>Aby poprosić o zwrot pieniędzy od Apple:</p>
                <ul>
                  <li>Działaj.<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>i zaloguj się swoim Apple ID</li>
                  <li>Znajdź zakup LiquidBoard i stuknij Zgłoś problem</li>
                  <li>Wybierz powód i prześlij swoje zgłoszenie</li>
                </ul>
                <p>Apple zazwyczaj odpowiada w ciągu kilku dni roboczych. Decyzje o zwrotach podejmuje wyłącznie Apple.</p>

                <h2>Zmiany cen</h2>
                <p>Zastrzegamy sobie prawo do zmiany cen zakupów w aplikacji w dowolnym momencie. Zmiany cen subskrypcji będą komunikowane z wyprzedzeniem za pośrednictwem aplikacji lub App Store i wejdą w życie na początku Twojego następnego okresu rozliczeniowego. Zostaniesz powiadomiony przez Apple przed wprowadzeniem jakiejkolwiek zmiany ceny subskrypcji.</p>

                <h2>Nieudane lub niekompletne zakupy</h2>
                <p>Jeśli zakup nie powiedzie się lub zostaniesz obciążony, ale nie otrzymasz treści, najpierw spróbuj przywrócić zakupy w aplikacji. Jeśli problem będzie się utrzymywał, skontaktuj się z nami pod<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a>i będziemy badać to niezwłocznie.</p>

                <h2>Kontakt</h2>
                <p>W przypadku pytań dotyczących rozliczeń lub problemów z zakupem, skontaktuj się z nami pod:<a href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</a></p>
                <p>W przypadku zwrotów prosimy korzystać z oficjalnego kanału Apple:<a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></p>
  </>
);
