import React, { lazy, useEffect } from "react";
import "./App.styled.js";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "sharedLayout/SharedLayout";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations/refreshUser.js";

import { PublicRoute } from "./RedirectRoutes/PublicRoute.jsx";
import { PrivateRoute } from "./RedirectRoutes/PrivateRoute.jsx";

const AddNewsForm = lazy(() => import("Pages/AddNewsForm"));

const Register = lazy(() => import("Pages/AuthPages/Register"));
const Login = lazy(() => import("Pages/AuthPages/Login"));

//Main Page ----------------------------------------------------
const MainPage = lazy(() => import("Pages/MainPage/MainPage.jsx"));
const IstoriyaZakladu = lazy(() =>
  import("Pages/MainPage/IstoriyaZakladu.jsx")
);
const KadrovijSklad = lazy(() => import("Pages/MainPage/KadrovijSklad.jsx"));
const Kontakty = lazy(() => import("Pages/MainPage/Kontakty.jsx"));
const GrafikPrijomu = lazy(() => import("Pages/MainPage/GrafikPrijomu.jsx"));

//PublichnaInformaciya------------------------------------------
const Statut = lazy(() => import("Pages/PublichnaInformaciya/Statut.jsx"));
const MovaOsvitnogoProcesu = lazy(() =>
  import("Pages/PublichnaInformaciya/MovaOsvitnogoProcesu.jsx")
);
const StructuraNavchalnogoRoku = lazy(() =>
  import("Pages/PublichnaInformaciya/StructuraNavchalnogoRoku.jsx")
);
const PravilaPriyomuDoZakladu = lazy(() =>
  import("Pages/PublichnaInformaciya/PravilaPriyomuDoZakladu.jsx")
);
const OsvitnjaPrograma = lazy(() =>
  import("Pages/PublichnaInformaciya/OsvitnjaPrograma.jsx")
);
const StrategiaRozvitkuShkoly = lazy(() =>
  import("Pages/PublichnaInformaciya/StrategiaRozvitkuShkoly.jsx")
);
const RichnyiyZvitProDiyalnistZakladu = lazy(() =>
  import("Pages/PublichnaInformaciya/RichnyiyZvitProDiyalnistZakladu.jsx")
);
const MerezhaKlasiv = lazy(() =>
  import("Pages/PublichnaInformaciya/MerezhaKlasiv.jsx")
);
const Licenzija = lazy(() =>
  import("Pages/PublichnaInformaciya/Licenzija.jsx")
);
const UmoviDostupnosti = lazy(() =>
  import("Pages/PublichnaInformaciya/UmoviDostupnosti.jsx")
);
const TeritoriaObslugovuvania = lazy(() =>
  import("Pages/PublichnaInformaciya/TeritoriaObslugovuvania.jsx")
);
const MetodichnaRobota = lazy(() =>
  import("Pages/PublichnaInformaciya/MetodichnaRobota.jsx")
);
const MaterialnoTekhnichneZabezpechenia = lazy(() =>
  import("Pages/PublichnaInformaciya/MaterialnoTekhnichneZabezpechenia.jsx")
);
const Vakansiji = lazy(() =>
  import("Pages/PublichnaInformaciya/Vakansiji.jsx")
);

//ProzoristZakladu----------------------------------------------------
const FinansoviyZvit = lazy(() =>
  import("Pages/ProzoristZakladu/FinansoviyZvit.jsx")
);
const BudjetniKoshty = lazy(() =>
  import("Pages/ProzoristZakladu/BudjetniKoshty.jsx")
);
const Koshtoris = lazy(() => import("Pages/ProzoristZakladu/Koshtoris.jsx"));
const DokumentyProOsvitu = lazy(() =>
  import("Pages/ProzoristZakladu/DokumentyProOsvitu.jsx")
);
const ZajavkiDoBjudzhetu = lazy(() =>
  import("Pages/ProzoristZakladu/ZajavkiDoBjudzhetu.jsx")
);
const BlagodijniVneski = lazy(() =>
  import("Pages/ProzoristZakladu/BlagodijniVneski.jsx")
);
const BlagodiynaDiyalnist = lazy(() =>
  import("Pages/ProzoristZakladu/BlagodiynaDiyalnist.jsx")
);
const Vytraty = lazy(() => import("Pages/ProzoristZakladu/Vytraty.jsx"));

//Uchniam-------------------------------------------------------------
const DPA = lazy(() => import("Pages/Uchniam/DPA.jsx"));
const Proforientacija = lazy(() => import("Pages/Uchniam/Proforientacija.jsx"));
const ObdarovaniDity = lazy(() => import("Pages/Uchniam/ObdarovaniDity.jsx"));
const PravovaDopomoga = lazy(() => import("Pages/Uchniam/PravovaDopomoga.jsx"));
const VikhovuemoPatriota = lazy(() =>
  import("Pages/Uchniam/VikhovuemoPatriota.jsx")
);
const ShkolaBezpeki = lazy(() => import("Pages/Uchniam/ShkolaBezpeki.jsx"));
const PravilaPovedinki = lazy(() =>
  import("Pages/Uchniam/PravilaPovedinki.jsx")
);

//Batkam ---------------------------------------------------
const PidgotovkaDoShkoli = lazy(() =>
  import("Pages/Batkam/PidgotovkaDoShkoli.jsx")
);
const BatkivskiZbori = lazy(() => import("Pages/Batkam/BatkivskiZbori.jsx"));
const BatkivskiyKomitet = lazy(() =>
  import("Pages/Batkam/BatkivskiyKomitet.jsx")
);
const UmoviPrijomu = lazy(() => import("Pages/Batkam/UmoviPrijomu.jsx"));
const Ozdorovlennja = lazy(() => import("Pages/Batkam/Ozdorovlennja.jsx"));
const GrupaProdovzhenogoDnja = lazy(() =>
  import("Pages/Batkam/GrupaProdovzhenogoDnja.jsx")
);
const Recomendacii = lazy(() => import("Pages/Batkam/Recomendacii.jsx"));

//Bibliotela---------------------------------------------------
const ElektronniPidruchniki = lazy(() =>
  import("Pages/Biblioteka/ElektronniPidruchniki.jsx")
);
const InternetBiblioteka = lazy(() =>
  import("Pages/Biblioteka/InternetBiblioteka.jsx")
);
const MaterialyDliaRoboty = lazy(() =>
  import("Pages/Biblioteka/MaterialyDliaRoboty.jsx")
);
const ZamovleniiaPidruchnykiv = lazy(() =>
  import("Pages/Biblioteka/ZamovleniiaPidruchnykiv.jsx")
);

//VykhovnaRobota----------------------------------------------------
const TematychniTyzhni = lazy(() =>
  import("Pages/VykhovnaRobota/TematychniTyzhni.jsx")
);
const Sanbuleten = lazy(() => import("Pages/VykhovnaRobota/Sanbuleten.jsx"));
const Samovriaduvaniia = lazy(() =>
  import("Pages/VykhovnaRobota/Samovriaduvaniia.jsx")
);
const GurtkovaRobota = lazy(() =>
  import("Pages/VykhovnaRobota/GurtkovaRobota.jsx")
);

//DystanciyneNavchaniia----------------------------------------------------
const Nakazy = lazy(() => import("Pages/DystanciyneNavchaniia/Nakazy.jsx"));
const RozkladUrokiv = lazy(() =>
  import("Pages/DystanciyneNavchaniia/RozkladUrokiv.jsx")
);
const KorysniPosylaniia = lazy(() =>
  import("Pages/DystanciyneNavchaniia/KorysniPosylaniia.jsx")
);

//SocialnoPsihologichnaSluzhba----------------------------------------------------
const KryzovyiCentr = lazy(() =>
  import("Pages/SocialnoPsihologichnaSluzhba/KryzovyiCentr.jsx")
);
const TelefonniGariachiLinii = lazy(() =>
  import("Pages/SocialnoPsihologichnaSluzhba/TelefonniGariachiLinii.jsx")
);
const StopBuling = lazy(() =>
  import("Pages/SocialnoPsihologichnaSluzhba/StopBuling.jsx")
);
const ZapobiganiiaDomashniomuNasilliu = lazy(() =>
  import(
    "Pages/SocialnoPsihologichnaSluzhba/ZapobiganiiaDomashniomuNasilliu.jsx"
  )
);
const ZapobigannjaTorgivliLudmy = lazy(() =>
  import("Pages/SocialnoPsihologichnaSluzhba/ZapobigannjaTorgivliLudmy.jsx")
);
const KorysniPorady = lazy(() =>
  import("Pages/SocialnoPsihologichnaSluzhba/KorysniPorady.jsx")
);

//NashiPeremogy----------------------------------------------------
const NashiPeremogy = lazy(() =>
  import("Pages/NashiPeremogy/NashiPeremogy.jsx")
);

//Kharchuvannja----------------------------------------------------
const Kharchuvannja = lazy(() =>
  import("Pages/Kharchuvannja/Kharchuvannja.jsx")
);

//ShGB----------------------------------------------------
const ShGB = lazy(() => import("Pages/ShGB/ShGB.jsx"));

//ProforientaciinaRobota----------------------------------------------------
const ProforientaciinaRobota = lazy(() =>
  import("Pages/ProforientaciinaRobota/ProforientaciinaRobota.jsx")
);

//GromadskaPryimalna----------------------------------------------------
const GromadskaPryimalna = lazy(() =>
  import("Pages/GromadskaPryimalna/GromadskaPryimalna.jsx")
);

function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SharedLayout
          // onToogleModal={toogleModal}
          // onItem={item}
          // isShowModal={isShowModal}
          />
        }
      >
        {/*MainPage ================================================================ */}
        <Route index element={<MainPage />} />
        <Route path="istoriya_zakladu" element={<IstoriyaZakladu />} />
        <Route path="kadrovij_sklad" element={<KadrovijSklad />} />
        <Route path="kontakty" element={<Kontakty />} />
        <Route path="grafik_prijomu" element={<GrafikPrijomu />} />

        {/*PublichnaInformaciya ================================================================ */}
        <Route path="statut" element={<Statut />} />
        <Route
          path="mova_osvitnogo_procesu"
          element={<MovaOsvitnogoProcesu />}
        />
        <Route
          path="structura_navchalnogo_roku"
          element={<StructuraNavchalnogoRoku />}
        />
        <Route
          path="pravila_priyomu_do_zakladu"
          element={<PravilaPriyomuDoZakladu />}
        />
        <Route path="osvitnja_programa" element={<OsvitnjaPrograma />} />
        <Route
          path="strategia_rozvitku_shkoly"
          element={<StrategiaRozvitkuShkoly />}
        />
        <Route
          path="richnyiy_zvit_pro_diyalnist_zakladu"
          element={<RichnyiyZvitProDiyalnistZakladu />}
        />
        <Route path="merezha_klasiv" element={<MerezhaKlasiv />} />
        <Route path="licenzija" element={<Licenzija />} />
        <Route path="umovi_dostupnosti" element={<UmoviDostupnosti />} />
        <Route
          path="teritoria_obslugovuvania"
          element={<TeritoriaObslugovuvania />}
        />
        <Route path="metodichna_robota" element={<MetodichnaRobota />} />
        <Route
          path="materialno_tekhnichne_zabezpechenia"
          element={<MaterialnoTekhnichneZabezpechenia />}
        />
        <Route path="vakansiji" element={<Vakansiji />} />
        {/*ProzoristZakladu ================================================================ */}
        <Route path="finansoviy_zvit" element={<FinansoviyZvit />} />
        <Route path="budjetni_koshty" element={<BudjetniKoshty />} />
        <Route path="koshtoris" element={<Koshtoris />} />
        <Route path="dokumenty_pro_osvitu" element={<DokumentyProOsvitu />} />
        <Route path="zajavki_do_bjudzhetu" element={<ZajavkiDoBjudzhetu />} />
        <Route path="blagodijni_vneski" element={<BlagodijniVneski />} />
        <Route path="blagodiyna_diyalnist" element={<BlagodiynaDiyalnist />} />
        <Route path="vytraty" element={<Vytraty />} />
        {/*Uchniam ================================================================ */}
        <Route path="dpa" element={<DPA />} />
        <Route path="proforientacija" element={<Proforientacija />} />
        <Route path="obdarovani_dity" element={<ObdarovaniDity />} />
        <Route path="pravova_dopomoga" element={<PravovaDopomoga />} />
        <Route path="vikhovuemo_patriota" element={<VikhovuemoPatriota />} />
        <Route path="shkola_bezpeki" element={<ShkolaBezpeki />} />
        <Route path="pravila_povedinki" element={<PravilaPovedinki />} />
        {/*Batkam ==================================================================== */}
        <Route path="pidgotovka_do_shkoli" element={<PidgotovkaDoShkoli />} />
        <Route path="batkivski_zbori" element={<BatkivskiZbori />} />
        <Route path="batkivskiy_komitet" element={<BatkivskiyKomitet />} />
        <Route path="umovi_prijomu" element={<UmoviPrijomu />} />
        <Route path="ozdorovlennja" element={<Ozdorovlennja />} />
        <Route
          path="grupa_prodovzhenogo_dnja"
          element={<GrupaProdovzhenogoDnja />}
        />
        <Route path="recomendacii" element={<Recomendacii />} />
        {/* Biblioteka ================================================================= */}
        <Route
          path="elektronni_pidruchniki"
          element={<ElektronniPidruchniki />}
        />
        <Route path="internet_biblioteka" element={<InternetBiblioteka />} />
        <Route path="materialy_dlia_roboty" element={<MaterialyDliaRoboty />} />
        <Route
          path="zamovleniia_pidruchnykiv"
          element={<ZamovleniiaPidruchnykiv />}
        />
        {/* VykhovnaRobota ================================================================== */}
        <Route path="tematychni_tyzhni" element={<TematychniTyzhni />} />
        <Route path="sanbuleten" element={<Sanbuleten />} />
        <Route path="samovriaduvaniia" element={<Samovriaduvaniia />} />
        <Route path="gurtkova_robota" element={<GurtkovaRobota />} />

        {/*DystanciyneNavchaniia ================================================================ */}
        <Route path="nakazy" element={<Nakazy />} />
        <Route path="rozklad_urokiv" element={<RozkladUrokiv />} />
        <Route path="korysni_posylaniia" element={<KorysniPosylaniia />} />

        {/*SocialnoPsihologichnaSluzhba ================================================================ */}
        <Route path="kryzovyi_centr" element={<KryzovyiCentr />} />
        <Route
          path="telefonni_gariachi_linii"
          element={<TelefonniGariachiLinii />}
        />
        <Route path="stop_buling" element={<StopBuling />} />
        <Route
          path="zapobiganiia_domashniomu_nasilliu"
          element={<ZapobiganiiaDomashniomuNasilliu />}
        />
        <Route
          path="zapobigannja_torgivli_ludmy"
          element={<ZapobigannjaTorgivliLudmy />}
        />
        <Route path="korysni_porady" element={<KorysniPorady />} />

        {/*NashiPeremogy ================================================================ */}
        <Route path="nashi_peremogy" element={<NashiPeremogy />} />

        {/*Kharchuvannja ================================================================ */}
        <Route path="kharchuvannja" element={<Kharchuvannja />} />

        {/*ShGB ================================================================ */}
        <Route path="shgb" element={<ShGB />} />

        {/*ProforientaciinaRobota ================================================================ */}
        <Route
          path="proforientaciina_robota"
          element={<ProforientaciinaRobota />}
        />
        {/*GromadskaPryimalna ================================================================ */}
        <Route path="gromadska_pryimalna" element={<GromadskaPryimalna />} />

        <Route path="*" element={<MainPage />} />
        <Route
          path="register"
          element={<PublicRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/" component={<Login />} />}
        />
        <Route
          path="add-news"
          element={<PrivateRoute redirectTo="/" component={<AddNewsForm />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
