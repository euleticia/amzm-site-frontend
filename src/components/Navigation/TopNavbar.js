
// Components Imports
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Box, Button, styled, Container, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, MenuItem, Menu, Collapse } from "@mui/material"
import AddressHeaderComponent from "../AddressHeaderComponent/AddressHeaderComponent"

// Icons

import MenuIcon from '@mui/icons-material/Menu'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

// Images

import Logo from '../../assets/logo.png'
import { Fragment, useEffect, useState } from "react"

// CONTS VARIABLES
const drawerWidth = 300;
const navItems = [
    { title: 'Início', type: 'link', url: '/' },
    { title: 'Quem somos', type: 'link', url: '/centro-integrar' },
    { title: 'Fale Conosco', type: 'link', url: '/fale-conosco' },
]

const LogoImage = styled('img')(() => ({
    backgroundColor: 'transparent',
    transition: 'all .2 linear',
    '&:hover': {
        transform: 'scale(1.1)',
    },
}))

const AppBarCustom = styled(AppBar)(() => ({
    backgroundColor: 'black',
}))

const TopLinkButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    marginInline: 2,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: 500,
    fontSize: 15,
    fontFamily: [
        'Prompt',
    ].join(','),
    '&:hover': {
        backgroundColor: 'grey',
        color: '#fff',
    },
    '&:active': {
        backgroundColor: 'grey',
        color: '#fff',
    },
});

const TopNavbar = (props) => {

    const { showAddresses } = props

    const [openDrawer, setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState({})
    const [menuOpen, setMenuOpen] = useState({})
    const [menuOpenMobile, setMenuOpenMobile] = useState({})

    const handleDrawerToggle = () => {
        setOpenDrawer(!openDrawer)
    }

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Box
                sx={{ flex: 1, m: 0, mb: 1, p: 0, transition: 'all .2 linear', }}
            >
                <LogoImage
                    sx={{
                        mt: 2,
                        height: 100,
                        cursor: 'pointer',

                    }}
                    src={Logo} alt="Logo"
                />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (

                    item.children ?
                        <Fragment key={item.title}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }} onClick={() => menuOpenMobile[item.title] ? handleCloseMenu(item.title, true) : handleOpenMenu(item.title, {}, true)}>
                                    <ListItemText  primary={item.title} /> <ArrowDropDownIcon sx={{ ml: 1 }} />
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={menuOpenMobile[item.title] !== undefined ? menuOpenMobile[item.title] : false}>
                                <List sx={{ px: 2 }}>
                                    {
                                        item?.children?.map((ch) => {

                                            return (
                                                <ListItem disablePadding key={ch.title}>
                                                    <ListItemButton sx={{ textAlign: 'center' }} href={ch.url}>
                                                        <DoubleArrowIcon  sx={{ fontSize: 14 }} /> <ListItemText primary={ch.title} sx={{ fontSize: 14, }} />
                                                    </ListItemButton>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </Collapse>
                        </Fragment>
                        : <ListItem key={item.title} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }} href={item.url}>
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        </ListItem>

                ))}
            </List>
        </Box>
    )

    const handleOpenMenu = (item, ev, mobile = false) => {
        if (mobile) {
            let _menuOpenMobile = { ...menuOpenMobile }
            _menuOpenMobile[item] = true
            setMenuOpenMobile(_menuOpenMobile)
        } else {
            let _anchorEl = { ...anchorEl }
            let _menuOpen = { ...menuOpen }

            _menuOpen[item] = true
            _anchorEl[item] = ev.currentTarget

            setMenuOpen(_menuOpen)
            setAnchorEl(_anchorEl)
        }
    }

    const handleCloseMenu = (item, mobile = false) => {
        if (mobile) {
            let _menuOpenMobile = { ...menuOpenMobile }
            _menuOpenMobile[item] = false
            setMenuOpenMobile(_menuOpenMobile)
        } else {

            let _anchorEl = { ...anchorEl }
            let _menuOpen = { ...menuOpen }

            _menuOpen[item] = false
            _anchorEl[item] = null

            setMenuOpen(_menuOpen)
            setAnchorEl(_anchorEl)
        }
    }

    useEffect(() => {
        let _anchorsMenu = {}
        let _menuOpen = {}
        let _menuOpenMobile = {}

        navItems.forEach((item) => {
            _menuOpen[item.title] = false
            _menuOpenMobile[item.title] = false
            _anchorsMenu[item.title] = null
        })

        setMenuOpen(_menuOpen)
        setMenuOpenMobile(_menuOpenMobile)
        setAnchorEl(_anchorsMenu)

    }, [])

    return (
        <>
            {
                showAddresses &&
                <AddressHeaderComponent />
            }
            <AppBarCustom position="sticky">
                <Container sx={{ mb: 0, pb: 0 }}>
                    <Toolbar sx={{ m: 0, p: 0, }}>
                        <Box
                            sx={{ flex: 1, m: 0, p: 0, transition: 'all .2 linear', }}
                        >
                            <a href='/'>
                                <LogoImage
                                    sx={{
                                        mt: 2,
                                        mb: 2,
                                        height: 100,
                                        cursor: 'pointer',

                                    }}
                                    src={Logo} alt="Logo"
                                />
                            </a>
                        </Box>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' }, color: '#271344' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, m: 0, p: 0 }}>
                            {
                                navItems.map((item) => {

                                    return (
                                        item.children ?
                                            <Fragment key={item.title}>
                                                <TopLinkButton
                                                    onClick={(ev) => handleOpenMenu(item.title, ev)}
                                                >
                                                    {item.title} <ArrowDropDownIcon sx={{ ml: 1 }} />
                                                </TopLinkButton>
                                                <Menu
                                                    anchorEl={anchorEl[item.title]}
                                                    open={menuOpen[item.title] !== undefined ? menuOpen[item.title] : false}
                                                    onClose={() => handleCloseMenu(item.title)}
                                                    onClick={() => handleCloseMenu(item.title)}
                                                    PaperProps={{
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&:before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    }}
                                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                >
                                                    {
                                                        item?.children?.map((ch) => {

                                                            return (
                                                                <a key={ch.title} href={ch.url} style={{ textDecoration: 'none', color: '#271344' }}>
                                                                    <MenuItem
                                                                        sx={{ fontSize: 14, fontFamily: 'Prompt ', color: '#ff4880  ' }}
                                                                    >
                                                                        {ch.title}
                                                                    </MenuItem>
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </Menu>
                                            </Fragment>
                                            :
                                            <TopLinkButton key={item.title} href={item.url}>
                                                {item.title}
                                            </TopLinkButton>
                                    )

                                })
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBarCustom>

            <Drawer
                variant="temporary"
                open={openDrawer}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

TopNavbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default TopNavbar
