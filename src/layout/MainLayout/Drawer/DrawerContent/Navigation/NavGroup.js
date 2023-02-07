import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const menu = useSelector((state) => state.menu);
    const { drawerOpen, openItemCollapse } = menu;

    const navCollapse = item.children?.map((menuItem) => {
        switch (menuItem.type) {
            case 'collapse':
                const findItemCollapse = openItemCollapse.filter((item) => {
                    return item === menuItem.id;
                });

                return (
                    <div>
                        <NavItem key={menuItem.id} item={menuItem} level={1} />
                        {menuItem.subMenu
                            ? menuItem.subMenu.children?.map((item) => {
                                  item = { ...item, isSubMenu: true };
                                  return findItemCollapse.length > 0 ? (
                                      <NavItem key={item.id} item={item} level={menuItem.subMenu.level || 2} />
                                  ) : null;
                              })
                            : null}
                    </div>
                );

            case 'item':
                return <NavItem key={menuItem.id} item={menuItem} level={1} />;

            default:
                return (
                    <Typography key={menuItem.id} variant="h6" color="error" align="center">
                        Fix - Group Collapse or Items
                    </Typography>
                );
        }
    });

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.title}
                        </Typography>
                        {/* only available in paid version */}
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
