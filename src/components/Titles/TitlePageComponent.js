import { Typography } from "@mui/material"
import React from 'react'


const TitlePageComponent = (props) => {

    const { title, beforeTitle, subtitle } = props

    return (
        <>
            <Typography
                component="div"
                textAlign={'center'}
                fontFamily={'Schoolbell'}
                sx={{
                    fontSize: 17,
                    color: '#ff4880',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 3.4
                }}
            >
                {beforeTitle}
            </Typography>
            <Typography
                fontFamily={'Prompt'}
                textAlign={'center'}
                component="div"
                sx={{
                    fontSize: 40,
                    color: '#00000',
                    fontWeight: 600
                }}
            >
                {title}
            </Typography>
            <Typography
                component="div"
                textAlign={'center'}
                fontFamily={'Prompt'}
                sx={{
                    fontSize: 14,
                    color: '#777777',
                    fontWeight: 400,
                    letterSpacing: 1.4,
                    textAlign: 'center'
                }}
            >
                {subtitle}
            </Typography >
        </>
    )
}

export default TitlePageComponent