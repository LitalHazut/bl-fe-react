import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './AppLayout.scss';
import { PathsDict, RouteKey } from '../../routing/routing-config';

export const AppRoot = () => {
  // const { isLoggedIn } = useAuthStoreGetters();

  const navigate = useNavigate();


  useEffect(() => {
    navigateToHomeOrWelcome(true);
  }, [location.pathname]);

  function navigateToHomeOrWelcome(isAuthenticated: boolean) {
    if (location.pathname === '/') {
      if (isAuthenticated) {
        navigate(PathsDict[RouteKey.LOGIN]);
      } else {
        navigate(PathsDict[RouteKey.WELCOME]);
        // navigate(PathsDict[RouteKey.HOME]);
      }
    }
  }

  return (
    <div>

      <div className="app-layout-main-view h-full flex flex-row">
        <div className="app-content-and-footer-area grow flex flex-col justify-between">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
