import React, {lazy} from "react";
import "./App.styled.ts";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "SharedLayout/SharedLayout";

// ----------------------------------------------------
const MainPage = lazy(() => import("Pages/MainPage"));
const Upravlinnya = lazy(() => import("Pages/Upravlinnya"));
const Statut = lazy(() => import("Pages/Statut"));
const Vchiteli = lazy(() => import("Pages/Vchiteli"));
const GrafikPrijomu = lazy(() => import("Pages/GrafikPrijomu"));
const OsvitnjaPrograma = lazy(() => import("Pages/OsvitnjaPrograma"));
const KadrovijSklad = lazy(() => import("Pages/KadrovijSklad"));
const MaterialnoTekhnichnaBaza = lazy(() => import("Pages/MaterialnoTekhnichnaBaza"));
const UmoviDostupnosti = lazy(() => import("Pages/UmoviDostupnosti"));
const Vakansiji = lazy(() => import("Pages/Vakansiji"));
// ----------------------------------------------------
const Uchnjam = lazy(() => import("Pages/Uchnjam"));
const Proforientacija = lazy(() => import("Pages/Proforientacija"));
const ObdarovaniDity = lazy(() => import("Pages/ObdarovaniDity"));
const VikhovuemoPatriota = lazy(() => import("Pages/VikhovuemoPatriota"));
const PravovaDopomoga = lazy(() => import("Pages/PravovaDopomoga"));
const ElektronniPidruchniki = lazy(() => import("Pages/ElektronniPidruchniki"));
const PravilaPovedinki = lazy(() => import("Pages/PravilaPovedinki"));
const ShkolaBezpeki = lazy(() => import("Pages/ShkolaBezpeki"));
// --------------------------------------------------- 
const Batkam = lazy(() => import("Pages/Batkam"));
const PidgotovkaDoShkoli = lazy(() => import("Pages/PidgotovkaDoShkoli"));
const GrupaProdovzhenogoDnja = lazy(() => import("Pages/GrupaProdovzhenogoDnja"));
const BatkivskiZbori = lazy(() => import("Pages/BatkivskiZbori"));
const UmoviPrijomu = lazy(() => import("Pages/UmoviPrijomu"));
const Ozdorovlennja = lazy(() => import("Pages/Ozdorovlennja"));
const ZhittjaShkoli = lazy(() => import("Pages/ZhittjaShkoli"));
// ---------------------------------------------------
const KonkursiTaOlimpiadi = lazy(() => import("Pages/KonkursiTaOlimpiadi"));
const Gurtki = lazy(() => import("Pages/Gurtki"));
//----------------------------------------------------
const Finansi = lazy(() => import("Pages/Finansi"));
const DokumentiProOsvitu = lazy(() => import("Pages/DokumentiProOsvitu"));
const Koshtoris = lazy(() => import("Pages/Koshtoris"));
const ZajavkiDoBjudzhetu = lazy(() => import("Pages/ZajavkiDoBjudzhetu"));
const BlagodijniVneski = lazy(() => import("Pages/BlagodijniVneski"));
const VitrachenoBjudzhetnikhKoshtiv = lazy(() => import("Pages/VitrachenoBjudzhetnikhKoshtiv"));
const VitrachenoBlagodijnikhKoshtiv = lazy(() => import("Pages/VitrachenoBlagodijnikhKoshtiv"));
const BankivskiRekviziti = lazy(() => import("Pages/BankivskiRekviziti"));
//----------------------------------------------------
const ZvorotniiZvjazok = lazy(() => import("Pages/ZvorotniiZvjazok"));
//----------------------------------------------------
const UchnivskeSamovrjaduvannja = lazy(() => import("Pages/UchnivskeSamovrjaduvannja"));
//----------------------------------------------------
const NavchatysPoNovomu = lazy(() => import("Pages/NavchatysPoNovomu"));
//----------------------------------------------------
const Biblioteka = lazy(() => import("Pages/Biblioteka"));
//----------------------------------------------------
const Licenzija = lazy(() => import("Pages/Licenzija"));
//----------------------------------------------------
const RichnijZvit = lazy(() => import("Pages/RichnijZvit"));
//----------------------------------------------------
const DistancijneNavchannja = lazy(() => import("Pages/DistancijneNavchannja"));
//----------------------------------------------------
const PoradiPsikhologa = lazy(() => import("Pages/PoradiPsikhologa"));
const ZapobigannjaProjavamNasilstva = lazy(() => import("Pages/ZapobigannjaProjavamNasilstva"));
const StopNasilstvu = lazy(() => import("Pages/StopNasilstvu"));
const ZahodyProtyNasilstva = lazy(() => import("Pages/ZahodyProtyNasilstva"));
const PoradiBatkam = lazy(() => import("Pages/PoradiBatkam"));
const PoradiUchnjam = lazy(() => import("Pages/PoradiUchnjam"));
const NormativnaBaza = lazy(() => import("Pages/NormativnaBaza"));
//----------------------------------------------------
const Osoblivosti20202021nr = lazy(() => import("Pages/Osoblivosti2020_2021nr"));
//----------------------------------------------------
const Samoosvita = lazy(() => import("Pages/Samoosvita"));
//----------------------------------------------------
const Kharchuvannja = lazy(() => import("Pages/Kharchuvannja"));
//----------------------------------------------------
const Shgb = lazy(() => import("Pages/Shgb"));
//----------------------------------------------------
const DenVidkritikhDverej = lazy(() => import("Pages/DenVidkritikhDverej"));
const Zustrichi = lazy(() => import("Pages/Zustrichi"));
const Zakhodi = lazy(() => import("Pages/Zakhodi"));
const ZaproshuemoNaNavchannja = lazy(() => import("Pages/ZaproshuemoNaNavchannja"));

function App() {
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
				{/* ================================================================ */}
				<Route index element={<MainPage />} />
				<Route path="upravlinnya" element={<Upravlinnya />} />
				<Route path="statut" element={<Statut />} />
				<Route path="vchiteli" element={<Vchiteli />} />
				<Route path="grafik_prijomu" element={<GrafikPrijomu />} />
				<Route path="osvitnja_programa" element={<OsvitnjaPrograma />} />
				<Route path="kadrovij_sklad" element={<KadrovijSklad />} />
				<Route
					path="materialno_tekhnichna_baza"
					element={<MaterialnoTekhnichnaBaza />}
				/>
				<Route path="umovi_dostupnosti" element={<UmoviDostupnosti />} />
				<Route path="vakansiji" element={<Vakansiji />} />
				{/* ================================================================ */}
				<Route path="uchnjam" element={<Uchnjam />} />
				<Route path="proforientacija" element={<Proforientacija />} />
				<Route path="obdarovani_dity" element={<ObdarovaniDity />} />
				<Route path="vikhovuemo_patriota" element={<VikhovuemoPatriota />} />
				<Route path="pravova_dopomoga" element={<PravovaDopomoga />} />
				<Route
					path="elektronni_pidruchniki"
					element={<ElektronniPidruchniki />}
				/>
				<Route path="pravila_povedinki" element={<PravilaPovedinki />} />
				<Route path="shkola_bezpeki" element={<ShkolaBezpeki />} />
				{/* ================================================================ */}
				<Route path="batkam" element={<Batkam />} />
				<Route path="pidgotovka_do_shkoli" element={<PidgotovkaDoShkoli />} />
				<Route
					path="grupa_prodovzhenogo_dnja"
					element={<GrupaProdovzhenogoDnja />}
				/>
				<Route path="batkivski_zbori" element={<BatkivskiZbori />} />
				<Route path="umovi_prijomu" element={<UmoviPrijomu />} />
				<Route path="ozdorovlennja" element={<Ozdorovlennja />} />
				{/* ================================================================ */}
				<Route path="zhittja_shkoli" element={<ZhittjaShkoli />} />
				<Route path="konkursi_ta_olimpiadi" element={<KonkursiTaOlimpiadi />} />
				<Route path="gurtki" element={<Gurtki />} />
				{/* ================================================================ */}
				<Route path="finansi" element={<Finansi />} />
				<Route path="dokumenti_pro_osvitu" element={<DokumentiProOsvitu />} />
				<Route path="koshtoris" element={<Koshtoris />} />
				<Route path="zajavki_do_bjudzhetu" element={<ZajavkiDoBjudzhetu />} />
				<Route path="blagodijni_vneski" element={<BlagodijniVneski />} />
				<Route
					path="vitracheno_bjudzhetnikh_koshtiv"
					element={<VitrachenoBjudzhetnikhKoshtiv />}
				/>
				<Route
					path="vitracheno_blagodijnikh_koshtiv"
					element={<VitrachenoBlagodijnikhKoshtiv />}
				/>
				<Route path="bankivski_rekviziti" element={<BankivskiRekviziti />} />
				{/* ================================================================ */}
				<Route path="zvorotnii_zvjazok" element={<ZvorotniiZvjazok />} />
				{/* ================================================================ */}
				<Route
					path="uchnivske_samovrjaduvannja"
					element={<UchnivskeSamovrjaduvannja />}
				/>
				{/* ================================================================ */}
				<Route path="navchatys_po_novomu" element={<NavchatysPoNovomu />} />
				{/* ================================================================ */}
				<Route path="biblioteka" element={<Biblioteka />} />
				{/* ================================================================ */}
				<Route path="licenzija" element={<Licenzija />} />
				{/* ================================================================ */}
				<Route path="richnij_zvit" element={<RichnijZvit />} />
				{/* ================================================================ */}
				<Route
					path="distancijne_navchannja"
					element={<DistancijneNavchannja />}
				/>
				{/* ================================================================ */}
				<Route path="poradi_psikhologa" element={<PoradiPsikhologa />} />
				<Route
					path="zapobigannja_projavam_nasilstva"
					element={<ZapobigannjaProjavamNasilstva />}
				/>
				<Route path="stop_nasilstvu" element={<StopNasilstvu />} />
				<Route
					path="zahody_proty_nasilstva"
					element={<ZahodyProtyNasilstva />}
				/>
				<Route path="poradi_batkam" element={<PoradiBatkam />} />
				<Route path="poradi_uchnjam" element={<PoradiUchnjam />} />
				<Route path="normativna_baza" element={<NormativnaBaza />} />
				{/* ================================================================ */}
				<Route
					path="osoblivosti_2020_2021_n_r"
					element={<Osoblivosti20202021nr />}
				/>
				{/* ================================================================ */}
				<Route path="samoosvita" element={<Samoosvita />} />
				{/* ================================================================ */}
				<Route path="kharchuvannja" element={<Kharchuvannja />} />
				{/* ================================================================ */}
				<Route path="shgb" element={<Shgb />} />
				{/* ================================================================ */}
				<Route path="den_vidkritikh_dverej" element={<DenVidkritikhDverej />} />
				<Route path="zustrichi" element={<Zustrichi />} />
				<Route path="zakhodi" element={<Zakhodi />} />
				<Route
					path="zaproshuemo_na_navchannja"
					element={<ZaproshuemoNaNavchannja />}
				/>
				<Route path="*" element={<MainPage />} />
			</Route>
		</Routes>
	);
}

export default App;
