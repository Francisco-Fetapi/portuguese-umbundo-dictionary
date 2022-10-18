import { useInputState } from "@mantine/hooks";
import {
  Autocomplete,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { IWordClasses } from "../database/IWordClasses";
import wordClasses from "../database/wordClasses.json";
import useDatabase from "../hooks/useDatabase";

export interface IOption<T = string> {
  value: T;
  label: string;
}

export type IFilterExampleOptions = "all" | "withoutExample" | "withExample";
export type IFilterClassOption = "all" | keyof IWordClasses;

const options1: IOption<IFilterClassOption>[] = [
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

const options2: IOption<IFilterExampleOptions>[] = [
  { label: "Todos", value: "all" },
  { label: "Sem exemplos", value: "withoutExample" },
  { label: "Com exemplos", value: "withExample" },
];
const defaultOption1 = options1[0];
const defaultOption2 = options2[0];

export default function Dictionary() {
  const [classFilter, setClassFilter] =
    useState<IOption<IFilterClassOption>>(defaultOption1);
  const [exampleFilter, setExampleFilter] = useState<
    IOption<IFilterExampleOptions>
  >(options2[0]);
  const [search, handleSearch] = useInputState("");
  const { database, filterByText, filterByClass, filterByExamplesQuantity } =
    useDatabase();
  const [filteredResults, setFilteredResults] = useState(database.words);

  useEffect(() => {
    filter();
    console.log(classFilter.value);
  }, [classFilter, exampleFilter]);

  function filter() {
    let filtered = database.words;
    filtered = filterByText(search);
    filtered = filterByClass(classFilter.value);
    filtered = filterByExamplesQuantity(exampleFilter.value);

    setFilteredResults(filtered);
  }

  return (
    <PageHeader pageName="Dicionário">
      <Box px={1} pt={1}>
        <Grid container gap={1.5} sx={{ zoom: 0.89 }}>
          <Grid item xs>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options1}
              onChange={(_, newValue) => {
                if (!newValue) return;
                if (options1.includes(newValue)) {
                  setClassFilter(newValue);
                }
              }}
              defaultValue={defaultOption1}
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filtrar por classe"
                  // size="small"
                />
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
                  setExampleFilter(newValue);
                }
              }}
              defaultValue={defaultOption2}
              sx={{ width: "100%" }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filtrar por exemplos"
                  // size="small"
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Termo de pesquisa"
              // size="small"
              variant="outlined"
              value={search}
              onChange={handleSearch}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={1}>
        <List>
          {filteredResults?.map((word) => (
            <Word
              primary={word.pt}
              secondary={word.um.join(", ")}
              key={word.pt}
            />
          ))}
        </List>
      </Box>
    </PageHeader>
  );
}

interface WordProps {
  primary: string;
  secondary: string;
}

function Word({ ...props }: WordProps) {
  return (
    <ListItem button divider>
      <ListItemText {...props} />
    </ListItem>
  );
}
