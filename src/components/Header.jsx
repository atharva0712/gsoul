import { navigation } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import AuthForm from "./AuthForm";
import { auth } from "../firebase";
import { logout } from "../authService";
import { onAuthStateChanged } from "firebase/auth";
import Notification from './Notification';

const Header = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [openNavigation, setOpenNavigation] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      setNotification({
        show: true,
        message: 'Successfully logged out!',
        type: 'success'
      });
      setTimeout(() => {
        setNotification({ show: false, message: '', type: '' });
      }, 3000);
      navigate('/');
    } catch (error) {
      setNotification({
        show: true,
        message: error.message,
        type: 'error'
      });
    }
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleAuthClick = (isLoginMode) => {
    setIsLogin(isLoginMode);
    setShowAuth(true);
    disablePageScroll();
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    setIsAuthenticated(true);
    enablePageScroll();
    setNotification({
      show: true,
      message: 'Successfully logged in!',
      type: 'success'
    });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
    navigate('/dashboard');
  };

  return (
    <>
      <div
        className={`fixed top-3 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="/pricing">
            <span className="text-4xl font-bold bg-gradient-to-r from-gray-700 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Gsoul
            </span>
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors lg:text-base ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === hash
                      ? "z-2 lg:text-blue-400"
                      : "text-n-1/50 lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-blue-200 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          {isAuthenticated ? (
            <Button 
              className="hidden lg:flex"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <button
                className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
                onClick={() => handleAuthClick(false)}
              >
                New account
              </button>

              <Button 
                className="hidden lg:flex"
                onClick={() => handleAuthClick(true)}
              >
                Sign in
              </Button>
            </>
          )}

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>

      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-n-8/90">
          <div className="relative">
            <button 
              className="absolute top-4 right-4 text-n-1 hover:text-color-1"
              onClick={() => {
                setShowAuth(false);
                enablePageScroll();
              }}
            >
              ✕
            </button>
            <AuthForm 
              isLogin={isLogin} 
              onSuccess={handleAuthSuccess}
            />
          </div>
        </div>
      )}

      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ show: false, message: '', type: '' })}
        />
      )}
    </>
  );
};
export default Header;