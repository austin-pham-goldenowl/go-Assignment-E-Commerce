import React from "react";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";
import MyTypography from "./MyTypography";
import MyButton from "./MyButton";

const MyPagination = ({ list, itemPerPage, pageNum, maxPage, handleClick }) => {
  const pages = [...new Array(Math.ceil(list.length / itemPerPage)).keys()];
  const ONE_SIDE_TRUNCATED_PAGE_SHOWN = maxPage - 1;
  const TWO_SIDE_TRUNCATED_PAGE_SHOWN = maxPage - 2;
  const TO_LEFT_REAR = Math.floor(TWO_SIDE_TRUNCATED_PAGE_SHOWN / 2);
  const TO_RIGHT_REAR = TWO_SIDE_TRUNCATED_PAGE_SHOWN - (TO_LEFT_REAR + 1);
  return (
    <Grid container>
      <MyButton disabled={pageNum === 0} onClick={() => handleClick(0)}>
        <FirstPageIcon />
      </MyButton>
      <MyButton
        disabled={pageNum === 0}
        onClick={() => handleClick(pageNum - 1)}
      >
        <NavigateBeforeIcon />
      </MyButton>{" "}
      {pages.length > maxPage && pageNum > TO_LEFT_REAR && (
        <MyButton disabled>
          <MoreHorizIcon />
        </MyButton>
      )}
      {pages.length <= maxPage
        ? pages.map(page => (
            <MyButton
              disabled={page === pageNum}
              variant={page === pageNum && "outlined"}
              onClick={() => handleClick(page)}
            >
              <MyTypography>{page + 1}</MyTypography>
            </MyButton>
          ))
        : pageNum <= TO_LEFT_REAR
        ? pages.map(
            page =>
              page < ONE_SIDE_TRUNCATED_PAGE_SHOWN && (
                <MyButton
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <MyTypography>{page + 1}</MyTypography>
                </MyButton>
              )
          )
        : pageNum >= pages.length - 1 - TO_RIGHT_REAR
        ? pages.map(
            page =>
              page >= pages.length - ONE_SIDE_TRUNCATED_PAGE_SHOWN && (
                <MyButton
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <MyTypography>{page + 1}</MyTypography>
                </MyButton>
              )
          )
        : pages.map(
            page =>
              page >= pageNum - TO_LEFT_REAR &&
              page <= pageNum + TO_RIGHT_REAR && (
                <MyButton
                  disabled={page === pageNum}
                  variant={page === pageNum && "outlined"}
                  onClick={() => handleClick(page)}
                >
                  <MyTypography>{page + 1}</MyTypography>
                </MyButton>
              )
          )}
      {pages.length > maxPage && pageNum < pages.length - TO_RIGHT_REAR - 1 && (
        <MyButton disabled>
          <MoreHorizIcon />
        </MyButton>
      )}
      <MyButton
        disabled={pageNum === pages.length - 1}
        onClick={() => handleClick(pageNum + 1)}
      >
        <NavigateNextIcon />
      </MyButton>
      <MyButton
        disabled={pageNum === pages.length - 1}
        onClick={() => handleClick(pages.length - 1)}
      >
        <LastPageIcon />
      </MyButton>
    </Grid>
  );
};

export default MyPagination;
