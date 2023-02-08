import PostAddIcon from '@mui/icons-material/PostAdd';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

//icons
const icons = {
    PostAddIcon,
    LibraryBooksIcon
};
const works = {
    id: 'works',
    title: 'Works',
    type: 'group',
    children: [
        {
            id: 'work-works',
            title: 'works',
            type: 'item',
            url: '/work',
            icon: icons.LibraryBooksIcon
        },
        {
            id: 'work-annoucement',
            title: 'annoucement',
            type: 'item',
            url: '/annoucement',
            icon: icons.PostAddIcon
        }
    ]
};
export default works;
