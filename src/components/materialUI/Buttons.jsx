import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme();

export default function Buttons() {
    /* Button 컴포넌트
    1. Basic Button : variant 값을 줘서 사용 가능(?)
        - text(default) : 기본
        - contained : 배경색(?)
        - outlined : 선이 있는 버튼

    2. Text Button : dialog, 카드 등에서 사용하는 별 작업 없는 버튼(?)

    3. Contained Button : 어떤 액션을 하기에 편한?? 자주 쓰는 버튼(?)
     */
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* Basic Buttons */}
                <Stack spacing={2} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>

                <hr/>

                {/* Text Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="https://www.naver.com">Link</Button>
                </Stack>

                <hr/>

                {/* 3D 효과 제거(?). 버튼의 높이 효과를 없애준다. */}
                {/* Contained Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" disableElevation>
                        Disable elevation
                    </Button>
                </Stack>

                <hr/>

                {/* Outlined Buttons */}
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined">Primary</Button>
                    <Button variant="outlined" disabled>
                        Disabled
                    </Button>
                    <Button variant="outlined" href="#outlined-buttons">
                        Link
                    </Button>
                </Stack>

                <hr/>

                {/* Button Event */}
                <Stack direction="row" spacing={2}>
                    <Button onClick={() => alert("Clicked")}>Click me</Button>
                </Stack>

                <hr/>

                {/* Color Buttons 
                * secondary : 주요 작업 외에 보조작업 / 보조액션을 나타냄
                  */}
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="outlined" color="error">Error</Button>
                </Stack>

                <hr/>

                {/* Button Size */}
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </div>
                    <div>
                        <Button variant="outlined" size="small">
                        Small
                        </Button>
                        <Button variant="outlined" size="medium">
                        Medium
                        </Button>
                        <Button variant="outlined" size="large">
                        Large
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" size="small">
                        Small
                        </Button>
                        <Button variant="contained" size="medium">
                        Medium
                        </Button>
                        <Button variant="contained" size="large">
                        Large
                        </Button>
                    </div>
                </Box>

                <hr/>

                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Stack>
            </ThemeProvider>
        </>
    )
}
