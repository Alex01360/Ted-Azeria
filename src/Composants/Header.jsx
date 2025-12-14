import { useState, useEffect, useRef, useMemo } from 'react';

const Header = ({ props }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const menuhamburger = props?.Container?.find(item => item.Menuhamburger)?.Menuhamburger[0];
  const logoTed = props?.Container?.find(item => item.Menuhamburger)?.Menuhamburger[1];
  const categorie = props?.Container?.find(item => item.Catégorie)?.Catégorie[0];

  const allItems = useMemo(() => {
    if (!categorie) return [];
    const gauche = categorie.Gauche || [];
    const droite = categorie.Droite || [];
    return [...gauche, ...droite].map(item => ({
      id: item.lien.replace('/', ''),
      titre: item.titre
    }));
  }, [categorie]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateHeaderHeight();
    checkMobile();

    const handleScroll = () => {
      const shouldBeFixed = window.scrollY > 150;
      setIsFixed(shouldBeFixed);

      const currentHeaderHeight = headerRef.current?.offsetHeight || 0;
      const offset = currentHeaderHeight + 30;
      
      const activeItem = allItems.find(item => {
        const element = document.getElementById(item.id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom > offset;
      });

      setActiveButton(activeItem?.id || null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      updateHeaderHeight();
      checkMobile();
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {
        updateHeaderHeight();
        checkMobile();
      });
    };
  }, [allItems]);

  const scrollToSection = (sectionId) => {
    setActiveButton(sectionId);
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      // Attendre que le DOM soit à jour
      requestAnimationFrame(() => {
        const currentHeaderHeight = headerRef.current?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - currentHeaderHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    }
  };

  if (!categorie) return null;

  return (
    <>
      <div ref={headerRef} className="Container-Header-1"
        style={{
          position: isFixed ? 'fixed' : 'relative',
          top: 0,
          backgroundColor: isFixed ? 'black' : 'transparent',
          transition: 'background-color 0.3s ease',
          zIndex: 1000,
          width: '100%'
        }}>

        {isMobile && logoTed?.LogoTed && (
          <div className="mobile-logo-ted">
            {logoTed.LogoTed.map((logo, index) => (
              <img key={index} src={logo} alt="Logo Ted" width="100%" />
            ))}
          </div>
        )}

        <button
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {menuhamburger?.Barre?.map((barre, index) => (
            <img key={index} src={barre} width="100%"
              style={{
                position: isMenuOpen ? 'absolute' : 'relative',
                transition: 'all 0.3s ease',
                display: isMenuOpen && index === 1 ? 'none' : 'block',
                transform: isMenuOpen
                  ? `translate(-50%, -50%) ${index === 0 ? 'rotate(135deg)' :
                    index === 2 ? 'rotate(-135deg)' :
                      'rotate(0)'}`
                  : 'rotate(0)',
                ...(isMenuOpen && {
                  top: '50%',
                  left: '50%',
                })
              }} />
          ))}
        </button>

        <div className="mobile-menu"
          style={{
            transition: 'all 0.3s ease',
            flexDirection: isMobile ? 'column' : 'row',
            position: isMobile ? (isFixed ? 'fixed' : 'absolute') : 'relative',
            transform: isMobile ? (isMenuOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
            top: isMobile ? '12.6vh' : '0'
          }}>

          <div className='Gauche-Header' style={{
            display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row',
          }}>
            {categorie.Gauche?.map((gauche, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(gauche.lien.replace('/', ''))}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
              >
                <h1 style={{
                  color: activeButton === gauche.lien.replace('/', '') ? 'rgba(0, 255, 0, 1)' : 'white',
                  transition: 'color 0.3s ease',
                }}>
                  {gauche.titre}
                </h1>
              </button>
            ))}
          </div>

          <div className="Milieu-Header" style={{ display: isMobile ? 'none' : 'block' }}>
            {categorie.Milieu?.map((milieu, index) => (
              <img key={index} src={milieu.Logo} style={{ maxWidth: '150px' }} alt="Logo" />
            ))}
          </div>

          <div className='Droite-Header' style={{ display: 'flex', gap: '20px', flexDirection: isMobile ? 'column' : 'row' }}>
            {categorie.Droite?.map((droite, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(droite.lien.replace('/', ''))}
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
              >
                <h1 style={{
                  color: activeButton === droite.lien.replace('/', '') ? 'rgba(0, 255, 0, 1)' : 'white',
                  transition: 'color 0.3s ease',
                }}>
                  {droite.titre}
                </h1>
              </button>
            ))}
          </div>
        </div>

      </div>

      {isFixed && (
        <div style={{ height: `${headerHeight}px` }} aria-hidden="true" />
      )}
    </>
  );
};

export default Header;