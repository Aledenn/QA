// import React from "react";
// import { Router, Route, Switch } from "dva/router";
// import IndexPage from "./routes/IndexPage";
// import Aqs from "./routes/Aqs";
// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//         <Route path="/answer" exact component={Aqs} />
//       </Switch>
//     </Router>
//   );
// }

// export default RouterConfig;

import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Router, Redirect, routerRedux } from "dva/router";
import dynamic from "dva/dynamic";
const { ConnectedRouter } = routerRedux;

const Routers = function({ history, app }) {
  // demo
  // const error = dynamic({
  //   app,
  //   component: () => import("./routes/error")
  // });
  const routes = [
    {
      path: "/",
      component: () => import("./routes/IndexPage")
    },
    {
      path: "/answer",
      models: () => [import("./models/answer")],
      component: () => import("./routes/Aqs")
    },
    {
      models: () => [import("./models/answer")],
      component: () => import("./components/question/Question")
    }
  ];

  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, ...dynamics }, key) =>
          <Route
            key={key}
            exact
            path={path}
            component={dynamic({
              app,
              ...dynamics
            })}
          />
        )}
      </Switch>
    </Router>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default Routers;
