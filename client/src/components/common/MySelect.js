import React from "react";

const MySelect = ({ label, menuItems, ...sProps }) => (
  <FormControl>
    <InputLabel>{label}</InputLabel>
    <Select {...sProps}>
      {menuItems.map(item => (
        <MenuItem {...item} />
      ))}
    </Select>
  </FormControl>
);

export default MySelect;
