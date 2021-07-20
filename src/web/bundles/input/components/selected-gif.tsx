import * as React from "react";
import { IGif } from "@giphy/js-types";
import styles from "../styles/selected-gif.module.scss";

export interface SelectedGifProps extends IGif {}

export const SelectedGif: React.FC<SelectedGifProps> = (
  props: SelectedGifProps
) => {
  return (
    <section className={styles.selectedGif}>
      <img src={props.images.original.url} className={styles.gif} />
    </section>
  );
};
