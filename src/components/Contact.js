import MapContainer from './MapContainer';

export default function Contact() {
  return (
    <main>
      <h1>Kapcsolat</h1>
      <h2>Kapcsolati adatok</h2>
      <p>Cégnév: COMPANY Kft.</p>
      <p>Székhely / postacím: 9400 Sopron, Párkány utca 19., II/4.</p>
      <p>Szállítási cím / telephely: 9400 Sopron, Párkány utca 19., II/4.</p>
      <p>Email: office@company.hu</p>
      <p>Telefon: +36-99/111-222</p>
      <p>Fax: +36-99/111-223</p>
      <p>Cégjegyzékszám: 01-02-0222236</p>
      <p>Adószám: 12345678-1-00</p>
      <p>Közösségi adószám: HU12345678</p>
      <h2>Így talál el hozzánk</h2>
      <MapContainer />
    </main>
  );
}
