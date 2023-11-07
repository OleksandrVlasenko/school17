import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import {
	LinkStyled,
	SubLinkStyled,
	Navigation,
	DropDownListContainer,
	SubList,
	Header,
} from "./SharedLayout.styled";

export const SharedLayout = () => {
	return (
		<>
			<Header>
				<Navigation>
					<DropDownListContainer>
						<LinkStyled to="/">Головна сторінка+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="upravlinnya">Управління</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="statut">Статут</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="vchiteli">Вчителі</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="grafik_prijomu">
									Графік прийому
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="osvitnja_programa">
									Освітня програма
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="kadrovij_sklad">
									Кадровий склад
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="materialno_tekhnichna_baza">
									Матеріально-технічна база
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="umovi_dostupnosti">
									Умови доступності
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="vakansiji">Вакансії</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>
					<DropDownListContainer>
						<LinkStyled to="uchnjam">Учням+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="proforientacija">
									Профорієнтація
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="obdarovani_dity">
									Обдаровані діти
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="vikhovuemo_patriota">
									Виховуємо патріота
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="pravova_dopomoga">
									Правова допомога
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="elektronni_pidruchniki">
									Електронні підручники
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="pravila_povedinki">
									Правила поведінки
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="shkola_bezpeki">Школа безпеки</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>
					<DropDownListContainer>
						<LinkStyled to="batkam">Батькам+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="pidgotovka_do_shkoli">
									Підготовка до школи
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="grupa_prodovzhenogo_dnja">
									Група продовженого дня
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="batkivski_zbori">
									Батьківські збори
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="umovi_prijomu">Умови прийому</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="ozdorovlennja">Оздоровлення</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>
					<DropDownListContainer>
						<LinkStyled to="zhittja_shkoli">Життя школи+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="konkursi_ta_olimpiadi">
									Конкурси та олімпіади
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="gurtki">Гуртки</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>
					<DropDownListContainer>
						<LinkStyled to="finansi">Фінанси+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="dokumenti_pro_osvitu">
									Документи про освіту
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="koshtoris">Кошторис</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="zajavki_do_bjudzhetu">
									Заявки до бюджету
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="blagodijni_vneski">
									Благодійні внески
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="vitracheno_bjudzhetnikh_koshtiv">
									Витрати
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="vitracheno_blagodijnikh_koshtiv">
									Витрати
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="bankivski_rekviziti">
									Банківські реквізити
								</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>

					<LinkStyled to="zvorotnii_zvjazok">Зворотній зв'язок</LinkStyled>

					<LinkStyled to="uchnivske_samovrjaduvannja">
						Учнівське самоврядування
					</LinkStyled>

					<LinkStyled to="navchatys_po_novomu">Навчатись по новому</LinkStyled>

					<LinkStyled to="biblioteka">Бібліотека</LinkStyled>

					<LinkStyled to="licenzija">Ліцензія</LinkStyled>

					<LinkStyled to="richnij_zvit">Річний звіт</LinkStyled>

					<LinkStyled to="distancijne_navchannja">
						Дистанційне навчання
					</LinkStyled>

					<DropDownListContainer>
						<LinkStyled to="poradi_psikhologa">
							Соціально-псилологічна служба+
						</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="dokzapobigannja_projavam_nasilstvaumenti_pro_osvitu">
									Стоп! Булінг
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="stop_nasilstvu">
									Стоп насильству!
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="zahody_proty_nasilstva">
									Заходи
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="poradi_batkam">Поради батькам</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="poradi_uchnjam">Поради учням</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="normativna_baza">
									Нормативна база
								</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>

					<LinkStyled to="osoblivosti_2020_2021_n_r">
						Особливості 2022-2023 н.р.
					</LinkStyled>

					<LinkStyled to="samoosvita">Самоосвіта</LinkStyled>

					<LinkStyled to="kharchuvannja">Харчування</LinkStyled>

					<LinkStyled to="shgb">ШГБ</LinkStyled>
					<DropDownListContainer>
						<LinkStyled to="/">Профорієнтація+</LinkStyled>
						<SubList>
							<li>
								<SubLinkStyled to="den_vidkritikh_dverej">
									День відкритих вдерей
								</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="zustrichi">Зустрічі</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="zakhodi">Заходи</SubLinkStyled>
							</li>
							<li>
								<SubLinkStyled to="zaproshuemo_na_navchannja">
									Запрошуємо на навчання
								</SubLinkStyled>
							</li>
						</SubList>
					</DropDownListContainer>
				</Navigation>
			</Header>
			<main>
				<Suspense fallback={<div>Loading page...</div>}>
					<Outlet />
				</Suspense>
			</main>
			<footer></footer>
		</>
	);
};
