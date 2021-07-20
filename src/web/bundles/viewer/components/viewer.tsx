import { Card, CardContent, CardMedia } from "@material-ui/core";
import * as React from "react";
import { Note } from "../../root/components/root";
import styles from "../styles/viewer.module.scss";

export interface ViewerProps {
  notes: Array<Note>;
}

export const Viewer: React.FC<ViewerProps> = (props: ViewerProps) => {
  return (
    <section className={styles.viewer}>
      {props.notes.map((note, index) => {
        return (
          <Card key={index}>
            <CardMedia image={note.gif} component="img" />
            <CardContent>{note.note}</CardContent>
          </Card>
        );
      })}
    </section>
  );
};
