import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Router, Redirect, routerRedux } from "dva/router";
import dynamic from "dva/dynamic";
const { ConnectedRouter } = routerRedux;

const Routers = function({ history, app }) {
  const routes = [
    {
      path: "/",
      component: () => import("./routes/IndexPage")
    },
    {
      path: "/answer",
      models: () => [import("./models/question")],
      component: () => import("./routes/Aqs")
    },
    {
      path: "/context",
      component: () => import("./components/test/Test1")
    },
    {
      path: "/form1",
      component: () => import("./components/test/Form1")
    },
    {
      path: "/form2",
      component: () => import("./components/test/Form2")
    },
    {
      path: "/register",
      component: () => import("./components/test/Register")
    },
    {
      path: "/modalForm",
      component: () => import("./components/test/ModalForm")
    },
    {
      path: "/dynamicField",
      component: () => import("./components/test/DynamicFieldSet")
    },
    {
      path: "/timeSelector",
      component: () => import("./components/test/TimeSelector")
    },
    {
      path: "/diyForm",
      component: () => import("./components/test/diyForm")
    },
    {
      path: "/stateForm",
      component: () => import("./components/test/stateField")
    },
    {
      path: "/setField",
      component: () => import("./components/test/setFieldValue")
    },
    {
      path: "/tabletest",
      component: () => import("./components/tabletest/Tabletest")
    },
    {
      models: () => [import("./models/question")],
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
