"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Scale, ShieldCheck, Cookie, FileText, Accessibility, Trash2, Download, CheckCircle2,
  AlertTriangle, Eye, Clock, Lock, Globe2, UserCheck,
} from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { getSessionToken } from "@/lib/lms/remote";
import { cn } from "@/lib/utils";

/* ═══ v9.17 · Privacidad y legal · GDPR · CCPA/CPRA · LGPD ══════════
   Centro de privacidad + documentos legales + cumplimiento de las
   leyes internacionales de protección de datos. La plataforma opera
   sin cookies de terceros: solo esenciales (sesión, tema, progreso
   local) y analítica anónima OPT-IN (telemetría desactivable desde
   aquí y desde el Panel Admin).                                        */

const TOS_VERSION = "2026-10-19.1";

type TabId = "centro" | "privacidad" | "terminos" | "cookies" | "seguridad" | "accesibilidad";
const TABS: { id: TabId; label: string; icon: typeof Scale }[] = [
  { id: "centro", label: "Centro de privacidad", icon: Scale },
  { id: "privacidad", label: "Política de privacidad", icon: FileText },
  { id: "terminos", label: "Términos de uso", icon: FileText },
  { id: "cookies", label: "Cookies", icon: Cookie },
  { id: "seguridad", label: "Seguridad", icon: ShieldCheck },
  { id: "accesibilidad", label: "Accesibilidad", icon: Accessibility },
];

function Doc({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-xl font-bold">{title}</h2>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-muted-it">Versión {updated}</span>
      </div>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-inchiostro dark:text-crema [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}

export function LegalView() {
  const [tab, setTab] = useState<TabId>("centro");
  const legal = useLms((s) => s.legalConsent);
  const setLegalConsent = useLms((s) => s.setLegalConsent);
  const account = useLms((s) => s.account);
  const navigate = useLms((s) => s.navigate);
  const logoutAccount = useLms((s) => s.logoutAccount);
  const [deleteState, setDeleteState] = useState<"idle" | "confirm" | "deleting" | "done" | "error">("idle");
  const [deleteMsg, setDeleteMsg] = useState("");

  const edad = useMemo(() => {
    if (!legal.ageConfirmed) return null;
    return legal.ageAt ? new Date(legal.ageAt).toLocaleDateString("es") : "—";
  }, [legal.ageConfirmed, legal.ageAt]);

  /* ── GDPR Art. 17 · derecho de supresión: borra la cuenta y las
     sesiones en el servidor; el progreso local se limpia al salir. ── */
  const deleteAccount = async () => {
    setDeleteState("deleting");
    setDeleteMsg("");
    try {
      const token = getSessionToken();
      const res = await fetch("/api/auth/profile", {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; revoked?: number };
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
      setDeleteState("done");
      setDeleteMsg(
        data.revoked
          ? `Cuenta eliminada y ${data.revoked} sesión(es) revocada(s). Los datos de progreso locales de este dispositivo se conservan hasta que cierres sesión o reinicies la app.`
          : "Cuenta eliminada del servidor.",
      );
      logoutAccount();
    } catch (e) {
      setDeleteState("error");
      setDeleteMsg(e instanceof Error ? e.message : "No se pudo eliminar la cuenta.");
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* hero */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-3xl border-2 border-soft bg-gradient-to-br from-rosso-tenue via-surface to-oro-tenue/40 p-6 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
            <Scale className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-bold sm:text-3xl">Privacidad y legal</h1>
            <p className="text-sm font-semibold text-inchiostro/70 dark:text-crema/80">
              Tus datos, tus derechos · GDPR (UE) · CCPA/CPRA (California) · LGPD (Brasil) · LFPDPPP (México) · Ley 29733 (Perú)
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl leading-relaxed text-inchiostro/90 dark:text-crema/90">
          Esta plataforma trata tus datos bajo el estándar MÁS exigente de las jurisdicciones en las que opera:
          minimización de datos, cookies solo esenciales + analítica <strong>opt-in</strong>, derecho de acceso,
          rectificación, supresión, portabilidad y oposición. Sin perfiles publicitarios. Sin venta de datos. Nunca.
        </p>
      </motion.header>

      {/* tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Secciones legales">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors",
              tab === t.id ? "bg-verde text-white shadow-sm" : "bg-inchiostro/5 text-muted-it hover:text-verde dark:bg-inchiostro/10",
            )}
          >
            <t.icon className="h-4 w-4" aria-hidden="true" /> {t.label}
          </button>
        ))}
      </div>

      {/* ═══ CENTRO DE PRIVACIDAD ═══ */}
      {tab === "centro" && (
        <div className="space-y-5">
          {/* cookies/analítica */}
          <section className="rounded-3xl border border-soft bg-surface p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <Cookie className="h-5 w-5 text-oro" aria-hidden="true" /> Cookies y analítica
            </h2>
            <p className="mt-1 text-sm text-muted-it">
              Solo usamos almacenamiento técnico (localStorage) para sesión, tema y progreso. La telemetría de uso
              (eventos anónimos de estudio) es <strong>opt-in</strong>: puedes activarla o desactivarla cuando quieras.
              No hay cookies de terceros ni rastreadores.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-soft bg-crema px-4 py-3 dark:bg-inchiostro/5">
                <div>
                  <p className="text-sm font-bold">Esenciales (siempre activas)</p>
                  <p className="text-xs text-muted-it">Sesión, preferencias, progreso local. Necesarias para funcionar.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-verde-tenue px-3 py-1 text-xs font-bold text-verde-scuro dark:text-verde">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Activas
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-soft bg-crema px-4 py-3 dark:bg-inchiostro/5">
                <div>
                  <p className="text-sm font-bold">Analítica de uso (telemetría anónima)</p>
                  <p className="text-xs text-muted-it">Eventos como «lección completada» para mejorar la plataforma. Sin datos personales.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={legal.analytics}
                  onClick={() => setLegalConsent({ analytics: !legal.analytics, bannerSeen: true })}
                  className={cn(
                    "relative h-7 w-12 shrink-0 rounded-full transition-colors",
                    legal.analytics ? "bg-verde" : "bg-inchiostro/20 dark:bg-inchiostro/30",
                  )}
                >
                  <span className={cn("absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all", legal.analytics ? "left-6" : "left-1")} />
                </button>
              </div>
            </div>
          </section>

          {/* edad */}
          <section className="rounded-3xl border border-soft bg-surface p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <UserCheck className="h-5 w-5 text-oro" aria-hidden="true" /> Verificación de edad
            </h2>
            {legal.ageConfirmed ? (
              <div className="mt-3 flex items-center gap-2 rounded-2xl bg-verde-tenue px-4 py-3 text-sm font-semibold text-verde-scuro dark:text-verde">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Confirmaste 13 años o más el {edad}. Menores de 16 en la UE requieren consentimiento parental; menores de 13 no pueden crear cuenta.
              </div>
            ) : (
              <>
                <p className="mt-1 text-sm text-muted-it">
                  Para crear cuenta (y de forma opcional para estudiar) debes confirmar que tienes 13 años o más.
                  En la UE, menores de 16 necesitan consentimiento de padres/tutor; en EE. UU., menores de 13 no pueden
                  crear cuenta (COPPA). El estudio <strong>sin cuenta</strong> guarda el progreso solo en este dispositivo.
                </p>
                <button
                  type="button"
                  onClick={() => setLegalConsent({ ageConfirmed: true, ageAt: new Date().toISOString() })}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-transform hover:scale-[1.02]"
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Tengo 13 años o más
                </button>
              </>
            )}
          </section>

          {/* términos aceptados */}
          <section className="rounded-3xl border border-soft bg-surface p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <FileText className="h-5 w-5 text-oro" aria-hidden="true" /> Términos y política
            </h2>
            {legal.acceptedAt && legal.tosVersion === TOS_VERSION ? (
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-verde-scuro dark:text-verde">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> Aceptados el {new Date(legal.acceptedAt).toLocaleDateString("es")} (v{legal.tosVersion}).
              </p>
            ) : (
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <p className="flex-1 text-sm text-muted-it">Revisa los términos y la política en las pestañas de arriba.</p>
                <button
                  type="button"
                  onClick={() => setLegalConsent({ acceptedAt: new Date().toISOString(), tosVersion: TOS_VERSION })}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25"
                >
                  Aceptar términos (v{TOS_VERSION})
                </button>
              </div>
            )}
          </section>

          {/* derechos ARSDP */}
          <section className="rounded-3xl border border-soft bg-surface p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <Eye className="h-5 w-5 text-oro" aria-hidden="true" /> Tus derechos (GDPR Art. 15-22 · CCPA §1798.100 · LGPD Art. 18)
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => navigate("impostazioni")}
                className="group flex items-start gap-3 rounded-2xl border border-soft bg-crema p-4 text-left transition-all hover:-translate-y-0.5 hover:border-verde/50 dark:bg-inchiostro/5"
              >
                <Download className="mt-0.5 h-5 w-5 text-verde" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold group-hover:text-verde">Acceso y portabilidad</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-it">
                    Descarga tu progreso completo (JSON) desde Configuración → Backup. Formato legible por máquina.
                  </span>
                </span>
              </button>
              <div className="flex items-start gap-3 rounded-2xl border border-soft bg-crema p-4 dark:bg-inchiostro/5">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-oro" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold">Rectificación y oposición</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-it">
                    Corrige tu perfil en Configuración; desactiva la analítica con el interruptor de arriba. Sin perfiles publicitarios a los que oponerse: no vendemos datos.
                  </span>
                </span>
              </div>
            </div>
          </section>

          {/* supresión */}
          <section className="rounded-3xl border-2 border-rosso/25 bg-surface p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <Trash2 className="h-5 w-5 text-rosso" aria-hidden="true" /> Derecho de supresión (olvido)
            </h2>
            {account ? (
              <>
                <p className="mt-1 text-sm text-muted-it">
                  Elimina tu cuenta <strong>{account.username}</strong> del servidor: credenciales, perfil y todas las
                  sesiones activas quedan borrados (GDPR Art. 17; CCPA §1798.105; LGPD Art. 18-VI). Esta acción no se puede deshacer.
                </p>
                {deleteState === "idle" && (
                  <button
                    type="button"
                    onClick={() => setDeleteState("confirm")}
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-rosso px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-rosso/25"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" /> Eliminar mi cuenta…
                  </button>
                )}
                {deleteState === "confirm" && (
                  <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl bg-rosso-tenue p-4">
                    <AlertTriangle className="h-5 w-5 text-rosso" aria-hidden="true" />
                    <p className="flex-1 text-sm font-semibold text-rosso-scuro dark:text-rosso">
                      ¿Seguro? Se borrarán la cuenta y las sesiones del servidor.
                    </p>
                    <button type="button" onClick={deleteAccount} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-rosso px-4 py-2 text-sm font-bold text-white">
                      Sí, eliminar
                    </button>
                    <button type="button" onClick={() => setDeleteState("idle")} className="inline-flex min-h-11 items-center rounded-xl bg-surface px-4 py-2 text-sm font-bold text-muted-it">
                      Cancelar
                    </button>
                  </div>
                )}
                {deleteState === "deleting" && <p className="mt-3 text-sm font-semibold text-muted-it">Eliminando…</p>}
                {deleteState === "done" && (
                  <p className="mt-3 flex items-center gap-2 rounded-2xl bg-verde-tenue p-4 text-sm font-semibold text-verde-scuro dark:text-verde">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> {deleteMsg}
                  </p>
                )}
                {deleteState === "error" && (
                  <p className="mt-3 rounded-2xl bg-rosso-tenue p-4 text-sm font-semibold text-rosso-scuro dark:text-rosso">
                    {deleteMsg} — Escríbenos y lo resolvemos manualmente (ver Política, sección Contacto).
                  </p>
                )}
              </>
            ) : (
              <p className="mt-1 flex items-center gap-2 rounded-2xl bg-verde-tenue px-4 py-3 text-sm font-semibold text-verde-scuro dark:text-verde">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                Estudias sin cuenta: tu progreso vive SOLO en este dispositivo. Al no haber datos personales en el servidor,
                el derecho de supresión ya está satisfecho por diseño (privacidad por defecto, GDPR Art. 25).
              </p>
            )}
          </section>
        </div>
      )}

      {/* ═══ POLÍTICA DE PRIVACIDAD ═══ */}
      {tab === "privacidad" && (
        <Doc title="Política de privacidad" updated={TOS_VERSION}>
          <h3>1. Responsable del tratamiento</h3>
          <p>
            Políglota Master (plataforma educativa multi-idioma), operada por su desarrollador independiente
            («el responsable»). Contacto: canal de soporte de la app o el correo indicado en Configuración → Soporte.
            Encargado principal del tratamiento: Vercel Inc. (hosting), con DPA estándar incluido en sus términos.
          </p>
          <h3>2. Datos que tratamos y base jurídica (GDPR Art. 6)</h3>
          <ul>
            <li><strong>Sin cuenta (invitado):</strong> el progreso se guarda en tu dispositivo (localStorage). No viaja nada personal al servidor. Base: tu consentimiento implícito al usar la app; puedes borrarlo borrando los datos del navegador.</li>
            <li><strong>Con cuenta:</strong> usuario, nombre visible, hash de contraseña (scrypt con sal; nunca en claro), progreso sincronizado (XP, racha, lecciones). Base: ejecución del contrato de servicios (Art. 6.1.b).</li>
            <li><strong>Telemetría opt-in:</strong> eventos anónimos de uso (p. ej. «quiz completado»). Base: consentimiento (Art. 6.1.a), revocable en el Centro de privacidad.</li>
            <li><strong>Sin datos sensibles:</strong> no pedimos religión, salud, orientación ni origen étnico. Sin perfiles publicitarios. No vendemos ni cedemos datos a terceros (CCPA §1798.100: «no sale» / «no comparte»).</li>
          </ul>
          <h3>3. Retención</h3>
          <p>
            Cuenta: hasta 24 meses de inactividad o hasta que solicites su eliminación. Telemetría: máximo 180 días.
            Backups del servidor: rotación de 30 días. Tu exportación local: la controlas tú.
          </p>
          <h3>4. Transferencias internacionales</h3>
          <p>
            Servidores en la región de Vercel que elijas (EE. UU. por defecto). UE→EE. UU. amparado por el
            <em> Data Privacy Framework</em> de la Comisión Europea (decisión de adecuación de 2023). Sin transferencias a terceros países.
          </p>
          <h3>5. Tus derechos</h3>
          <ul>
            <li>Acceso, rectificación, supresión, portabilidad, oposición y limitación (GDPR Art. 15-22).</li>
            <li>CCPA/CPRA: saber, eliminar, corregir; no discriminación por ejercerlos (la app no cambia de plan por pedir tus datos).</li>
            <li>LGPD: confirmación, acceso, corrección, anonimización, portabilidad, eliminación, información sobre compartición.</li>
            <li>Ejercicios desde el Centro de privacidad o escribiendo al canal de soporte. Respuesta en 30 días (GDPR) / 45 días (CCPA).</li>
          </ul>
          <h3>6. Menores</h3>
          <p>
            Edad mínima para cuenta: 13 años. Entre 13 y 15 años en la UE se requiere consentimiento parental (Art. 8 GDPR:
            el umbral lo fija cada Estado, 13-16). Verificación de edad integrada en el onboarding de la cuenta. El estudio
            sin cuenta está disponible para cualquier edad con supervisión de un adulto.
          </p>
          <h3>7. Seguridad</h3>
          <p>
            Contraseñas con scrypt + sal; tokens de sesión revocables; CSP con nonce (sin unsafe-inline), HSTS, rate limiting
            y bloqueo por intentos fallidos; auditoría de eventos. Ver la pestaña Seguridad. En caso de brecha: notificación a
            la autoridad en 72 h (Art. 33) y a los afectados sin dilación (Art. 34).
          </p>
          <h3>8. Cambios</h3>
          <p>
            Los cambios se publican aquí con nueva versión. Los sustanciales se anuncian en la app y requieren aceptación
            para seguir usando la cuenta.
          </p>
        </Doc>
      )}

      {/* ═══ TÉRMINOS ═══ */}
      {tab === "terminos" && (
        <Doc title="Términos de uso" updated={TOS_VERSION}>
          <h3>1. Objeto</h3>
          <p>
            Plataforma de aprendizaje de idiomas (italiano, inglés americano, portugués de Portugal, francés de Francia,
            alemán de Alemania) con metodología comunicativa alineada al MCER/QCER. El uso implica la aceptación de estos términos.
          </p>
          <h3>2. Cuentas y planes</h3>
          <ul>
            <li>Una cuenta por persona. Eres responsable de tus credenciales; notifica usos no autorizados.</li>
            <li>Los planes PRO/Premium/Platinum desbloquean niveles y funciones. Los pagos se registran localmente; consulta el estado en Configuración.</li>
            <li>El estudio sin cuenta es gratuito y su progreso es local al dispositivo.</li>
          </ul>
          <h3>3. Uso aceptable</h3>
          <ul>
            <li>Prohibido: intentar acceder a cuentas ajenas, automatizar ataques, inyectar código, extraer contenido en masa o revenderlo.</li>
            <li>El contenido (textos, ejercicios, diccionarios, imágenes) es propiedad de la plataforma: uso personal de estudio, no redistribución comercial.</li>
            <li>La traducción al pasar el cursor y el audio TTS usan las voces del sistema de tu dispositivo: su disponibilidad depende del sistema operativo.</li>
          </ul>
          <h3>4. Contenido generado y IA</h3>
          <p>
            El Tutor IA puede cometer errores. Verifica la información importante. No compartas datos sensibles con el tutor:
            se procesan para darte la respuesta y no se usan para entrenar modelos.
          </p>
          <h3>5. Limitación de responsabilidad</h3>
          <p>
            La plataforma se ofrece «tal cual» con objetivo educativo. No garantizamos resultados en exámenes externos
            (CILS, TOEFL, DELF, Goethe…), aunque sí preparamos para ellos. En la máxima medida permitida por la ley,
            la responsabilidad se limita al importe pagado en los últimos 12 meses.
          </p>
          <h3>6. Ley aplicable</h3>
          <p>
            La del domicilio del desarrollador (Perú), sin perjuicio de los derechos irrenunciables que te otorguen el GDPR,
            la CCPA/CPRA o la LGPD según tu lugar de residencia, que prevalecen sobre esta cláusula.
          </p>
        </Doc>
      )}

      {/* ═══ COOKIES ═══ */}
      {tab === "cookies" && (
        <Doc title="Política de cookies y almacenamiento local" updated={TOS_VERSION}>
          <p>
            Esta app no usa cookies HTTP de terceros ni rastreadores. Usa <strong>localStorage</strong> (almacenamiento técnico
            del navegador) para funcionar:
          </p>
          <ul>
            <li><strong>Esenciales:</strong> <code>italiano-master-v1</code> (progreso y preferencias), <code>im-session-token</code> / <code>im-admin-token</code> (sesión), <code>im-client-id</code> (identificador anónimo del dispositivo). Borrarlas cierra tu sesión y limpia el progreso local (cuenta: vuelve a entrar; invitado: se pierde el progreso local).</li>
            <li><strong>Analítica (opt-in):</strong> si activas la telemetría, <code>im-client-id</code> acompaña a eventos anónimos de uso. Desactivable en el Centro de privacidad; también puede desactivarla la administración de la plataforma.</li>
            <li><strong>Sin cookies de marketing:</strong> no hay píxeles, ni publicidad comportamental, ni huellas digitales.</li>
          </ul>
          <h3>Cómo retirar el consentimiento</h3>
          <p>
            Interruptor de analítica en el Centro de privacidad (efecto inmediato) o borrando el almacenamiento del sitio
            desde tu navegador. La retirada no afecta al uso de la app.
          </p>
        </Doc>
      )}

      {/* ═══ SEGURIDAD ═══ */}
      {tab === "seguridad" && (
        <Doc title="Seguridad de la plataforma" updated={TOS_VERSION}>
          <h3>Medidas activas</h3>
          <ul>
            <li><strong>Contraseñas:</strong> scrypt con sal aleatoria por usuario (nunca SHA-2 simple, nunca en claro). Migración automática de hashes antiguos.</li>
            <li><strong>Sesiones:</strong> tokens Bearer revocables (30 días), revocación total disponible; cierre de sesión en todos los dispositivos al eliminar la cuenta.</li>
            <li><strong>Fuerza bruta:</strong> rate limiting por IP y por usuario + bloqueo persistente compartido entre instancias (un atacante repartido no lo evita) + igualación de tiempos anti-enumeración.</li>
            <li><strong>Cabeceras:</strong> CSP con nonce por respuesta (producción sin unsafe-inline), HSTS 2 años, X-Frame-Options DENY, anti-MIME-sniffing, Permissions-Policy mínima, referrer estricto.</li>
            <li><strong>Validación de entrada:</strong> whitelists de eventos, límites de tamaño de payload y validación de formato en todas las rutas API.</li>
            <li><strong>Privacidad por diseño:</strong> modo invitado sin datos en servidor; modo privacidad que difumina tus datos en la UI; PIN de bloqueo local con bloqueo temporal por intentos.</li>
          </ul>
          <h3>Divulgación responsable</h3>
          <p>
            ¿Encontraste una vulnerabilidad? Repórtala vía <code>/.well-known/security.txt</code> (enlace en el pie). No la
            publiques antes de 90 días. Agradecemos con menciones; no hay programa de recompensas.
          </p>
        </Doc>
      )}

      {/* ═══ ACCESIBILIDAD ═══ */}
      {tab === "accesibilidad" && (
        <Doc title="Declaración de accesibilidad" updated={TOS_VERSION}>
          <p>
            Objetivo: <strong>WCAG 2.1 nivel AA</strong>. Estado actual:
          </p>
          <ul>
            <li>Contraste de texto verificado en modo claro y oscuro (correcciones audidadas en v9.11.1); el modo oscuro respeta las superficies claras forzadas (<code>.force-light</code>) donde el texto exige fondo claro.</li>
            <li>Navegación por teclado: foco visible, Ctrl+K para la búsqueda global, áreas con mínimo de 44 px de toque.</li>
            <li>Lectores de pantalla: etiquetas aria en controles y botones de audio; textos alternativos en las imágenes temáticas.</li>
            <li>Tipografía escalable (md/lg/xl) y respeto de la velocidad de audio para TTS.</li>
          </ul>
          <p>
            Si encuentras una barrera, repórtala por el canal de soporte: la corregimos en el siguiente ciclo. La
            accesibilidad se audita en cada versión mayor.
          </p>
        </Doc>
      )}

      {/* pie */}
      <footer className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-soft bg-surface px-5 py-4 text-xs text-muted-it">
        <span className="inline-flex items-center gap-1.5"><Globe2 className="h-4 w-4" aria-hidden="true" /> Marco legal internacional · v{TOS_VERSION}</span>
        <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" aria-hidden="true" /> Última actualización: 19 de octubre de 2026</span>
      </footer>
    </div>
  );
}
