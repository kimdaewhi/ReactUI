import React from 'react'
import footballPlayers from './FootballPlayerList.json';
import countryList from './countries.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';



const players = footballPlayers;
const countries = countryList.countries;

export default function AutoCompletes() {
    /* [AutoCompletes]
        - json 형태의 데이터를 가져와서 AutoText 및 combobox 형태로 사용 할 수 있음.
        - 기본 키? 는 label이여야 한다.
     */
    return (
        <>
            <h3>Material UI Autocompletes</h3>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={players}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="players" />}
            />

            <hr/>

            {/* Country Select */}
            <Autocomplete
                id="country-select-demo"
                options={countries}
                sx={{ width: 300 }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField {...params} 
                    label="Choose a country" 
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password'
                    }}/>
                )}
            />
        </>
    )
}