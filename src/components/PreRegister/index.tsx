import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Card, Grid, TextField, Autocomplete, Fab, Icon } from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { matchSorter } from "match-sorter";
import { Reigster, Device, SearchProp } from "./index.type.ts";

const RegisterRoot = styled("div")(() => ({
  margin: "30px"
}));

const BtnContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: "40px 0"
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "40px"
}));

const SearchRoot = styled("div")(() => ({
  position: "relative"
}));

const FlexBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}));

const FlabIcon = styled("div")(() => ({
  position: "absolute",
  left: "47%",
  bottom: "-25px"
}));

type defaultProps = {
  registerOptions: Array<Reigster>;
  deviceData: Array<Device>;
  propState: SearchProp;
  handleChange: any;
  handleBeginTimeChange: any;
  handleEndTimeChange: any;
  handleAutocompleteCountryChange: any;
};

const PreRegister = (props: defaultProps) => {
  const {
    beginTime,
    endTime,
    phoneNumber,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content
  } = props.propState;

  return (
    <>
      <RegisterRoot>
        <SearchRoot>
          <StyledCard>
            <Grid item xs={4}>
              <TextField
                type="text"
                name="phoneNumber"
                id="standard-basic"
                sx={{ width: "100%" }}
                label="邮箱/手机/第三方账号"
                value={phoneNumber || ""}
                onChange={event => props.handleChange(event)}
              />
            </Grid>
            <Grid item xs={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <FlexBox>
                  <DateTimePicker
                    name="beginTime"
                    renderInput={props => <TextField {...props} />}
                    label="开始时间"
                    value={beginTime}
                    onChange={event => props.handleBeginTimeChange(event)}
                  />
                  ～
                  <DateTimePicker
                    name="endTime"
                    renderInput={props => <TextField {...props} />}
                    label="结束时间"
                    value={endTime}
                    onChange={event => props.handleEndTimeChange(event)}
                  />
                </FlexBox>
              </LocalizationProvider>
            </Grid>
          </StyledCard>
        </SearchRoot>
      </RegisterRoot>
    </>
  );
};
export default PreRegister;
