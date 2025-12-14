import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../Pages/Accueil'
import Header from './Header';
import Sleyd from "../assets/Photo/Logo Sleyd.png";
import IconeHamburger1 from "../assets/Photo/Icone-Hamburger-1.png";
import IconeHamburger2 from "../assets/Photo/Icone-Hamburger-2.png";
import IconeHamburger3 from "../assets/Photo/Icone-Hamburger-3.png";
import LogoTedAzeria from "../assets/Photo/Logo sleyd rouge.png";


const App = () => {

  const basename = import.meta.env.MODE === "production" ? "/Ted-Azeria" : "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <section>
          <Header
            props=
            {
              {
                Container:
                  [
                    {
                      Menuhamburger:
                        [
                          {
                            Barre:
                              [
                                IconeHamburger1,
                                IconeHamburger2,
                                IconeHamburger3
                              ]
                          },

                           {
                            LogoTed:
                              [
                                LogoTedAzeria
                              ]
                          }
                        ]
                    },

                    {
                      Catégorie:
                        [
                          {
                            Gauche:
                              [
                                {
                                  titre: "Bio",
                                  lien: "/Bio"
                                },

                                {
                                  titre: "Date",
                                  lien: "/Date"
                                },

                                {
                                  titre: "Musique",
                                  lien: "/Musique"
                                },
                              ],

                            Milieu:
                              [
                                {
                                  Logo: Sleyd
                                }
                              ],

                            Droite: [
                              {
                                titre: "Média",
                                lien: "/Média"
                              },

                              {
                                titre: "Réseau sociaux",
                                lien: "/Réseau sociaux"
                              },
                            ]
                          }
                        ]
                    }
                  ]
              }
            }
          />
        </section>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Accueil" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
