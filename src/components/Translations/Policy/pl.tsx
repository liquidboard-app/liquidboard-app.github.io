import { PolicyHeading, PolicyParagraph, PolicyLink, PolicyEmphasis, PolicyList, PolicyListItem } from './elements';

export const Security = () => (
  <>
    <PolicyHeading>Polityka bezpieczeństwa danych</PolicyHeading>
                <PolicyParagraph>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard został zaprojektowany z podejściem priorytetowo traktującym prywatność. Twoje dane nigdy nie opuszczają urządzenia, chyba że wyraźnie zdecydujesz się włączyć synchronizację iCloud. Nie mamy żadnych serwerów, żadnych kont i nie mamy dostępu do Twoich treści.</PolicyParagraph>

                <PolicyHeading>Przechowywanie danych</PolicyHeading>
                <PolicyParagraph>Wszystkie treści, które tworzysz w LiquidBoard — fragmenty tekstu, obrazy i naklejki — są przechowywane w jednym z dwóch miejsc:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>Pamięć w urządzeniu</PolicyEmphasis>— Zarządzane przez iOS i dostępne tylko dla LiquidBoard. Inne aplikacje nie mogą odczytywać Twoich danych.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>iCloud (opcjonalnie)</PolicyEmphasis>— Synchronizowane przez Twój osobisty identyfikator Apple ID przy użyciu szyfrowanej infrastruktury CloudKit firmy Apple.</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Na naszych serwerach nie są przechowywane żadne dane. Nie prowadzimy żadnej infrastruktury zaplecza.</PolicyParagraph>

                <PolicyHeading>Szyfrowanie</PolicyHeading>
                <PolicyParagraph>Twoje dane są chronione przez iOS i warstwy zabezpieczeń Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem><PolicyEmphasis>W spoczynku</PolicyEmphasis>— Dane przechowywane na Twoim urządzeniu są szyfrowane przez iOS za pomocą kodu dostępu do urządzenia i Secure Enclave.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>W tranzycie</PolicyEmphasis>— Jeśli synchronizacja iCloud jest włączona, dane są szyfrowane przez CloudKit Apple przed przesłaniem.</PolicyListItem>
                  <PolicyListItem><PolicyEmphasis>Kopia zapasowa iCloud</PolicyEmphasis>— Jeśli Twoje urządzenie jest zabezpieczone kopią zapasową w iCloud, dane aplikacji są uwzględnione w zaszyfrowanym systemie kopii zapasowych Apple.</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Bezpieczeństwo zdjęć i obrazów</PolicyHeading>
                <PolicyParagraph>LiquidBoard uzyskuje dostęp do Twojej biblioteki zdjęć tylko wtedy, gdy wyraźnie zdecydujesz się wybrać lub importować zdjęcie. Aplikacja:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Nie uzyskuje dostępu do Twojej biblioteki zdjęć w tle</PolicyListItem>
                  <PolicyListItem>Nie przesyła zdjęć na żaden serwer</PolicyListItem>
                  <PolicyListItem>Przechowuje wybrane obrazy lokalnie w izolowanym kontenerze aplikacji</PolicyListItem>
                  <PolicyListItem>Przetwarza tworzenie naklejek całkowicie na urządzeniu</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Możesz cofnąć dostęp do zdjęć w dowolnym momencie w Ustawieniach → Prywatność i bezpieczeństwo → Zdjęcia.</PolicyParagraph>

                <PolicyHeading>Bezpieczeństwo Rozszerzenia Klawiatury</PolicyHeading>
                <PolicyParagraph>Rozszerzenie klawiatury nie zbiera, nie rejestruje ani nie przesyła żadnych danych o naciśnięciach klawiszy ani tekstu, który wpisujesz w innych aplikacjach.</PolicyParagraph>
                <PolicyParagraph>Wymagany jest pełny dostęp, aby rozszerzenie klawiatury mogło wklejać obrazy i naklejki oraz uzyskiwać dostęp do synchronizacji iCloud. Nawet przy włączonym pełnym dostępie, rozszerzenie klawiatury działa całkowicie w środowisku odizolowanym iOS. Nie ma możliwości wysyłania danych do zewnętrznych serwerów.</PolicyParagraph>

                <PolicyHeading>Brak dostępu danych osób trzecich</PolicyHeading>
                <PolicyParagraph>LiquidBoard nie integruje żadnego z poniższych:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>SDK analityczne lub do raportowania awarii, takie jak Firebase lub Mixpanel</PolicyListItem>
                  <PolicyListItem>Sieci reklamowe lub zestawy SDK do śledzenia</PolicyListItem>
                  <PolicyListItem>Usługi przechowywania lub przetwarzania w chmurze świadczone przez podmioty trzecie</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Twoje treści nigdy nie są udostępniane ani dostępne dla żadnej strony trzeciej.</PolicyParagraph>

                <PolicyHeading>Piaskownica aplikacji</PolicyHeading>
                <PolicyParagraph>LiquidBoard działa w rygorystycznym środowisku piaskownicy aplikacji iOS. Oznacza to, że inne aplikacje na Twoim urządzeniu nie mogą uzyskać dostępu do danych LiquidBoard, a LiquidBoard nie może uzyskać dostępu do danych należących do innych aplikacji, z wyjątkiem treści, które jawnie wklejasz za pomocą rozszerzenia klawiatury.</PolicyParagraph>

                <PolicyHeading>Twoja kontrola</PolicyHeading>
                <PolicyParagraph>Masz pełną kontrolę nad swoimi danymi przez cały czas:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Włącz lub wyłącz synchronizację iCloud w aplikacji</PolicyListItem>
                  <PolicyListItem>Cofnij dostęp do biblioteki zdjęć w ustawieniach iOS</PolicyListItem>
                  <PolicyListItem>Wyłącz pełen dostęp dla klawiatury w Ustawienia → Ogólne → Klawiatura → Klawiatury</PolicyListItem>
                  <PolicyListItem>Usuń wszystkie dane, usuwając aplikację</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Jeśli masz pytania dotyczące bezpieczeństwa danych, skontaktuj się z nami pod:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Privacy = () => (<>
    <PolicyHeading>Polityka prywatności</PolicyHeading>
                <PolicyParagraph>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard („my”, „nasze” lub „aplikacja”) zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób przetwarzamy informacje, gdy korzystasz z LiquidBoard i jego rozszerzenia klawiatury.</PolicyParagraph>

                <PolicyHeading>Dane, które zbieramy</PolicyHeading>
                <PolicyParagraph>LiquidBoard nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych na zewnętrzne serwery. Wszystkie dane tworzone w aplikacji — w tym fragmenty tekstów, obrazy, naklejki, kategorie i ustawienia — są przechowywane wyłącznie na Twoim urządzeniu lub w Twoim osobistym koncie iCloud.</PolicyParagraph>

                <PolicyHeading>Zdjęcia i obrazy</PolicyHeading>
                <PolicyParagraph>LiquidBoard może poprosić o dostęp do Twojej biblioteki zdjęć w następujących celach:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Wstawianie obrazów do swoich fragmentów</PolicyListItem>
                  <PolicyListItem>Tworzenie własnych naklejek z twoich zdjęć</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Zdjęcia, które wybierzesz, są przechowywane lokalnie na Twoim urządzeniu i/lub synchronizowane z Twoim osobistym kontem iCloud. Nie przesyłamy, nie transmitujemy ani nie uzyskujemy dostępu do Twoich zdjęć w żaden sposób. Dostęp do biblioteki zdjęć jest używany tylko w momencie, gdy wyraźnie wybierzesz obraz — aplikacja nie uzyskuje dostępu do Twojej biblioteki w tle.</PolicyParagraph>

                <PolicyHeading>Naklejki</PolicyHeading>
                <PolicyParagraph>LiquidBoard pozwala ci:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Twórz własne naklejki ze swoich zdjęć</PolicyListItem>
                  <PolicyListItem>Wstaw naklejki za pomocą rozszerzenia klawiatury</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Niestandardowe naklejki, które tworzysz ze swoich zdjęć, są przechowywane wyłącznie na Twoim urządzeniu i/lub w iCloud. Żadne treści naklejek ani dane obrazów nie są przesyłane do nas.</PolicyParagraph>

                <PolicyHeading>Rozszerzenie klawiatury i pełny dostęp</PolicyHeading>
                <PolicyParagraph>To rozszerzenie klawiatury nie zbiera, nie rejestruje ani nie przesyła żadnych danych o naciśnięciach klawiszy ani tekstu, który wpisujesz.</PolicyParagraph>
                <PolicyParagraph>Rozszerzenie klawiatury LiquidBoard wymaga włączenia pełnego dostępu w celu:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Wklejaj obrazy i naklejki do innych aplikacji</PolicyListItem>
                  <PolicyListItem>Synchronizuj swoje fragmenty i naklejki za pomocą iCloud na wszystkich swoich urządzeniach</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Pełny dostęp jest używany wyłącznie do tych funkcji. Klawiatura nie rejestruje, nie zapisuje ani nie przesyła niczego, co wpisujesz w innych aplikacjach. Żadne dane nie są wysyłane do żadnego zewnętrznego serwera.</PolicyParagraph>

                <PolicyHeading>Synchronizacja iCloud</PolicyHeading>
                <PolicyParagraph>Jeśli zdecydujesz się włączyć synchronizację iCloud, Twoje fragmenty tekstu, obrazy i naklejki będą synchronizowane za pośrednictwem infrastruktury iCloud firmy Apple przy użyciu Twojego osobistego Apple ID. Tymi danymi reguluje Polityka prywatności Apple. Nie mamy dostępu do Twoich danych w iCloud.</PolicyParagraph>

                <PolicyHeading>Udostępnianie danych</PolicyHeading>
                <PolicyParagraph>Nie sprzedajemy, nie udostępniamy ani nie ujawniamy Twoich danych żadnym osobom trzecim. Nie korzystamy z żadnych analiz, SDK reklamowych ani narzędzi śledzących stron trzecich.</PolicyParagraph>

                <PolicyHeading>Przechowywanie i usuwanie danych</PolicyHeading>
                <PolicyParagraph>Twoje dane pozostają na Twoim urządzeniu i/lub koncie iCloud i są w pełni pod Twoją kontrolą. Możesz usunąć swoje dane w dowolnym momencie poprzez:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Usuwanie poszczególnych fragmentów, obrazów lub naklejek w aplikacji</PolicyListItem>
                  <PolicyListItem>Cofanie dostępu do biblioteki zdjęć w Ustawienia → Prywatność → Zdjęcia</PolicyListItem>
                  <PolicyListItem>Usunięcie aplikacji, co powoduje usunięcie wszystkich lokalnie przechowywanych danych</PolicyListItem>
                  <PolicyListItem>Wyłączanie synchronizacji iCloud i usuwanie danych aplikacji z iCloud w Ustawienia → [Twoje imię] → iCloud → Zarządzaj pamięcią</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Prywatność dzieci</PolicyHeading>
                <PolicyParagraph>LiquidBoard nie zbiera świadomie żadnych informacji od dzieci poniżej 13 roku życia. Aplikacja nie zbiera danych osobowych od żadnych użytkowników.</PolicyParagraph>

                <PolicyHeading>Zmiany w niniejszej polityce</PolicyHeading>
                <PolicyParagraph>Możemy od czasu do czasu aktualizować niniejszą Politykę Prywatności. Wszelkie zmiany zostaną odzwierciedlone w aplikacji i na naszej stronie internetowej z aktualną datą.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Jeśli masz jakiekolwiek pytania dotyczące tej Polityki Prywatności, skontaktuj się z nami pod adresem:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Terms = () => (<>
    <PolicyHeading>Warunki użytkowania</PolicyHeading>
                <PolicyParagraph>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>Pobierając, instalując lub korzystając z LiquidBoard („Aplikacja”), zgadzasz się na przestrzeganie niniejszych Warunków użytkowania. Jeśli nie zgadzasz się z tymi warunkami, prosimy nie korzystać z Aplikacji.</PolicyParagraph>

                <PolicyHeading>Licencja</PolicyHeading>
                <PolicyParagraph>Udzielamy Ci ograniczonej, niewyłącznej, niezbywalnej, odwołalnej licencji na korzystanie z LiquidBoard do celów osobistych, niekomercyjnych, zgodnie z tymi Warunkami.</PolicyParagraph>
                <PolicyParagraph>Nie wolno ci:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Kopiuj, modyfikuj lub rozpowszechniaj aplikację lub jej zawartość</PolicyListItem>
                  <PolicyListItem>Inżynieria wsteczna lub próba wydobycia kodu źródłowego</PolicyListItem>
                  <PolicyListItem>Używaj aplikacji w jakimkolwiek nielegalnym lub nieautoryzowanym celu</PolicyListItem>
                  <PolicyListItem>Sprzedawać, udzielać sublicencji ani przenosić dostępu do Aplikacji na jakąkolwiek osobę trzecią</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Twoje Treści</PolicyHeading>
                <PolicyParagraph>Zachowujesz pełną własność wszystkich fragmentów tekstu, obrazów i naklejek, które tworzysz lub importujesz do LiquidBoard. Nie rościmy sobie żadnych praw do twoich treści.</PolicyParagraph>
                <PolicyParagraph>Jesteś wyłącznie odpowiedzialny za zapewnienie, że treści, które tworzysz lub wklejasz za pomocą aplikacji, nie naruszają praw osób trzecich, w tym praw autorskich, znaków towarowych ani praw do prywatności.</PolicyParagraph>

                <PolicyHeading>Dozwolone użytkowanie</PolicyHeading>
                <PolicyParagraph>Zgadzasz się nie używać LiquidBoard do tworzenia, przechowywania ani rozpowszechniania treści, które:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Jest nielegalne, szkodliwe, groźne lub nękające</PolicyListItem>
                  <PolicyListItem>Narusza prawa własności intelektualnej innych</PolicyListItem>
                  <PolicyListItem>Zawiera złośliwe oprogramowanie, wirusy lub szkodliwy kod</PolicyListItem>
                  <PolicyListItem>Narusza jakiekolwiek obowiązujące prawo lokalne, krajowe lub międzynarodowe</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Zakupy w aplikacji</PolicyHeading>
                <PolicyParagraph>LiquidBoard oferuje opcjonalne zakupy w aplikacji w celu odblokowania dodatkowych funkcji lub treści. Wszystkie zakupy są przetwarzane przez Apple za pośrednictwem App Store i podlegają Warunkom sprzedaży Apple.</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Zakupy nie podlegają zwrotowi, chyba że wymaga tego obowiązujące prawo lub polityka zwrotów Apple</PolicyListItem>
                  <PolicyListItem>Ceny mogą się różnić w zależności od regionu i są wyświetlane w lokalnej walucie w momencie zakupu</PolicyListItem>
                  <PolicyListItem>Zakupione funkcje są powiązane z Twoim Apple ID i mogą być przywrócone na dowolnym urządzeniu zalogowanym tym samym Apple ID</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Aby poprosić o zwrot pieniędzy, skontaktuj się bezpośrednio z Apple pod adresem:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>.</PolicyParagraph>

                <PolicyHeading>Rozszerzenie klawiatury i pełny dostęp</PolicyHeading>
                <PolicyParagraph>Włączenie Pełnego Dostępu dla rozszerzenia klawiatury jest wymagane, aby wklejać obrazy i naklejki do innych aplikacji oraz aby włączyć synchronizację z iCloud. Pełny Dostęp nie daje nam dostępu do żadnych wpisywanych przez Ciebie danych.</PolicyParagraph>
                <PolicyParagraph>Potwierdzasz, że włączając Pełny Dostęp, iOS wyświetli powiadomienie systemowe informujące, że twórca klawiatury może potencjalnie uzyskać dostęp do twojego sposobu pisania. Chcemy to wyraźnie zaznaczyć: LiquidBoard nie zbiera, nie rejestruje ani nie przesyła żadnych danych dotyczących naciśnięć klawiszy.</PolicyParagraph>

                <PolicyHeading>Synchronizacja iCloud</PolicyHeading>
                <PolicyParagraph>Synchronizacja iCloud jest opcjonalną funkcją, która używa Twojego osobistego konta Apple iCloud do synchronizacji danych między urządzeniami. Korzystanie z iCloud podlega Warunkom i Zasady Apple. Nie ponosimy odpowiedzialności za utratę danych wynikającą z przerw w świadczeniu usług iCloud.</PolicyParagraph>

                <PolicyHeading>Wyłączenie gwarancji</PolicyHeading>
                <PolicyParagraph>LiquidBoard jest udostępniany „tak jak jest” i „w miarę dostępności” bez jakichkolwiek gwarancji, zarówno wyraźnych, jak i dorozumianych, w tym między innymi gwarancji przydatności handlowej, przydatności do określonego celu lub braku naruszeń.</PolicyParagraph>
                <PolicyParagraph>Nie gwarantujemy, że aplikacja będzie działać bez przerw, bez błędów ani wolna od wirusów lub innych szkodliwych składników.</PolicyParagraph>

                <PolicyHeading>Ograniczenie odpowiedzialności</PolicyHeading>
                <PolicyParagraph>W maksymalnym zakresie dozwolonym przez obowiązujące prawo, nie ponosimy odpowiedzialności za jakiekolwiek pośrednie, przypadkowe, specjalne, wynikowe lub karne szkody, w tym między innymi za utratę danych, utratę zysków lub utratę renomy, wynikające z korzystania przez Ciebie z Aplikacji lub niemożności jej używania.</PolicyParagraph>

                <PolicyHeading>Zakończenie</PolicyHeading>
                <PolicyParagraph>Zastrzegamy sobie prawo do zakończenia lub ograniczenia Twojego dostępu do Aplikacji w dowolnym momencie, bez powiadomienia, z powodu zachowania, które naszym zdaniem narusza te Warunki lub jest szkodliwe dla innych użytkowników, nas lub osób trzecich.</PolicyParagraph>
                <PolicyParagraph>Możesz przestać korzystać z aplikacji w dowolnym momencie, usuwając ją ze swojego urządzenia.</PolicyParagraph>

                <PolicyHeading>Zmiany w niniejszych warunkach</PolicyHeading>
                <PolicyParagraph>Możemy od czasu do czasu aktualizować niniejsze Warunki korzystania. Kontynuowanie korzystania z aplikacji po wprowadzeniu zmian oznacza akceptację zmienionych Warunków. O istotnych zmianach powiadomimy Cię za pośrednictwem aplikacji lub naszej strony internetowej.</PolicyParagraph>

                <PolicyHeading>Prawo właściwe</PolicyHeading>
                <PolicyParagraph>Niniejsze Warunki są regulowane i interpretowane zgodnie z prawem jurysdykcji, w której znajduje się deweloper, bez względu na zasady kolizji praw.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>Jeśli masz jakiekolwiek pytania dotyczące tych Warunków, prosimy o kontakt pod adresem:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
  </>);

export const Payment = () => (<>
    <PolicyHeading>Polityka płatności i zwrotów</PolicyHeading>
                <PolicyParagraph>Ostatnia aktualizacja: 05 czerwca 2026 · LiquidBoard</PolicyParagraph>
                <PolicyParagraph>LiquidBoard oferuje opcjonalne zakupy w aplikacji, aby odblokować funkcje premium. Wszystkie płatności są w pełni obsługiwane przez Apple za pośrednictwem App Store — nie przetwarzamy, nie przechowujemy ani nie mamy dostępu do Twoich informacji płatniczych.</PolicyParagraph>

                <PolicyHeading>Co możesz kupić</PolicyHeading>
                <PolicyParagraph>LiquidBoard oferuje następujące opcjonalne zakupy:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Funkcje Premium — Jednorazowe lub subskrypcyjne odblokowanie zaawansowanej funkcjonalności aplikacji</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Dostępne zakupy i ceny są wyświetlane w aplikacji w momencie zakupu. Ceny mogą się różnić w zależności od regionu i są podawane w Twojej lokalnej walucie.</PolicyParagraph>

                <PolicyHeading>Przetwarzanie płatności</PolicyHeading>
                <PolicyParagraph>Wszystkie transakcje są przetwarzane bezpiecznie przez Apple. Nigdy nie widzimy ani nie przechowujemy Twojej karty kredytowej, adresu rozliczeniowego ani żadnych danych płatniczych.</PolicyParagraph>
                <PolicyParagraph>Dokonując zakupu, zgadzasz się na Warunki sprzedaży App Store Apple. Twoja metoda płatności zarejestrowana w Apple zostanie obciążona w momencie potwierdzenia zakupu.</PolicyParagraph>

                <PolicyHeading>Przywracanie zakupów</PolicyHeading>
                <PolicyParagraph>Jeśli ponownie zainstalujesz LiquidBoard lub przejdziesz na nowe urządzenie, możesz przywrócić wszystkie wcześniejsze zakupy bez dodatkowych kosztów, korzystając z opcji Przywróć zakupy w aplikacji. Zakupy są powiązane z Twoim Apple ID i są dostępne na wszystkich urządzeniach zalogowanych na to samo konto.</PolicyParagraph>

                <PolicyHeading>Subskrypcje</PolicyHeading>
                <PolicyParagraph>Jeśli LiquidBoard oferuje zakupy w formie subskrypcji:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Subskrypcje odnawiają się automatycznie, chyba że zostaną anulowane co najmniej 24 godziny przed końcem bieżącego okresu rozliczeniowego</PolicyListItem>
                  <PolicyListItem>Twoje Apple ID zostanie obciążone opłatą za odnowienie w ciągu 24 godzin przed zakończeniem bieżącego okresu</PolicyListItem>
                  <PolicyListItem>Możesz zarządzać subskrypcjami lub je anulować w dowolnym momencie w Ustawieniach → [Twoje imię] → Subskrypcje</PolicyListItem>
                  <PolicyListItem>Anulowanie subskrypcji wchodzi w życie na koniec bieżącego opłaconego okresu — do tego czasu zachowujesz dostęp</PolicyListItem>
                  <PolicyListItem>Bezpłatne okresy próbne, jeśli są oferowane, zostaną przekształcone w płatną subskrypcję, chyba że zostaną anulowane przed zakończeniem okresu próbnego</PolicyListItem>
                </PolicyList>

                <PolicyHeading>Polityka zwrotów</PolicyHeading>
                <PolicyParagraph>Nie przetwarzamy zwrotów bezpośrednio. Wszystkie prośby o zwrot muszą być zgłaszane do Apple, ponieważ są one sprzedawcą rejestrowym wszystkich transakcji w App Store.</PolicyParagraph>
                <PolicyParagraph>Apple rozpatruje zwroty według własnego uznania, zgodnie z polityką zwrotów. Do najczęstszych przypadków kwalifikujących się należą przypadkowe zakupy, nieautoryzowane opłaty lub zakupy, które nie działały zgodnie z opisem.</PolicyParagraph>
                <PolicyParagraph>Aby poprosić o zwrot pieniędzy od Apple:</PolicyParagraph>
                <PolicyList>
                  <PolicyListItem>Działaj.<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink>i zaloguj się swoim Apple ID</PolicyListItem>
                  <PolicyListItem>Znajdź zakup LiquidBoard i stuknij Zgłoś problem</PolicyListItem>
                  <PolicyListItem>Wybierz powód i prześlij swoje zgłoszenie</PolicyListItem>
                </PolicyList>
                <PolicyParagraph>Apple zazwyczaj odpowiada w ciągu kilku dni roboczych. Decyzje o zwrotach podejmuje wyłącznie Apple.</PolicyParagraph>

                <PolicyHeading>Zmiany cen</PolicyHeading>
                <PolicyParagraph>Zastrzegamy sobie prawo do zmiany cen zakupów w aplikacji w dowolnym momencie. Zmiany cen subskrypcji będą komunikowane z wyprzedzeniem za pośrednictwem aplikacji lub App Store i wejdą w życie na początku Twojego następnego okresu rozliczeniowego. Zostaniesz powiadomiony przez Apple przed wprowadzeniem jakiejkolwiek zmiany ceny subskrypcji.</PolicyParagraph>

                <PolicyHeading>Nieudane lub niekompletne zakupy</PolicyHeading>
                <PolicyParagraph>Jeśli zakup nie powiedzie się lub zostaniesz obciążony, ale nie otrzymasz treści, najpierw spróbuj przywrócić zakupy w aplikacji. Jeśli problem będzie się utrzymywał, skontaktuj się z nami pod<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink>i będziemy badać to niezwłocznie.</PolicyParagraph>

                <PolicyHeading>Kontakt</PolicyHeading>
                <PolicyParagraph>W przypadku pytań dotyczących rozliczeń lub problemów z zakupem, skontaktuj się z nami pod:<PolicyLink href="mailto:liquidboard.app@gmail.com">liquidboard.app@gmail.com</PolicyLink></PolicyParagraph>
                <PolicyParagraph>W przypadku zwrotów prosimy korzystać z oficjalnego kanału Apple:<PolicyLink href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</PolicyLink></PolicyParagraph>
  </>
);
