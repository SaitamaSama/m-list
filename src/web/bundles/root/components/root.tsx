import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import styles from "../styles/root.module.scss";
import { Input } from "../../input/components/input";
import { getTheme } from "./theme";
import { Viewer } from "../../viewer/components/viewer";

export interface Note {
  note: string;
  gif: string;
}

export const Root = () => {
  const [notes, setNotes] = React.useState<Array<Note>>([]);
  return (
    <MuiThemeProvider theme={getTheme("dark")}>
      <section className={styles.container}>
        <Input addNote={(note, gif) => setNotes([...notes, { note, gif }])} />
        <section>
          <Viewer notes={notes} />
        </section>
      </section>
    </MuiThemeProvider>
  );
};
