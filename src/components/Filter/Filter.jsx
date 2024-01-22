import { SelectPicker, Stack, Form } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { StyledBox } from "./Filter.styled";
const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const priceOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const Filter = () => {
  return (
    <StyledBox>
      <Stack spacing={10} direction="column" alignItems="flex-start">
        <Form.Group>
          <Form.ControlLabel htmlFor="carBrand">Car brand</Form.ControlLabel>
          <SelectPicker
            id="carBrand"
            data={data}
            searchable={false}
            style={{ width: 224 }}
            placeholder="Select car brand"
          />
        </Form.Group>
        <Form.Group>
          <Form.ControlLabel htmlFor="carPrice">
            Price/ 1 hour
          </Form.ControlLabel>
          <SelectPicker
            id="carPrice"
            data={priceOptions}
            searchable={false}
            style={{ width: 224 }}
            placeholder="To $"
          />
        </Form.Group>
      </Stack>
    </StyledBox>
  );
};
