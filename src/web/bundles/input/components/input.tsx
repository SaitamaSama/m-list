import {
  Button,
  Collapse,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import styles from "../styles/input.module.scss";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { SelectedGif } from "./selected-gif";

export interface InputProps {
  addNote: (note: string, gif: string) => void;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const [displayGiphyPanel, setDisplayGiphyPanel] =
    React.useState<boolean>(false);
  const [giphySearch, setGiphySearch] = React.useState<string>("");
  const [giphyResults, setGiphyResults] = React.useState<Array<IGif>>([]);
  const [selectedGif, setSelectedGif] = React.useState<IGif>();
  const [note, setNote] = React.useState<string>("");

  const gf = new GiphyFetch("jN2pCGgAso5nw3FpmBydVXUzFmj5LLNJ");

  async function search() {
    const searchResults = await gf.search(giphySearch, {
      limit: 12,
    });
    setGiphyResults(searchResults.data);
  }

  return (
    <section className={styles.inputContainer}>
      <Paper className={styles.inputPaper}>
        <TextField
          className={styles.input}
          variant="filled"
          label="Note content"
          fullWidth
          multiline
          maxRows={10}
          value={note}
          onChange={(ev) => setNote(ev.target.value)}
        />
        <section>{selectedGif && <SelectedGif {...selectedGif} />}</section>
        <section className={styles.buttonGroup}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setDisplayGiphyPanel(!displayGiphyPanel)}
          >
            Add from Giphy
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              props.addNote(
                note,
                selectedGif ? selectedGif.images.original.url : ""
              )
            }
          >
            Add note
          </Button>
        </section>
      </Paper>
      <Collapse in={displayGiphyPanel} timeout="auto" unmountOnExit>
        <Paper className={styles.inputPaper} style={{ flexGrow: 1 }}>
          <TextField
            className={styles.input}
            variant="filled"
            label="Search Giphy"
            fullWidth
            value={giphySearch}
            onChange={(e: React.ChangeEvent<any>) => {
              setGiphySearch(e.target.value);
            }}
          />
          <section className={styles.buttonGroup}>
            <Button
              variant="text"
              color="secondary"
              onClick={() => setDisplayGiphyPanel(!displayGiphyPanel)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => search()}
            >
              Search
            </Button>
          </section>
          <section className={styles.gifGrid}>
            {giphyResults.map((result, index) => (
              <section
                key={index}
                className={styles.giphy}
                onClick={() => setSelectedGif(result)}
              >
                <img
                  src={result.images.downsized.url}
                  alt={result.title}
                  className={styles.gif}
                />
              </section>
            ))}
          </section>
        </Paper>
      </Collapse>
    </section>
  );
};
