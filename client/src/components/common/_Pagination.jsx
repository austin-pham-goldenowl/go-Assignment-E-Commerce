import React from "react";
import _Button from "../common/_Button";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import _Typography from "../common/_Typography";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";

const _Pagination = ({ list, itemPerPage, pageNum, maxPage, handleClick }) => {
  const pages = [...new Array(Math.ceil(list.length / itemPerPage)).keys()];
  const ONE_SIDE_TRUNCATED_PAGE_SHOWN = maxPage - 1;
  const TWO_SIDE_TRUNCATED_PAGE_SHOWN = maxPage - 2;
  const TO_LEFT_REAR = Math.floor(TWO_SIDE_TRUNCATED_PAGE_SHOWN / 2);
  const TO_RIGHT_REAR = TWO_SIDE_TRUNCATED_PAGE_SHOWN - (TO_LEFT_REAR + 1);

  return (
    <Grid container>
      <_Button disabled={pageNum === 0} onClick={() => handleClick(0)}>
        <FirstPageIcon />
      </_Button>
      <_Button disabled={pageNum === 0} onClick={() => handleClick(pageNum - 1)}>
        <NavigateBeforeIcon />
      </_Button>

      {pages.length > maxPage && pageNum > TO_LEFT_REAR && (
        <_Button disabled>
          <MoreHorizIcon />
        </_Button>
      )}
      {pages.length <= maxPage
        ? pages.map(page => (
            <_Button
              disabled={page === pageNum}
              variant={page === pageNum && "outlined"}
              onClick={() => handleClick(page)}
            >
              <_Typography>{page + 1}</_Typography>
            </_Button>
          ))
        : pageNum <= TO_LEFT_REAR
        ? pages.map(
            page =>
              page < ONE_SIDE_TRUNCATED_PAGE_SHOWN && (
                <_Button
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <_Typography>{page + 1}</_Typography>
                </_Button>
              )
          )
        : pageNum >= pages.length - 1 - TO_RIGHT_REAR
        ? pages.map(
            page =>
              page >= pages.length - ONE_SIDE_TRUNCATED_PAGE_SHOWN && (
                <_Button
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <_Typography>{page + 1}</_Typography>
                </_Button>
              )
          )
        : pages.map(
            page =>
              page >= pageNum - TO_LEFT_REAR &&
              page <= pageNum + TO_RIGHT_REAR && (
                <_Button
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <_Typography>{page + 1}</_Typography>
                </_Button>
              )
          )}
      {pages.length > maxPage && pageNum < pages.length - TO_RIGHT_REAR - 1 && (
        <_Button disabled>
          <MoreHorizIcon />
        </_Button>
      )}
      <_Button
        disabled={pageNum === pages.length - 1}
        onClick={() => handleClick(pageNum + 1)}
      >
        <NavigateNextIcon />
      </_Button>
      <_Button
        disabled={pageNum === pages.length - 1}
        onClick={() => handleClick(pages.length - 1)}
      >
        <LastPageIcon />
      </_Button>
    </Grid>
  );
};

export default _Pagination;
