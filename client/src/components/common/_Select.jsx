import React from "react";

const _Select = ({ label, menuItems, ...sProps }) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...sProps}>
        {menuItems.map(item => (
          <MenuItem {...item} />
        ))}
      </Select>
    </FormControl>
  );
};

export default _Select;
