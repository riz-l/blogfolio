// Import: Packages
import React from "react";
import { Route, Switch } from "react-router-dom";

// Import: Components, Pages
import { About, Home, Post, Project, SinglePost } from "./pages";
import { Navigation } from "./components";

// Component: App
export default function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
        <Route component={Project} path="/project" />
      </Switch>
    </>
  );
}
