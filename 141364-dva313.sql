-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Värd: 10.0.227.88
-- Skapad: 30 jan 2017 kl 14:56
-- Serverversion: 5.5.52-log
-- PHP-version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `141364-dva313`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `default_indata_company`
--

CREATE TABLE IF NOT EXISTS `default_indata_company` (
  `name` text,
  `row` int(32) NOT NULL DEFAULT '0',
  `value` double DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  `min` double DEFAULT NULL,
  `max` double DEFAULT NULL,
  `comment` text,
  `type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`row`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `default_indata_company`
--

INSERT INTO `default_indata_company` (`name`, `row`, `value`, `unit`, `min`, `max`, `comment`, `type`) VALUES
('Anläggning', 16, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Anläggningens effekt', 18, 100, 'kW', 1, NULL, 'Summan av modulernas märkeffekt. Om man har 100 moduler med 250 W märkeffekt blir den installerade effekten 100 * 250 W = 25 000 W = 25 kW. ', NULL),
('Modulyta', 19, NULL, 'm2', NULL, NULL, 'Summan av modulernas märkeffekt. Om man har 100 moduler med 250 W märkeffekt blir den installerade effekten 100 * 250 W = 25 000 W = 25 kW. ', 'Result'),
('Säkringsstorlek i anslutningspunkten', 20, 150, 'A', 16, NULL, 'Om säkringen i anslutningspunkten är högst 100 A kan man få skattereduktion för den överskottsel som matas in till nätet enligt Inkomstskattelag (1999:1229). Om säkringen överstiger 63 A har nätägaren rätt att ta betalt för inmatningsabonnemanget enligt Ellag (1997:857). Ett inmatningsabonnemang behövs om man matar in överskottsel till nätet, på motsvarande sätt som att man har ett uttagsabonnemang när man köper el. ', NULL),
('Ekonomisk livslängd', 23, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Ekonomisk livslängd', 24, 30, 'år', 25, 30, 'Max 50 år möjligt i denna kalkyl. Solcellsmodulerna har vanligen en effektgaranti på 25 år. ', NULL),
('Kalkylränta', 27, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Kalkylränta', 28, 5, '%', 1, 10, 'Här anges en real kalkylränta, där man från den nominella räntan räknat av inflationen. Här kan även ingå hänsyn till skatteffekter, exempelvis att privatpersoner får göra ett ränteavdrag på 30% i inkomstdeklarationen för lån. För privatpersoner 1-2% om man antar realränta efter skatt för ett banklån. Om man vill göra en riskjustering kan man välja en högre ränta. För övriga används vanligen en högre kalkylränta än för privatpersoner, där det finns en stor spridning i vilken kalkylränta man brukar använda.', NULL),
('Investering', 31, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Investeringskostnad solcellsanläggning, utan stöd eller ROT-avdrag', 32, 11000, 'kr/kW', 9000, 25000, 'Inklusive material och arbete. Privatpersoner ska ange alla kostnader med moms. Enligt National Survey Report of PV Power Applications in Sweden från IEA PVPS var medelpriset för nyckelfärdiga anläggningar 2015: 11 800 kr/kW, exklusive moms, för takmonterade system större än 20 kW och 18 750 kr/kW, inklusive moms, för system upp till 20 kW för småhus. Den billigaste nyckelfärdiga anläggning som byggts i Sverige till och med juni 2016 var en 2,7 MW anläggning för 8 500 kr/kW. Se även antaganden gjorda för mark- och nätanslutningskostnader i fliken "Grundläggande antaganden".', NULL),
('Investeringsstöd', 33, 30, '%', 20, 35, 'Från och med 2015-01-01 högst 20% för privatpersoner och högst 30% för företag enligt förordning (2009:689) om statligt stöd till solceller. Högst 35% för de som ansökte om stöd före 1 januari 2015. Beräkningarna görs både med eller utan investeringsstöd, ange därför den aktuella procentsatsen även om stöd inte är sökt. Investeringsstöd är inte möjligt om man har ROT-avdrag.', NULL),
('Bygglov', 35, 10000, 'kr', 0, NULL, 'För småhus ingen bygglovskostnad i vissa kommuner. I andra kommuner kan kostnaden för bygglov till småhus vara ca 1 500 - 4 000 kr, man får kontakta sin kommun och fråga. För större anläggningar får man fråga kommunen. ', NULL),
('Projektledning och upphandling', 36, 0, 'kr', 0, NULL, 'Gäller större anläggningar. ', NULL),
('Besiktning efter färdigställande', 37, 10000, 'kr', 0, 10000, 'Gäller större anläggningar. Ca 10 000 kr för anläggningar på ca 100 kW eller större. ', NULL),
('Utbildning', 38, 0, 'kr', 0, NULL, 'Exempelvis instruktioner för dem som ska sköta tillsyn och administration av anläggningen eller för snöskottare. Etablering av rutiner för försäljning av elcertifikat och överskottsel. Installatörens kostnader ingår vanligen i investeringskostnaden, men kostnad för tid för den egna personalen kan tillkomma. ', NULL),
('Summa investering under livslängden', 40, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Utan ROT-avdrag eller investeringsstöd', 41, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt fliken "Grundläggande antaganden". ', 'Result'),
('Med ROT-avdrag', 42, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt flikten "Grundläggande antaganden". Inget ROT-avdrag för växelriktarbyten.  ', 'Result'),
('Med investeringsstöd', 43, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt flikten "Grundläggande antaganden". Inget investeringsstöd för växelriktarbyten. ', 'Result'),
('Driftkostnad', 46, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Årlig fast driftkostnad som inte beror på anläggningens storlek', 47, NULL, 'kr/år', 0, NULL, 'Exempelvis för elcertifikatabonnemang, inmatningsabonnemang, loggning, resor för besök på plats, uttagsabonnemang.  För privatpersoner vanligen 0 kr. Använd fliken "Grundläggande antaganden" för beräkning. ', 'Result'),
('Årlig rörlig driftkostnad som beror på anläggningens storlek', 48, NULL, 'kr/år', 0, NULL, 'Exempelvis för årlig besiktning, försäkring, hyra av yta, snöskottning, buskröjning, gräsklippning, rengöring av moduler, fastighetsskatt och andra rörliga kostnader som beror på anläggningens storlek, exklusive resor för besök på plats. Använd fliken "Grundläggande antaganden" för beräkning. ', 'Result'),
('Summa årliga kostnader', 49, NULL, 'kr/kW,år', NULL, NULL, NULL, 'Result'),
('Energiutbyte', 52, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Energiutbyte första året', 53, 950, 'kWh/kW,år', 700, 1200, 'Ange det förväntade utbytet under det första driftåret. För efterföljande år tas hänsyn till en årlig degradering enligt värde i fliken "Grundläggande antaganden". Ingen beräkning av utbytet görs i detta program. Det finns många program för beräkningar utbytet. Ett lättanvänt webbaserat program som fungerar hyggligt söder om 60:e breddgraden är PVGIS, http://re.jrc.ec.europa.eu/pvgis/apps4/pvest.php. 800-1 100 kWh/kW,år är normalt i Sverige för  fast system utan skuggning och under år med normal solinstrålning. Bästa fasta systemen ger närmare 1 200 kWh/kW per år. Solföljande system ger årligen upp till ca 1 500 kWh/kW. Utbytet beror bland annat på var man bor i Sverige, mot vilket väderstreck solcellsmoduler är vända, vilken lutning modulerna har och om man tidvis har skuggning av solcellsmodulerna. Lämpliga startvärden kan vara 900 kWh/kW för småhus och 950 kWh/kW för större anläggningar som ofta har mer optimerad placering. ', NULL),
('Summa solelproduktion under livslängden', 54, NULL, 'kWh', NULL, NULL, 'Med hänsyn tagen till degradering av elproduktionen med tiden. ', 'Result'),
('Summa solelproduktion berättigad till elcertifikat', 55, NULL, 'kWh', NULL, NULL, 'Man får elcertifikat under 15 år. Med hänsyn tagen till degradering av elproduktionen med tiden.', 'Result'),
('Intäkter', 58, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Värden anges som uppskattat medel av nuvärden under anläggningens livslängd.', 59, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Andel egenanvänd el', 60, 80, '%', 0, 100, 'Egenanvänd el sparar köpt el. För småhus stora variationer, ca 20-80%. Kan vara svårt att förutsäga i förväg. För större byggnader med hög egenanvändning mindre osäkerhet. För flerbostadshus en fråga om el kan användas i lägenheter eller om elen bara går till fastighetsel.', NULL),
('Pris köpt el', 61, 1.1, 'kr/kWh', 0.5, 1.5, 'Genomsnitt av det rörliga värdet av egenanvänd el under livslängden, inklusive elhandel, energiskatt, elcertifikatavgift och elöverföring, exklusive fasta avgifter. Exklusive elcertifikat och ursprungsgarantier, som anges i separata poster nedan. Viktigt att eget värde anges då det har stor betydelse för lönsamheten. Dock svårt att förutsäga prisutvecklingen under livslängden.  Privatpersoner ska ange värde inklusive moms, alla andra ska ange värde exklusive moms. Från 1 juli 2016 ska juridiska personer som har över 255 kW solceller betala energiskatt på den egenanvända elen. Tillhör man denna kategori får man alltså ta bort energiskatten från den rörliga andelen av priset på köpt el. Energiskattens storlek beror på var i Sverige man bor. Industriella processer, jordbruk, skogsbruk eller vattenbruk (exempelvis fiskodling, kräftodling, musselodling, vattenväxtodling) får tillbaka den energiskatt som man har betalat förutom 0,5 öre/kWh, därför blir värdet av den egenanvända solelen lägre för dem. Enligt den energiöverenskommelse som regeringen gjort med övriga partier och som presenterades i "Ramöverenskommelse mellan Socialdemokraterna, Moderaterna, Miljöpartiet de gröna, Centerpartiet och Kristdemokraterna" 10 juni 2016 kommer energiskatten att höjas: "Finansiering av den slopade skatten på termisk effekt och sänkningen av fastighetsskatt på vattenkraft ska ske genom en höjning av energiskatten. Elintensiv industri ska undantas." Detta kommer att höja det framtida värdet av egenanvänd el. ', NULL),
('Pris såld el', 62, 0.5, 'kr/kWh', 0, 1.5, 'Viktigt att eget värde anges då det har stor betydelse för lönsamheten. Exklusive elcertifikat, ursprungsgarantier och skattereduktion, som anges i separata poster nedan. Nord Pool spotpris var i medel ovanligt låga ca 20 öre/kWh under 2015, ca 29 öre/kWh under 2014 och ca 34 öre/kWh under 2013. Vissa elbolag betalar ett högre pris än spotpriset till så kallade mikroproducenter. Ska anges exklusive moms även för privatpersoner, eftersom den moms som betalas ut av elbolaget ska momsredovisas och betalas in till Skatteverket.  Ingångsvärdet baseras på en modellerad  prognos över elprisets utveckling enligt Energimyndighetens rapport "Kontrollstation 2017 för elcertifikatsystemet - En delredovisning ER 2016:09".', NULL),
('Ersättning från nätägare', 63, 0.05, 'kr/kWh', 0.02, 0.06, 'För "nätnytta". Ersättningen beroende på nätbolag. Ska anges exklusive moms även för privatpersoner, eftersom den moms som betalas ut av elbolaget ska momsredovisas och betalas in till Skatteverket.', NULL),
('Elcertifikatvärde', 64, 0.13, 'kr/kWh', 0.1, 0.2, 'Medel senaste året 15,994 öre/kWh (20160913) enligt Energimyndighetens statistik. Framtida marknadspriser för 2017-2021 var i mitten av september 2016 ca 13-15 öre/kWh enligt Svensk Kraftmäkling. Priserna därefter är osäkra. ', NULL),
('Andel solel som ger elcertifikat', 65, 100, '%', 0, 100, 'För småhusägare vanligen endast elcertifikat för överskott inmatat till nätet, då det oftast inte är lönsamt att betala för elcertifikatmätning av hela sin solelproduktion. För övriga vanligen 100%, då man har elcertifikatmätning direkt efter växelriktaren. ', NULL),
('Kvotplikt medelvärde', 66, 0, '%', 0, 23, 'Kvotplikt om "elanvändare som använder el som de själva producerat om mängden använd el uppgår till mer än 60 megawattimmar per beräkningsår och har producerats i en anläggning med en installerad effekt som är högre än 50 kilowatt," 23,1% 2016', NULL),
('Ursprungsgarantier värde', 67, 0.005, 'kr/kWh', 0, 0.02, 'Generellt sett har ursprungsgarantier nära noll värde. Få länder i Europa är intresserade av ursprungsgarantier. ', NULL),
('Antal år med skattereduktion', 68, 15, 'år', 1, NULL, 'Osäkert värde. I september 2016 saknades beslut om hur länge man kan få skattereduktion. Om man inte kan få skattereduktion sätts antal år till 0. Skattereduktionens storlek finns i fliken "Grundläggande antaganden". ', NULL),
('Beräknad produktionskostnad (LCOE)', 71, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Utan ROT-avdrag eller investeringsstöd', 72, NULL, 'kr/kWh', NULL, NULL, NULL, 'Result'),
('Med ROT-avdrag', 73, NULL, 'kr/kWh', NULL, NULL, 'Investeringsstöd är inte möjligt om man har ROT-avdrag.', 'Result'),
('Med investeringsstöd', 74, NULL, 'kr/kWh', NULL, NULL, 'ROT-avdrag är inte möjligt om man har investeringsstöd.', 'Result'),
('Beräknad lönsamhet', 77, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Endast heltal år beräknas för återbetalningstiden. ', 78, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
(NULL, 79, NULL, NULL, NULL, NULL, 'Grundantagandet är att skattereduktion kan utnyttjas för hela överskottet upp till takbeloppet som mest. ', 'Subheading'),
('Utan ROT-avdrag och investeringsstöd, med eventuell skattereduktion', 81, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 82, NULL, 'kr', NULL, NULL, 'Cellerna ändrar automatiskt färg mellan grön och röd beroende på om värdena är positiva eller negativa.', 'Result'),
('Diskonterad återbetalningstid', 83, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 84, NULL, '%', NULL, NULL, NULL, 'IRR'),
('Med ROT-avdrag och eventuell skattereduktion', 86, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 87, NULL, 'kr', NULL, NULL, NULL, 'Result'),
('Diskonterad återbetalningstid', 88, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 89, NULL, '%', NULL, NULL, NULL, 'IRR'),
('Med investeringsstöd och eventuell skattereduktion', 91, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 92, NULL, 'kr', NULL, NULL, NULL, 'Result'),
('Diskonterad återbetalningstid', 93, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 94, NULL, '%', NULL, NULL, NULL, 'IRR');

-- --------------------------------------------------------

--
-- Tabellstruktur `default_indata_person`
--

CREATE TABLE IF NOT EXISTS `default_indata_person` (
  `name` text,
  `row` int(32) NOT NULL DEFAULT '0',
  `value` double DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  `min` double DEFAULT NULL,
  `max` double DEFAULT NULL,
  `comment` text,
  `type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`row`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `default_indata_person`
--

INSERT INTO `default_indata_person` (`name`, `row`, `value`, `unit`, `min`, `max`, `comment`, `type`) VALUES
('Anläggning', 16, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Anläggningens effekt', 18, 4, 'kW', 1, NULL, 'Summan av modulernas märkeffekt. Om man har 100 moduler med 250 W märkeffekt blir den installerade effekten 100 * 250 W = 25 000 W = 25 kW. ', NULL),
('Modulyta', 19, NULL, 'm2', NULL, NULL, 'Summan av modulernas märkeffekt. Om man har 100 moduler med 250 W märkeffekt blir den installerade effekten 100 * 250 W = 25 000 W = 25 kW. ', 'Result'),
('Säkringsstorlek i anslutningspunkten', 20, 16, 'A', 16, NULL, 'Om säkringen i anslutningspunkten är högst 100 A kan man få skattereduktion för den överskottsel som matas in till nätet enligt Inkomstskattelag (1999:1229). Om säkringen överstiger 63 A har nätägaren rätt att ta betalt för inmatningsabonnemanget enligt Ellag (1997:857). Ett inmatningsabonnemang behövs om man matar in överskottsel till nätet, på motsvarande sätt som att man har ett uttagsabonnemang när man köper el. ', NULL),
('Ekonomisk livslängd', 23, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Ekonomisk livslängd', 24, 30, 'år', 25, 30, 'Max 50 år möjligt i denna kalkyl. Solcellsmodulerna har vanligen en effektgaranti på 25 år. ', NULL),
('Kalkylränta', 27, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Kalkylränta', 28, 2, '%', 25, 30, 'Här anges en real kalkylränta, där man från den nominella räntan räknat av inflationen. Här kan även ingå hänsyn till skatteffekter, exempelvis att privatpersoner får göra ett ränteavdrag på 30% i inkomstdeklarationen för lån. För privatpersoner 1-2% om man antar realränta efter skatt för ett banklån. Om man vill göra en riskjustering kan man välja en högre ränta. För övriga används vanligen en högre kalkylränta än för privatpersoner, där det finns en stor spridning i vilken kalkylränta man brukar använda.', NULL),
('Investering', 31, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Investeringskostnad solcellsanläggning, utan stöd eller ROT-avdrag', 32, 19000, 'kr/kW', 9000, 25000, 'Inklusive material och arbete. Privatpersoner ska ange alla kostnader med moms. Enligt National Survey Report of PV Power Applications in Sweden från IEA PVPS var medelpriset för nyckelfärdiga anläggningar 2015: 11 800 kr/kW, exklusive moms, för takmonterade system större än 20 kW och 18 750 kr/kW, inklusive moms, för system upp till 20 kW för småhus. Den billigaste nyckelfärdiga anläggning som byggts i Sverige till och med juni 2016 var en 2,7 MW anläggning för 8 500 kr/kW. Se även antaganden gjorda för mark- och nätanslutningskostnader i fliken "Grundläggande antaganden".', NULL),
('Investeringsstöd', 33, 20, '%', 20, 35, 'Från och med 2015-01-01 högst 20% för privatpersoner och högst 30% för företag enligt förordning (2009:689) om statligt stöd till solceller. Högst 35% för de som ansökte om stöd före 1 januari 2015. Beräkningarna görs både med eller utan investeringsstöd, ange därför den aktuella procentsatsen även om stöd inte är sökt. Investeringsstöd är inte möjligt om man har ROT-avdrag.', NULL),
('Bygglov', 35, 2000, 'kr', 0, NULL, 'För småhus ingen bygglovskostnad i vissa kommuner. I andra kommuner kan kostnaden för bygglov till småhus vara ca 1 500 - 4 000 kr, man får kontakta sin kommun och fråga. För större anläggningar får man fråga kommunen. ', NULL),
('Projektledning och upphandling', 36, 0, 'kr', 0, NULL, 'Gäller större anläggningar. ', NULL),
('Besiktning efter färdigställande', 37, 0, 'kr', 0, 10000, 'Gäller större anläggningar. Ca 10 000 kr för anläggningar på ca 100 kW eller större. ', NULL),
('Utbildning', 38, 0, 'kr', 0, NULL, 'Exempelvis instruktioner för dem som ska sköta tillsyn och administration av anläggningen eller för snöskottare. Etablering av rutiner för försäljning av elcertifikat och överskottsel. Installatörens kostnader ingår vanligen i investeringskostnaden, men kostnad för tid för den egna personalen kan tillkomma. ', NULL),
('Summa investering under livslängden', 40, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Utan ROT-avdrag eller investeringsstöd', 41, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt fliken "Grundläggande antaganden". ', 'Result'),
('Med ROT-avdrag', 42, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt flikten "Grundläggande antaganden". Inget ROT-avdrag för växelriktarbyten.  ', 'Result'),
('Med investeringsstöd', 43, NULL, 'kr/kW', NULL, NULL, 'Under livslängden, inklusive eventuella växelriktarbyten enligt flikten "Grundläggande antaganden". Inget investeringsstöd för växelriktarbyten. ', 'Result'),
('Driftkostnad', 46, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Årlig fast driftkostnad som inte beror på anläggningens storlek', 47, NULL, 'kr/år', 0, NULL, 'Exempelvis för elcertifikatabonnemang, inmatningsabonnemang, loggning, resor för besök på plats, uttagsabonnemang.  För privatpersoner vanligen 0 kr. Använd fliken "Grundläggande antaganden" för beräkning. ', 'Result'),
('Årlig rörlig driftkostnad som beror på anläggningens storlek', 48, NULL, 'kr/år', 0, NULL, 'Exempelvis för årlig besiktning, försäkring, hyra av yta, snöskottning, buskröjning, gräsklippning, rengöring av moduler, fastighetsskatt och andra rörliga kostnader som beror på anläggningens storlek, exklusive resor för besök på plats. Använd fliken "Grundläggande antaganden" för beräkning. ', 'Result'),
('Summa årliga kostnader', 49, NULL, 'kr/kW,år', NULL, NULL, NULL, 'Result'),
('Energiutbyte', 52, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Energiutbyte första året', 53, 900, 'kWh/kW,år', 700, 1200, 'Ange det förväntade utbytet under det första driftåret. För efterföljande år tas hänsyn till en årlig degradering enligt värde i fliken "Grundläggande antaganden". Ingen beräkning av utbytet görs i detta program. Det finns många program för beräkningar utbytet. Ett lättanvänt webbaserat program som fungerar hyggligt söder om 60:e breddgraden är PVGIS, http://re.jrc.ec.europa.eu/pvgis/apps4/pvest.php. 800-1 100 kWh/kW,år är normalt i Sverige för  fast system utan skuggning och under år med normal solinstrålning. Bästa fasta systemen ger närmare 1 200 kWh/kW per år. Solföljande system ger årligen upp till ca 1 500 kWh/kW. Utbytet beror bland annat på var man bor i Sverige, mot vilket väderstreck solcellsmoduler är vända, vilken lutning modulerna har och om man tidvis har skuggning av solcellsmodulerna. Lämpliga startvärden kan vara 900 kWh/kW för småhus och 950 kWh/kW för större anläggningar som ofta har mer optimerad placering. ', NULL),
('Summa solelproduktion under livslängden', 54, NULL, 'kWh', NULL, NULL, 'Med hänsyn tagen till degradering av elproduktionen med tiden. ', 'Result'),
('Summa solelproduktion berättigad till elcertifikat', 55, NULL, 'kWh', NULL, NULL, 'Man får elcertifikat under 15 år. Med hänsyn tagen till degradering av elproduktionen med tiden.', 'Result'),
('Intäkter', 58, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Värden anges som uppskattat medel av nuvärden under anläggningens livslängd.', 59, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Andel egenanvänd el', 60, 50, '%', 0, 100, 'Egenanvänd el sparar köpt el. För småhus stora variationer, ca 20-80%. Kan vara svårt att förutsäga i förväg. För större byggnader med hög egenanvändning mindre osäkerhet. För flerbostadshus en fråga om el kan användas i lägenheter eller om elen bara går till fastighetsel.', NULL),
('Pris köpt el', 61, 1.4, 'kr/kWh', 0.5, 1.5, 'Genomsnitt av det rörliga värdet av egenanvänd el under livslängden, inklusive elhandel, energiskatt, elcertifikatavgift och elöverföring, exklusive fasta avgifter. Exklusive elcertifikat och ursprungsgarantier, som anges i separata poster nedan. Viktigt att eget värde anges då det har stor betydelse för lönsamheten. Dock svårt att förutsäga prisutvecklingen under livslängden.  Privatpersoner ska ange värde inklusive moms, alla andra ska ange värde exklusive moms. Från 1 juli 2016 ska juridiska personer som har över 255 kW solceller betala energiskatt på den egenanvända elen. Tillhör man denna kategori får man alltså ta bort energiskatten från den rörliga andelen av priset på köpt el. Energiskattens storlek beror på var i Sverige man bor. Industriella processer, jordbruk, skogsbruk eller vattenbruk (exempelvis fiskodling, kräftodling, musselodling, vattenväxtodling) får tillbaka den energiskatt som man har betalat förutom 0,5 öre/kWh, därför blir värdet av den egenanvända solelen lägre för dem. Enligt den energiöverenskommelse som regeringen gjort med övriga partier och som presenterades i "Ramöverenskommelse mellan Socialdemokraterna, Moderaterna, Miljöpartiet de gröna, Centerpartiet och Kristdemokraterna" 10 juni 2016 kommer energiskatten att höjas: "Finansiering av den slopade skatten på termisk effekt och sänkningen av fastighetsskatt på vattenkraft ska ske genom en höjning av energiskatten. Elintensiv industri ska undantas." Detta kommer att höja det framtida värdet av egenanvänd el. ', NULL),
('Pris såld el', 62, 0.5, 'kr/kWh', 0, 1.5, 'Viktigt att eget värde anges då det har stor betydelse för lönsamheten. Exklusive elcertifikat, ursprungsgarantier och skattereduktion, som anges i separata poster nedan. Nord Pool spotpris var i medel ovanligt låga ca 20 öre/kWh under 2015, ca 29 öre/kWh under 2014 och ca 34 öre/kWh under 2013. Vissa elbolag betalar ett högre pris än spotpriset till så kallade mikroproducenter. Ska anges exklusive moms även för privatpersoner, eftersom den moms som betalas ut av elbolaget ska momsredovisas och betalas in till Skatteverket.  Ingångsvärdet baseras på en modellerad  prognos över elprisets utveckling enligt Energimyndighetens rapport "Kontrollstation 2017 för elcertifikatsystemet - En delredovisning ER 2016:09".', NULL),
('Ersättning från nätägare', 63, 0.05, 'kr/kWh', 0.02, 0.06, 'För "nätnytta". Ersättningen beroende på nätbolag. Ska anges exklusive moms även för privatpersoner, eftersom den moms som betalas ut av elbolaget ska momsredovisas och betalas in till Skatteverket.', NULL),
('Elcertifikatvärde', 64, 0.13, 'kr/kWh', 0.1, 0.2, 'Medel senaste året 15,994 öre/kWh (20160913) enligt Energimyndighetens statistik. Framtida marknadspriser för 2017-2021 var i mitten av september 2016 ca 13-15 öre/kWh enligt Svensk Kraftmäkling. Priserna därefter är osäkra. ', NULL),
('Andel solel som ger elcertifikat', 65, 50, '%', 0, 100, 'För småhusägare vanligen endast elcertifikat för överskott inmatat till nätet, då det oftast inte är lönsamt att betala för elcertifikatmätning av hela sin solelproduktion. För övriga vanligen 100%, då man har elcertifikatmätning direkt efter växelriktaren. ', NULL),
('Kvotplikt medelvärde', 66, 0, '%', 0, 23, 'Kvotplikt om "elanvändare som använder el som de själva producerat om mängden använd el uppgår till mer än 60 megawattimmar per beräkningsår och har producerats i en anläggning med en installerad effekt som är högre än 50 kilowatt," 23,1% 2016', NULL),
('Ursprungsgarantier värde', 67, 0.005, 'kr/kWh', 0, 0.02, 'Generellt sett har ursprungsgarantier nära noll värde. Få länder i Europa är intresserade av ursprungsgarantier. ', NULL),
('Antal år med skattereduktion', 68, 15, 'år', 1, NULL, 'Osäkert värde. I september 2016 saknades beslut om hur länge man kan få skattereduktion. Om man inte kan få skattereduktion sätts antal år till 0. Skattereduktionens storlek finns i fliken "Grundläggande antaganden". ', NULL),
('Beräknad produktionskostnad (LCOE)', 71, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Utan ROT-avdrag eller investeringsstöd', 72, NULL, 'kr/kWh', NULL, NULL, NULL, 'Result'),
('Med ROT-avdrag', 73, NULL, 'kr/kWh', NULL, NULL, 'Investeringsstöd är inte möjligt om man har ROT-avdrag.', 'Result'),
('Med investeringsstöd', 74, NULL, 'kr/kWh', NULL, NULL, 'ROT-avdrag är inte möjligt om man har investeringsstöd.', 'Result'),
('Beräknad lönsamhet', 77, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Endast heltal år beräknas för återbetalningstiden. ', 78, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
(NULL, 79, NULL, NULL, NULL, NULL, 'Grundantagandet är att skattereduktion kan utnyttjas för hela överskottet upp till takbeloppet som mest. ', 'Subheading'),
('Utan ROT-avdrag och investeringsstöd, med eventuell skattereduktion', 81, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 82, NULL, 'kr', NULL, NULL, 'Cellerna ändrar automatiskt färg mellan grön och röd beroende på om värdena är positiva eller negativa.', 'Result'),
('Diskonterad återbetalningstid', 83, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 84, NULL, '%', NULL, NULL, NULL, 'IRR'),
('Med ROT-avdrag och eventuell skattereduktion', 86, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 87, NULL, 'kr', NULL, NULL, NULL, 'Result'),
('Diskonterad återbetalningstid', 88, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 89, NULL, '%', NULL, NULL, NULL, 'IRR'),
('Med investeringsstöd och eventuell skattereduktion', 91, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Nuvärde', 92, NULL, 'kr', NULL, NULL, NULL, 'Result'),
('Diskonterad återbetalningstid', 93, NULL, 'år', NULL, NULL, NULL, 'Result'),
('Internränta (IRR)', 94, NULL, '%', NULL, NULL, NULL, 'IRR');

-- --------------------------------------------------------

--
-- Tabellstruktur `extended_company`
--

CREATE TABLE IF NOT EXISTS `extended_company` (
  `name` text,
  `row` int(32) NOT NULL,
  `value` double DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  `min` double DEFAULT NULL,
  `max` double DEFAULT NULL,
  `comment` text,
  `type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`row`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `extended_company`
--

INSERT INTO `extended_company` (`name`, `row`, `value`, `unit`, `min`, `max`, `comment`, `type`) VALUES
('Anläggning', 11, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Verkningsgrad solcellsmoduler', 12, 15, '%', 12, 21, 'Normalt värde för kiselbaserade solcellsmoduler 2016 är 15-16%. Det förekommer även att man använder tunnfilmssolceller (CIGS och CdTe), som vanligen har något lägre verkningsgrad än de kiselbaserade. Verkningsgraden används endast för att beräkna modulytan, den påverkar inte de ekonomiska beräkningarna. ', NULL),
('Investering', 15, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Tak för investeringsstöd', 16, 1200000, 'kr', 1200000, 1200000, 'Högst 1,2 miljoner kr per system enligt förordning (2009:689) om statligt stöd till solceller.', NULL),
('ROT-avdrag arbetskostnad', 17, 9, '%', 0, 9, 'Skatteavdrag kan fås för 30% av arbetskostnaden. Skatteverket godkände 2015 en schablon att arbetskostnaden är 30% av investeringskostnaden och med den schablonen blir det möjliga ROT-avdraget 9% av den totala ', NULL),
('Tak för ROT-avdrag', 18, 50000, 'kr', 50000, 100000, 'Högst 50 000 kr per person och år. Om två personer äger en anläggning gemensamt kan man få högst 100 000 kr och år. ', NULL),
('Kostnad för köp eller preparering av mark', 20, 0, 'kr', 0, NULL, 'Inklusive eventuell inhägnad av marken.', NULL),
('Nätanslutningskostnad', 21, 0, 'kr', 0, NULL, 'Endast för stora anläggningar.', NULL),
('Antal byten av växelriktare', 23, 1, NULL, 0, 2, 'Högst 3 möjligt i denna kalkyl!', NULL),
('Antal år till byte av växelriktare', 24, 15, 'år', 10, 30, 'Uppskattat värde. ', NULL),
('Kostnad för byte av växelriktare', 25, NULL, 'kr/kW', 0, 3000, 'Beror på installerad effekt där följande värden använts: 3 000 kr/kW om 0-10 kW, 2 000 kr/kW om 10-30 kW, 1 500 kr/kW om 30-100 kW och 1 000 kr/kW om större än 100 kW har använts. I kostnaden ingår även en arbetskostnad. Moms (25%) läggs automatiskt till för privatpersoner om man valt "Privatperson" i fliken "Dina indata & Resultat".', 'Result'),
('Driftkostnader', 28, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Beräkning av årlig fast kostnad, som inte beror på anläggningens storlek. Ange egna indata. Privatpersoner anger värden med moms.', 29, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Elcertifikathantering', 30, 2000, 'kr/år', 0, NULL, 'Elcertifikat kan fås utan kostnad för överskott som matas in till nätet. För att kunna få elcertifikat även för egenanvänd el krävs ett elcertifikatabonnemang där mätning av solelproduktionen sker direkt efter växelriktaren, vilket medför kostnader för mätning och rapportering till Cesar, där elcertifikaten kontoförs. Kostnaden för elcertifikatmätning består dels av en engångskostnad för elmätaren, dels av en årlig kostnad som beroende på leverantör av denna tjänst endera kan vara en fast årskostnad eller en kostnad som beror på värdet av elcertifikaten. Kostnader för hantering och försäljning av elcertifikat kan tillkomma. ', NULL),
('Fastighetsskatt', 31, 0, 'kr/år', 0, NULL, 'Om man köpt mark för markbaserad solcellsanläggning. Högst 0,5% av taxeringsvärdet. 0,2% av taxeringsvärdet förslag från utredningen "Fastighetstaxering av anläggningar för el- och värmeproduktion. SOU 2016:31". ', NULL),
('Inmatningsabonnemang', 32, 2000, 'kr/år', 0, NULL, 'Om man har säkringsabonnemang över 63A eller är nettoproducent om säkringsabonnemanget är högst 63 A får man betala för inmatningsabonnemang om man matar in el till nätet. Kostnaden varierar mellan olika nätägare. Enstaka nätägare tar inte ut någon avgift för inmatningsabonnemang om man är nettoproducent och har högst 63 A säkringsabonnemang. ', NULL),
('Loggning', 33, 0, 'kr/år', 0, NULL, 'Vissa databaser för produktionsdata kan ha en årlig kostnad.', NULL),
('Resor', 34, 1000, 'kr/år', 0, NULL, 'För besök på plats vid besiktning, snöskottning etc. ', NULL),
('Servitut', 35, 0, 'kr/år', 0, NULL, NULL, NULL),
('Uttagsabonnemang', 36, 0, 'kr/år', 0, NULL, 'I större parker kan en ny elanslutning behövas och därmed ett uttagsabonnemnang för köp av el.', NULL),
('Övrigt', 37, 0, 'kr/år', 0, NULL, 'Ange egen kostnadspost här.', NULL),
('Summa årlig fast driftkostnad', 38, NULL, 'kr/år', 0, NULL, 'Detta belopp för automatiskt över till fliken "Dina indata & Resultat".', 'Result'),
('Beräkning av årlig rörlig kostnad, som beror på anläggningen storlek. Ange egna indata. Privatpersoner anger värden med moms. ', 40, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Försäkring', 41, 0, 'kr/år', 0, NULL, 'För fastighetsägare höjs byggnadsvärdet och därmed kan försäkringskostnaden öka. För småhusägare ingår solcellsanläggningen vanligen i hemförsäkringen. ', NULL),
('Hyra av yta', 42, 0, 'kr/år', 0, NULL, 'Hyra av yta på tak eller mark.', NULL),
('Underhåll av yta', 43, 0, 'kr/år', 0, NULL, 'Exempelvis för snöskottning, gräsklippning eller buskröjning.', NULL),
('Rengöring av moduler', 44, 0, 'kr/år', 0, NULL, 'I svensk klimat rengörs modulerna normalt av regn och snösmältning. ', NULL),
('Tillsyn', 45, 5000, 'kr/år', 0, NULL, 'Om man har avlönad personal som sköter tillsynen kan en kostnad tillkomma för regelbunden tillsyn. En schablon på 50 kr/kW,år använd som grundvärde för kategorin "Övriga". ', NULL),
('Summa årlig rörlig driftkostnad', 46, NULL, 'kr/år', 0, NULL, 'Detta belopp för automatiskt över till fliken "Dina indata & Resultat".', 'Result'),
('Restvärde', 49, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Restvärde', 50, 0, 'kr', 0, NULL, 'Om restvärde antas vara lika med rivningskostnad kan båda sättas till 0.', NULL),
('Rivningskostnad', 51, 0, 'kr', 0, NULL, 'Om rivningskostnad antas var lika med restvärde kan båda sättas till 0. Rivningskostnaden brukar normalt tas upp vid nybyggnation.', NULL),
('Summa kostnader vid avslut', 52, NULL, 'kr/kW', 0, NULL, NULL, 'Result'),
('Systemdegradering', 55, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Årlig degradering av utbytet', 56, 0.3, '%/år', 0.1, 0.5, 'Solcellsmodulernas utbyte minskar något med tiden. Inklusive nedsmutsning. Något osäkert värde, få gjorda studier i Sverige. ', NULL),
('Energiutbyte', 59, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Tillgänglighet', 60, 99.9, '%', 98, 100, 'Anger hur stor del av möjlig drifttid, då det finns solinstrålning, som anläggningen är i drift. Anges som ett uppskattat genomsnitt över livslängden. Driftavbrott kan uppstå på grund av fel och vid reparationer Storleken på eventuella produktionsbortfall beror på när under året det sker, men är här jämnt fördelat över året i beräkningarna. Grundvärdet är en uppskattning, då svensk statistik saknas. 0,1% motsvarar 8,8 timmar per år. Fel på loggningen ger inget avdrag, så länge anläggningen producerar. ', NULL),
('Intäkter', 63, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Antal år med elcertifikat', 64, 15, 'år', 0, 15, 'Elcertifikat kan fås under högst 15 år om man bygger senast 2021. Elcertifikatsystemets slutår är 2035 enligt lag (2011:1200) om elcertifikat.', NULL),
('Skattereduktion', 65, 0.6, 'kr/kW', 0, 0.6, 'Enligt Inkomstskattelag (1999:1229). Endast för överskottsel, som matas in till nätet. Säkringen i anslutningspunkten får vara högst 100 A. ', NULL),
('Tak för skattereduktion', 66, 18000, 'kr/kW', 0, 18000, 'Man kan få skattereduktion för högst 30 000 kWh/år, eller högst för så mycket el man köper under ett år, per person eller anslutningspunkt enligt Inkomstskattelag (1999:1229). Vid en skattereduktion på 60 öre/kWh blir taket därmed 18 000 kr per år. Här antas att överskottet är mindre den egna elanvändningen och att skattereduktion därmed kan utnyttjas för hela överskottet upp till takbeloppet som mest.', NULL);

-- --------------------------------------------------------

--
-- Tabellstruktur `extended_person`
--

CREATE TABLE IF NOT EXISTS `extended_person` (
  `name` text,
  `row` int(32) NOT NULL DEFAULT '0',
  `value` double DEFAULT NULL,
  `unit` varchar(32) DEFAULT NULL,
  `min` double DEFAULT NULL,
  `max` double DEFAULT NULL,
  `comment` text,
  `type` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`row`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `extended_person`
--

INSERT INTO `extended_person` (`name`, `row`, `value`, `unit`, `min`, `max`, `comment`, `type`) VALUES
('Anläggning', 11, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Verkningsgrad solcellsmoduler', 12, 15, '%', 12, 21, 'Normalt värde för kiselbaserade solcellsmoduler 2016 är 15-16%. Det förekommer även att man använder tunnfilmssolceller (CIGS och CdTe), som vanligen har något lägre verkningsgrad än de kiselbaserade. Verkningsgraden används endast för att beräkna modulytan, den påverkar inte de ekonomiska beräkningarna. ', NULL),
('Investering', 15, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Tak för investeringsstöd', 16, 1200000, 'kr', 1200000, 1200000, 'Högst 1,2 miljoner kr per system enligt förordning (2009:689) om statligt stöd till solceller.', NULL),
('ROT-avdrag arbetskostnad', 17, 9, '%', 0, 9, 'Skatteavdrag kan fås för 30% av arbetskostnaden. Skatteverket godkände 2015 en schablon att arbetskostnaden är 30% av investeringskostnaden och med den schablonen blir det möjliga ROT-avdraget 9% av den totala ', NULL),
('Tak för ROT-avdrag', 18, 50000, 'kr', 50000, 100000, 'Högst 50 000 kr per person och år. Om två personer äger en anläggning gemensamt kan man få högst 100 000 kr och år. ', NULL),
('Kostnad för köp eller preparering av mark', 20, 0, 'kr', 0, NULL, 'Inklusive eventuell inhägnad av marken.', NULL),
('Nätanslutningskostnad', 21, 0, 'kr', 0, NULL, 'Endast för stora anläggningar.', NULL),
('Antal byten av växelriktare', 23, 1, NULL, 0, 2, 'Högst 3 möjligt i denna kalkyl!', NULL),
('Antal år till byte av växelriktare', 24, 15, 'år', 10, 30, 'Uppskattat värde. ', NULL),
('Kostnad för byte av växelriktare', 25, NULL, 'kr/kW', 0, 3000, 'Beror på installerad effekt där följande värden använts: 3 000 kr/kW om 0-10 kW, 2 000 kr/kW om 10-30 kW, 1 500 kr/kW om 30-100 kW och 1 000 kr/kW om större än 100 kW har använts. I kostnaden ingår även en arbetskostnad. Moms (25%) läggs automatiskt till för privatpersoner om man valt "Privatperson" i fliken "Dina indata & Resultat".', 'Result'),
('Driftkostnader', 28, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Beräkning av årlig fast kostnad, som inte beror på anläggningens storlek. Ange egna indata. Privatpersoner anger värden med moms.', 29, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Elcertifikathantering', 30, 0, 'kr/år', 0, NULL, 'Elcertifikat kan fås utan kostnad för överskott som matas in till nätet. För att kunna få elcertifikat även för egenanvänd el krävs ett elcertifikatabonnemang där mätning av solelproduktionen sker direkt efter växelriktaren, vilket medför kostnader för mätning och rapportering till Cesar, där elcertifikaten kontoförs. Kostnaden för elcertifikatmätning består dels av en engångskostnad för elmätaren, dels av en årlig kostnad som beroende på leverantör av denna tjänst endera kan vara en fast årskostnad eller en kostnad som beror på värdet av elcertifikaten. Kostnader för hantering och försäljning av elcertifikat kan tillkomma. ', NULL),
('Fastighetsskatt', 31, 0, 'kr/år', 0, NULL, 'Om man köpt mark för markbaserad solcellsanläggning. Högst 0,5% av taxeringsvärdet. 0,2% av taxeringsvärdet förslag från utredningen "Fastighetstaxering av anläggningar för el- och värmeproduktion. SOU 2016:31". ', NULL),
('Inmatningsabonnemang', 32, 0, 'kr/år', 0, NULL, 'Om man har säkringsabonnemang över 63A eller är nettoproducent om säkringsabonnemanget är högst 63 A får man betala för inmatningsabonnemang om man matar in el till nätet. Kostnaden varierar mellan olika nätägare. Enstaka nätägare tar inte ut någon avgift för inmatningsabonnemang om man är nettoproducent och har högst 63 A säkringsabonnemang. ', NULL),
('Loggning', 33, 0, 'kr/år', 0, NULL, 'Vissa databaser för produktionsdata kan ha en årlig kostnad.', NULL),
('Resor', 34, 0, 'kr/år', 0, NULL, 'För besök på plats vid besiktning, snöskottning etc. ', NULL),
('Servitut', 35, 0, 'kr/år', 0, NULL, NULL, NULL),
('Uttagsabonnemang', 36, 0, 'kr/år', 0, NULL, 'I större parker kan en ny elanslutning behövas och därmed ett uttagsabonnemnang för köp av el.', NULL),
('Övrigt', 37, 0, 'kr/år', 0, NULL, 'Ange egen kostnadspost här.', NULL),
('Summa årlig fast driftkostnad', 38, NULL, 'kr/år', 0, NULL, 'Detta belopp för automatiskt över till fliken "Dina indata & Resultat".', 'Result'),
('Beräkning av årlig rörlig kostnad, som beror på anläggningen storlek. Ange egna indata. Privatpersoner anger värden med moms. ', 40, NULL, NULL, NULL, NULL, NULL, 'Subheading'),
('Försäkring', 41, 0, 'kr/år', 0, NULL, 'För fastighetsägare höjs byggnadsvärdet och därmed kan försäkringskostnaden öka. För småhusägare ingår solcellsanläggningen vanligen i hemförsäkringen. ', NULL),
('Hyra av yta', 42, 0, 'kr/år', 0, NULL, 'Hyra av yta på tak eller mark.', NULL),
('Underhåll av yta', 43, 0, 'kr/år', 0, NULL, 'Exempelvis för snöskottning, gräsklippning eller buskröjning.', NULL),
('Rengöring av moduler', 44, 0, 'kr/år', 0, NULL, 'I svensk klimat rengörs modulerna normalt av regn och snösmältning. ', NULL),
('Tillsyn', 45, 0, 'kr/år', 0, NULL, 'Om man har avlönad personal som sköter tillsynen kan en kostnad tillkomma för regelbunden tillsyn. En schablon på 50 kr/kW,år använd som grundvärde för kategorin "Övriga". ', NULL),
('Summa årlig rörlig driftkostnad', 46, NULL, 'kr/år', 0, NULL, 'Detta belopp för automatiskt över till fliken "Dina indata & Resultat".', 'Result'),
('Restvärde', 49, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Restvärde', 50, 0, 'kr', 0, NULL, 'Om restvärde antas vara lika med rivningskostnad kan båda sättas till 0.', NULL),
('Rivningskostnad', 51, 0, 'kr', 0, NULL, 'Om rivningskostnad antas var lika med restvärde kan båda sättas till 0. Rivningskostnaden brukar normalt tas upp vid nybyggnation.', NULL),
('Summa kostnader vid avslut', 52, NULL, 'kr/kW', 0, NULL, NULL, 'Result'),
('Systemdegradering', 55, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Årlig degradering av utbytet', 56, 0.3, '%/år', 0.1, 0.5, 'Solcellsmodulernas utbyte minskar något med tiden. Inklusive nedsmutsning. Något osäkert värde, få gjorda studier i Sverige. ', NULL),
('Energiutbyte', 59, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Tillgänglighet', 60, 99.9, '%', 98, 100, 'Anger hur stor del av möjlig drifttid, då det finns solinstrålning, som anläggningen är i drift. Anges som ett uppskattat genomsnitt över livslängden. Driftavbrott kan uppstå på grund av fel och vid reparationer Storleken på eventuella produktionsbortfall beror på när under året det sker, men är här jämnt fördelat över året i beräkningarna. Grundvärdet är en uppskattning, då svensk statistik saknas. 0,1% motsvarar 8,8 timmar per år. Fel på loggningen ger inget avdrag, så länge anläggningen producerar. ', NULL),
('Intäkter', 63, NULL, NULL, NULL, NULL, NULL, 'Heading'),
('Antal år med elcertifikat', 64, 15, 'år', 0, 15, 'Elcertifikat kan fås under högst 15 år om man bygger senast 2021. Elcertifikatsystemets slutår är 2035 enligt lag (2011:1200) om elcertifikat.', NULL),
('Skattereduktion', 65, 0.6, 'kr/kW', 0, 0.6, 'Enligt Inkomstskattelag (1999:1229). Endast för överskottsel, som matas in till nätet. Säkringen i anslutningspunkten får vara högst 100 A. ', NULL),
('Tak för skattereduktion', 66, 18000, 'kr/kW', 0, 18000, 'Man kan få skattereduktion för högst 30 000 kWh/år, eller högst för så mycket el man köper under ett år, per person eller anslutningspunkt enligt Inkomstskattelag (1999:1229). Vid en skattereduktion på 60 öre/kWh blir taket därmed 18 000 kr per år. Här antas att överskottet är mindre den egna elanvändningen och att skattereduktion därmed kan utnyttjas för hela överskottet upp till takbeloppet som mest.', NULL);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(200) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `admin`, `email`) VALUES
(1, 'user', '12dea96fec20593566ab75692c9949596833adc9', 0, ''),
(2, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
