import * as React from "react";
import { render } from "react-dom";
import { Root } from "./bundles/root/components/root";
import "./global.scss";

render(<Root />, document.querySelector("#mount"));
