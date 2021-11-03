import React from "react";
import Layout from "../components/layout";

const ImpressumPage = () => (
  <Layout>
    <h2>Impressum</h2>
    <br />
    <p>
      {" "}
      Informationspflicht laut §5 E-Commerce Gesetz und Offenlegungspflicht laut
      §25 Mediengesetz
    </p>
    <p> Andreas Willich</p>
    <p>
      {" "}
      Erdbergstraße 74/1/15 <br /> 1030 Wien <br /> Österreich
    </p>
    <p>
      {" "}
      E-Mail: <a href="mailto:andreas%40willich.io">andreas@willich.io</a>
    </p>{" "}
    <br /> <br />
    <div id="copyright">
      <h2> Copyright &amp; Urheberrechtshinweis</h2>
      <p>
        {" "}
        Alle Inhalte dieser Webpräsenz, insbesondere Texte, Fotografien und
        Grafiken, sind urheberrechtlich geschützt. Das Urheberrecht liegt,
        soweit nicht ausdrücklich anders gekennzeichnet, bei der im Impressum
        angeführten natürlichen bzw. juristischen Person. Bitte fragen Sie uns,
        falls Sie die Inhalte dieses Internetangebotes verwenden möchten.
      </p>
      <p>
        Unter der „Creative Commons“-Lizenz“ veröffentlichte Inhalte, sind als
        solche gekennzeichnet. Sie dürfen entsprechend den angegebenen
        Lizenzbedingungen verwendet werden.
      </p>
      <p>
        Wer gegen das Urheberrecht verstößt (z.B. Bilder oder Texte unerlaubt
        kopiert), macht sich gem. UrhG strafbar, wird unter Umständen
        kostenpflichtig abgemahnt (mindestens EUR 500,-) und muss Schadensersatz
        leisten.
      </p>
    </div>{" "}
    <br />
    <div id="haftung_links">
      <h2> Haftungsausschluss für ausgehende Links</h2>
      <p>
        {" "}
        Diese Webpräsenz enthält, so wie viele andere Webseiten ebenfalls, so
        genannte Links auf andere, fremde Webpräsenzen und Inhalte. Das wird als
        Urgedanke des Internets und des weltweiten Informationsaustauschs als
        gang und gäbe angesehen. Rechtlich und technisch gesehen haben wir als
        Betreiber unserer Webseite keinen Einfluss auf die Gestaltung sowie den
        Inhalt der verlinkten Webpräsenzen. Aus diesem Grund können wir zu
        keinem Zeitpunkt für diese Webpräsenzen in irgendeiner Art und Weise
        Haftung oder Gewähr übernehmen, da diese im Verantwortungsbereich des
        jeweiligen Betreibers angesiedelt ist.
      </p>
      <p>
        {" "}
        Zum Zeitpunkt der Verlinkung wurden die fremden Inhalte auf
        Funktionalität, rechtswidrige Inhalte sowie uns möglich auf
        Schadsoftware überprüft. Als Indiz finden Sie bei einigen Links einen
        Datumsstempel der auf den Zeitpunkt der gesetzten Verlinkung hinweist.
        Nichts desto trotz sind wir bemüht unsere Besucher vor rechtswidrigen
        Inhalten und Schadsoftware zu schützen weshalb wir stichprobenartig die
        gesetzten Links in wiederkehrenden Intervallen untersuchen. Bei etwaigen
        Rechtsverletzungen werden die gesetzten Links selbstverständlich
        umgehend entfernt.
      </p>
      <p>
        Sollten Sie einen derartigen Link vor unserer Überprüfung gefunden
        haben, so bitten wir um umgehende Benachrichtigung an die im Impressum
        angezeigten Kontaktdaten. Bitte übermitteln Sie uns dabei den Link
        unserer Webseite die den fragwürdigen Verweis enthält, sowie die Art der
        Kennzeichnung (a) rechtwidriger Inhalt, b) Schadsoftware oder c)
        inaktiver Inhalt bzw. Verweis).
      </p>
    </div>{" "}
    <br />
    <div id="ihre_rechte">
      <h2> Ihre Rechte</h2>
      <p>
        {" "}
        Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich
        die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
        Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben,
        dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
        oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
        worden sind, können Sie sich bei der oben genannten E-Mail-Adresse oder
        der Datenschutzbehörde beschweren.
      </p>
    </div>
  </Layout>
);

export default ImpressumPage;