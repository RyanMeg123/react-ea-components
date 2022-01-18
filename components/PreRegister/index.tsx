import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Card,
  Grid,
  TextField,
  Autocomplete,
  Fab,
  Icon,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Slide,
  Button
} from "@mui/material";
import { DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { matchSorter } from "match-sorter";
import { Register, Device, SearchProp, defaultProps } from "./index.type";
import dayjs from 'dayjs'
import Table from './component/table'

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

const StyledCard = styled(Card)(() => ({
  background: "#fff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow:
    "0px 3px 3px -2px rgb(0 0 0 / 6%), 0px 3px 4px 0px rgb(0 0 0 / 4%), 0px 1px 8px 0px rgb(0 0 0 / 4%) !important"
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
  bottom: "70px"
}));

const StyledButton = styled(Button)(({theme}) => ({
  margin: theme.spacing(1)
}))


function TransitionLeft(props) {
return <Slide {...props} direction="left" />;
}

const PreRegister = (props: defaultProps) => {

   const [arrowStatus, setArrowStatus] = useState(false);

   const [dataList, setDataList] = useState([])

   const [dataTotal, setDataTotal] = useState(0)
   
    const [state,setState] = useState({
      beginTime: null,
      endTime: null,
      country: null,
      method: null,
      lang: null,
      device: null,
      phoneNumber: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_content: null
    })
    const {
      beginTime,
      endTime,
      country,
      method,
      lang,
      device,
      phoneNumber,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content
    } = state;
    const {countryOptions,currentLanguagesList} = props;

    const handleChange = (event) => {
      // event.persist()
      console.log(event,'event')
      setState({
          ...state,
          [event.target.name] : event.target.value
      })
    }

    const handleBeginTimeChange = (beginTime) => {
      setState({ ...state, beginTime})
    }

    const handleEndTimeChange = (endTime) => {
      setState({ ...state, endTime })
    }

    const handleAutocompleteCountryChange = (event,value) => {
      console.log(event,'rejrj')
      setState({ ...state, country: value.countryCode})
    }

    const handleAutocompleteMethodChange = (event,value) => {
      console.log(event,'rejrj')
      setState({ ...state, method: value.key})
    }

    const handleAutocompleteLanguagesChange = (event,value) => {
      console.log(event,value,'rejrj')
      setState({ ...state, lang: value.fullCode})
    }

    const handleAutocompleteDeviceChange = (event,value) => {
      console.log(event,value,'rejrj')
      setState({ ...state, device: value.key})
    } 

    const filterCountryOptions = (countryOptions, { inputValue }) =>
    matchSorter(countryOptions, inputValue, {
      keys: ["countryCode", "countryName"]
    });

    const filterLangOptions = (currentLanguagesList, { inputValue }) =>
    matchSorter(currentLanguagesList, inputValue, {
      keys: ["fullCode", "local_name", "name", "shortCode"]
    });

    const toggleArrowsChange = async () => {
      setArrowStatus(arrowStatus => !arrowStatus);
    };

    const handleBtnChange = async (isDownLoad) => {

    }


  return (
    <>
      <RegisterRoot>
        <SearchRoot>
          <StyledCard>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <TextField
                  type="text"
                  name="phoneNumber"
                  id="standard-basic"
                  sx={{ width: "100%" }}
                  label="邮箱/手机/第三方账号"
                />
              </Grid>
              <Grid item xs={4}>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
              <FlexBox>
                <DateTimePicker
                  renderInput={props => <TextField {...props}  sx={{width: '50%'}}/>}
                  label="开始时间"
                  value={beginTime}
                  onChange={(event)=>handleBeginTimeChange(event)}
                />
                ～
                <DateTimePicker
                  renderInput={props => <TextField {...props}  sx={{width: '50%'}}/>}
                  label="结束时间"
                  value={endTime}
                  onChange={(event)=>handleEndTimeChange(event)}
                />
              </FlexBox>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={4}>
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  sx={{ width: "100%" }}
                  options={props.countryOptions}
                  onChange={(event, newValue) => {
                    handleAutocompleteCountryChange(event, newValue);
                  }}
                  filterOptions={filterCountryOptions}
                  getOptionLabel={option => option.countryName}
                  renderInput={params => (
                    <TextField {...params} label="国家/地区"/>
                  )}
                />
             </Grid>
             <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: "100%" }}
                options={props.registerOptions}
                onChange={(event, newValue) => {
                  handleAutocompleteMethodChange(event, newValue);
                }}
                getOptionLabel={option => option.name}
                renderInput={params => <TextField {...params} label="注册方式" />}
              />
            </Grid>
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ width: "100%" }}
                options={props.currentLanguagesList}
                onChange={(event, newValue) => {
                  handleAutocompleteLanguagesChange(event, newValue);
                }}
                filterOptions={filterLangOptions}
                getOptionLabel={option => option.name}
                renderInput={params => <TextField {...params} label="语种" />}
              />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              sx={{ width: "100%" }}
              options={props.deviceData}
              onChange={(event, newValue) => {
                handleAutocompleteDeviceChange(event, newValue);
              }}
              getOptionLabel={option => option.name}
              renderInput={params => <TextField {...params} label="注册类型" />}
            />
          </Grid>
          {arrowStatus && (
            <>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  name="utm_source"
                  id="standard-basic"
                  sx={{ width: "100%" }}
                  label="utm_source"
                  value={utm_source || ''}
                  onChange={event => handleChange(event)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  name="utm_medium"
                  id="standard-basic"
                  sx={{ width: "100%" }}
                  label="utm_medium"
                  value={utm_medium || ''}
                  onChange={event =>handleChange(event)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  name="utm_campaign"
                  id="standard-basic"
                  sx={{ width: "100%" }}
                  label="utm_campaign"
                  value={utm_campaign || ''}
                  onChange={event =>handleChange(event)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  name="utm_content"
                  id="standard-basic"
                  sx={{ width: "100%" }}
                  label="utm_content"
                  value={utm_content || ''}
                  onChange={event => handleChange(event)}
                />
              </Grid>
            </>
          )}
          </Grid>
          <FlabIcon onClick={toggleArrowsChange}>
          <Fab
            sx={{
              background: "#fff"
            }}
          >
            {arrowStatus ? (
              <Icon className="icon">expand_less</Icon>
            ) : (
              <Icon className="icon">keyboard_arrow_down</Icon>
            )}
          </Fab>
        </FlabIcon>
          </StyledCard>
          <BtnContent>
                <StyledButton variant="contained" color="primary" onClick={() => props.handleBtnChange(state)}>
                    查询
                </StyledButton>

                <StyledButton variant="contained"
                // onClick={() => handleBtnChange(true)}
                 sx={{
                    color: '#fff',
                    backgroundColor: '#FFAF38'
                }}>
                    下载数
                </StyledButton>
                <StyledButton variant="contained" color="inherit">
                    重置
                </StyledButton>
        
              </BtnContent>
        </SearchRoot>
        <Table tableData={props.dataList} total={props.dataTotal} />
      </RegisterRoot>
    </>
  );
};
export default PreRegister;
