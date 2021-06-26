import Page from '../components/Page'
import Card from '../components/Card'

export default function Privacy() {
  return(
    <Page content={
      <Card step=" " heading="Privacy Policy" content={
        <div className="space-y-2">
          <p>
            Our privacy policy is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR).
          </p>
          <p className="font-bold">General Information</p>
          <div className="px-4">
            <ul className="list-disc">
              <li>
                The necessary data to generate a certificate is extracted from the QR code in your browser. Only the extracted data is sent to our server, where we generate and sign the pass file.
              </li>
              <li>
                Your data is not stored beyond the active browser session and the site does not use cookies.
              </li>
              <li>
                We transmit your data securely over https.
              </li>
              <li>
                Our server is hosted in Nuremberg, Germany.
              </li>
              <li>
                The source code of this site is available on <a href="https://github.com/marvinsxtr/covidpass" className="underline">GitHub</a>.
              </li>
              <li>
                By default, Apple Wallet passes are accessible from the lock screen. This can be changed in the <a href="https://support.apple.com/de-de/guide/iphone/iph9a2a69136/ios" className="underline">settings</a>.
              </li>
              <li>
                The server provider processes data to provide this site. In order to better understand what measures they take to protect your data, please also read their <a href="https://www.hetzner.com/de/rechtliches/datenschutz/" className="underline">privacy policy</a> and the <a href="https://docs.hetzner.com/general/general-terms-and-conditions/data-privacy-faq/" className="underline">data privacy FAQ</a>
              </li>
            </ul>
          </div>
          <p className="font-bold">Contact</p>
          <p>
            Marvin Sextro<br />
            Wilhelm-Busch-Str. 8A<br />
            30167 Hannover<br />
            Germany<br />
            Email: marvin.sextro@gmail.com<br />
            Website: <a href="https://marvinsextro.de" className="underline">https://marvinsextro.de</a><br />
          </p>
          <p className="font-bold">Server provider</p>
          <p>
            Our server provider is <a href="https://www.hetzner.com/" className="underline">Hetzner Online GmbH</a>.
            The following data may be collected and stored in the server log files:
          </p>
          <div className="px-4">
            <ul className="list-disc">
              <li>The browser types and versions used</li>
              <li>The operating system used by the accessing system</li>
              <li>The website from which an accessing system reaches our website (so-called referrers)</li>
              <li>The date and time of access</li>
              <li>The pseudonymised IP addresses</li>
            </ul>
          </div>
          <p className="font-bold">Your rights</p>
          In accordance with the GDPR you have the following rights:
          <div className="px-4">
            <ul className="list-disc">
              <li>
                Right of access to your data: You have the right to know what data has been collected about you and how it was processed.
              </li>
              <li>
                Right to be forgotten: Erasure of your personal data.
              </li>
              <li>
                Right of rectification: You have the right to correct inaccurate data.
              </li>
              <li>
                Right of data portability: You have the right to transfer your data from one processing system into another.
              </li>
            </ul>
          </div>
          <p className="font-bold">Third parties linked</p>
          <div className="px-4">
            <ul className="list-disc">
              <li>
                GitHub: <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" className="underline">Privacy Policy</a>
              </li>
              <li>
                PayPal: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full?locale.x=en_EN" className="underline">Privacy Policy</a>
              </li>
              <li>
                Gmail/Google: <a href="https://policies.google.com/privacy?hl=en-US" className="underline">Privacy Policy</a>
              </li>
              <li>
                Apple may sync your passes via iCloud: <a href="https://www.apple.com/legal/privacy/en-ww/" className="underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      }/>
    }/>
  )
}