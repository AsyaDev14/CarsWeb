import { SelectPicker, Stack, Form } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { StyledBox } from "./Filter.styled";
import { selectBrand, selectCars } from "../../redux/cars/selectors";
import { useSelector } from "react-redux";

const priceOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const Filter = ({ filter, setFilter }) => {
  const carBrandsList = useSelector(selectBrand);
  const data = carBrandsList.map((item) => ({ label: item, value: item }));
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
            value={filter}
            onSelect={(value) => setFilter(value)}
            onClean={() => setFilter("")}
          />
        </Form.Group>
      </Stack>
    </StyledBox>
  );
};
