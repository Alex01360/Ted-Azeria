import Dates from "../Composants/Dates";
import Réseauxsociaux from "../Composants/Réseauxsociaux";
import AbyssRave from "../assets/Photo/Abyss Rave.png";
import Facebook from "../assets/Photo/Logo facebook.png";
import Instagram from "../assets/Photo/Logo instagram.png";
import YouTube from "../assets/Photo/Logo YouTube.png";
import Soundcloud from "../assets/Photo/Logo soundcloud.png";
import Tiktok from "../assets/Photo/Logo tiktok.png";
import LogoTedAzeria from "../assets/Photo/Logo sleyd rouge.png";
import SetTedAzeria from "../assets/Photo/Set Ted Azeria.mp4";
import Bio from "../Composants/Bio";
import Musique from "../Composants/Musique";
import Media from "../Composants/Media";
import Média1 from "../assets/Photo/Média1.png";
import Média2 from "../assets/Photo/Média2.png";
import Média3 from "../assets/Photo/Média3.png";
import Média4 from "../assets/Photo/Média4.png";
import Média5 from "../assets/Photo/Média5.png";
import Média6 from "../assets/Photo/Média6.png";
import Barre from "../assets/Photo/Barre verticale.png";
import Barreverticale from "../Composants/Barreverticale";

const Accueil = () => {
      return (
            <>
                  <section id="Bio">
                       <Barreverticale
                              props={{
                                    Container: [
                                          {
                                                image: Barre,
                                                titre: "Bio",
                                          },
                                    ],
                              }}
                        />

                        <Bio
                              props=
                              {
                                    {
                                          Container:
                                                [
                                                      {
                                                            Intro:
                                                                  [
                                                                        {
                                                                              titre:
                                                                                    "Entre ombre et lumière, Sleyd libère la techno la plus sombre de la scène underground.",
                                                                        },
                                                                  ]
                                                      },

                                                      {
                                                            Catégorie:
                                                                  [
                                                                        {
                                                                              vidéo: SetTedAzeria,
                                                                              photo: LogoTedAzeria,
                                                                              texte:
                                                                                    [
                                                                                          "Sleyd est un DJ et producteur de hard et acid techno originaire du Sud-Ouest de la France.",
                                                                                          "Son univers sombre et intense mêle énergie brute, basses profondes et atmosphère démoniaque.",
                                                                                          "Sur scène, Sleyd transforme chaque set en expérience hypnotique, où la techno devient une véritable possession sonore.",
                                                                                    ],
                                                                        },
                                                                  ],
                                                      },
                                                ],
                                    }}
                        />
                  </section>

                  <section id="Date">
                        <Barreverticale
                              props={{
                                    Container: [
                                          {
                                                image: Barre,
                                                titre: "Dates",
                                          },
                                    ],
                              }}
                        />

                        <Dates
                              props={{
                                    Container: [
                                          {
                                                ProchainesDates: [
                                                      {
                                                            date: "18/10",
                                                            Lieux: "WARMTEK CENTER",
                                                            info: "Plus d'infos",
                                                            lien: "https://www.youtube.com/watch?v=uWbcupdrxg4",
                                                      },

                                                      {
                                                            date: "25/10",
                                                            Lieux: "MAGIC MOMENTS",
                                                            info: "Plus d'infos",
                                                            lien: "",
                                                      },

                                                      {
                                                            date: "31/10",
                                                            Lieux: "TECHNO MAGNON HORROR",
                                                            info: "Plus d'infos",
                                                            lien: "https://www.facebook.com/reel/1306793104793250",
                                                      },

                                                      {
                                                            date: "08/11",
                                                            Lieux: "GORRIA",
                                                            info: "Plus d'infos",
                                                            lien: "https://www.facebook.com/photo?fbid=743234062061982&set=a.147958471589547",
                                                      },

                                                      {
                                                            date: "14/11",
                                                            Lieux: "RHAPSODIE",
                                                            info: "Plus d'infos",
                                                            lien: "",
                                                      },
                                                ],
                                          },
                                    ],
                              }}
                        />
                  </section>

                  <section id="Musique">
                        <Barreverticale
                              props={{
                                    Container: [
                                          {
                                                image: Barre,
                                                titre: "Musique",
                                          },
                                    ],
                              }}
                        />

                        <Musique
                              props={{
                                    Container: [
                                          {
                                                image: AbyssRave,
                                                titre: "Sleyd - Abyss Rave",
                                                texte: "Stream",
                                                lien: "",
                                          },
                                    ],
                              }}
                        />
                  </section>


                  <section id="Média">
                        <Barreverticale
                              props={{
                                    Container: [
                                          {
                                                image: Barre,
                                                titre: "Média",
                                          },
                                    ],
                              }}
                        />

                        <Media
                              props={{
                                    Container: [
                                          {
                                                Image: [Média1, Média2, Média3, Média4, Média5, Média6],
                                          },
                                    ],
                              }}
                        />
                  </section>

                  <section id="Réseau sociaux"
                  style={
                        {
                        height:"90vh"
                  }
            }
                  >
                        <Barreverticale
                              props={{
                                    Container: [
                                          {
                                                image: Barre,
                                                titre: "Réseaux sociaux",
                                          },
                                    ],
                              }}
                        />

                        <Réseauxsociaux
                              props={{
                                    Container: [
                                          {
                                                logo: Instagram,
                                                lien: "https://www.instagram.com/sleyd.music/?__d=1%3F%2F",
                                          },

                                          {
                                                logo: Facebook,
                                                lien: "https://www.facebook.com/SLEYDMUSIC/",
                                          },

                                          {
                                                logo: Soundcloud,
                                                lien: "https://soundcloud.com/sleyd-289952795",
                                          },

                                          {
                                                logo: YouTube,
                                                lien: "https://www.youtube.com/@sleydandtedazeria",
                                          },

                                           {
                                                logo: Tiktok,
                                                lien: "https://www.tiktok.com/@sleyd.music",
                                          },
                                    ],
                              }}
                        />
                  </section>

            </>
      );
};

export default Accueil;