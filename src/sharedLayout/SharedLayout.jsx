import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

import {
  LinkStyled,
  SubLinkStyled,
  Navigation,
  DropDownListContainer,
  SubList,
  Header,
} from "./SharedLayout.styled.js";
import { MainContainer } from "componenets/App.styled";
import { LogOut } from "componenets/LogOut/LogOut.jsx";
import { useAuth } from "hooks/useAuth.js";

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <MainContainer>
          {!isLoggedIn && <Link to="/register">Зареєструватися</Link>}
          {!isLoggedIn && <Link to="/login">Увійти</Link>}
          {isLoggedIn && <LogOut />}

          <Navigation>
            <DropDownListContainer>
              <LinkStyled to="/">Головна сторінка+</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="istoriya_zakladu">
                    Історія закладу
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="kadrovij_sklad">
                    Кадровий склад
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="kontakty">Контакти</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="grafik_prijomu">
                    Графік прийому громадян
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Публічна інформація</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="statut">Статут школи</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="mova_osvitnogo_procesu">
                    Мова освітнього процесу
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="structura_navchalnogo_roku">
                    Структура навчального року
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="pravila_priyomu_do_zakladu">
                    Правила прийому до закладу
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="osvitnja_programa">
                    Освітні програми, навчальний рік
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="strategia_rozvitku_shkoly">
                    Стратегія розвитку школи на 2021-2025 роки
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="richnyiy_zvit_pro_diyalnist_zakladu">
                    Річний звіт про діяльність закладу
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="merezha_klasiv">
                    Мережа класів
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="licenzija">Ліцензія</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="umovi_dostupnosti">
                    Умови доступності закладу освіти для навчання осіб з ООП
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="teritoria_obslugovuvania">
                    Територія обслуговування
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="metodichna_robota">
                    Методична робота
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="materialno_tekhnichne_zabezpechenia">
                    Матеріально технічне забезпечення
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="vakansiji">Вакансії</SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Прозорість закладу</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="finansoviy_zvit">
                    Фінансовий звіт
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="budjetni_koshty">
                    Бюджетні кошти
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="koshtoris">Кошторис</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="dokumenty_pro_osvitu">
                    Документи про освіту
                  </SubLinkStyled>
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
                  <SubLinkStyled to="blagodiyna_diyalnist">
                    Благодійна діяльність
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="vytraty">Витрати</SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Учням</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="dpa">ДПА</SubLinkStyled>
                </li>
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
                  <SubLinkStyled to="pravova_dopomoga">
                    Правова допомога
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="vikhovuemo_patriota">
                    Виховуємо патріота
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="shkola_bezpeki">
                    Школа безпеки
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="pravila_povedinki">
                    Правила поведінки
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Батькам</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="pidgotovka_do_shkoli">
                    Підготовка до школи
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="batkivski_zbori">
                    Батьківські збори
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="batkivskiy_komitet">
                    Батьківський комітет
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="umovi_prijomu">
                    Умови прийому
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="ozdorovlennja">Оздоровлення</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="grupa_prodovzhenogo_dnja">
                    Група продовженого дня
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="recomendacii">Рекомендації</SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Шкільна бібліотека</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="elektronni_pidruchniki">
                    Електронні підручники
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="internet_biblioteka">
                    Інтернет бібліотека
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="materialy_dlia_roboty">
                    Матеріали для роботи
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="zamovleniia_pidruchnykiv">
                    Замовлення підручників
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Виховна робота</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="tematychni_tyzhni">
                    Тематичні тижні, місячники
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="sanbuleten">Санбюлетень</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="samovriaduvaniia">
                    Самоврядування
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="gurtkova_robota">
                    Гурткова робота
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Дистанційне навчання</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="nakazy">Накази</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="rozklad_urokiv">
                    Розклад уроків
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="korysni_posylaniia">
                    Корисні посилання
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="/">Соціально психологічна служба</LinkStyled>
              <SubList>
                <li>
                  <SubLinkStyled to="kryzovyi_centr">
                    Кризовий центр
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="telefonni_gariachi_linii">
                    Телефонні "гарячі лінії"
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="stop_buling">STOP булінг</SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="zapobiganiia_domashniomu_nasilliu">
                    Запобігання домашньому насиллю
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="zapobigannja_torgivli_ludmy">
                    Запобігання та протидія торгівлі людьми
                  </SubLinkStyled>
                </li>
                <li>
                  <SubLinkStyled to="korysni_porady">
                    Корисні поради
                  </SubLinkStyled>
                </li>
              </SubList>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="nashi_peremogy">Наші перемоги</LinkStyled>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="kharchuvannja">Харчування</LinkStyled>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="shgb">ШГБ</LinkStyled>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="proforientaciina_robota">
                Профорієнтаційна робота
              </LinkStyled>
            </DropDownListContainer>
            <DropDownListContainer>
              <LinkStyled to="gromadska_pryimalna">
                Громадська приймальна
              </LinkStyled>
            </DropDownListContainer>
          </Navigation>
        </MainContainer>
      </Header>
      <MainContainer>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <footer>
        <MainContainer></MainContainer>
      </footer>
    </>
  );
};
