import { useDebouncedValue } from "@mantine/hooks";
import { Autocomplete, Box, Grid, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import WordList from "../components/WordList";
import { IWordClasses } from "../database/IWordClasses";
import wordClasses from "../database/wordClasses.json";
import useDatabase from "../hooks/useDatabase";
import {
  selectDictionaryFilters,
  selectSearchResultsSecondary,
  selectSettings,
} from "../store/App.selectors";
import { setSearchResultsSecondary, setState } from "../store/App.store";
import { Text } from "../styles/General";

export interface IOption<T = string> {
  value: T;
  label: string;
}

export type IFilterExampleOptions = "all" | "withoutExample" | "withExample";
export type IFilterClassOption = "all" | keyof IWordClasses;
type IFormSubmit = React.FormEventHandler<HTMLFormElement> | undefined;

export const options1: IOption<IFilterClassOption>[] = [
  {
    label: "Todos",
    value: "all",
  },
];
Object.keys(wordClasses).forEach((word) => {
  options1.push({
    value: word as IFilterClassOption,
    label: wordClasses[word as keyof IWordClasses],
  });
});

export const options2: IOption<IFilterExampleOptions>[] = [
  { label: "Todos", value: "all" },
  { label: "Sem exemplos", value: "withoutExample" },
  { label: "Com exemplos", value: "withExample" },
];
export const defaultOption1 = options1[0];
export const defaultOption2 = options2[0];

export default function AdvancedSearch() {
  const { classFilter, exampleFilter, searchTextSecondary } = useSelector(
    selectDictionaryFilters
  );
  const [debounced] = useDebouncedValue(searchTextSecondary, 700);
  const { automaticSearch } = useSelector(selectSettings);
  const { database, filterByText, filterByClass, filterByExamplesQuantity } =
    useDatabase();
  const dispatch = useDispatch();
  const filteredResults = useSelector(selectSearchResultsSecondary);
  const currentResults =
    filteredResults.length > 0 ? filteredResults : database.words!;

  useEffect(() => {
    filter();
  }, [classFilter.value, exampleFilter.value]);

  useEffect(() => {
    dispatch(setSearchResultsSecondary(currentResults));
  }, [database.words]);

  useEffect(() => {
    if (automaticSearch) {
      filter();
    }
  }, [debounced]);

  function handleSearch(searchTextSecondary: string) {
    dispatch(
      setState({
        searchTextSecondary,
      })
    );
  }

  function filter() {
    let filtered = database.words!;
    filtered = filterByText(filtered, searchTextSecondary);
    filtered = filterByClass(filtered, classFilter.value);
    filtered = filterByExamplesQuantity(filtered, exampleFilter.value);

    dispatch(setSearchResultsSecondary(filtered));
  }

  const handleSubmit: IFormSubmit = (e) => {
    e.preventDefault();
    filter();
  };

  return (
    <PageHeader pageName="Pesquisa Avançada">
      <Box px={1} pt={1}>
        <Grid container gap={1.5} sx={{ zoom: 0.89 }}>
          <Grid item xs>
            <Autocomplete
              disablePortal
              options={options1}
              onChange={(_, newValue) => {
                if (!newValue) return;
                if (options1.includes(newValue)) {
                  dispatch(
                    setState({
                      classFilter: newValue,
                    })
                  );
                }
              }}
              defaultValue={defaultOption1}
              value={classFilter}
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Filtrar por classe" />
              )}
            />
          </Grid>
          <Grid item xs>
            <Autocomplete
              disablePortal
              options={options2}
              onChange={(_, newValue) => {
                if (!newValue) return;
                if (options2.includes(newValue)) {
                  dispatch(
                    setState({
                      exampleFilter: newValue,
                    })
                  );
                }
              }}
              defaultValue={defaultOption2}
              value={exampleFilter}
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Filtrar por exemplos" />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                label="Termo de pesquisa"
                variant="outlined"
                value={searchTextSecondary}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <WordList
          words={filteredResults}
          emptyMessage="Nenhum resultado encontrado"
        />
        {database.words?.length === 0 && (
          <Text color="gray" align="center">
            Carregando...
          </Text>
        )}
      </Box>
    </PageHeader>
  );
}
