import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X15 · hacia las 5000 (A2→B2) ───────────────────────────── */

export const PACK_KX15: VocabWord[] = parsePack(`
# ══ aggettivi mancanti ══
giornaliero|diario|dʒornaljɛro|A|tmp|4|La routine giornaliera del mattino.|La rutina diaria de la mañana.
settimanale|semanal|settimaˈnale|A|tmp|3|Il mercato settimanale del sabato.|El mercado semanal del sábado.
mensile|mensual|menˈzile|A|tmp|3|L'abbonamento mensile della palestra.|La suscripción mensual del gimnasio.
annuale|anual|anˈnwale|A|tmp|3|Il controllo annuale della caldaia.|El control anual de la caldera.
biennale|bienal|bienˈnale|A|tmp|4|La biennale d'arte di Venezia.|La bienal de arte de Venecia.
triennale|trienal|trienˈnale|A|tmp|4|Un piano triennale di investimenti.|Un plan trienal de inversiones.
secolare|secular (centenario)|sekolare|A|tmp|4|Un albero secolare del parco.|Un árbol centenario del parque.
duraturo|duradero|duraˈturo|A|ast|4|Un matrimonio duraturo e sereno.|Un matrimonio duradero y sereno.|a=effimero
momentaneo|momentáneo|momentaˈneo|A|tmp|4|Un vuoto momentaneo di memoria.|Un vacío momentáneo de memoria.
temporaneo|temporal|temporaˈneo|A|tmp|3|Una sistemazione temporanea in hotel.|Una estadía temporal en hotel.|a=definitivo
definitivo|definitivo|definiˈtivo|A|ast|3|Il trasferimento definitivo a Roma.|El traslado definitivo a Roma.|a=temporaneo
provvisorio|provisional|provviˈzɔrjo|A|ast|4|Un alloggio provvisorio prima della casa.|Un alojamiento provisional antes de la casa.
dubitativo|dubitativo|dubiˈtativo|A|cmu|5|Un'espressione dubitativa del volto.|Una expresión dubitativa del rostro.
convinto|convencido|konˈvinto|A|emo|3|Un tifoso convinto fino al midollo.|Un hincha convencido hasta la médula.|c=esserne convinto
titubante|titubeante|titubante|A|emo|5|Una risposta titubante al telefono.|Una respuesta titubeante al teléfono.
restio|reacio|rɛstjo|A|emo|5|Restio a cambiare abitudini.|Reacio a cambiar costumbres.|c=restio a
propenso|dispuesto|proˈpɛnso|A|emo|5|Propenso a discussioni filosofiche.|Dispuesto a discusiones filosóficas.|a=restio
incline|inclinado|inˈkline|A|emo|5|Incline al malumore serale.|Inclinado al malhumor nocturno.
malumore|malhumor|malumore|S|emo|4|Un malumore passeggero del mattino.|Un malhumor pasajero de la mañana.|g=m
di buonumore|de buen humor|di bwonomore|L|emo|3|Si sveglia sempre di buonumore.|Se despierta siempre de buen humor.|a=malumore
scorbutico|malhumorado|skorbutiko|A|emo|5|Un vicino scorbutico ma onesto.|Un vecino malhumorado pero honrado.
iroso|iracundo|irozo|A|emo|5|Un carattere iroso del capitano.|Un carácter iracundo del capitán.|r=let
collerico|colérico|kolleriko|A|emo|5|Un attacco collerico sul traffico.|Un ataque colérico por el tráfico.
irascibile|irascible|iratʃibile|A|emo|5|Diventato irascibile col caldo.|Vuelto irascible con el calor.
frettoloso|apresurado|frettolozo|A|tmp|4|Un turista frettoloso in musei.|Un turista apresurado en museos.|a=tranquillo
immediato|inmediato|immeˈdjato|A|ast|3|Una reazione immediata alla notizia.|Una reacción inmediata a la noticia.
improvviso|imprevisto|improvviso|A|tmp|3|Una visita improvvisa dei suoceri.|Una visita imprevista de los suegros.|c=all'improvviso
inaspettato|inesperado|inaspettato|A|emo|4|Un regalo inaspettato sotto l'albero.|Un regalo inesperado bajo el árbol.
prevedibile|previsible|prevedibile|A|ast|4|Un finale prevedibile del giallo.|Un final previsible del policial.|a=imprevedibile
imprevedibile|impredecible|imprevedibile|A|ast|3|Il tempo imprevedibile di aprile.|El clima impredecible de abril.
inevitabile|inevitable|inevitabile|A|ast|4|Un ritardo inevitabile col traffico.|Un retraso inevitable con el tráfico.
evitabile|evitable|evitabile|A|ast|5|Un errore evitabile con più cura.|Un error evitable con más cuidado.|a=inevitabile
irrimediabile|irremediable|irrimediabile|A|ast|5|Un danno irrimediabile alla carriera.|Un daño irremediable a la carrera.
irreversibile|irreversible|irreverˈsibile|A|sci|5|Un processo irreversibile di invecchiamento.|Un proceso irreversible de envejecimiento.
progressivo|progresivo|proɡrɛssivo|A|sci|4|Un aumento progressivo dei prezzi.|Un aumento progresivo de los precios.
inarrestabile|imparable|inarreˈstabile|A|ast|5|Una carriera inarrestabile del campione.|Una carrera imparable del campeón.
incontenibile|incontenible|inkonteniˈbile|A|emo|5|Una gioia incontenibile per la vittoria.|Una alegría incontenible por la victoria.
insopportabile|insoportable|insopportabile|A|emo|3|Un caldo insopportabile d'agosto.|Un calor insoportable de agosto.|a=sopportabile
sopportabile|soportable|sopportabile|A|emo|4|Un ritardo sopportabile di dieci minuti.|Un retraso soportable de diez minutos.
tollerabile|tolerable|tollerabile|A|ast|5|Un livello di rumore tollerabile.|Un nivel de ruido tolerable.

# ══ verbi restanti ══
sopportare|soportar|sopporˈtare|V|emo|2|Non sopporto il rumore del traffico.|No soporto el ruido del tráfico.|n=Anche "mantener in piedi": sopportare il peso
tollerare|tolerar|tolleˈrare|V|ast|4|Tollerare le differenze di opinione.|Tolerar las diferencias de opinión.
ribellarsi|rebelarse|ribelˈlarsi|V|emo|4|I figli si ribellano alle regole.|Los hijos se rebelan a las reglas.|c=ribellarsi a
sottomettersi|someterse|sottomettersi|V|ast|5|Si sottomette malvolentieri al destino.|Se somete de mala gana al destino.|a=ribellarsi
costringere|obligar (forzar)|kostrinˈdʒere|V|ast|4|Mi costringi a scegliere adesso.|Me obligas a elegir ahora.|n=Io costringo; participio costretto
costretto|obligado|koˈstretto|A|ast|4|Un invitato costretto a casa dal maltempo.|Un invitado obligado en casa por el mal tiempo.
liberarsi|liberarse|libeˈrarsi|V|ast|3|Finalmente mi libero del mobile vecchio.|Finalmente me libero del mueble viejo.
sbarazzarsi di|deshacerse de|zbaratˈtsarsi di|L|ast|3|Mi sbarazzo delle riviste vecchie.|Me deshago de las revistas viejas.|r=inf
disfarsi|deshacerse|diˈsfarsi|V|ast|5|Disfarsi dei vestiti smessi.|Deshacerse de la ropa desechada.|r=for
donare|donar|doˈnare|V|rel|3|Dona il sangue ogni tre mesi.|Dona sangre cada tres meses.|s=regalare
beneficenza|beneficencia|benefitʃɛntsa|S|rel|4|Un concerto di beneficenza in piazza.|Un concierto de beneficencia en la plaza.|g=f;c=fare beneficenza
elemosina|limosna|elemoˈzina|S|rel|5|Dare l'elemosina al semaforo.|Dar limosna en el semáforo.|g=f;n=Invariable
barbone|indigente|barˈbone|S|rel|4|Un barbone col cane al supermercato.|Un indigente con perro en el supermercado.|g=m;p=barboni;r=col
senzatetto|sin techo|senzatɛtto|S|rel|4|I senzatetto della stazione centrale.|Los sin techo de la estación central.|g=m;n=Invariable;n2=Muy italiano
mendicante|mendigo|menˈdikante|S|rel|5|Un mendicante all'angolo del duomo.|Un mendigo en la esquina del duomo.|g=m;p=mendicanti
carità|caridad|kariˈta|S|rel|3|La Caritas della parrocchia aiuta.|La Caritas de la parroquia ayuda.|g=f;n=Invariable;c=fare la carità
solidarietà|solidaridad|solidarieta|S|rel|3|Un gesto di solidarietà verso i colleghi.|Un gesto de solidaridad hacia los colegas.|g=f;n=Invariable
volontariato|voluntariado|volontarjato|S|rel|3|Il volontariato in biblioteca.|El voluntariado en la biblioteca.|g=m;n=Invariable
volontario|voluntario|volonˈtarjo|S|rel|3|Un volontario della protezione civile.|Un voluntario de la protección civil.|g=m;p=volontari;n=Anche agg.
protezione civile|protección civil|proteˈtsjone tʃiˈvile|L|ist|3|La protezione civile in allerta.|La protección civil en alerta.
allerta|alerta|allerˈta|S|ist|3|L'allerta meteo arancione.|La alerta meteorológica naranja.|g=f;n=Invariable;c=essere in allerta
sfollare|evacuar|sfollare|V|ist|5|Sfollano il palazzo per la bomba.|Evacúan el edificio por la bomba.
sfollati|evacuados|sfollati|S|ist|5|I cinquanta sfollati dell'incendio.|Los cincuenta evacuados del incendio.|g=m;n=Siempre plural

# ══ scuola e università restanti ══
matricola|estudiante de primer año|matriˈkola|S|stu|4|Una matricola smarrita all'orientamento.|Un novato perdido en la orientación.|g=f;p=matricole
orientamento|orientación|orientamento|S|stu|4|Lo sportello di orientamento universitario.|La ventanilla de orientación universitaria.|g=m
fuori corso|fuera de plazo|fwori korso|L|stu|4|È fuori corso da due anni.|Está fuera de plazo de dos años.|n=Estudiante que no se titula a tiempo
esame di Stato|examen de Estado|ezame di stato|L|stu|4|L'esame di Stato di maturità.|El examen de Estado de bachillerato.
compito scritto|prueba escrita|komˈpito skritto|L|stu|3|Il compito scritto d'italiano.|La prueba escrita de italiano.
tema argomentativo|ensayo argumentativo|tema argomenˈtativo|L|stu|5|Il tema argomentativo sulla tecnologia.|El ensayo argumentativo sobre tecnología.
analisi del testo|análisis del texto|analiˈsi del ˈtɛsto|L|stu|4|L'analisi del testo di Montale.|El análisis del texto de Montale.
parafrasi|paráfrasis|paraˈfrazzi|S|let|4|La parafrasi del passo dantesco.|La paráfrasis del pasaje dantesco.|g=f;n=Invariable
commento al testo|comentario de texto|kommento al ˈtɛsto|L|let|4|Il commento al testo della poesia.|El comentario de texto de la poesia.
appunti|apuntes|apˈpunti|S|stu|2|Passami gli appunti di storia.|Pásame los apuntes de historia.|g=m;n=Siempre plural
appuntare|apuntar|appunˈtare|V|stu|4|Appunto la parola nuova sul diario.|Anoto la palabra nueva en el cuaderno.|n=Appuntare anche = fijar
annotare|anotar|annoˈtare|V|stu|3|Annotare gli impegni sull'agenda.|Anotar los compromisos en la agenda.
segnare|anotar (marcar)|seɲɲare|V|ast|3|Segno il numero sul biglietto.|Anoto el número en el boleto.|n=Segnare anche = marcar gol
spuntare|tachar|spunˈtare|V|stu|4|Spunta i compiti fatti dalla lista.|Tacha las tareas hechas de la lista.|c=spuntarla
riassunto|resumen|riasˈsunto|S|stu|3|Il riassunto del capitolo in dieci righe.|El resumen del capítulo en diez líneas.|g=m;p=riassunti
sintesi|síntesis|sintesi|S|stu|4|La sintesi finale della lezione.|La síntesis final de la clase.|g=f;n=Invariable
dettaglio|detalle|dettaʎʎo|S|ast|3|Ricordo ogni dettaglio del viaggio.|Recuerdo cada detalle del viaje.|g=m;p=dettagli;c=nel dettaglio
minuzia|minucia|minuˈtsia|S|ast|5|Si perde nelle minuzie legali.|Se pierde en las minucias legales.|g=f;p=minuzie
precisazione|precisión|pretʃizatˈtsjone|S|cmu|4|Una precisazione doverosa sul tema.|Una precisión necesaria sobre el tema.|g=f;p=precisazioni
chiarimento|aclaración|kjarimento|S|cmu|3|Un chiarimento dopo il malinteso.|Una aclaración tras el malentendido.|g=m;p=chiarimenti
`, "B1", "k-kx15");
