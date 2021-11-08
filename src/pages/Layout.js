import { ListAltOutlined, NoteAddRounded } from '@mui/icons-material'
import { AppBar, Avatar, CssBaseline, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth
    },
    page: {
        padding: theme.spacing(3),
        background: '#f9f9f9',
        width: "100%"
    },
    root: {
        display: "flex"
    },
    title: {
        padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar

}))

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            name: "My Notes",
            icon: (color) => <ListAltOutlined color={color} />,
            path: '/notes'
        },
        {
            name: "Create Note",
            icon: (color) => <NoteAddRounded color={color} />,
            path: '/create'
        },
    ]

    return (
        <div className={classes.root}>
            {/* Appbar */}
            <AppBar
                color="transparent"
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`
                }}
                elevation={1}
            >
                <Toolbar>
                    <Typography
                        sx={{
                            flexGrow: 1
                        }}>
                        Today is {format(new Date(), "do MMMM yyyy")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 20,
                        }}
                        mr={1}
                    >

                        User
                    </Typography>
                    <Avatar
                        alt="User"
                        sx={{
                            bgcolor: "green",
                        }}
                        sizes="1"
                    >
                        U
                    </Avatar>
                </Toolbar>
            </AppBar>

            {/* SideDrawer */}
            <Drawer
                variant="permanent"
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawer
                }}
            >
                <Typography
                    variant="h6"
                    className={classes.title}
                >
                    Drawer
                </Typography>

                <List>
                    {menuItems.map(item => {
                        return (
                            <ListItem key={item.name} button onClick={() => history.push(item.path)}>
                                <ListItemIcon>
                                    {location.pathname === item.path ? item.icon("secondary") : item.icon("primary")}
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar} />
                {children}
            </div>
        </div >
    )
}

export default Layout
