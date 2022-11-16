import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Collapse,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useState } from 'react'
import { SidebarEntry } from '../../types/SidebarEntry'

interface SubmenuProps {
  foodPlace: SidebarEntry
}

export default function SidebarSubmenu(props: SubmenuProps) {
  const { foodPlace } = props
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  return (
    <>
      <ListItem key={foodPlace.city} disablePadding>
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemText
            disableTypography
            primary={foodPlace.city}
            sx={{ fontSize: theme.spacing(2.5) }}
          />
          <ListItemIcon className={`chevron ${open ? 'active' : 'inactive'}`}>
            {open ? (
              <ExpandLessIcon sx={{ color: theme.palette.primary.main }} />
            ) : (
              <ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />
            )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {foodPlace.foodPlaces.map((place) => (
            <ListItemButton key={place} sx={{ pl: 4 }}>
              <ListItemText disableTypography primary={place} sx={{ fontSize: theme.spacing(2) }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}
